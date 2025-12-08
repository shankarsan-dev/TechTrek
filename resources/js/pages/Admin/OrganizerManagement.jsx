// // // src/pages/admin/OrganizerManagement.jsx
// // import {
// //     AlertCircle,
// //     BadgeCheck,
// //     Building,
// //     CheckCircle,
// //     Clock,
// //     Download,
// //     Eye,
// //     FileText,
// //     Mail,
// //     MoreVertical,
// //     Search,
// //     Shield,
// //     Star,
// //     XCircle
// // } from "lucide-react"
// // import { useState } from "react"

// // const OrganizerManagement = () => {
// //   const [organizers, setOrganizers] = useState([
// //     {
// //       id: 1,
// //       name: "TechCorp Events",
// //       email: "events@techcorp.com",
// //       phone: "+1 (555) 123-4567",
// //       status: "verified",
// //       events: 12,
// //       joined: "2024-01-10",
// //       rating: 4.8,
// //       address: "123 Tech Street, San Francisco, CA",
// //       documents: [
// //         { name: "business_license.pdf", type: "license", verified: true },
// //         { name: "tax_certificate.pdf", type: "tax", verified: true },
// //         { name: "insurance_certificate.pdf", type: "insurance", verified: true }
// //       ],
// //       verification: {
// //         status: "verified",
// //         verifiedBy: "Admin User",
// //         verifiedAt: "2024-01-12",
// //         level: "premium",
// //         score: 95,
// //         steps: [
// //           { step: "Document Review", status: "completed", date: "2024-01-11" },
// //           { step: "Background Check", status: "completed", date: "2024-01-11" },
// //           { step: "Final Approval", status: "completed", date: "2024-01-12" }
// //         ]
// //       }
// //     },
// //     {
// //       id: 2,
// //       name: "Music Festivals Inc",
// //       email: "contact@musicfest.com",
// //       phone: "+1 (555) 987-6543",
// //       status: "pending_verification",
// //       events: 0,
// //       joined: "2024-01-15",
// //       rating: null,
// //       address: "456 Music Ave, Austin, TX",
// //       documents: [
// //         { name: "business_license.pdf", type: "license", verified: false },
// //         { name: "tax_id.pdf", type: "tax", verified: false }
// //       ],
// //       verification: {
// //         status: "in_progress",
// //         verifiedBy: null,
// //         verifiedAt: null,
// //         level: "basic",
// //         score: 65,
// //         steps: [
// //           { step: "Document Review", status: "in_progress", date: "2024-01-15" },
// //           { step: "Background Check", status: "pending", date: null },
// //           { step: "Final Approval", status: "pending", date: null }
// //         ]
// //       }
// //     },
// //     {
// //       id: 3,
// //       name: "Sports Events LLC",
// //       email: "info@sportsevents.com",
// //       phone: "+1 (555) 456-7890",
// //       status: "rejected",
// //       events: 0,
// //       joined: "2024-01-12",
// //       rating: null,
// //       address: "789 Stadium Blvd, Los Angeles, CA",
// //       documents: [
// //         { name: "business_license.pdf", type: "license", verified: false }
// //       ],
// //       verification: {
// //         status: "rejected",
// //         verifiedBy: "Admin User",
// //         verifiedAt: "2024-01-13",
// //         level: "basic",
// //         score: 45,
// //         steps: [
// //           { step: "Document Review", status: "failed", date: "2024-01-13" },
// //           { step: "Background Check", status: "cancelled", date: null },
// //           { step: "Final Approval", status: "cancelled", date: null }
// //         ],
// //         rejectionReason: "Incomplete documentation and missing tax certificates"
// //       }
// //     },
// //     {
// //       id: 4,
// //       name: "Art Gallery Exhibitions",
// //       email: "info@artgallery.com",
// //       phone: "+1 (555) 234-5678",
// //       status: "under_review",
// //       events: 3,
// //       joined: "2024-01-08",
// //       rating: 4.5,
// //       address: "321 Art Street, New York, NY",
// //       documents: [
// //         { name: "business_license.pdf", type: "license", verified: true },
// //         { name: "insurance_certificate.pdf", type: "insurance", verified: true },
// //         { name: "portfolio.pdf", type: "portfolio", verified: false }
// //       ],
// //       verification: {
// //         status: "under_review",
// //         verifiedBy: null,
// //         verifiedAt: null,
// //         level: "standard",
// //         score: 78,
// //         steps: [
// //           { step: "Document Review", status: "completed", date: "2024-01-09" },
// //           { step: "Background Check", status: "in_progress", date: "2024-01-10" },
// //           { step: "Final Approval", status: "pending", date: null }
// //         ]
// //       }
// //     }
// //   ])

// //   const [selectedOrganizer, setSelectedOrganizer] = useState(null)
// //   const [showVerificationModal, setShowVerificationModal] = useState(false)
// //   const [showDocumentsModal, setShowDocumentsModal] = useState(false)
// //   const [rejectionReason, setRejectionReason] = useState("")
// //   const [verificationNotes, setVerificationNotes] = useState("")

// //   const getStatusIcon = (status) => {
// //     switch (status) {
// //       case 'verified':
// //         return <BadgeCheck className="h-4 w-4 text-green-500" />
// //       case 'pending_verification':
// //         return <Clock className="h-4 w-4 text-yellow-500" />
// //       case 'under_review':
// //         return <Shield className="h-4 w-4 text-blue-500" />
// //       case 'rejected':
// //         return <XCircle className="h-4 w-4 text-red-500" />
// //       default:
// //         return <Clock className="h-4 w-4 text-gray-500" />
// //     }
// //   }

// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case 'verified':
// //         return 'bg-green-100 text-green-800'
// //       case 'pending_verification':
// //         return 'bg-yellow-100 text-yellow-800'
// //       case 'under_review':
// //         return 'bg-blue-100 text-blue-800'
// //       case 'rejected':
// //         return 'bg-red-100 text-red-800'
// //       default:
// //         return 'bg-gray-100 text-gray-800'
// //     }
// //   }

// //   const getStatusText = (status) => {
// //     switch (status) {
// //       case 'verified':
// //         return 'Verified'
// //       case 'pending_verification':
// //         return 'Pending Verification'
// //       case 'under_review':
// //         return 'Under Review'
// //       case 'rejected':
// //         return 'Rejected'
// //       default:
// //         return status
// //     }
// //   }

// //   const getVerificationLevelColor = (level) => {
// //     switch (level) {
// //       case 'premium':
// //         return 'bg-purple-100 text-purple-800'
// //       case 'standard':
// //         return 'bg-blue-100 text-blue-800'
// //       case 'basic':
// //         return 'bg-gray-100 text-gray-800'
// //       default:
// //         return 'bg-gray-100 text-gray-800'
// //     }
// //   }

// //   const getStepStatusIcon = (stepStatus) => {
// //     switch (stepStatus) {
// //       case 'completed':
// //         return <CheckCircle className="h-4 w-4 text-green-500" />
// //       case 'in_progress':
// //         return <Clock className="h-4 w-4 text-blue-500" />
// //       case 'failed':
// //         return <XCircle className="h-4 w-4 text-red-500" />
// //       case 'pending':
// //         return <Clock className="h-4 w-4 text-gray-400" />
// //       case 'cancelled':
// //         return <XCircle className="h-4 w-4 text-gray-400" />
// //       default:
// //         return <Clock className="h-4 w-4 text-gray-400" />
// //     }
// //   }

// //   const handleVerify = (organizerId) => {
// //     setOrganizers(orgs => 
// //       orgs.map(org => 
// //         org.id === organizerId 
// //           ? { 
// //               ...org, 
// //               status: 'verified',
// //               verification: {
// //                 ...org.verification,
// //                 status: 'verified',
// //                 verifiedBy: 'Admin User',
// //                 verifiedAt: new Date().toISOString().split('T')[0],
// //                 steps: org.verification.steps.map(step => 
// //                   step.status === 'in_progress' ? { ...step, status: 'completed', date: new Date().toISOString().split('T')[0] } : step
// //                 )
// //               }
// //             }
// //           : org
// //       )
// //     )
// //     setShowVerificationModal(false)
// //   }

// //   const handleReject = (organizerId) => {
// //     if (!rejectionReason.trim()) {
// //       alert('Please provide a rejection reason')
// //       return
// //     }
    
// //     setOrganizers(orgs => 
// //       orgs.map(org => 
// //         org.id === organizerId 
// //           ? { 
// //               ...org, 
// //               status: 'rejected',
// //               verification: {
// //                 ...org.verification,
// //                 status: 'rejected',
// //                 verifiedBy: 'Admin User',
// //                 verifiedAt: new Date().toISOString().split('T')[0],
// //                 rejectionReason,
// //                 steps: org.verification.steps.map(step => 
// //                   step.status === 'in_progress' ? { ...step, status: 'failed', date: new Date().toISOString().split('T')[0] } : 
// //                   step.status === 'pending' ? { ...step, status: 'cancelled' } : step
// //                 )
// //               }
// //             }
// //           : org
// //       )
// //     )
// //     setShowVerificationModal(false)
// //     setRejectionReason("")
// //   }

// //   const handleStartVerification = (organizerId) => {
// //     setOrganizers(orgs => 
// //       orgs.map(org => 
// //         org.id === organizerId 
// //           ? { 
// //               ...org, 
// //               status: 'under_review',
// //               verification: {
// //                 ...org.verification,
// //                 status: 'in_progress',
// //                 steps: org.verification.steps.map((step, index) => 
// //                   index === 0 ? { ...step, status: 'in_progress', date: new Date().toISOString().split('T')[0] } : step
// //                 )
// //               }
// //             }
// //           : org
// //       )
// //     )
// //   }

// //   const handleDocumentVerification = (organizerId, docIndex) => {
// //     setOrganizers(orgs => 
// //       orgs.map(org => 
// //         org.id === organizerId 
// //           ? {
// //               ...org,
// //               documents: org.documents.map((doc, idx) => 
// //                 idx === docIndex ? { ...doc, verified: !doc.verified } : doc
// //               )
// //             }
// //           : org
// //       )
// //     )
// //   }

// //   const openVerificationModal = (organizer) => {
// //     setSelectedOrganizer(organizer)
// //     setShowVerificationModal(true)
// //   }

// //   const openDocumentsModal = (organizer) => {
// //     setSelectedOrganizer(organizer)
// //     setShowDocumentsModal(true)
// //   }

// //   const stats = {
// //     total: organizers.length,
// //     verified: organizers.filter(org => org.status === 'verified').length,
// //     pending: organizers.filter(org => org.status === 'pending_verification').length,
// //     underReview: organizers.filter(org => org.status === 'under_review').length,
// //     rejected: organizers.filter(org => org.status === 'rejected').length
// //   }

// //   return (
// //     <div className="space-y-6">
// //       {/* Header */}
// //       <div className="flex justify-between items-center">
// //         <div>
// //           <h1 className="text-2xl font-bold text-gray-900">Organizer Management</h1>
// //           <p className="text-gray-600">Verify and manage event organizers</p>
// //         </div>
// //         <div className="flex gap-2">
// //           <button className="border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
// //             Export Data
// //           </button>
// //         </div>
// //       </div>

// //       {/* Stats */}
// //       <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
// //         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
// //           <p className="text-sm text-gray-600">Total Organizers</p>
// //           <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
// //           <p className="text-sm text-gray-600">Verified</p>
// //           <p className="text-2xl font-bold text-green-600">{stats.verified}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
// //           <p className="text-sm text-gray-600">Pending</p>
// //           <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
// //           <p className="text-sm text-gray-600">Under Review</p>
// //           <p className="text-2xl font-bold text-blue-600">{stats.underReview}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
// //           <p className="text-sm text-gray-600">Rejected</p>
// //           <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
// //         </div>
// //       </div>

// //       {/* Filters */}
// //       <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
// //         <div className="flex flex-col md:flex-row gap-4">
// //           <div className="flex-1 relative">
// //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
// //             <input
// //               type="text"
// //               placeholder="Search organizers..."
// //               className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
// //             />
// //           </div>
// //           <select className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
// //             <option>All Status</option>
// //             <option>Verified</option>
// //             <option>Pending Verification</option>
// //             <option>Under Review</option>
// //             <option>Rejected</option>
// //           </select>
// //           <select className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
// //             <option>All Verification Levels</option>
// //             <option>Premium</option>
// //             <option>Standard</option>
// //             <option>Basic</option>
// //           </select>
// //         </div>
// //       </div>

// //       {/* Organizers Table */}
// //       <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full divide-y divide-gray-200">
// //             <thead className="bg-gray-50">
// //               <tr>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Organizer
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Verification Status
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Documents
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Performance
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Actions
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody className="bg-white divide-y divide-gray-200">
// //               {organizers.map((org) => (
// //                 <tr key={org.id} className="hover:bg-gray-50 transition-colors">
// //                   <td className="px-6 py-4 whitespace-nowrap">
// //                     <div className="flex items-center">
// //                       <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
// //                         <Building className="h-5 w-5 text-blue-600" />
// //                       </div>
// //                       <div>
// //                         <div className="text-sm font-medium text-gray-900">{org.name}</div>
// //                         <div className="text-sm text-gray-500">{org.email}</div>
// //                         <div className="text-xs text-gray-400">Joined {org.joined}</div>
// //                       </div>
// //                     </div>
// //                   </td>
// //                   <td className="px-6 py-4">
// //                     <div className="flex items-center mb-2">
// //                       {getStatusIcon(org.status)}
// //                       <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(org.status)}`}>
// //                         {getStatusText(org.status)}
// //                       </span>
// //                     </div>
// //                     <div className="flex items-center justify-between text-xs">
// //                       <span className={`px-2 py-1 rounded-full ${getVerificationLevelColor(org.verification.level)}`}>
// //                         {org.verification.level}
// //                       </span>
// //                       <span className="text-gray-500">Score: {org.verification.score}%</span>
// //                     </div>
// //                     {org.verification.verifiedAt && (
// //                       <div className="text-xs text-gray-500 mt-1">
// //                         Verified: {org.verification.verifiedAt}
// //                       </div>
// //                     )}
// //                   </td>
// //                   <td className="px-6 py-4">
// //                     <div className="text-sm text-gray-900">
// //                       {org.documents.filter(doc => doc.verified).length}/{org.documents.length} Verified
// //                     </div>
// //                     <div className="text-xs text-gray-500">
// //                       {org.documents.length} documents submitted
// //                     </div>
// //                     <button 
// //                       onClick={() => openDocumentsModal(org)}
// //                       className="text-xs text-blue-600 hover:text-blue-800 mt-1 flex items-center"
// //                     >
// //                       <Eye className="h-3 w-3 mr-1" />
// //                       View Documents
// //                     </button>
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                     <div className="flex items-center mb-1">
// //                       <Star className="h-4 w-4 text-yellow-500 mr-1" />
// //                       Events: {org.events}
// //                     </div>
// //                     {org.rating && (
// //                       <div className="flex items-center">
// //                         <Star className="h-4 w-4 text-yellow-500 mr-1" />
// //                         Rating: {org.rating}/5
// //                       </div>
// //                     )}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// //                     <div className="flex items-center space-x-2">
// //                       {org.status === 'pending_verification' && (
// //                         <button 
// //                           onClick={() => handleStartVerification(org.id)}
// //                           className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition-colors"
// //                           title="Start Verification"
// //                         >
// //                           <Shield className="h-4 w-4" />
// //                         </button>
// //                       )}
// //                       {org.status === 'under_review' && (
// //                         <button 
// //                           onClick={() => openVerificationModal(org)}
// //                           className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
// //                           title="Complete Verification"
// //                         >
// //                           <BadgeCheck className="h-4 w-4" />
// //                         </button>
// //                       )}
// //                       <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors">
// //                         <Mail className="h-4 w-4" />
// //                       </button>
// //                       <button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100 transition-colors">
// //                         <MoreVertical className="h-4 w-4" />
// //                       </button>
// //                     </div>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>

// //       {/* Verification Modal */}
// //       {showVerificationModal && selectedOrganizer && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //             <div className="p-6 border-b border-gray-200">
// //               <h3 className="text-lg font-semibold text-gray-900">
// //                 Verification Process: {selectedOrganizer.name}
// //               </h3>
// //             </div>
            
// //             <div className="p-6 space-y-6">
// //               {/* Verification Steps */}
// //               <div>
// //                 <h4 className="font-medium text-gray-900 mb-4">Verification Steps</h4>
// //                 <div className="space-y-3">
// //                   {selectedOrganizer.verification.steps.map((step, index) => (
// //                     <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
// //                       <div className="flex items-center">
// //                         {getStepStatusIcon(step.status)}
// //                         <span className="ml-3 text-sm font-medium text-gray-900">{step.step}</span>
// //                       </div>
// //                       <div className="text-right">
// //                         <div className={`text-xs font-medium ${
// //                           step.status === 'completed' ? 'text-green-600' :
// //                           step.status === 'in_progress' ? 'text-blue-600' :
// //                           step.status === 'failed' ? 'text-red-600' : 'text-gray-500'
// //                         }`}>
// //                           {step.status.replace('_', ' ')}
// //                         </div>
// //                         {step.date && (
// //                           <div className="text-xs text-gray-500">{step.date}</div>
// //                         )}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Documents Status */}
// //               <div>
// //                 <h4 className="font-medium text-gray-900 mb-3">Documents Status</h4>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
// //                   {selectedOrganizer.documents.map((doc, index) => (
// //                     <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
// //                       <div className="flex items-center">
// //                         <FileText className="h-4 w-4 text-gray-400 mr-3" />
// //                         <div>
// //                           <div className="text-sm font-medium text-gray-900">{doc.name}</div>
// //                           <div className="text-xs text-gray-500 capitalize">{doc.type}</div>
// //                         </div>
// //                       </div>
// //                       <div className="flex items-center space-x-2">
// //                         {doc.verified ? (
// //                           <CheckCircle className="h-5 w-5 text-green-500" />
// //                         ) : (
// //                           <AlertCircle className="h-5 w-5 text-yellow-500" />
// //                         )}
// //                         <button 
// //                           onClick={() => handleDocumentVerification(selectedOrganizer.id, index)}
// //                           className="text-blue-600 hover:text-blue-800 text-sm"
// //                         >
// //                           {doc.verified ? 'Unverify' : 'Verify'}
// //                         </button>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Verification Notes */}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                   Verification Notes
// //                 </label>
// //                 <textarea
// //                   value={verificationNotes}
// //                   onChange={(e) => setVerificationNotes(e.target.value)}
// //                   placeholder="Add notes about this verification..."
// //                   className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
// //                   rows="3"
// //                 />
// //               </div>

// //               {/* Rejection Reason (if applicable) */}
// //               {selectedOrganizer.verification.status === 'in_progress' && (
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Rejection Reason (if rejecting):
// //                   </label>
// //                   <textarea
// //                     value={rejectionReason}
// //                     onChange={(e) => setRejectionReason(e.target.value)}
// //                     placeholder="Provide detailed reason for rejection..."
// //                     className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
// //                     rows="3"
// //                   />
// //                 </div>
// //               )}
// //             </div>

// //             <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
// //               <button
// //                 onClick={() => setShowVerificationModal(false)}
// //                 className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
// //               >
// //                 Cancel
// //               </button>
              
// //               {selectedOrganizer.verification.status === 'in_progress' && (
// //                 <>
// //                   <button
// //                     onClick={() => handleReject(selectedOrganizer.id)}
// //                     className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
// //                   >
// //                     Reject Application
// //                   </button>
// //                   <button
// //                     onClick={() => handleVerify(selectedOrganizer.id)}
// //                     className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
// //                   >
// //                     Approve & Verify
// //                   </button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Documents Modal */}
// //       {showDocumentsModal && selectedOrganizer && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //             <div className="p-6 border-b border-gray-200">
// //               <h3 className="text-lg font-semibold text-gray-900">
// //                 Documents: {selectedOrganizer.name}
// //               </h3>
// //             </div>
            
// //             <div className="p-6">
// //               <div className="space-y-4">
// //                 {selectedOrganizer.documents.map((doc, index) => (
// //                   <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
// //                     <div className="flex items-center space-x-4">
// //                       <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
// //                         <FileText className="h-6 w-6 text-blue-600" />
// //                       </div>
// //                       <div>
// //                         <div className="text-sm font-medium text-gray-900">{doc.name}</div>
// //                         <div className="text-xs text-gray-500 capitalize">{doc.type} Document</div>
// //                         <div className="flex items-center mt-1">
// //                           {doc.verified ? (
// //                             <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
// //                               <CheckCircle className="h-3 w-3 mr-1" />
// //                               Verified
// //                             </span>
// //                           ) : (
// //                             <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
// //                               <Clock className="h-3 w-3 mr-1" />
// //                               Pending
// //                             </span>
// //                           )}
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div className="flex items-center space-x-2">
// //                       <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
// //                         <Eye className="h-4 w-4" />
// //                       </button>
// //                       <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
// //                         <Download className="h-4 w-4" />
// //                       </button>
// //                       <button 
// //                         onClick={() => handleDocumentVerification(selectedOrganizer.id, index)}
// //                         className={`p-2 rounded-lg transition-colors ${
// //                           doc.verified 
// //                             ? 'text-green-600 hover:bg-green-50' 
// //                             : 'text-yellow-600 hover:bg-yellow-50'
// //                         }`}
// //                       >
// //                         {doc.verified ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="flex justify-end p-6 border-t border-gray-200 bg-gray-50">
// //               <button
// //                 onClick={() => setShowDocumentsModal(false)}
// //                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default OrganizerManagement
// import axios from "axios"
// import {
//     AlertCircle,
//     BadgeCheck,
//     Building,
//     CheckCircle,
//     Clock,
//     Download,
//     Eye,
//     FileText,
//     Mail,
//     MoreVertical,
//     Search,
//     Shield,
//     XCircle
// } from "lucide-react"
// import { useEffect, useState } from "react"

// const OrganizerManagement = () => {
//   const [organizers, setOrganizers] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [filters, setFilters] = useState({
//     search: "",
//     status: ""
//   })
//   const [searchInput, setSearchInput] = useState("")

//   const [selectedOrganizer, setSelectedOrganizer] = useState(null)
//   const [showVerificationModal, setShowVerificationModal] = useState(false)
//   const [showDocumentsModal, setShowDocumentsModal] = useState(false)
//   const [rejectionReason, setRejectionReason] = useState("")
//   const [verificationNotes, setVerificationNotes] = useState("")

//   // Secure document handling functions
//   const handleSecureViewDocument = async (userId, filename, originalName = null) => {
//     try {
//       const token = localStorage.getItem('auth_token');
//       const url = `/api/secure-documents/${userId}/${filename}`;
      
//       const response = await fetch(url, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to view document: ${response.statusText}`);
//       }

//       const blob = await response.blob();
//       const blobUrl = window.URL.createObjectURL(blob);
      
//       // Handle different file types
//       if (blob.type === 'application/pdf') {
//         window.open(blobUrl, '_blank');
//       } else if (blob.type.startsWith('image/')) {
//         const newWindow = window.open('', '_blank');
//         newWindow.document.write(`
//           <!DOCTYPE html>
//           <html>
//             <head>
//               <title>${originalName || filename}</title>
//               <style>
//                 body { 
//                   margin: 0; 
//                   padding: 20px;
//                   display: flex; 
//                   justify-content: center; 
//                   align-items: center; 
//                   min-height: 100vh; 
//                   background: #f5f5f5;
//                   font-family: Arial, sans-serif;
//                 }
//                 .container {
//                   max-width: 90vw;
//                   max-height: 90vh;
//                   text-align: center;
//                 }
//                 img { 
//                   max-width: 100%; 
//                   max-height: 80vh;
//                   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                   border-radius: 8px;
//                 }
//                 .filename {
//                   margin-top: 15px;
//                   color: #666;
//                   font-size: 14px;
//                 }
//               </style>
//             </head>
//             <body>
//               <div class="container">
//                 <img src="${blobUrl}" alt="${originalName || filename}" />
//                 <div class="filename">${originalName || filename}</div>
//               </div>
//             </body>
//           </html>
//         `);
//         newWindow.document.close();
//       } else {
//         alert('This file type cannot be viewed in browser. Downloading instead.');
//         handleSecureDownloadDocument(userId, filename, originalName);
//         return;
//       }
      
//       setTimeout(() => window.URL.revokeObjectURL(blobUrl), 60000);
//     } catch (error) {
//       console.error('Error viewing document:', error);
//       alert('Error viewing document: ' + error.message);
//     }
//   };

//   const handleSecureDownloadDocument = async (userId, filename, originalName = null) => {
//     try {
//       const token = localStorage.getItem('auth_token');
//       const url = `/api/secure-documents/${userId}/${filename}/download`;
      
//       const response = await fetch(url, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to download document: ${response.statusText}`);
//       }

//       const blob = await response.blob();
//       const blobUrl = window.URL.createObjectURL(blob);
      
//       const link = document.createElement('a');
//       link.href = blobUrl;
//       link.download = originalName || filename;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       setTimeout(() => window.URL.revokeObjectURL(blobUrl), 60000);
//     } catch (error) {
//       console.error('Error downloading document:', error);
//       alert('Error downloading document: ' + error.message);
//     }
//   };

//   // Fetch organizers from API
//   const fetchOrganizers = async () => {
//     try {
//       setLoading(true)
//       const token = localStorage.getItem('auth_token')
      
//       // Create params object without empty values
//       const params = {}
//       if (filters.search && filters.search.trim() !== '') {
//         params.search = filters.search
//       }
//       if (filters.status && filters.status.trim() !== '') {
//         params.status = filters.status
//       }
      
//       const response = await axios.get('/api/admin/get-organizers', {
//         params: params,
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       })

//       if (response.data.status) {
//         // Transform API data to match frontend structure
//         const transformedOrganizers = response.data.data.map(org => ({
//           id: org._id || org.id,
//           name: org.organization_name,
//           email: org.email,
//           phone: org.phone,
//           status: org.status,
//           events: 0,
//           joined: new Date(org.created_at).toISOString().split('T')[0],
//           rating: null,
//           address: `${org.city}, ${org.country}`,
//           documents: org.kyc_document_path ? [
//             { 
//               name: org.kyc_document_original_name || "kyc_document.pdf", 
//               type: "kyc", 
//               verified: org.status === 'verified',
//               path: org.kyc_document_path,
//               filename: org.kyc_document_path.split('/').pop(),
//               userId: org._id || org.id
//             }
//           ] : [],
//           verification: getVerificationData(org)
//         }))

//         setOrganizers(transformedOrganizers)
//       }
//     } catch (err) {
//       setError('Failed to fetch organizers')
//       console.error('Error fetching organizers:', err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Helper function to generate verification data based on status
//   const getVerificationData = (org) => {
//     const baseData = {
//       level: "basic",
//       score: org.status === 'verified' ? 95 : org.status === 'pending' ? 65 : 45,
//       steps: [
//         { step: "Document Review", status: "pending", date: null },
//         { step: "Background Check", status: "pending", date: null },
//         { step: "Final Approval", status: "pending", date: null }
//       ]
//     }

//     switch (org.status) {
//       case 'verified':
//         return {
//           ...baseData,
//           status: "verified",
//           verifiedBy: "Admin User",
//           verifiedAt: new Date(org.updated_at).toISOString().split('T')[0],
//           steps: [
//             { step: "Document Review", status: "completed", date: new Date(org.created_at).toISOString().split('T')[0] },
//             { step: "Background Check", status: "completed", date: new Date(org.updated_at).toISOString().split('T')[0] },
//             { step: "Final Approval", status: "completed", date: new Date(org.updated_at).toISOString().split('T')[0] }
//           ]
//         }
//       case 'pending':
//         return {
//           ...baseData,
//           status: "pending_verification",
//           verifiedBy: null,
//           verifiedAt: null
//         }
//       default:
//         return baseData
//     }
//   }

//   // Debounced search
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setFilters(prev => ({ ...prev, search: searchInput }))
//     }, 500)

//     return () => clearTimeout(timeoutId)
//   }, [searchInput])

//   useEffect(() => {
//     fetchOrganizers()
//   }, [filters])

//   const handleSearchChange = (value) => {
//     setSearchInput(value)
//   }

//   const handleStatusFilter = (status) => {
//     setFilters(prev => ({ ...prev, status: status || "" }))
//   }

//   const clearFilters = () => {
//     setSearchInput("")
//     setFilters({ search: "", status: "" })
//   }

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'verified':
//         return <BadgeCheck className="h-4 w-4 text-green-500" />
//       case 'pending':
//         return <Clock className="h-4 w-4 text-yellow-500" />
//       case 'under_review':
//         return <Shield className="h-4 w-4 text-blue-500" />
//       case 'rejected':
//         return <XCircle className="h-4 w-4 text-red-500" />
//       default:
//         return <Clock className="h-4 w-4 text-gray-500" />
//     }
//   }

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'verified':
//         return 'bg-green-100 text-green-800'
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800'
//       case 'under_review':
//         return 'bg-blue-100 text-blue-800'
//       case 'rejected':
//         return 'bg-red-100 text-red-800'
//       default:
//         return 'bg-gray-100 text-gray-800'
//     }
//   }

//   const getStatusText = (status) => {
//     switch (status) {
//       case 'verified':
//         return 'Verified'
//       case 'pending':
//         return 'Pending Verification'
//       case 'under_review':
//         return 'Under Review'
//       case 'rejected':
//         return 'Rejected'
//       default:
//         return status
//     }
//   }

//   const getVerificationLevelColor = (level) => {
//     switch (level) {
//       case 'premium':
//         return 'bg-purple-100 text-purple-800'
//       case 'standard':
//         return 'bg-blue-100 text-blue-800'
//       case 'basic':
//         return 'bg-gray-100 text-gray-800'
//       default:
//         return 'bg-gray-100 text-gray-800'
//     }
//   }

//   const getStepStatusIcon = (stepStatus) => {
//     switch (stepStatus) {
//       case 'completed':
//         return <CheckCircle className="h-4 w-4 text-green-500" />
//       case 'in_progress':
//         return <Clock className="h-4 w-4 text-blue-500" />
//       case 'failed':
//         return <XCircle className="h-4 w-4 text-red-500" />
//       case 'pending':
//         return <Clock className="h-4 w-4 text-gray-400" />
//       case 'cancelled':
//         return <XCircle className="h-4 w-4 text-gray-400" />
//       default:
//         return <Clock className="h-4 w-4 text-gray-400" />
//     }
//   }

//   const handleVerify = async (organizerId) => {
//     try {
//       const token = localStorage.getItem('auth_token')
//       await axios.post(`/api/admin/organizers/${organizerId}/verify`, {}, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       })
      
//       // Update local state
//       setOrganizers(orgs => 
//         orgs.map(org => 
//           org.id === organizerId 
//             ? { 
//                 ...org, 
//                 status: 'verified',
//                 verification: {
//                   ...org.verification,
//                   status: 'verified',
//                   verifiedBy: 'Admin User',
//                   verifiedAt: new Date().toISOString().split('T')[0],
//                   steps: org.verification.steps.map(step => 
//                     step.status === 'in_progress' ? { ...step, status: 'completed', date: new Date().toISOString().split('T')[0] } : step
//                   )
//                 }
//               }
//             : org
//         )
//       )
//       setShowVerificationModal(false)
//     } catch (err) {
//       setError('Failed to verify organizer')
//       console.error('Error verifying organizer:', err)
//     }
//   }

//   const handleReject = async (organizerId) => {
//     if (!rejectionReason.trim()) {
//       alert('Please provide a rejection reason')
//       return
//     }
    
//     try {
//       const token = localStorage.getItem('auth_token')
//       await axios.post(`/api/admin/organizers/${organizerId}/reject`, {
//         reason: rejectionReason
//       }, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       })
      
//       setOrganizers(orgs => 
//         orgs.map(org => 
//           org.id === organizerId 
//             ? { 
//                 ...org, 
//                 status: 'rejected',
//                 verification: {
//                   ...org.verification,
//                   status: 'rejected',
//                   verifiedBy: 'Admin User',
//                   verifiedAt: new Date().toISOString().split('T')[0],
//                   rejectionReason,
//                   steps: org.verification.steps.map(step => 
//                     step.status === 'in_progress' ? { ...step, status: 'failed', date: new Date().toISOString().split('T')[0] } : 
//                     step.status === 'pending' ? { ...step, status: 'cancelled' } : step
//                   )
//                 }
//               }
//             : org
//         )
//       )
//       setShowVerificationModal(false)
//       setRejectionReason("")
//     } catch (err) {
//       setError('Failed to reject organizer')
//       console.error('Error rejecting organizer:', err)
//     }
//   }

//   const handleStartVerification = async (organizerId) => {
//     try {
//       const token = localStorage.getItem('auth_token')
//       await axios.post(`/api/admin/organizers/${organizerId}/start-verification`, {}, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       })
      
//       setOrganizers(orgs => 
//         orgs.map(org => 
//           org.id === organizerId 
//             ? { 
//                 ...org, 
//                 status: 'under_review',
//                 verification: {
//                   ...org.verification,
//                   status: 'in_progress',
//                   steps: org.verification.steps.map((step, index) => 
//                     index === 0 ? { ...step, status: 'in_progress', date: new Date().toISOString().split('T')[0] } : step
//                   )
//                 }
//               }
//             : org
//         )
//       )
//     } catch (err) {
//       setError('Failed to start verification')
//       console.error('Error starting verification:', err)
//     }
//   }

//   const handleDocumentVerification = async (organizerId, docIndex) => {
//     // You might want to implement this with an API call
//     setOrganizers(orgs => 
//       orgs.map(org => 
//         org.id === organizerId 
//           ? {
//               ...org,
//               documents: org.documents.map((doc, idx) => 
//                 idx === docIndex ? { ...doc, verified: !doc.verified } : doc
//               )
//             }
//           : org
//       )
//     )
//   }

//   const openVerificationModal = (organizer) => {
//     setSelectedOrganizer(organizer)
//     setShowVerificationModal(true)
//   }

//   const openDocumentsModal = (organizer) => {
//     setSelectedOrganizer(organizer)
//     setShowDocumentsModal(true)
//   }

//   const stats = {
//     total: organizers.length,
//     verified: organizers.filter(org => org.status === 'verified').length,
//     pending: organizers.filter(org => org.status === 'pending').length,
//     underReview: organizers.filter(org => org.status === 'under_review').length,
//     rejected: organizers.filter(org => org.status === 'rejected').length
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-lg text-gray-600">Loading organizers...</div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-lg text-red-600">{error}</div>
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Organizer Management</h1>
//           <p className="text-gray-600">Verify and manage event organizers</p>
//         </div>
//         <div className="flex gap-2">
//           <button className="border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
//             Export Data
//           </button>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//           <p className="text-sm text-gray-600">Total Organizers</p>
//           <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//           <p className="text-sm text-gray-600">Verified</p>
//           <p className="text-2xl font-bold text-green-600">{stats.verified}</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//           <p className="text-sm text-gray-600">Pending</p>
//           <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//           <p className="text-sm text-gray-600">Under Review</p>
//           <p className="text-2xl font-bold text-blue-600">{stats.underReview}</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//           <p className="text-sm text-gray-600">Rejected</p>
//           <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//         <div className="flex flex-col md:flex-row gap-4 items-end">
//           <div className="flex-1">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Search Organizers
//             </label>
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <input
//                 type="text"
//                 placeholder="Search by name, email, organization..."
//                 value={searchInput}
//                 onChange={(e) => handleSearchChange(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//               />
//             </div>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Status
//             </label>
//             <select 
//               value={filters.status}
//               onChange={(e) => handleStatusFilter(e.target.value)}
//               className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//             >
//               <option value="">All Status</option>
//               <option value="verified">Verified</option>
//               <option value="pending">Pending Verification</option>
//               <option value="under_review">Under Review</option>
//               <option value="rejected">Rejected</option>
//             </select>
//           </div>

//           {(filters.search || filters.status) && (
//             <button
//               onClick={clearFilters}
//               className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
//             >
//               Clear Filters
//             </button>
//           )}
//         </div>

//         {/* Active filters display */}
//         {(filters.search || filters.status) && (
//           <div className="mt-4 flex flex-wrap gap-2">
//             {filters.search && (
//               <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                 Search: "{filters.search}"
//                 <button 
//                   onClick={() => setSearchInput("")}
//                   className="ml-1 hover:bg-blue-200 rounded-full"
//                 >
//                   ×
//                 </button>
//               </span>
//             )}
//             {filters.status && (
//               <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                 Status: {filters.status}
//                 <button 
//                   onClick={() => handleStatusFilter("")}
//                   className="ml-1 hover:bg-green-200 rounded-full"
//                 >
//                   ×
//                 </button>
//               </span>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Results count */}
//       <div className="flex justify-between items-center">
//         <p className="text-sm text-gray-600">
//           Showing {organizers.length} organizers
//           {filters.search && ` matching "${filters.search}"`}
//           {filters.status && ` with status "${filters.status}"`}
//         </p>
//       </div>

