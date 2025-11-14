// src/pages/admin/OrganizerManagement.jsx
import {
    AlertCircle,
    BadgeCheck,
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
    Star,
    XCircle
} from "lucide-react"
import { useState } from "react"

const OrganizerManagement = () => {
  const [organizers, setOrganizers] = useState([
    {
      id: 1,
      name: "TechCorp Events",
      email: "events@techcorp.com",
      phone: "+1 (555) 123-4567",
      status: "verified",
      events: 12,
      joined: "2024-01-10",
      rating: 4.8,
      address: "123 Tech Street, San Francisco, CA",
      documents: [
        { name: "business_license.pdf", type: "license", verified: true },
        { name: "tax_certificate.pdf", type: "tax", verified: true },
        { name: "insurance_certificate.pdf", type: "insurance", verified: true }
      ],
      verification: {
        status: "verified",
        verifiedBy: "Admin User",
        verifiedAt: "2024-01-12",
        level: "premium",
        score: 95,
        steps: [
          { step: "Document Review", status: "completed", date: "2024-01-11" },
          { step: "Background Check", status: "completed", date: "2024-01-11" },
          { step: "Final Approval", status: "completed", date: "2024-01-12" }
        ]
      }
    },
    {
      id: 2,
      name: "Music Festivals Inc",
      email: "contact@musicfest.com",
      phone: "+1 (555) 987-6543",
      status: "pending_verification",
      events: 0,
      joined: "2024-01-15",
      rating: null,
      address: "456 Music Ave, Austin, TX",
      documents: [
        { name: "business_license.pdf", type: "license", verified: false },
        { name: "tax_id.pdf", type: "tax", verified: false }
      ],
      verification: {
        status: "in_progress",
        verifiedBy: null,
        verifiedAt: null,
        level: "basic",
        score: 65,
        steps: [
          { step: "Document Review", status: "in_progress", date: "2024-01-15" },
          { step: "Background Check", status: "pending", date: null },
          { step: "Final Approval", status: "pending", date: null }
        ]
      }
    },
    {
      id: 3,
      name: "Sports Events LLC",
      email: "info@sportsevents.com",
      phone: "+1 (555) 456-7890",
      status: "rejected",
      events: 0,
      joined: "2024-01-12",
      rating: null,
      address: "789 Stadium Blvd, Los Angeles, CA",
      documents: [
        { name: "business_license.pdf", type: "license", verified: false }
      ],
      verification: {
        status: "rejected",
        verifiedBy: "Admin User",
        verifiedAt: "2024-01-13",
        level: "basic",
        score: 45,
        steps: [
          { step: "Document Review", status: "failed", date: "2024-01-13" },
          { step: "Background Check", status: "cancelled", date: null },
          { step: "Final Approval", status: "cancelled", date: null }
        ],
        rejectionReason: "Incomplete documentation and missing tax certificates"
      }
    },
    {
      id: 4,
      name: "Art Gallery Exhibitions",
      email: "info@artgallery.com",
      phone: "+1 (555) 234-5678",
      status: "under_review",
      events: 3,
      joined: "2024-01-08",
      rating: 4.5,
      address: "321 Art Street, New York, NY",
      documents: [
        { name: "business_license.pdf", type: "license", verified: true },
        { name: "insurance_certificate.pdf", type: "insurance", verified: true },
        { name: "portfolio.pdf", type: "portfolio", verified: false }
      ],
      verification: {
        status: "under_review",
        verifiedBy: null,
        verifiedAt: null,
        level: "standard",
        score: 78,
        steps: [
          { step: "Document Review", status: "completed", date: "2024-01-09" },
          { step: "Background Check", status: "in_progress", date: "2024-01-10" },
          { step: "Final Approval", status: "pending", date: null }
        ]
      }
    }
  ])

  const [selectedOrganizer, setSelectedOrganizer] = useState(null)
  const [showVerificationModal, setShowVerificationModal] = useState(false)
  const [showDocumentsModal, setShowDocumentsModal] = useState(false)
  const [rejectionReason, setRejectionReason] = useState("")
  const [verificationNotes, setVerificationNotes] = useState("")

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified':
        return <BadgeCheck className="h-4 w-4 text-green-500" />
      case 'pending_verification':
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
      case 'pending_verification':
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
      case 'pending_verification':
        return 'Pending Verification'
      case 'under_review':
        return 'Under Review'
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

  const handleVerify = (organizerId) => {
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
    setShowVerificationModal(false)
  }

  const handleReject = (organizerId) => {
    if (!rejectionReason.trim()) {
      alert('Please provide a rejection reason')
      return
    }
    
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
    setShowVerificationModal(false)
    setRejectionReason("")
  }

  const handleStartVerification = (organizerId) => {
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
  }

  const handleDocumentVerification = (organizerId, docIndex) => {
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
    pending: organizers.filter(org => org.status === 'pending_verification').length,
    underReview: organizers.filter(org => org.status === 'under_review').length,
    rejected: organizers.filter(org => org.status === 'rejected').length
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
          <p className="text-sm text-gray-600">Under Review</p>
          <p className="text-2xl font-bold text-blue-600">{stats.underReview}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-600">Rejected</p>
          <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search organizers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <select className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
            <option>All Status</option>
            <option>Verified</option>
            <option>Pending Verification</option>
            <option>Under Review</option>
            <option>Rejected</option>
          </select>
          <select className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
            <option>All Verification Levels</option>
            <option>Premium</option>
            <option>Standard</option>
            <option>Basic</option>
          </select>
        </div>
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
                  Performance
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
                      <span className="text-gray-500">Score: {org.verification.score}%</span>
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
                    <button 
                      onClick={() => openDocumentsModal(org)}
                      className="text-xs text-blue-600 hover:text-blue-800 mt-1 flex items-center"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View Documents
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      Events: {org.events}
                    </div>
                    {org.rating && (
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        Rating: {org.rating}/5
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {org.status === 'pending_verification' && (
                        <button 
                          onClick={() => handleStartVerification(org.id)}
                          className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition-colors"
                          title="Start Verification"
                        >
                          <Shield className="h-4 w-4" />
                        </button>
                      )}
                      {org.status === 'under_review' && (
                        <button 
                          onClick={() => openVerificationModal(org)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
                          title="Complete Verification"
                        >
                          <BadgeCheck className="h-4 w-4" />
                        </button>
                      )}
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
                onClick={() => setShowVerificationModal(false)}
                className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              
              {selectedOrganizer.verification.status === 'in_progress' && (
                <>
                  <button
                    onClick={() => handleReject(selectedOrganizer.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Reject Application
                  </button>
                  <button
                    onClick={() => handleVerify(selectedOrganizer.id)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Approve & Verify
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Documents Modal */}
      {showDocumentsModal && selectedOrganizer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Documents: {selectedOrganizer.name}
              </h3>
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
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDocumentVerification(selectedOrganizer.id, index)}
                        className={`p-2 rounded-lg transition-colors ${
                          doc.verified 
                            ? 'text-green-600 hover:bg-green-50' 
                            : 'text-yellow-600 hover:bg-yellow-50'
                        }`}
                      >
                        {doc.verified ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
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
    </div>
  )
}

export default OrganizerManagement