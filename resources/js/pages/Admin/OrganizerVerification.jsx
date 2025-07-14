"use client"

import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { apiService } from "../../services/apiService"
import {
  Search,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Building,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
} from "lucide-react"

// Dummy data for organizer verification
const dummyOrganizers = [
  {
    id: 1,
    name: "TechCorp Events",
    email: "contact@techcorp.com",
    phone: "+1 (555) 123-4567",
    company: "TechCorp Inc.",
    website: "https://techcorp.com",
    location: "San Francisco, CA",
    status: "pending",
    created_at: "2024-01-15T10:30:00Z",
    documents: [
      { type: "business_license", url: "/documents/business_license.pdf" },
      { type: "tax_certificate", url: "/documents/tax_cert.pdf" },
    ],
    description: "We organize premium tech conferences and workshops for professionals in the Bay Area.",
    events_organized: 0,
    verification_notes: "",
  },
  {
    id: 2,
    name: "Innovation Hub",
    email: "events@innovationhub.com",
    phone: "+1 (555) 987-6543",
    company: "Innovation Hub LLC",
    website: "https://innovationhub.com",
    location: "New York, NY",
    status: "verified",
    created_at: "2024-01-10T14:20:00Z",
    documents: [
      { type: "business_license", url: "/documents/business_license_2.pdf" },
      { type: "tax_certificate", url: "/documents/tax_cert_2.pdf" },
    ],
    description: "Leading startup events and networking sessions in NYC.",
    events_organized: 12,
    verification_notes: "All documents verified. Excellent track record.",
  },
  {
    id: 3,
    name: "DevMeetup Organizers",
    email: "hello@devmeetup.org",
    phone: "+1 (555) 456-7890",
    company: "DevMeetup Community",
    website: "https://devmeetup.org",
    location: "Austin, TX",
    status: "rejected",
    created_at: "2024-01-08T09:15:00Z",
    documents: [{ type: "business_license", url: "/documents/business_license_3.pdf" }],
    description: "Community-driven developer meetups and coding workshops.",
    events_organized: 0,
    verification_notes: "Incomplete documentation. Missing tax certificate.",
  },
]

const OrganizerVerification = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrganizer, setSelectedOrganizer] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [verificationNotes, setVerificationNotes] = useState("")

  const queryClient = useQueryClient()

  // Try API first, fallback to dummy data
  const { data: organizers, isLoading } = useQuery({
    queryKey: ["admin-organizers", searchTerm, statusFilter],
    queryFn: async () => {
      try {
        return await apiService.getOrganizersForVerification({ search: searchTerm, status: statusFilter })
      } catch (error) {
        console.log("API not available, using dummy data")
        const filtered = dummyOrganizers.filter((org) => {
          const matchesSearch =
            org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            org.email.toLowerCase().includes(searchTerm.toLowerCase())
          const matchesStatus = statusFilter === "all" || org.status === statusFilter
          return matchesSearch && matchesStatus
        })
        return { data: filtered }
      }
    },
  })

  const verifyOrganizerMutation = useMutation({
    mutationFn: async ({ id, action, notes }) => {
      try {
        return await apiService.verifyOrganizer(id, action, notes)
      } catch (error) {
        console.log("API not available, simulating verification")
        return { success: true, message: `Organizer ${action}ed successfully` }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["admin-organizers"])
      setShowModal(false)
      setSelectedOrganizer(null)
      setVerificationNotes("")
    },
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const handleVerification = (action) => {
    verifyOrganizerMutation.mutate({
      id: selectedOrganizer.id,
      action,
      notes: verificationNotes,
    })
  }

  const OrganizerCard = ({ organizer }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
            <Building className="h-6 w-6 text-primary-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{organizer.name}</h3>
            <p className="text-sm text-gray-500">{organizer.company}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(organizer.status)}`}
          >
            {getStatusIcon(organizer.status)}
            <span className="ml-1">{organizer.status}</span>
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <Mail className="h-4 w-4 mr-2" />
          {organizer.email}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Phone className="h-4 w-4 mr-2" />
          {organizer.phone}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          {organizer.location}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          Applied: {new Date(organizer.created_at).toLocaleDateString()}
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-4 line-clamp-2">{organizer.description}</p>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Events organized: <span className="font-medium">{organizer.events_organized}</span>
        </div>
        <button
          onClick={() => {
            setSelectedOrganizer(organizer)
            setShowModal(true)
            setVerificationNotes(organizer.verification_notes || "")
          }}
          className="flex items-center px-3 py-1 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm"
        >
          <Eye className="h-4 w-4 mr-1" />
          Review
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Organizer Verification</h1>
          <p className="text-gray-600">Review and verify organizer applications</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search organizers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {["all", "pending", "verified", "rejected"].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    statusFilter === status
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Organizers Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : organizers?.data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizers.data.map((organizer) => (
              <OrganizerCard key={organizer.id} organizer={organizer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No organizers found</h3>
            <p className="text-gray-500">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filters"
                : "No organizer applications at the moment"}
            </p>
          </div>
        )}

        {/* Verification Modal */}
        {showModal && selectedOrganizer && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Review Organizer Application</h3>
                  <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                    <XCircle className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Organizer Details */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Organizer Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Name:</span>
                        <p className="text-gray-900">{selectedOrganizer.name}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Company:</span>
                        <p className="text-gray-900">{selectedOrganizer.company}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Email:</span>
                        <p className="text-gray-900">{selectedOrganizer.email}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Phone:</span>
                        <p className="text-gray-900">{selectedOrganizer.phone}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Location:</span>
                        <p className="text-gray-900">{selectedOrganizer.location}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Website:</span>
                        <a
                          href={selectedOrganizer.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700"
                        >
                          {selectedOrganizer.website}
                        </a>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="font-medium text-gray-700">Description:</span>
                      <p className="text-gray-900 mt-1">{selectedOrganizer.description}</p>
                    </div>
                  </div>

                  {/* Documents */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Submitted Documents</h4>
                    <div className="space-y-2">
                      {selectedOrganizer.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-gray-400 mr-3" />
                            <span className="text-sm font-medium text-gray-900">
                              {doc.type.replace("_", " ").toUpperCase()}
                            </span>
                          </div>
                          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                            View Document
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verification Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Verification Notes</label>
                    <textarea
                      value={verificationNotes}
                      onChange={(e) => setVerificationNotes(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Add notes about the verification decision..."
                    />
                  </div>

                  {/* Action Buttons */}
                  {selectedOrganizer.status === "pending" && (
                    <div className="flex justify-end space-x-4">
                      <button
                        onClick={() => handleVerification("reject")}
                        disabled={verifyOrganizerMutation.isPending}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 flex items-center"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </button>
                      <button
                        onClick={() => handleVerification("verify")}
                        disabled={verifyOrganizerMutation.isPending}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Verify
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrganizerVerification
