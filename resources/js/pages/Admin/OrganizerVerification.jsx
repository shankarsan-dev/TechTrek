"use client";

import { AlertTriangle, CheckCircle, ImageIcon, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

const OrganizerVerification = () => {
  const [organizers, setOrganizers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiAvailable, setApiAvailable] = useState(true);
  const [actionLoading, setActionLoading] = useState(null); // track which organizer is being verified

  useEffect(() => {
    const fetchOrganizers = async () => {
      try {
        const data = await organizerService.getPendingOrganizers();
        if (data?.isDummy) setApiAvailable(false);
        setOrganizers(data.organizers || data);
      } catch (error) {
        console.warn("Falling back to dummy data:", error);
        setApiAvailable(false);
        setOrganizers([
          {
            id: 1,
            name: "Sujan Shrestha",
            email: "sujan@eventhub.com",
            organization: "Tech Hub Nepal",
            document: "https://via.placeholder.com/150",
            status: "pending",
          },
          {
            id: 2,
            name: "Nirjala Rana",
            email: "nirjala@innovate.com",
            organization: "Innovate Pokhara",
            document: "https://via.placeholder.com/150",
            status: "pending",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizers();
  }, []);

  const handleAction = async (id, action) => {
    setActionLoading(id);
    try {
      const res = await organizerService.verifyOrganizer(id, action);
      if (res.success || apiAvailable === false) {
        setOrganizers((prev) =>
          prev.filter((org) => org.id !== id)
        );
      }
    } catch (err) {
      console.error(`Failed to ${action} organizer`, err);
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 animate-pulse">Loading organizer requests...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* 🟡 Dummy Mode Banner */}
      {!apiAvailable && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2">
          <AlertTriangle className="w-5 h-5" />
          <span>Backend API not reachable — showing dummy data</span>
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6">Organizer Verification Requests</h1>

      {organizers.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">No pending organizer requests</div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Organization</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Document</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {organizers.map((org) => (
                <tr key={org.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{org.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{org.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{org.organization}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {org.document ? (
                      <a
                        href={org.document}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:underline"
                      >
                        <ImageIcon className="w-4 h-4 mr-1" />
                        View Document
                      </a>
                    ) : (
                      <span className="text-gray-400 italic">No document</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <button
                        disabled={actionLoading === org.id}
                        onClick={() => handleAction(org.id, "accept")}
                        className="inline-flex items-center px-3 py-1.5 rounded-md text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-400 transition"
                      >
                        {actionLoading === org.id ? (
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                        ) : (
                          <CheckCircle className="w-4 h-4 mr-1" />
                        )}
                        Accept
                      </button>

                      <button
                        disabled={actionLoading === org.id}
                        onClick={() => handleAction(org.id, "decline")}
                        className="inline-flex items-center px-3 py-1.5 rounded-md text-white bg-red-600 hover:bg-red-700 disabled:bg-gray-400 transition"
                      >
                        {actionLoading === org.id ? (
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                        ) : (
                          <XCircle className="w-4 h-4 mr-1" />
                        )}
                        Decline
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrganizerVerification;