//       {/* Organizers Table */}
//       <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Organizer
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Verification Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Documents
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Contact Info
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {organizers.map((org) => (
//                 <tr key={org.id} className="hover:bg-gray-50 transition-colors">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
//                         <Building className="h-5 w-5 text-blue-600" />
//                       </div>
//                       <div>
//                         <div className="text-sm font-medium text-gray-900">{org.name}</div>
//                         <div className="text-sm text-gray-500">{org.email}</div>
//                         <div className="text-xs text-gray-400">Joined {org.joined}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center mb-2">
//                       {getStatusIcon(org.status)}
//                       <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(org.status)}`}>
//                         {getStatusText(org.status)}
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between text-xs">
//                       <span className={`px-2 py-1 rounded-full ${getVerificationLevelColor(org.verification.level)}`}>
//                         {org.verification.level}
//                       </span>
//                       <span className="text-gray-500">Score: {org.verification.score}%</span>
//                     </div>
//                     {org.verification.verifiedAt && (
//                       <div className="text-xs text-gray-500 mt-1">
//                         Verified: {org.verification.verifiedAt}
//                       </div>
//                     )}
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="text-sm text-gray-900">
//                       {org.documents.filter(doc => doc.verified).length}/{org.documents.length} Verified
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       {org.documents.length} documents submitted
//                     </div>
//                     {org.documents.length > 0 && (
//                       <button 
//                         onClick={() => openDocumentsModal(org)}
//                         className="text-xs text-blue-600 hover:text-blue-800 mt-1 flex items-center"
//                       >
//                         <Eye className="h-3 w-3 mr-1" />
//                         View Documents
//                       </button>
//                     )}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="mb-1">{org.phone}</div>
//                     <div className="text-xs text-gray-400">{org.address}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <div className="flex items-center space-x-2">
//                       {org.status === 'pending' && (
//                         <button 
//                           onClick={() => handleStartVerification(org.id)}
//                           className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition-colors"
//                           title="Start Verification"
//                         >
//                           <Shield className="h-4 w-4" />
//                         </button>
//                       )}
//                       {org.status === 'under_review' && (
//                         <button 
//                           onClick={() => openVerificationModal(org)}
//                           className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
//                           title="Complete Verification"
//                         >
//                           <BadgeCheck className="h-4 w-4" />
//                         </button>
//                       )}
//                       <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors">
//                         <Mail className="h-4 w-4" />
//                       </button>
//                       <button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100 transition-colors">
//                         <MoreVertical className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Verification Modal */}
//       {showVerificationModal && selectedOrganizer && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Verification Process: {selectedOrganizer.name}
//               </h3>
//             </div>
            
//             <div className="p-6 space-y-6">
//               {/* Verification Steps */}
//               <div>
//                 <h4 className="font-medium text-gray-900 mb-4">Verification Steps</h4>
//                 <div className="space-y-3">
//                   {selectedOrganizer.verification.steps.map((step, index) => (
//                     <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
//                       <div className="flex items-center">
//                         {getStepStatusIcon(step.status)}
//                         <span className="ml-3 text-sm font-medium text-gray-900">{step.step}</span>
//                       </div>
//                       <div className="text-right">
//                         <div className={`text-xs font-medium ${
//                           step.status === 'completed' ? 'text-green-600' :
//                           step.status === 'in_progress' ? 'text-blue-600' :
//                           step.status === 'failed' ? 'text-red-600' : 'text-gray-500'
//                         }`}>
//                           {step.status.replace('_', ' ')}
//                         </div>
//                         {step.date && (
//                           <div className="text-xs text-gray-500">{step.date}</div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Documents Status */}
//               <div>
//                 <h4 className="font-medium text-gray-900 mb-3">Documents Status</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   {selectedOrganizer.documents.map((doc, index) => (
//                     <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
//                       <div className="flex items-center">
//                         <FileText className="h-4 w-4 text-gray-400 mr-3" />
//                         <div>
//                           <div className="text-sm font-medium text-gray-900">{doc.name}</div>
//                           <div className="text-xs text-gray-500 capitalize">{doc.type}</div>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         {doc.verified ? (
//                           <CheckCircle className="h-5 w-5 text-green-500" />
//                         ) : (
//                           <AlertCircle className="h-5 w-5 text-yellow-500" />
//                         )}
//                         <button 
//                           onClick={() => handleDocumentVerification(selectedOrganizer.id, index)}
//                           className="text-blue-600 hover:text-blue-800 text-sm"
//                         >
//                           {doc.verified ? 'Unverify' : 'Verify'}
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Verification Notes */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Verification Notes
//                 </label>
//                 <textarea
//                   value={verificationNotes}
//                   onChange={(e) => setVerificationNotes(e.target.value)}
//                   placeholder="Add notes about this verification..."
//                   className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   rows="3"
//                 />
//               </div>

//               {/* Rejection Reason (if applicable) */}
//               {selectedOrganizer.verification.status === 'in_progress' && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Rejection Reason (if rejecting):
//                   </label>
//                   <textarea
//                     value={rejectionReason}
//                     onChange={(e) => setRejectionReason(e.target.value)}
//                     placeholder="Provide detailed reason for rejection..."
//                     className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     rows="3"
//                   />
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
//               <button
//                 onClick={() => setShowVerificationModal(false)}
//                 className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 Cancel
//               </button>
              
//               {selectedOrganizer.verification.status === 'in_progress' && (
//                 <>
//                   <button
//                     onClick={() => handleReject(selectedOrganizer.id)}
//                     className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//                   >
//                     Reject Application
//                   </button>
//                   <button
//                     onClick={() => handleVerify(selectedOrganizer.id)}
//                     className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//                   >
//                     Approve & Verify
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Documents Modal with Secure Access */}
//       {showDocumentsModal && selectedOrganizer && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Documents: {selectedOrganizer.name}
//               </h3>
//               <p className="text-sm text-gray-600 mt-1">
//                 Secure document access - Files are encrypted and require authentication
//               </p>
//             </div>
            
//             <div className="p-6">
//               <div className="space-y-4">
//                 {selectedOrganizer.documents.map((doc, index) => (
//                   <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                         <FileText className="h-6 w-6 text-blue-600" />
//                       </div>
//                       <div>
//                         <div className="text-sm font-medium text-gray-900">{doc.name}</div>
//                         <div className="text-xs text-gray-500 capitalize">{doc.type} Document</div>
//                         <div className="text-xs text-gray-400">Secure • Encrypted</div>
//                         <div className="flex items-center mt-1">
//                           {doc.verified ? (
//                             <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                               <CheckCircle className="h-3 w-3 mr-1" />
//                               Verified
//                             </span>
//                           ) : (
//                             <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
//                               <Clock className="h-3 w-3 mr-1" />
//                               Pending
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       {/* Secure View Button */}
//                       <button 
//                         onClick={() => handleSecureViewDocument(
//                           doc.userId || selectedOrganizer.id, 
//                           doc.filename, 
//                           doc.name
//                         )}
//                         className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                         title="View Document Securely"
//                       >
//                         <Eye className="h-4 w-4" />
//                       </button>
                      
//                       {/* Secure Download Button */}
//                       <button 
//                         onClick={() => handleSecureDownloadDocument(
//                           doc.userId || selectedOrganizer.id, 
//                           doc.filename, 
//                           doc.name
//                         )}
//                         className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
//                         title="Download Document Securely"
//                       >
//                         <Download className="h-4 w-4" />
//                       </button>
                      
//                       {/* Verify/Unverify Button */}
//                       <button 
//                         onClick={() => handleDocumentVerification(selectedOrganizer.id, index)}
//                         className={`p-2 rounded-lg transition-colors ${
//                           doc.verified 
//                             ? 'text-green-600 hover:bg-green-50' 
//                             : 'text-yellow-600 hover:bg-yellow-50'
//                         }`}
//                         title={doc.verified ? 'Mark as unverified' : 'Mark as verified'}
//                       >
//                         {doc.verified ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               {/* Show message if no documents */}
//               {selectedOrganizer.documents.length === 0 && (
//                 <div className="text-center py-8">
//                   <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                   <p className="text-gray-500">No documents submitted</p>
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end p-6 border-t border-gray-200 bg-gray-50">
//               <button
//                 onClick={() => setShowDocumentsModal(false)}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default OrganizerManagement
//   import axios from "axios"
// import {
//     AlertCircle,
//     BadgeCheck,
//     Bell,
//     Building,
//     CheckCircle,
//     Clock,
//     Download,
//     Eye,
//     FileText,
//     Mail,
//     MoreVertical,
//     Search,
//     Shield,
//     XCircle
// } from "lucide-react"
// import { useEffect, useState } from "react"

// const OrganizerManagement = () => {
//   const [organizers, setOrganizers] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [filters, setFilters] = useState({
//     search: "",
//     status: ""
//   })
//   const [searchInput, setSearchInput] = useState("")

//   const [selectedOrganizer, setSelectedOrganizer] = useState(null)
//   const [showVerificationModal, setShowVerificationModal] = useState(false)
//   const [showDocumentsModal, setShowDocumentsModal] = useState(false)
//   const [showDocumentViewer, setShowDocumentViewer] = useState(false)
//   const [showNotificationModal, setShowNotificationModal] = useState(false)
//   const [currentDocument, setCurrentDocument] = useState(null)
//   const [documentContent, setDocumentContent] = useState(null)
//   const [documentLoading, setDocumentLoading] = useState(false)
//   const [rejectionReason, setRejectionReason] = useState("")
//   const [verificationNotes, setVerificationNotes] = useState("")
//   const [notificationData, setNotificationData] = useState({
//     message: '',
//     type: 'info',
//     actionUrl: ''
//   })

//   // Secure document handling functions
//   const handleSecureViewDocument = async (userId, filename, originalName = null, docData = null) => {
//     try {
//       setDocumentLoading(true)
//       const token = localStorage.getItem('auth_token');
//       const url = `/api/secure-documents/${userId}/${filename}`;
      
//       const response = await fetch(url, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to view document: ${response.statusText}`);
//       }

//       const blob = await response.blob();
//       const blobUrl = window.URL.createObjectURL(blob);
      
//       setCurrentDocument({
//         url: blobUrl,
//         name: originalName || filename,
//         type: blob.type,
//         blob: blob,
//         docData: docData
//       });
//       setShowDocumentViewer(true);
      
//     } catch (error) {
//       console.error('Error viewing document:', error);
//       alert('Error viewing document: ' + error.message);
//     } finally {
//       setDocumentLoading(false);
//     }
//   };

//   const handleSecureDownloadDocument = async (userId, filename, originalName = null) => {
//     try {
//       const token = localStorage.getItem('auth_token');
//       const url = `/api/secure-documents/${userId}/${filename}/download`;
      
//       const response = await fetch(url, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to download document: ${response.statusText}`);
//       }

//       const blob = await response.blob();
//       const blobUrl = window.URL.createObjectURL(blob);
      
//       const link = document.createElement('a');
//       link.href = blobUrl;
//       link.download = originalName || filename;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       setTimeout(() => window.URL.revokeObjectURL(blobUrl), 60000);
//     } catch (error) {
//       console.error('Error downloading document:', error);
//       alert('Error downloading document: ' + error.message);
//     }
//   };

//   const closeDocumentViewer = () => {
//     setShowDocumentViewer(false);
//     setCurrentDocument(null);
//     if (currentDocument?.url) {
//       window.URL.revokeObjectURL(currentDocument.url);
//     }
//   };

//   // Notification functions
//   const sendNotification = async (organizerId, message, type = 'info', actionUrl = '') => {
//     try {
//       const token = localStorage.getItem('auth_token')
//       const response = await axios.post(`/api/notifications/send-to-organizer/${organizerId}`, {
//         message,
//         type,
//         action_url: actionUrl
//       }, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       })

//       if (response.data.status) {
//         console.log('Notification sent successfully!')
//       }
//     } catch (error) {
//       console.error('Error sending notification:', error)
//     }
//   }

//   const openNotificationModal = (organizer = null) => {
//     if (organizer) {
//       setSelectedOrganizer(organizer)
//     }
//     setShowNotificationModal(true)
//   }

//   const handleSendNotification = async () => {
//     if (!notificationData.message.trim()) {
//       alert('Please enter a message')
//       return
//     }

//     try {
//       const token = localStorage.getItem('auth_token')
      
//       if (selectedOrganizer) {
//         // Send to single organizer
//         await sendNotification(
//           selectedOrganizer.id,
//           notificationData.message,
//           notificationData.type,
//           notificationData.actionUrl
//         )
//         alert('Notification sent successfully!')
//       } else {
//         // Send to all organizers
//         const response = await axios.post('/api/notifications/send-to-all', {
//           message: notificationData.message,
//           type: notificationData.type,
//           action_url: notificationData.actionUrl
//         }, {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         })

//         if (response.data.status) {
//           alert(`Notification sent to ${response.data.data.sent_count} organizers!`)
//         }
//       }

//       setShowNotificationModal(false)
//       setNotificationData({ message: '', type: 'info', actionUrl: '' })
//       setSelectedOrganizer(null)
//     } catch (error) {
//       console.error('Error sending notification:', error)
//       alert('Failed to send notification')
//     }
//   }

//   // Fetch organizers from API
//   const fetchOrganizers = async () => {
//     try {
//       setLoading(true)
//       const token = localStorage.getItem('auth_token')
      
//       // Create params object without empty values
//       const params = {}
//       if (filters.search && filters.search.trim() !== '') {
//         params.search = filters.search
//       }
//       if (filters.status && filters.status.trim() !== '') {
//         params.status = filters.status
//       }
      
//       const response = await axios.get('/api/admin/get-organizers', {
//         params: params,
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       })

