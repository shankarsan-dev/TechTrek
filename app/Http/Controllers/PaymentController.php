<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Payment;

class PaymentController extends Controller
{
    // Step 1: Create Payment
    public function pay(Request $request, $ticketId)
    {
        $userId = $request->user()->_id ?? null; // replace with auth user
        $amount = $request->amount ?? 500; // example

        // Create pending payment
        $payment = Payment::create([
            'ticket_id' => $ticketId,
            'user_id' => $userId,
            'amount' => $amount,
            'status' => 'pending',
        ]);

        // Prepare eSewa form data
        $esewa = [
            'tAmt' => $amount,
            'amt' => $amount,
            'txAmt' => 0,
            'psc' => 0,
            'pdc' => 0,
            'scd' => env('ESEWA_MERCHANT_CODE', 'EPAYTEST'),
            'pid' => $payment->_id,
            'su' => route('api.payment.verify'),
            'fu' => route('api.payment.verify'),
        ];

        return response()->json($esewa);
    }

    // Step 2: Verify eSewa Payment
    public function verify(Request $request)
    {
        $pid = $request->pid;
        $amt = $request->amt;

        $payment = Payment::find($pid);
        if (!$payment) {
            return redirect('/payment-failed');
        }

        // For sandbox, simple verification
        if ((float)$amt === (float)$payment->amount) {
            $payment->status = 'success';
            $payment->esewa_data = $request->all();
            $payment->save();
            return redirect('/thank-you');
        } else {
            $payment->status = 'failed';
            $payment->esewa_data = $request->all();
            $payment->save();
            return redirect('/payment-failed');
        }
    }
}
