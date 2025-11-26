<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\User;

class DocumentController extends Controller
{
    public function viewDocument($userId, $filename)
    {
        return $this->handleDocumentAccess($userId, $filename, 'view');
    }

    public function downloadDocument($userId, $filename)
    {
        return $this->handleDocumentAccess($userId, $filename, 'download');
    }

    private function handleDocumentAccess($userId, $filename, $action = 'view')
    {
        $currentUser = auth()->user();
        
        // Check authorization
        if (!$this->isAuthorized($currentUser, $userId)) {
            return response()->json(['message' => 'Unauthorized access'], 403);
        }
        
        $path = "kyc_documents/{$filename}";
        
        // Determine which disk to use
        $storageDisk = $this->getStorageDisk($path);
        if (!$storageDisk) {
            return response()->json(['message' => 'Document not found'], 404);
        }
        
        // Verify file ownership
        if (!$this->verifyFileOwnership($userId, $filename)) {
            return response()->json(['message' => 'Document not found or access denied'], 404);
        }
        
        // Log the access
        $this->logDocumentAccess($currentUser, $userId, $filename, $action);
        
        if ($action === 'download') {
            return Storage::disk($storageDisk)->download($path, $filename);
        }
        
        // For view action
        $file = Storage::disk($storageDisk)->get($path);
        $mimeType = Storage::disk($storageDisk)->mimeType($path);
        $fileSize = Storage::disk($storageDisk)->size($path);
        
        return response($file, 200)
            ->header('Content-Type', $mimeType)
            ->header('Content-Length', $fileSize)
            ->header('Content-Disposition', 'inline; filename="' . $filename . '"')
            ->header('Cache-Control', 'private, max-age=3600');
    }

    private function isAuthorized($currentUser, $requestedUserId)
    {
        $isAdmin = $currentUser->role === 'admin';
        //$isDocumentOwner = $currentUser->id == $requestedUserId;
        $isOrganizerOwner = $currentUser->role === 'organizer' && $currentUser->id == $requestedUserId;
        
        return $isAdmin || $isOrganizerOwner; //$isDocumentOwner 
    }

    private function verifyFileOwnership($userId, $filename)
    {
        return User::where('id', $userId)
                  ->where('kyc_document_path', 'like', "%{$filename}")
                  ->exists();
    }

    private function getStorageDisk($path)
    {
        if (Storage::disk('private')->exists($path)) {
            return 'private';
        } elseif (Storage::disk('local')->exists($path)) {
            return 'local';
        }
        
        return null;
    }

    private function logDocumentAccess($currentUser, $documentOwnerId, $filename, $action)
    {
        \Log::info('Document accessed', [
            'accessing_user_id' => $currentUser->id,
            'accessing_user_role' => $currentUser->role,
            'document_owner_id' => $documentOwnerId,
            'filename' => $filename,
            'action' => $action,
            'ip' => request()->ip(),
            'user_agent' => request()->userAgent(),
            'timestamp' => now()->toISOString()
        ]);
    }
}