//       if (response.data.status) {
//         // Transform API data to match frontend structure
//         const transformedOrganizers = response.data.data.map(org => ({
//           id: org._id || org.id,
//           name: org.organization_name,
//           email: org.email,
//           phone: org.phone,
//           status: org.status,
//           events: 0,
//           joined: new Date(org.created_at).toISOString().split('T')[0],
//           rating: null,
//           address: `${org.city}, ${org.country}`,
//           documents: org.kyc_document_path ? [
//             { 
//               name: org.kyc_document_original_name || "kyc_document.pdf", 
//               type: "kyc", 
//               verified: org.status === 'verified',
//               path: org.kyc_document_path,
//               filename: org.kyc_document_path.split('/').pop(),
//               userId: org._id || org.id
//             }
//           ] : [],
//           verification: getVerificationData(org)
//         }))

//         setOrganizers(transformedOrganizers)
//       }
//     } catch (err) {
//       setError('Failed to fetch organizers')
//       console.error('Error fetching organizers:', err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Helper function to generate verification data based on status
//   const getVerificationData = (org) => {
//     const baseData = {
//       level: "basic",
//       score: org.status === 'verified' ? 95 : org.status === 'pending' ? 65 : 45,
//       steps: [
//         { step: "Document Review", status: "pending", date: null },
//         { step: "Background Check", status: "pending", date: null },
//         { step: "Final Approval", status: "pending", date: null }
//       ]
//     }

//     switch (org.status) {
//       case 'verified':
//         return {
//           ...baseData,
//           status: "verified",
//           verifiedBy: "Admin User",
//           verifiedAt: new Date(org.updated_at).toISOString().split('T')[0],
//           steps: [
//             { step: "Document Review", status: "completed", date: new Date(org.created_at).toISOString().split('T')[0] },
//             { step: "Background Check", status: "completed", date: new Date(org.updated_at).toISOString().split('T')[0] },
//             { step: "Final Approval", status: "completed", date: new Date(org.updated_at).toISOString().split('T')[0] }
//           ]
//         }
//       case 'pending':
//         return {
//           ...baseData,
//           status: "pending_verification",
//           verifiedBy: null,
//           verifiedAt: null
//         }
//       default:
//         return baseData
//     }
//   }

//   // Debounced search
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setFilters(prev => ({ ...prev, search: searchInput }))
//     }, 500)

//     return () => clearTimeout(timeoutId)
//   }, [searchInput])

//   useEffect(() => {
//     fetchOrganizers()
//   }, [filters])

//   const handleSearchChange = (value) => {
//     setSearchInput(value)
//   }

//   const handleStatusFilter = (status) => {
//     setFilters(prev => ({ ...prev, status: status || "" }))
//   }

//   const clearFilters = () => {
//     setSearchInput("")
//     setFilters({ search: "", status: "" })
//   }

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'verified':
//         return <BadgeCheck className="h-4 w-4 text-green-500" />
//       case 'pending':
//         return <Clock className="h-4 w-4 text-yellow-500" />
//       case 'under_review':
//         return <Shield className="h-4 w-4 text-blue-500" />
//       case 'rejected':
//         return <XCircle className="h-4 w-4 text-red-500" />
//       default:
//         return <Clock className="h-4 w-4 text-gray-500" />
//     }
//   }

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'verified':
//         return 'bg-green-100 text-green-800'
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800'
//       case 'under_review':
//         return 'bg-blue-100 text-blue-800'
//       case 'rejected':
//         return 'bg-red-100 text-red-800'
//       default:
//         return 'bg-gray-100 text-gray-800'
//     }
//   }

//   const getStatusText = (status) => {
//     switch (status) {
//       case 'verified':
//         return 'Verified'
//       case 'pending':
//         return 'Pending Verification'
//       case 'under_review':
//         return 'Under Review'
//       case 'rejected':
//         return 'Rejected'
//       default:
//         return status
//     }
//   }

//   const getVerificationLevelColor = (level) => {
//     switch (level) {
//       case 'premium':
//         return 'bg-purple-100 text-purple-800'
//       case 'standard':
//         return 'bg-blue-100 text-blue-800'
//       case 'basic':
//         return 'bg-gray-100 text-gray-800'
//       default:
//         return 'bg-gray-100 text-gray-800'
//     }
//   }

//   const getStepStatusIcon = (stepStatus) => {
//     switch (stepStatus) {
//       case 'completed':
//         return <CheckCircle className="h-4 w-4 text-green-500" />
//       case 'in_progress':
//         return <Clock className="h-4 w-4 text-blue-500" />
//       case 'failed':
//         return <XCircle className="h-4 w-4 text-red-500" />
//       case 'pending':
//         return <Clock className="h-4 w-4 text-gray-400" />
//       case 'cancelled':
//         return <XCircle className="h-4 w-4 text-gray-400" />
//       default:
//         return <Clock className="h-4 w-4 text-gray-400" />
//     }
//   }

//   const handleVerify = async (organizerId) => {
//     try {
//       const token = localStorage.getItem('auth_token')
//       await axios.post(`/api/admin/organizers/${organizerId}/verify`, {}, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       })
      
//       // Update local state
//       setOrganizers(orgs => 
//         orgs.map(org => 
//           org.id === organizerId 
//             ? { 
//                 ...org, 
//                 status: 'verified',
//                 verification: {
//                   ...org.verification,
//                   status: 'verified',
//                   verifiedBy: 'Admin User',
//                   verifiedAt: new Date().toISOString().split('T')[0],
//                   steps: org.verification.steps.map(step => 
//                     step.status === 'in_progress' ? { ...step, status: 'completed', date: new Date().toISOString().split('T')[0] } : step
//                   )
//                 }
//               }
//             : org
//         )
//       )

//       // Send notification to organizer
//       const verifiedOrganizer = organizers.find(org => org.id === organizerId)
//       if (verifiedOrganizer) {
//         await sendNotification(
//           organizerId,
//           `Congratulations! Your organizer account "${verifiedOrganizer.name}" has been verified successfully. You can now create and manage events.`,
//           'success',
//           '/organizer/dashboard'
//         )
//       }

//       setShowVerificationModal(false)
//       alert('Organizer verified successfully and notification sent!')
//     } catch (err) {
//       setError('Failed to verify organizer')
//       console.error('Error verifying organizer:', err)
//       alert('Failed to verify organizer')
//     }
//   }

//   const handleReject = async (organizerId) => {
//     if (!rejectionReason.trim()) {
//       alert('Please provide a rejection reason')
//       return
//     }
    
//     try {
//       const token = localStorage.getItem('auth_token')
//       await axios.post(`/api/admin/organizers/${organizerId}/reject`, {
//         reason: rejectionReason
//       }, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       })
      
//       setOrganizers(orgs => 
//         orgs.map(org => 
//           org.id === organizerId 
//             ? { 
//                 ...org, 
//                 status: 'rejected',
//                 verification: {
//                   ...org.verification,
//                   status: 'rejected',
//                   verifiedBy: 'Admin User',
//                   verifiedAt: new Date().toISOString().split('T')[0],
//                   rejectionReason,
//                   steps: org.verification.steps.map(step => 
//                     step.status === 'in_progress' ? { ...step, status: 'failed', date: new Date().toISOString().split('T')[0] } : 
//                     step.status === 'pending' ? { ...step, status: 'cancelled' } : step
//                   )
//                 }
//               }
//             : org
//         )
//       )

//       // Send notification to organizer
//       const rejectedOrganizer = organizers.find(org => org.id === organizerId)
//       if (rejectedOrganizer) {
//         await sendNotification(
//           organizerId,
//           `Your organizer account "${rejectedOrganizer.name}" verification has been rejected. Reason: ${rejectionReason}. Please review your documents and submit again.`,
//           'error',
//           '/organizer/verification'
//         )
//       }

//       setShowVerificationModal(false)
//       setRejectionReason("")
//       alert('Organizer rejected and notification sent!')
//     } catch (err) {
//       setError('Failed to reject organizer')
//       console.error('Error rejecting organizer:', err)
//       alert('Failed to reject organizer')
//     }
//   }

//   const handleCancelVerification = async (organizerId) => {
//     try {
//       const token = localStorage.getItem('auth_token')
//       await axios.post(`/api/admin/organizers/${organizerId}/cancel-verification`, {}, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       })
      
//       setOrganizers(orgs => 
//         orgs.map(org => 
//           org.id === organizerId 
//             ? { 
//                 ...org, 
//                 status: 'pending',
//                 verification: {
//                   ...org.verification,
//                   status: 'pending_verification',
//                   verifiedBy: null,
//                   verifiedAt: null,
//                   steps: org.verification.steps.map(step => 
//                     step.status === 'in_progress' ? { ...step, status: 'pending', date: null } : step
//                   )
//                 }
//               }
//             : org
//         )
//       )

//       // Send notification to organizer
//       const cancelledOrganizer = organizers.find(org => org.id === organizerId)
//       if (cancelledOrganizer) {
//         await sendNotification(
//           organizerId,
//           `The verification process for your organizer account "${cancelledOrganizer.name}" has been cancelled. Your application is back in pending status.`,
//           'warning',
//           '/organizer/verification'
//         )
//       }

//       setShowVerificationModal(false)
//       alert('Verification cancelled and notification sent!')
//     } catch (err) {
//       console.error('Error cancelling verification:', err)
//       // Even if API fails, update local state
//       setOrganizers(orgs => 
//         orgs.map(org => 
//           org.id === organizerId 
//             ? { 
//                 ...org, 
//                 status: 'pending',
//                 verification: {
//                   ...org.verification,
//                   status: 'pending_verification',
//                   steps: org.verification.steps.map(step => 
//                     step.status === 'in_progress' ? { ...step, status: 'pending', date: null } : step
//                   )
//                 }
//               }
//             : org
//         )
//       )
//       setShowVerificationModal(false)
//       alert('Verification cancelled locally!')
//     }
//   }

//   const handleStartVerification = async (organizerId) => {
//     try {
//       const token = localStorage.getItem('auth_token')
//       await axios.post(`/api/admin/organizers/${organizerId}/start-verification`, {}, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       })
      
//       setOrganizers(orgs => 
//         orgs.map(org => 
//           org.id === organizerId 
//             ? { 
//                 ...org, 
//                 status: 'under_review',
//                 verification: {
//                   ...org.verification,
//                   status: 'in_progress',
//                   steps: org.verification.steps.map((step, index) => 
//                     index === 0 ? { ...step, status: 'in_progress', date: new Date().toISOString().split('T')[0] } : step
//                   )
//                 }
//               }
//             : org
//         )
//       )

//       // Send notification to organizer
//       const startedOrganizer = organizers.find(org => org.id === organizerId)
//       if (startedOrganizer) {
//         await sendNotification(
//           organizerId,
//           `Great news! The verification process for your organizer account "${startedOrganizer.name}" has started. We will review your documents and get back to you soon.`,
//           'info',
//           '/organizer/verification'
//         )
//       }

//       alert('Verification started and notification sent!')
//     } catch (err) {
//       setError('Failed to start verification')
//       console.error('Error starting verification:', err)
//       alert('Failed to start verification')
//     }
//   }

//   const handleDocumentVerification = async (organizerId, docIndex) => {
//     // You might want to implement this with an API call
//     setOrganizers(orgs => 
//       orgs.map(org => 
//         org.id === organizerId 
//           ? {
//               ...org,
//               documents: org.documents.map((doc, idx) => 
//                 idx === docIndex ? { ...doc, verified: !doc.verified } : doc
//               )
//             }
//           : org
//       )
//     )
//   }

//   const openVerificationModal = (organizer) => {
//     setSelectedOrganizer(organizer)
//     setShowVerificationModal(true)
//   }

//   const openDocumentsModal = (organizer) => {
//     setSelectedOrganizer(organizer)
//     setShowDocumentsModal(true)
//   }

//   const stats = {
//     total: organizers.length,
//     verified: organizers.filter(org => org.status === 'verified').length,
//     pending: organizers.filter(org => org.status === 'pending').length,
//     underReview: organizers.filter(org => org.status === 'under_review').length,
//     rejected: organizers.filter(org => org.status === 'rejected').length
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-lg text-gray-600">Loading organizers...</div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-lg text-red-600">{error}</div>
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Organizer Management</h1>
//           <p className="text-gray-600">Verify and manage event organizers</p>
//         </div>
//         <div className="flex gap-2">
//           <button 
//             onClick={() => openNotificationModal()}
//             className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
//           >
//             <Bell className="h-4 w-4" />
//             Send Notification
//           </button>
//           <button className="border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
//             Export Data
//           </button>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//           <p className="text-sm text-gray-600">Total Organizers</p>
//           <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//           <p className="text-sm text-gray-600">Verified</p>
//           <p className="text-2xl font-bold text-green-600">{stats.verified}</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//           <p className="text-sm text-gray-600">Pending</p>
//           <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//           <p className="text-sm text-gray-600">Under Review</p>
//           <p className="text-2xl font-bold text-blue-600">{stats.underReview}</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//           <p className="text-sm text-gray-600">Rejected</p>
//           <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//         <div className="flex flex-col md:flex-row gap-4 items-end">
//           <div className="flex-1">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Search Organizers
//             </label>
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <input
//                 type="text"
//                 placeholder="Search by name, email, organization..."
//                 value={searchInput}
//                 onChange={(e) => handleSearchChange(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//               />
//             </div>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Status
//             </label>
//             <select 
//               value={filters.status}
//               onChange={(e) => handleStatusFilter(e.target.value)}
//               className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//             >
//               <option value="">All Status</option>
//               <option value="verified">Verified</option>
//               <option value="pending">Pending Verification</option>
//               <option value="under_review">Under Review</option>
//               <option value="rejected">Rejected</option>
//             </select>
//           </div>

//           {(filters.search || filters.status) && (
//             <button
//               onClick={clearFilters}
//               className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
//             >
//               Clear Filters
//             </button>
//           )}
//         </div>

//         {/* Active filters display */}
//         {(filters.search || filters.status) && (
//           <div className="mt-4 flex flex-wrap gap-2">
//             {filters.search && (
//               <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                 Search: "{filters.search}"
//                 <button 
//                   onClick={() => setSearchInput("")}
//                   className="ml-1 hover:bg-blue-200 rounded-full"
//                 >
//                   ×
//                 </button>
//               </span>
//             )}
//             {filters.status && (
//               <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                 Status: {filters.status}
//                 <button 
//                   onClick={() => handleStatusFilter("")}
//                   className="ml-1 hover:bg-green-200 rounded-full"
//                 >
//                   ×
//                 </button>
//               </span>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Results count */}
//       <div className="flex justify-between items-center">
//         <p className="text-sm text-gray-600">
//           Showing {organizers.length} organizers
//           {filters.search && ` matching "${filters.search}"`}
//           {filters.status && ` with status "${filters.status}"`}
//         </p>
//       </div>

//       {/* Organizers Table */}
//       <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Organizer
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Verification Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Documents
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Contact Info
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {organizers.map((org) => (
//                 <tr key={org.id} className="hover:bg-gray-50 transition-colors">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
//                         <Building className="h-5 w-5 text-blue-600" />
//                       </div>
//                       <div>
//                         <div className="text-sm font-medium text-gray-900">{org.name}</div>
//                         <div className="text-sm text-gray-500">{org.email}</div>
//                         <div className="text-xs text-gray-400">Joined {org.joined}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center mb-2">
//                       {getStatusIcon(org.status)}
//                       <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(org.status)}`}>
//                         {getStatusText(org.status)}
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between text-xs">
//                       <span className={`px-2 py-1 rounded-full ${getVerificationLevelColor(org.verification.level)}`}>
//                         {org.verification.level}
//                       </span>
//                       <span className="text-gray-500">Score: {org.verification.score}%</span>
//                     </div>
//                     {org.verification.verifiedAt && (
//                       <div className="text-xs text-gray-500 mt-1">
//                         Verified: {org.verification.verifiedAt}
//                       </div>
//                     )}
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="text-sm text-gray-900">
//                       {org.documents.filter(doc => doc.verified).length}/{org.documents.length} Verified
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       {org.documents.length} documents submitted
//                     </div>
//                     {org.documents.length > 0 && (
//                       <button 
//                         onClick={() => openDocumentsModal(org)}
//                         className="text-xs text-blue-600 hover:text-blue-800 mt-1 flex items-center"
//                       >
//                         <Eye className="h-3 w-3 mr-1" />
//                         View Documents
//                       </button>
//                     )}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="mb-1">{org.phone}</div>
//                     <div className="text-xs text-gray-400">{org.address}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <div className="flex items-center space-x-2">
//                       {org.status === 'pending' && (
//                         <button 
//                           onClick={() => handleStartVerification(org.id)}
//                           className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition-colors"
//                           title="Start Verification"
//                         >
//                           <Shield className="h-4 w-4" />
//                         </button>
//                       )}
//                       {org.status === 'under_review' && (
//                         <button 
//                           onClick={() => openVerificationModal(org)}
//                           className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
//                           title="Complete Verification"
//                         >
//                           <BadgeCheck className="h-4 w-4" />
//                         </button>
//                       )}
//                       <button 
//                         onClick={() => openNotificationModal(org)}
//                         className="text-purple-600 hover:text-purple-900 p-1 rounded hover:bg-purple-50 transition-colors"
//                         title="Send Notification"
//                       >
//                         <Bell className="h-4 w-4" />
//                       </button>
//                       <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors">
//                         <Mail className="h-4 w-4" />
//                       </button>
//                       <button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100 transition-colors">
//                         <MoreVertical className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Verification Modal */}
//       {showVerificationModal && selectedOrganizer && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Verification Process: {selectedOrganizer.name}
//               </h3>
//             </div>
            
//             <div className="p-6 space-y-6">
//               {/* Verification Steps */}
//               <div>
//                 <h4 className="font-medium text-gray-900 mb-4">Verification Steps</h4>
//                 <div className="space-y-3">
//                   {selectedOrganizer.verification.steps.map((step, index) => (
//                     <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
//                       <div className="flex items-center">
//                         {getStepStatusIcon(step.status)}
//                         <span className="ml-3 text-sm font-medium text-gray-900">{step.step}</span>
//                       </div>
//                       <div className="text-right">
//                         <div className={`text-xs font-medium ${
//                           step.status === 'completed' ? 'text-green-600' :
//                           step.status === 'in_progress' ? 'text-blue-600' :
//                           step.status === 'failed' ? 'text-red-600' : 'text-gray-500'
//                         }`}>
//                           {step.status.replace('_', ' ')}
//                         </div>
//                         {step.date && (
//                           <div className="text-xs text-gray-500">{step.date}</div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Documents Status */}
//               <div>
//                 <h4 className="font-medium text-gray-900 mb-3">Documents Status</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   {selectedOrganizer.documents.map((doc, index) => (
//                     <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
//                       <div className="flex items-center">
//                         <FileText className="h-4 w-4 text-gray-400 mr-3" />
//                         <div>
//                           <div className="text-sm font-medium text-gray-900">{doc.name}</div>
//                           <div className="text-xs text-gray-500 capitalize">{doc.type}</div>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         {doc.verified ? (
//                           <CheckCircle className="h-5 w-5 text-green-500" />
//                         ) : (
//                           <AlertCircle className="h-5 w-5 text-yellow-500" />
//                         )}
//                         <button 
//                           onClick={() => handleDocumentVerification(selectedOrganizer.id, index)}
//                           className="text-blue-600 hover:text-blue-800 text-sm"
//                         >
//                           {doc.verified ? 'Unverify' : 'Verify'}
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Verification Notes */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Verification Notes
//                 </label>
//                 <textarea
//                   value={verificationNotes}
//                   onChange={(e) => setVerificationNotes(e.target.value)}
//                   placeholder="Add notes about this verification..."
//                   className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   rows="3"
//                 />
//               </div>

//               {/* Rejection Reason (if applicable) */}
//               {selectedOrganizer.verification.status === 'in_progress' && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Rejection Reason (if rejecting):
//                   </label>
//                   <textarea
//                     value={rejectionReason}
//                     onChange={(e) => setRejectionReason(e.target.value)}
//                     placeholder="Provide detailed reason for rejection..."
//                     className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     rows="3"
//                   />
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
//               <button
//                 onClick={() => handleCancelVerification(selectedOrganizer.id)}
//                 className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
//               >
//                 Cancel Verification
//               </button>
              
//               {selectedOrganizer.verification.status === 'in_progress' && (
//                 <>
//                   <button
//                     onClick={() => handleReject(selectedOrganizer.id)}
//                     className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//                   >
//                     Reject
//                   </button>
//                   <button
//                     onClick={() => handleVerify(selectedOrganizer.id)}
//                     className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//                   >
//                     Verify
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Documents Modal with Secure Access */}
//       {showDocumentsModal && selectedOrganizer && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Documents: {selectedOrganizer.name}
//               </h3>
//               <p className="text-sm text-gray-600 mt-1">
//                 Secure document access - Files are encrypted and require authentication
//               </p>
//             </div>
            
//             <div className="p-6">
//               <div className="space-y-4">
//                 {selectedOrganizer.documents.map((doc, index) => (
//                   <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                         <FileText className="h-6 w-6 text-blue-600" />
//                       </div>
//                       <div>
//                         <div className="text-sm font-medium text-gray-900">{doc.name}</div>
//                         <div className="text-xs text-gray-500 capitalize">{doc.type} Document</div>
//                         <div className="text-xs text-gray-400">Secure • Encrypted</div>
//                         <div className="flex items-center mt-1">
//                           {doc.verified ? (
//                             <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                               <CheckCircle className="h-3 w-3 mr-1" />
//                               Verified
//                             </span>
//                           ) : (
//                             <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
//                               <Clock className="h-3 w-3 mr-1" />
//                               Pending
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       {/* Secure View Button */}
//                       <button 
//                         onClick={() => handleSecureViewDocument(
//                           doc.userId || selectedOrganizer.id, 
//                           doc.filename, 
//                           doc.name,
//                           doc
//                         )}
//                         className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                         title="View Document Securely"
//                       >
//                         <Eye className="h-4 w-4" />
//                       </button>
                      
//                       {/* Secure Download Button */}
//                       <button 
//                         onClick={() => handleSecureDownloadDocument(
//                           doc.userId || selectedOrganizer.id, 
//                           doc.filename, 
//                           doc.name
//                         )}
//                         className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
//                         title="Download Document Securely"
//                       >
//                         <Download className="h-4 w-4" />
//                       </button>
                      
//                       {/* Verify/Unverify Button */}
//                       <button 
//                         onClick={() => handleDocumentVerification(selectedOrganizer.id, index)}
//                         className={`p-2 rounded-lg transition-colors ${
//                           doc.verified 
//                             ? 'text-green-600 hover:bg-green-50' 
//                             : 'text-yellow-600 hover:bg-yellow-50'
//                         }`}
//                         title={doc.verified ? 'Mark as unverified' : 'Mark as verified'}
//                       >
//                         {doc.verified ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               {/* Show message if no documents */}
//               {selectedOrganizer.documents.length === 0 && (
//                 <div className="text-center py-8">
//                   <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                   <p className="text-gray-500">No documents submitted</p>
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end p-6 border-t border-gray-200 bg-gray-50">
//               <button
//                 onClick={() => setShowDocumentsModal(false)}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Document Viewer Modal */}
//       {showDocumentViewer && currentDocument && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
//             <div className="flex justify-between items-center p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 {currentDocument.name}
//               </h3>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => {
//                     const link = document.createElement('a');
//                     link.href = currentDocument.url;
//                     link.download = currentDocument.name;
//                     document.body.appendChild(link);
//                     link.click();
//                     document.body.removeChild(link);
//                   }}
//                   className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
//                   title="Download"
//                 >
//                   <Download className="h-5 w-5" />
//                 </button>
//                 <button
//                   onClick={closeDocumentViewer}
//                   className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
//                 >
//                   <XCircle className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
            
//             <div className="flex-1 overflow-auto p-6 bg-gray-50">
//               {documentLoading ? (
//                 <div className="flex justify-center items-center h-64">
//                   <div className="text-lg text-gray-600">Loading document...</div>
//                 </div>
//               ) : (
//                 <div className="flex justify-center">
//                   {currentDocument.type === 'application/pdf' ? (
//                     <iframe
//                       src={currentDocument.url}
//                       className="w-full h-[70vh] border-0 rounded-lg shadow-lg"
//                       title={currentDocument.name}
//                     />
//                   ) : currentDocument.type.startsWith('image/') ? (
//                     <div className="flex justify-center">
//                       <img
//                         src={currentDocument.url}
//                         alt={currentDocument.name}
//                         className="max-w-full max-h-[70vh] rounded-lg shadow-lg"
//                       />
//                     </div>
//                   ) : (
//                     <div className="text-center py-8">
//                       <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
//                       <p className="text-gray-600">This file type cannot be previewed.</p>
//                       <button
//                         onClick={() => {
//                           const link = document.createElement('a');
//                           link.href = currentDocument.url;
//                           link.download = currentDocument.name;
//                           document.body.appendChild(link);
//                           link.click();
//                           document.body.removeChild(link);
//                         }}
//                         className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                       >
//                         Download File
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Notification Modal */}
//       {showNotificationModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-md w-full">
//             <div className="p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Send Notification
//               </h3>
//               <p className="text-sm text-gray-600 mt-1">
//                 {selectedOrganizer 
//                   ? `To: ${selectedOrganizer.name}`
//                   : 'To: All organizers'
//                 }
//               </p>
//             </div>
            
//             <div className="p-6 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   value={notificationData.message}
//                   onChange={(e) => setNotificationData(prev => ({ ...prev, message: e.target.value }))}
//                   placeholder="Enter your notification message..."
//                   className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   rows="4"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Type
//                 </label>
//                 <select 
//                   value={notificationData.type}
//                   onChange={(e) => setNotificationData(prev => ({ ...prev, type: e.target.value }))}
//                   className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 >
//                   <option value="info">Information</option>
//                   <option value="success">Success</option>
//                   <option value="warning">Warning</option>
//                   <option value="error">Error</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Action URL (Optional)
//                 </label>
//                 <input
//                   type="url"
//                   value={notificationData.actionUrl}
//                   onChange={(e) => setNotificationData(prev => ({ ...prev, actionUrl: e.target.value }))}
//                   placeholder="https://example.com/action"
//                   className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
//               <button
//                 onClick={() => {
//                   setShowNotificationModal(false)
//                   setNotificationData({ message: '', type: 'info', actionUrl: '' })
//                   setSelectedOrganizer(null)
//                 }}
//                 className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSendNotification}
//                 className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//               >
//                 Send Notification
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default OrganizerManagement
import axios from "axios"
import {
  AlertCircle,
  BadgeCheck,
  Bell,
  Building,
  CheckCircle,
  Clock,
  Download,
  Eye,
  FileText,
  Mail,
  MoreVertical,
  Search,
  Shield,
  XCircle
} from "lucide-react"
import { useEffect, useState } from "react"

const OrganizerManagement = () => {
  const [organizers, setOrganizers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    search: "",
    status: ""
  })
  const [searchInput, setSearchInput] = useState("")

  const [selectedOrganizer, setSelectedOrganizer] = useState(null)
  const [showVerificationModal, setShowVerificationModal] = useState(false)
  const [showDocumentsModal, setShowDocumentsModal] = useState(false)
  const [showDocumentViewer, setShowDocumentViewer] = useState(false)
  const [showNotificationModal, setShowNotificationModal] = useState(false)
  const [currentDocument, setCurrentDocument] = useState(null)
  const [documentContent, setDocumentContent] = useState(null)
  const [documentLoading, setDocumentLoading] = useState(false)
  const [rejectionReason, setRejectionReason] = useState("")
  const [verificationNotes, setVerificationNotes] = useState("")
  const [notificationData, setNotificationData] = useState({
    message: '',
    type: 'info',
    actionUrl: ''
  })

  // Secure status update function using request body
  const updateOrganizerStatus = async (userId, newStatus) => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await axios.post(
        '/api/admin/approve',
        {
          user_id: userId,
          status: newStatus
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error updating organizer status:', error);
      throw error;
    }
  };

  // Secure document handling functions
  const handleSecureViewDocument = async (userId, filename, originalName = null, docData = null) => {
    try {
      setDocumentLoading(true)
      const token = localStorage.getItem('auth_token');
      const url = `/api/secure-documents/${userId}/${filename}`;
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to view document: ${response.statusText}`);
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      setCurrentDocument({
        url: blobUrl,
        name: originalName || filename,
        type: blob.type,
        blob: blob,
        docData: docData
      });
      setShowDocumentViewer(true);
      
    } catch (error) {
      console.error('Error viewing document:', error);
      alert('Error viewing document: ' + error.message);
    } finally {
      setDocumentLoading(false);
    }
  };

  const handleSecureDownloadDocument = async (userId, filename, originalName = null) => {
    try {
      const token = localStorage.getItem('auth_token');
      const url = `/api/secure-documents/${userId}/${filename}/download`;
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to download document: ${response.statusText}`);
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = originalName || filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 60000);
    } catch (error) {
      console.error('Error downloading document:', error);
      alert('Error downloading document: ' + error.message);
    }
  };

  const closeDocumentViewer = () => {
    setShowDocumentViewer(false);
    setCurrentDocument(null);
    if (currentDocument?.url) {
      window.URL.revokeObjectURL(currentDocument.url);
    }
  };

  // Notification functions
  const sendNotification = async (organizerId, message, type = 'info', actionUrl = '') => {
    try {
      const token = localStorage.getItem('auth_token')
      const response = await axios.post(`/api/notifications/send-to-organizer/${organizerId}`, {
        message,
        type,
        action_url: actionUrl
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (response.data.status) {
        console.log('Notification sent successfully!')
      }
    } catch (error) {
      console.error('Error sending notification:', error)
    }
  }

  const openNotificationModal = (organizer = null) => {
    if (organizer) {
      setSelectedOrganizer(organizer)
    }
    setShowNotificationModal(true)
  }

  const handleSendNotification = async () => {
    if (!notificationData.message.trim()) {
      alert('Please enter a message')
      return
    }

    try {
      const token = localStorage.getItem('auth_token')
      
      if (selectedOrganizer) {
        // Send to single organizer
        await sendNotification(
          selectedOrganizer.id,
          notificationData.message,
          notificationData.type,
          notificationData.actionUrl
        )
        alert('Notification sent successfully!')
      } else {
        // Send to all organizers
        const response = await axios.post('/api/notifications/send-to-all', {
          message: notificationData.message,
          type: notificationData.type,
          action_url: notificationData.actionUrl
        }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })

        if (response.data.status) {
          alert(`Notification sent to ${response.data.data.sent_count} organizers!`)
        }
      }

      setShowNotificationModal(false)
      setNotificationData({ message: '', type: 'info', actionUrl: '' })
      setSelectedOrganizer(null)
    } catch (error) {
      console.error('Error sending notification:', error)
      alert('Failed to send notification')
    }
  }

  // Fetch organizers from API
  const fetchOrganizers = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('auth_token')
      
      // Create params object without empty values
      const params = {}
      if (filters.search && filters.search.trim() !== '') {
        params.search = filters.search
      }
      if (filters.status && filters.status.trim() !== '') {
        params.status = filters.status
      }
      
      const response = await axios.get('/api/admin/get-organizers', {
        params: params,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (response.data.status) {
        // Transform API data to match frontend structure
        const transformedOrganizers = response.data.data.map(org => ({
          id: org._id || org.id,
          name: org.organization_name,
          email: org.email,
          phone: org.phone,
          status: org.status,
          events: 0,
          joined: new Date(org.created_at).toISOString().split('T')[0],
          rating: null,
          address: `${org.city}, ${org.country}`,
          documents: org.kyc_document_path ? [
            { 
              name: org.kyc_document_original_name || "kyc_document.pdf", 
              type: "kyc", 
              verified: org.status === 'verified',
              path: org.kyc_document_path,
              filename: org.kyc_document_path.split('/').pop(),
              userId: org._id || org.id
            }
          ] : [],
          verification: getVerificationData(org)
        }))

        setOrganizers(transformedOrganizers)
      }
    } catch (err) {
      setError('Failed to fetch organizers')
      console.error('Error fetching organizers:', err)
    } finally {
      setLoading(false)
    }
  }

  // Helper function to generate verification data based on status
  const getVerificationData = (org) => {
    const baseData = {
      level: "basic",
      score: org.status === 'verified' ? 95 : org.status === 'pending' ? 65 : 45,
      steps: [
        { step: "Document Review", status: "pending", date: null },
        { step: "Background Check", status: "pending", date: null },
        { step: "Final Approval", status: "pending", date: null }
      ]
    }

    switch (org.status) {
      case 'verified':
        return {
          ...baseData,
          status: "verified",
          verifiedBy: "Admin User",
          verifiedAt: new Date(org.updated_at).toISOString().split('T')[0],
          steps: [
            { step: "Document Review", status: "completed", date: new Date(org.created_at).toISOString().split('T')[0] },
            { step: "Background Check", status: "completed", date: new Date(org.updated_at).toISOString().split('T')[0] },
            { step: "Final Approval", status: "completed", date: new Date(org.updated_at).toISOString().split('T')[0] }
          ]
        }
      case 'pending':
        return {
          ...baseData,
          status: "pending_verification",
          verifiedBy: null,
          verifiedAt: null
        }
      default:
        return baseData
    }
  }

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilters(prev => ({ ...prev, search: searchInput }))
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [searchInput])

  useEffect(() => {
    fetchOrganizers()
  }, [filters])

  const handleSearchChange = (value) => {
    setSearchInput(value)
  }

  const handleStatusFilter = (status) => {
    setFilters(prev => ({ ...prev, status: status || "" }))
  }

  const clearFilters = () => {
    setSearchInput("")
    setFilters({ search: "", status: "" })
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified':
        return <BadgeCheck className="h-4 w-4 text-green-500" />
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />
      case 'under_review':
        return <Shield className="h-4 w-4 text-blue-500" />
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'under_review':
        return 'bg-blue-100 text-blue-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'verified':
        return 'Verified'
      case 'pending':
        return 'Pending Verification'
      case 'rejected':
        return 'Rejected'
      default:
        return status
    }
  }

  const getVerificationLevelColor = (level) => {
    switch (level) {
      case 'premium':
        return 'bg-purple-100 text-purple-800'
      case 'standard':
        return 'bg-blue-100 text-blue-800'
      case 'basic':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStepStatusIcon = (stepStatus) => {
    switch (stepStatus) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'in_progress':
        return <Clock className="h-4 w-4 text-blue-500" />
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />
      case 'pending':
        return <Clock className="h-4 w-4 text-gray-400" />
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-gray-400" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  // Updated status handlers using the secure endpoint
  const handleVerify = async (organizerId) => {
    try {
      await updateOrganizerStatus(organizerId, 'verified');
      
      // Update local state
      setOrganizers(orgs => 
        orgs.map(org => 
          org.id === organizerId 
            ? { 
                ...org, 
                status: 'verified',
                verification: {
                  ...org.verification,
                  status: 'verified',
                  verifiedBy: 'Admin User',
                  verifiedAt: new Date().toISOString().split('T')[0],
                  steps: org.verification.steps.map(step => 
                    step.status === 'in_progress' ? { ...step, status: 'completed', date: new Date().toISOString().split('T')[0] } : step
                  )
                }
              }
            : org
        )
      )

      // Send notification to organizer
      const verifiedOrganizer = organizers.find(org => org.id === organizerId)
      if (verifiedOrganizer) {
        await sendNotification(
          organizerId,
          `Congratulations! Your organizer account "${verifiedOrganizer.name}" has been verified successfully. You can now create and manage events.`,
          'success',
          '/organizer/dashboard'
        )
      }

      setShowVerificationModal(false)
      alert('Organizer verified successfully and notification sent!')
    } catch (err) {
      setError('Failed to verify organizer')
      console.error('Error verifying organizer:', err)
      alert('Failed to verify organizer')
    }
  }

  const handleReject = async (organizerId) => {
    if (!rejectionReason.trim()) {
      alert('Please provide a rejection reason')
      return
    }
    
    try {
      await updateOrganizerStatus(organizerId, 'rejected');
      
      setOrganizers(orgs => 
        orgs.map(org => 
          org.id === organizerId 
            ? { 
                ...org, 
                status: 'rejected',
                verification: {
                  ...org.verification,
                  status: 'rejected',
                  verifiedBy: 'Admin User',
                  verifiedAt: new Date().toISOString().split('T')[0],
                  rejectionReason,
                  steps: org.verification.steps.map(step => 
                    step.status === 'in_progress' ? { ...step, status: 'failed', date: new Date().toISOString().split('T')[0] } : 
                    step.status === 'pending' ? { ...step, status: 'cancelled' } : step
                  )
                }
              }
            : org
        )
      )

      // Send notification to organizer
      const rejectedOrganizer = organizers.find(org => org.id === organizerId)
      if (rejectedOrganizer) {
        await sendNotification(
          organizerId,
          `Your organizer account "${rejectedOrganizer.name}" verification has been rejected. Reason: ${rejectionReason}. Please review your documents and submit again.`,
          'error',
          '/organizer/verification'
        )
      }

      setShowVerificationModal(false)
      setRejectionReason("")
      alert('Organizer rejected and notification sent!')
    } catch (err) {
      setError('Failed to reject organizer')
      console.error('Error rejecting organizer:', err)
      alert('Failed to reject organizer')
    }
  }

  const handleSuspendOrganizer = async (organizerId) => {
    try {
      await updateOrganizerStatus(organizerId, 'suspended');
      
      setOrganizers(orgs => 
        orgs.map(org => 
          org.id === organizerId 
            ? { 
                ...org, 
                status: 'suspended',
                verification: {
                  ...org.verification,
                  status: 'suspended',
                  verifiedBy: 'Admin User',
                  verifiedAt: new Date().toISOString().split('T')[0]
                }
              }
            : org
        )
      )

      // Send notification to organizer
      const suspendedOrganizer = organizers.find(org => org.id === organizerId)
      if (suspendedOrganizer) {
        await sendNotification(
          organizerId,
          `Your organizer account "${suspendedOrganizer.name}" has been suspended. Please contact support for more information.`,
          'warning',
          '/organizer/support'
        )
      }

      alert('Organizer suspended and notification sent!')
    } catch (err) {
      setError('Failed to suspend organizer')
      console.error('Error suspending organizer:', err)
      alert('Failed to suspend organizer')
    }
  }

  const handleReactivateOrganizer = async (organizerId) => {
    try {
      await updateOrganizerStatus(organizerId, 'pending');
      
      setOrganizers(orgs => 
        orgs.map(org => 
          org.id === organizerId 
            ? { 
                ...org, 
                status: 'pending',
                verification: {
                  ...org.verification,
                  status: 'pending_verification',
                  verifiedBy: null,
                  verifiedAt: null,
                  steps: org.verification.steps.map(step => 
                    step.status === 'in_progress' ? { ...step, status: 'pending', date: null } : step
                  )
                }
              }
            : org
        )
      )

      // Send notification to organizer
      const reactivatedOrganizer = organizers.find(org => org.id === organizerId)
      if (reactivatedOrganizer) {
        await sendNotification(
          organizerId,
          `Your organizer account "${reactivatedOrganizer.name}" has been reactivated and is now pending verification.`,
          'info',
          '/organizer/verification'
        )
      }

      alert('Organizer reactivated and notification sent!')
    } catch (err) {
      console.error('Error reactivating organizer:', err)
      alert('Failed to reactivate organizer')
    }
  }

  const handleStartVerification = async (organizerId) => {
    try {
      await updateOrganizerStatus(organizerId, 'under_review');
      
      setOrganizers(orgs => 
        orgs.map(org => 
          org.id === organizerId 
            ? { 
                ...org, 
                status: 'under_review',
                verification: {
                  ...org.verification,
                  status: 'in_progress',
                  steps: org.verification.steps.map((step, index) => 
                    index === 0 ? { ...step, status: 'in_progress', date: new Date().toISOString().split('T')[0] } : step
                  )
                }
              }
            : org
        )
      )

      // Send notification to organizer
      const startedOrganizer = organizers.find(org => org.id === organizerId)
      if (startedOrganizer) {
        await sendNotification(
          organizerId,
          `Great news! The verification process for your organizer account "${startedOrganizer.name}" has started. We will review your documents and get back to you soon.`,
          'info',
          '/organizer/verification'
        )
      }

      alert('Verification started and notification sent!')
    } catch (err) {
      setError('Failed to start verification')
      console.error('Error starting verification:', err)
      alert('Failed to start verification')
    }
  }

  const handleDocumentVerification = async (organizerId, docIndex) => {
    // You might want to implement this with an API call
    setOrganizers(orgs => 
      orgs.map(org => 
        org.id === organizerId 
          ? {
              ...org,
              documents: org.documents.map((doc, idx) => 
                idx === docIndex ? { ...doc, verified: !doc.verified } : doc
              )
            }
          : org
      )
    )
  }

  const openVerificationModal = (organizer) => {
    setSelectedOrganizer(organizer)
    setShowVerificationModal(true)
  }

  const openDocumentsModal = (organizer) => {
    setSelectedOrganizer(organizer)
    setShowDocumentsModal(true)
  }

  const stats = {
    total: organizers.length,
    verified: organizers.filter(org => org.status === 'verified').length,
    pending: organizers.filter(org => org.status === 'pending').length,
    underReview: organizers.filter(org => org.status === 'under_review').length,
    rejected: organizers.filter(org => org.status === 'rejected').length
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-600">Loading organizers...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Organizer Management</h1>
          <p className="text-gray-600">Verify and manage event organizers</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => openNotificationModal()}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <Bell className="h-4 w-4" />
            Send Notification
          </button>
          <button className="border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Export Data
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-600">Total Organizers</p>
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-600">Verified</p>
          <p className="text-2xl font-bold text-green-600">{stats.verified}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
        </div>
       
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-600">Rejected</p>
          <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Organizers
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search by name, email, organization..."
                value={searchInput}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select 
              value={filters.status}
              onChange={(e) => handleStatusFilter(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="">All Status</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending Verification</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {(filters.search || filters.status) && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Active filters display */}
        {(filters.search || filters.status) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {filters.search && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Search: "{filters.search}"
                <button 
                  onClick={() => setSearchInput("")}
                  className="ml-1 hover:bg-blue-200 rounded-full"
                >
                  ×
                </button>
              </span>
            )}
            {filters.status && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Status: {filters.status}
                <button 
                  onClick={() => handleStatusFilter("")}
                  className="ml-1 hover:bg-green-200 rounded-full"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Showing {organizers.length} organizers
          {filters.search && ` matching "${filters.search}"`}
          {filters.status && ` with status "${filters.status}"`}
        </p>
      </div>

      {/* Organizers Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organizer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Verification Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Documents
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {organizers.map((org) => (
                <tr key={org.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Building className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{org.name}</div>
                        <div className="text-sm text-gray-500">{org.email}</div>
                        <div className="text-xs text-gray-400">Joined {org.joined}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center mb-2">
                      {getStatusIcon(org.status)}
                      <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(org.status)}`}>
                        {getStatusText(org.status)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`px-2 py-1 rounded-full ${getVerificationLevelColor(org.verification.level)}`}>
                        {org.verification.level}
                      </span> 
                    </div>
                    {org.verification.verifiedAt && (
                      <div className="text-xs text-gray-500 mt-1">
                        Verified: {org.verification.verifiedAt}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {org.documents.filter(doc => doc.verified).length}/{org.documents.length} Verified
                    </div>
                    <div className="text-xs text-gray-500">
                      {org.documents.length} documents submitted
                    </div>
                    {org.documents.length > 0 && (
                      <button 
                        onClick={() => openDocumentsModal(org)}
                        className="text-xs text-blue-600 hover:text-blue-800 mt-1 flex items-center"
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        View Documents
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="mb-1">{org.phone}</div>
                    <div className="text-xs text-gray-400">{org.address}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {/* Approve Button */}
                      {['pending', 'suspended', 'rejected'].includes(org.status) && (
                        <button 
                          onClick={() => handleVerify(org.id)}
                          className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition-colors"
                          title="Approve Organizer"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </button>
                      )}
                      
                      {/* Reject Button */}
                      {['pending', 'under_review', 'verified'].includes(org.status) && (
                        <button 
                          onClick={() => openVerificationModal(org)}
                          className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors"
                          title="Reject Organizer"
                        >
                          <XCircle className="h-4 w-4" />
                        </button>
                      )}
                      
                      {/* Suspend Button */}
                      {org.status === 'verified' && (
                        <button 
                          onClick={() => handleSuspendOrganizer(org.id)}
                          className="text-orange-600 hover:text-orange-900 p-1 rounded hover:bg-orange-50 transition-colors"
                          title="Suspend Organizer"
                        >
                          <Shield className="h-4 w-4" />
                        </button>
                      )}
                      
                      {/* Reactivate Button */}
                      {['suspended', 'rejected'].includes(org.status) && (
                        <button 
                          onClick={() => handleReactivateOrganizer(org.id)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
                          title="Reactivate Organizer"
                        >
                          <Clock className="h-4 w-4" />
                        </button>
                      )}
                      
                      
                      
                      <button 
                        onClick={() => openNotificationModal(org)}
                        className="text-purple-600 hover:text-purple-900 p-1 rounded hover:bg-purple-50 transition-colors"
                        title="Send Notification"
                      >
                        <Bell className="h-4 w-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100 transition-colors">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Verification Modal */}
      {showVerificationModal && selectedOrganizer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Verification Process: {selectedOrganizer.name}
              </h3>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Verification Steps */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Verification Steps</h4>
                <div className="space-y-3">
                  {selectedOrganizer.verification.steps.map((step, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        {getStepStatusIcon(step.status)}
                        <span className="ml-3 text-sm font-medium text-gray-900">{step.step}</span>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-medium ${
                          step.status === 'completed' ? 'text-green-600' :
                          step.status === 'in_progress' ? 'text-blue-600' :
                          step.status === 'failed' ? 'text-red-600' : 'text-gray-500'
                        }`}>
                          {step.status.replace('_', ' ')}
                        </div>
                        {step.date && (
                          <div className="text-xs text-gray-500">{step.date}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Status */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Documents Status</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedOrganizer.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 text-gray-400 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                          <div className="text-xs text-gray-500 capitalize">{doc.type}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {doc.verified ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-yellow-500" />
                        )}
                        <button 
                          onClick={() => handleDocumentVerification(selectedOrganizer.id, index)}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          {doc.verified ? 'Unverify' : 'Verify'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verification Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Verification Notes
                </label>
                <textarea
                  value={verificationNotes}
                  onChange={(e) => setVerificationNotes(e.target.value)}
                  placeholder="Add notes about this verification..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  rows="3"
                />
              </div>

              {/* Rejection Reason (if applicable) */}
              {selectedOrganizer.verification.status === 'in_progress' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rejection Reason (if rejecting):
                  </label>
                  <textarea
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Provide detailed reason for rejection..."
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    rows="3"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => handleReactivateOrganizer(selectedOrganizer.id)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Cancel Verification
              </button>
              
              {selectedOrganizer.verification.status === 'in_progress' && (
                <>
                  <button
                    onClick={() => handleReject(selectedOrganizer.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleVerify(selectedOrganizer.id)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Verify
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Documents Modal with Secure Access */}
      {showDocumentsModal && selectedOrganizer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Documents: {selectedOrganizer.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Secure document access - Files are encrypted and require authentication
              </p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {selectedOrganizer.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                        <div className="text-xs text-gray-500 capitalize">{doc.type} Document</div>
                        <div className="text-xs text-gray-400">Secure • Encrypted</div>
                        <div className="flex items-center mt-1">
                          {doc.verified ? (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <Clock className="h-3 w-3 mr-1" />
                              Pending
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Secure View Button */}
                      <button 
                        onClick={() => handleSecureViewDocument(
                          doc.userId || selectedOrganizer.id, 
                          doc.filename, 
                          doc.name,
                          doc
                        )}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Document Securely"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      
                      {/* Secure Download Button */}
                      <button 
                        onClick={() => handleSecureDownloadDocument(
                          doc.userId || selectedOrganizer.id, 
                          doc.filename, 
                          doc.name
                        )}
                        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        title="Download Document Securely"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                      
                      {/* Verify/Unverify Button */}
                      <button 
                        onClick={() => handleDocumentVerification(selectedOrganizer.id, index)}
                        className={`p-2 rounded-lg transition-colors ${
                          doc.verified 
                            ? 'text-green-600 hover:bg-green-50' 
                            : 'text-yellow-600 hover:bg-yellow-50'
                        }`}
                        title={doc.verified ? 'Mark as unverified' : 'Mark as verified'}
                      >
                        {doc.verified ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Show message if no documents */}
              {selectedOrganizer.documents.length === 0 && (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No documents submitted</p>
                </div>
              )}
            </div>

            <div className="flex justify-end p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setShowDocumentsModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Document Viewer Modal */}
      {showDocumentViewer && currentDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {currentDocument.name}
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = currentDocument.url;
                    link.download = currentDocument.name;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Download"
                >
                  <Download className="h-5 w-5" />
                </button>
                <button
                  onClick={closeDocumentViewer}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto p-6 bg-gray-50">
              {documentLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="text-lg text-gray-600">Loading document...</div>
                </div>
              ) : (
                <div className="flex justify-center">
                  {currentDocument.type === 'application/pdf' ? (
                    <iframe
                      src={currentDocument.url}
                      className="w-full h-[70vh] border-0 rounded-lg shadow-lg"
                      title={currentDocument.name}
                    />
                  ) : currentDocument.type.startsWith('image/') ? (
                    <div className="flex justify-center">
                      <img
                        src={currentDocument.url}
                        alt={currentDocument.name}
                        className="max-w-full max-h-[70vh] rounded-lg shadow-lg"
                      />
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">This file type cannot be previewed.</p>
                      <button
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = currentDocument.url;
                          link.download = currentDocument.name;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Download File
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Notification Modal */}
      {showNotificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Send Notification
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {selectedOrganizer 
                  ? `To: ${selectedOrganizer.name}`
                  : 'To: All organizers'
                }
              </p>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  value={notificationData.message}
                  onChange={(e) => setNotificationData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Enter your notification message..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  rows="4"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select 
                  value={notificationData.type}
                  onChange={(e) => setNotificationData(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="info">Information</option>
                  <option value="success">Success</option>
                  <option value="warning">Warning</option>
                  <option value="error">Error</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Action URL (Optional)
                </label>
                <input
                  type="url"
                  value={notificationData.actionUrl}
                  onChange={(e) => setNotificationData(prev => ({ ...prev, actionUrl: e.target.value }))}
                  placeholder="https://example.com/action"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => {
                  setShowNotificationModal(false)
                  setNotificationData({ message: '', type: 'info', actionUrl: '' })
                  setSelectedOrganizer(null)
                }}
                className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSendNotification}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Notification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrganizerManagement