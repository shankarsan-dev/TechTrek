
// // // // // // // // // // // // "use client";

// // // // // // // // // // // // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// // // // // // // // // // // // import {
// // // // // // // // // // // //   Calendar,
// // // // // // // // // // // //   CheckCircle,
// // // // // // // // // // // //   ChevronLeft,
// // // // // // // // // // // //   ChevronRight,
// // // // // // // // // // // //   Clock,
// // // // // // // // // // // //   Download,
// // // // // // // // // // // //   MapPin,
// // // // // // // // // // // //   MoreVertical,
// // // // // // // // // // // //   Search,
// // // // // // // // // // // //   User,
// // // // // // // // // // // //   Users
// // // // // // // // // // // // } from "lucide-react";
// // // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // // import { attendeesService } from "../../services/attendeesService";

// // // // // // // // // // // // const OrganizerAttendees = () => {
// // // // // // // // // // // //   const queryClient = useQueryClient();

// // // // // // // // // // // //   // Filters
// // // // // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // // // // //   const [statusFilter, setStatusFilter] = useState("all");
// // // // // // // // // // // //   const [eventFilter, setEventFilter] = useState("all");
// // // // // // // // // // // //   const [selectedAttendees, setSelectedAttendees] = useState([]);
// // // // // // // // // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // // // // // // // // //   const [perPage] = useState(20);

// // // // // // // // // // // //   // Fetch attendees with pagination
// // // // // // // // // // // //   const { data, isLoading, error } = useQuery({
// // // // // // // // // // // //     queryKey: ["attendees", currentPage, searchTerm, statusFilter, eventFilter],
// // // // // // // // // // // //     queryFn: () => attendeesService.list({
// // // // // // // // // // // //       page: currentPage,
// // // // // // // // // // // //       perPage: perPage,
// // // // // // // // // // // //       search: searchTerm,
// // // // // // // // // // // //       status: statusFilter !== "all" ? statusFilter : undefined,
// // // // // // // // // // // //       event_id: eventFilter !== "all" ? eventFilter : undefined,
// // // // // // // // // // // //     }),
// // // // // // // // // // // //   });

// // // // // // // // // // // //   console.log("Query data:", data); // Debug log

// // // // // // // // // // // //   // Extract data from response - handle different response structures
// // // // // // // // // // // //   let attendees = [];
// // // // // // // // // // // //   let pagination = {
// // // // // // // // // // // //     currentPage: 1,
// // // // // // // // // // // //     lastPage: 1,
// // // // // // // // // // // //     perPage: 20,
// // // // // // // // // // // //     total: 0
// // // // // // // // // // // //   };

// // // // // // // // // // // //   if (data) {
// // // // // // // // // // // //     // Handle different possible response structures
// // // // // // // // // // // //     if (Array.isArray(data.data)) {
// // // // // // // // // // // //       attendees = data.data;
// // // // // // // // // // // //       pagination = {
// // // // // // // // // // // //         currentPage: data.currentPage || 1,
// // // // // // // // // // // //         lastPage: data.lastPage || 1,
// // // // // // // // // // // //         perPage: data.perPage || 20,
// // // // // // // // // // // //         total: data.total || 0
// // // // // // // // // // // //       };
// // // // // // // // // // // //     } else if (Array.isArray(data)) {
// // // // // // // // // // // //       attendees = data;
// // // // // // // // // // // //     } else if (data.attendees && Array.isArray(data.attendees)) {
// // // // // // // // // // // //       attendees = data.attendees;
// // // // // // // // // // // //       pagination = data.pagination || pagination;
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }

// // // // // // // // // // // //   // Debug log to check the structure
// // // // // // // // // // // //   console.log("Processed data:", { attendees, pagination });

// // // // // // // // // // // //   // Check-In Mutation
// // // // // // // // // // // //   const checkInMutation = useMutation({
// // // // // // // // // // // //     mutationFn: (id) => attendeesService.checkIn(id),
// // // // // // // // // // // //     onSuccess: () => queryClient.invalidateQueries(["attendees"]),
// // // // // // // // // // // //   });

// // // // // // // // // // // //   const handleCheckIn = (id) => {
// // // // // // // // // // // //     if (id) {
// // // // // // // // // // // //       checkInMutation.mutate(id);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Get unique events for filter dropdown
// // // // // // // // // // // //   const uniqueEvents = attendees.reduce((events, att) => {
// // // // // // // // // // // //     if (att && att.eventName && att.event_id) {
// // // // // // // // // // // //       const eventId = att.event_id.toString();
// // // // // // // // // // // //       if (!events.some(e => e.id === eventId)) {
// // // // // // // // // // // //         events.push({
// // // // // // // // // // // //           id: eventId,
// // // // // // // // // // // //           title: att.eventName || `Event ${eventId}`
// // // // // // // // // // // //         });
// // // // // // // // // // // //       }
// // // // // // // // // // // //     }
// // // // // // // // // // // //     return events;
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   // Filter attendees locally based on search term
// // // // // // // // // // // //   const filteredAttendees = attendees.filter((att) => {
// // // // // // // // // // // //     if (!att || typeof att !== 'object') return false;
    
// // // // // // // // // // // //     const searchLower = searchTerm.toLowerCase();
// // // // // // // // // // // //     const matchesSearch = 
// // // // // // // // // // // //       (att.user?.name && att.user.name.toLowerCase().includes(searchLower)) ||
// // // // // // // // // // // //       (att.user?.email && att.user.email.toLowerCase().includes(searchLower)) ||
// // // // // // // // // // // //       (att.eventName && att.eventName.toLowerCase().includes(searchLower));

// // // // // // // // // // // //     const matchesStatus = statusFilter === "all" || 
// // // // // // // // // // // //       (att.booking_status && att.booking_status.toLowerCase() === statusFilter.toLowerCase());

// // // // // // // // // // // //     // Safely check event filter
// // // // // // // // // // // //     let matchesEvent = true;
// // // // // // // // // // // //     if (eventFilter !== "all" && att.event_id) {
// // // // // // // // // // // //       matchesEvent = att.event_id.toString() === eventFilter;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     return matchesSearch && matchesStatus && matchesEvent;
// // // // // // // // // // // //   });

// // // // // // // // // // // //   const handleSelectAttendee = (id) => {
// // // // // // // // // // // //     setSelectedAttendees((prev) =>
// // // // // // // // // // // //       prev.includes(id)
// // // // // // // // // // // //         ? prev.filter((x) => x !== id)
// // // // // // // // // // // //         : [...prev, id]
// // // // // // // // // // // //     );
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleSelectAll = () => {
// // // // // // // // // // // //     if (selectedAttendees.length === filteredAttendees.length) {
// // // // // // // // // // // //       setSelectedAttendees([]);
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       setSelectedAttendees(filteredAttendees.map((a) => a.id).filter(Boolean));
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleExport = () => {
// // // // // // // // // // // //     attendeesService.export(selectedAttendees.length ? selectedAttendees : "all");
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Calculate stats from current page data
// // // // // // // // // // // //   const stats = {
// // // // // // // // // // // //     total: pagination.total || 0,
// // // // // // // // // // // //     confirmed: attendees.filter((a) => a && a.booking_status?.toLowerCase() === "confirmed").length,
// // // // // // // // // // // //     pending: attendees.filter((a) => a && a.booking_status?.toLowerCase() === "pending").length,
// // // // // // // // // // // //     cancelled: attendees.filter((a) => a && a.booking_status?.toLowerCase() === "cancelled").length,
// // // // // // // // // // // //     active: attendees.filter((a) => a && a.booking_status?.toLowerCase() === "active").length,
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Handle pagination
// // // // // // // // // // // //   const handleNextPage = () => {
// // // // // // // // // // // //     if (currentPage < pagination.lastPage) {
// // // // // // // // // // // //       setCurrentPage(prev => prev + 1);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handlePrevPage = () => {
// // // // // // // // // // // //     if (currentPage > 1) {
// // // // // // // // // // // //       setCurrentPage(prev => prev - 1);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const goToPage = (page) => {
// // // // // // // // // // // //     if (page >= 1 && page <= pagination.lastPage) {
// // // // // // // // // // // //       setCurrentPage(page);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Reset to page 1 when filters change
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     setCurrentPage(1);
// // // // // // // // // // // //   }, [searchTerm, statusFilter, eventFilter]);

// // // // // // // // // // // //   if (isLoading) return (
// // // // // // // // // // // //     <div className="min-h-screen bg-gray-50 p-8">
// // // // // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // // // // //         <div className="animate-pulse">
// // // // // // // // // // // //           <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
// // // // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
// // // // // // // // // // // //             {[1, 2, 3, 4].map(i => (
// // // // // // // // // // // //               <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
// // // // // // // // // // // //                 <div className="h-8 w-8 bg-gray-300 rounded"></div>
// // // // // // // // // // // //                 <div className="mt-4 space-y-2">
// // // // // // // // // // // //                   <div className="h-4 bg-gray-300 rounded w-1/2"></div>
// // // // // // // // // // // //                   <div className="h-6 bg-gray-300 rounded w-1/3"></div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="bg-white p-4 rounded-lg shadow-sm h-12 mb-6"></div>
// // // // // // // // // // // //           <div className="bg-white rounded-lg shadow-sm h-96"></div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );

// // // // // // // // // // // //   if (error) return (
// // // // // // // // // // // //     <div className="min-h-screen bg-gray-50 p-8">
// // // // // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // // // // //         <div className="bg-red-50 border border-red-200 rounded-lg p-6">
// // // // // // // // // // // //           <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Attendees</h2>
// // // // // // // // // // // //           <p className="text-red-700">{error.message}</p>
// // // // // // // // // // // //           <button 
// // // // // // // // // // // //             onClick={() => queryClient.invalidateQueries(["attendees"])}
// // // // // // // // // // // //             className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Retry
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // // // // // // // //       {/* PAGE HEADER */}
// // // // // // // // // // // //       <div className="max-w-7xl mx-auto px-4 py-8">
// // // // // // // // // // // //         <h1 className="text-2xl font-bold text-gray-900">Attendees</h1>
// // // // // // // // // // // //         <p className="text-gray-600">Manage your event attendees and check-ins</p>

// // // // // // // // // // // //         {/* ----- STATS CARDS ----- */}
// // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 my-8">
// // // // // // // // // // // //           <StatCard icon={Users} label="Total Attendees" value={stats.total} color="text-blue-600" />
// // // // // // // // // // // //           <StatCard icon={CheckCircle} label="Active" value={stats.active} color="text-green-600" />
// // // // // // // // // // // //           <StatCard icon={Clock} label="Pending" value={stats.pending} color="text-yellow-600" />
// // // // // // // // // // // //           <StatCard icon={Calendar} label="Confirmed" value={stats.confirmed} color="text-purple-600" />
// // // // // // // // // // // //           <StatCard icon={User} label="Cancelled" value={stats.cancelled} color="text-red-600" />
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* FILTERS */}
// // // // // // // // // // // //         <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex items-center gap-4 flex-wrap">
// // // // // // // // // // // //           {/* Search */}
// // // // // // // // // // // //           <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md flex-1 min-w-[250px]">
// // // // // // // // // // // //             <Search className="h-4 w-4 text-gray-500 flex-shrink-0" />
// // // // // // // // // // // //             <input
// // // // // // // // // // // //               className="ml-2 bg-transparent outline-none w-full"
// // // // // // // // // // // //               placeholder="Search name, email, or event..."
// // // // // // // // // // // //               value={searchTerm}
// // // // // // // // // // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // // // // //             />
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* Status Filter */}
// // // // // // // // // // // //           <select
// // // // // // // // // // // //             className="bg-gray-100 px-3 py-2 rounded-md min-w-[150px]"
// // // // // // // // // // // //             value={statusFilter}
// // // // // // // // // // // //             onChange={(e) => setStatusFilter(e.target.value)}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <option value="all">All Status</option>
// // // // // // // // // // // //             <option value="active">Active</option>
// // // // // // // // // // // //             <option value="confirmed">Confirmed</option>
// // // // // // // // // // // //             <option value="pending">Pending</option>
// // // // // // // // // // // //             <option value="cancelled">Cancelled</option>
// // // // // // // // // // // //           </select>

// // // // // // // // // // // //           {/* Event Filter */}
// // // // // // // // // // // //           <select
// // // // // // // // // // // //             className="bg-gray-100 px-3 py-2 rounded-md min-w-[200px]"
// // // // // // // // // // // //             value={eventFilter}
// // // // // // // // // // // //             onChange={(e) => setEventFilter(e.target.value)}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <option value="all">All Events</option>
// // // // // // // // // // // //             {uniqueEvents.map((ev) => (
// // // // // // // // // // // //               <option key={ev.id} value={ev.id}>{ev.title}</option>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </select>

// // // // // // // // // // // //           {/* Export Button */}
// // // // // // // // // // // //           <button
// // // // // // // // // // // //             onClick={handleExport}
// // // // // // // // // // // //             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition whitespace-nowrap"
// // // // // // // // // // // //             disabled={selectedAttendees.length === 0 && filteredAttendees.length === 0}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <Download className="h-4 w-4 mr-2" /> 
// // // // // // // // // // // //             {selectedAttendees.length > 0 ? `Export (${selectedAttendees.length})` : 'Export All'}
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* ----- TABLE ----- */}
// // // // // // // // // // // //         <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-6">
// // // // // // // // // // // //           <div className="overflow-x-auto">
// // // // // // // // // // // //             <table className="min-w-full divide-y divide-gray-200">
// // // // // // // // // // // //               <thead className="bg-gray-50">
// // // // // // // // // // // //                 <tr>
// // // // // // // // // // // //                   <th className="px-6 py-3 w-12">
// // // // // // // // // // // //                     <input
// // // // // // // // // // // //                       type="checkbox"
// // // // // // // // // // // //                       onChange={handleSelectAll}
// // // // // // // // // // // //                       checked={selectedAttendees.length === filteredAttendees.length && filteredAttendees.length > 0}
// // // // // // // // // // // //                       disabled={filteredAttendees.length === 0}
// // // // // // // // // // // //                     />
// // // // // // // // // // // //                   </th>
// // // // // // // // // // // //                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Attendee</th>
// // // // // // // // // // // //                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Event</th>
// // // // // // // // // // // //                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
// // // // // // // // // // // //                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date & Time</th>
// // // // // // // // // // // //                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Check In</th>
// // // // // // // // // // // //                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Ticket</th>
// // // // // // // // // // // //                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
// // // // // // // // // // // //                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
// // // // // // // // // // // //                 </tr>
// // // // // // // // // // // //               </thead>

// // // // // // // // // // // //               <tbody className="divide-y divide-gray-200">
// // // // // // // // // // // //                 {filteredAttendees.length > 0 ? (
// // // // // // // // // // // //                   filteredAttendees.map((att) => (
// // // // // // // // // // // //                     <AttendeeRow
// // // // // // // // // // // //                       key={att.id}
// // // // // // // // // // // //                       attendee={att}
// // // // // // // // // // // //                       selectedAttendees={selectedAttendees}
// // // // // // // // // // // //                       handleSelectAttendee={handleSelectAttendee}
// // // // // // // // // // // //                       handleCheckIn={handleCheckIn}
// // // // // // // // // // // //                       checkInMutation={checkInMutation}
// // // // // // // // // // // //                     />
// // // // // // // // // // // //                   ))
// // // // // // // // // // // //                 ) : (
// // // // // // // // // // // //                   <tr>
// // // // // // // // // // // //                     <td colSpan="9" className="px-6 py-12 text-center text-gray-500">
// // // // // // // // // // // //                       <Users className="h-12 w-12 mx-auto text-gray-300 mb-4" />
// // // // // // // // // // // //                       <p className="text-lg font-medium">No attendees found</p>
// // // // // // // // // // // //                       <p className="text-sm mt-1">Try adjusting your search or filters</p>
// // // // // // // // // // // //                     </td>
// // // // // // // // // // // //                   </tr>
// // // // // // // // // // // //                 )}
// // // // // // // // // // // //               </tbody>
// // // // // // // // // // // //             </table>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* PAGINATION */}
// // // // // // // // // // // //         {pagination.lastPage > 1 && (
// // // // // // // // // // // //           <div className="flex flex-col sm:flex-row items-center justify-between bg-white px-6 py-4 rounded-lg shadow-sm gap-4">
// // // // // // // // // // // //             <div className="text-sm text-gray-700">
// // // // // // // // // // // //               Showing <span className="font-medium">{(currentPage - 1) * perPage + 1}</span> to{" "}
// // // // // // // // // // // //               <span className="font-medium">
// // // // // // // // // // // //                 {Math.min(currentPage * perPage, pagination.total || 0)}
// // // // // // // // // // // //               </span> of{" "}
// // // // // // // // // // // //               <span className="font-medium">{pagination.total || 0}</span> attendees
// // // // // // // // // // // //             </div>
            
// // // // // // // // // // // //             <div className="flex items-center space-x-2">
// // // // // // // // // // // //               <button
// // // // // // // // // // // //                 onClick={handlePrevPage}
// // // // // // // // // // // //                 disabled={currentPage === 1}
// // // // // // // // // // // //                 className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <ChevronLeft className="h-5 w-5" />
// // // // // // // // // // // //               </button>
              
// // // // // // // // // // // //               {/* Page numbers */}
// // // // // // // // // // // //               {(() => {
// // // // // // // // // // // //                 const pages = [];
// // // // // // // // // // // //                 const maxPages = 5;
                
// // // // // // // // // // // //                 if (pagination.lastPage <= maxPages) {
// // // // // // // // // // // //                   for (let i = 1; i <= pagination.lastPage; i++) {
// // // // // // // // // // // //                     pages.push(i);
// // // // // // // // // // // //                   }
// // // // // // // // // // // //                 } else {
// // // // // // // // // // // //                   if (currentPage <= 3) {
// // // // // // // // // // // //                     for (let i = 1; i <= maxPages; i++) {
// // // // // // // // // // // //                       pages.push(i);
// // // // // // // // // // // //                     }
// // // // // // // // // // // //                   } else if (currentPage >= pagination.lastPage - 2) {
// // // // // // // // // // // //                     for (let i = pagination.lastPage - maxPages + 1; i <= pagination.lastPage; i++) {
// // // // // // // // // // // //                       pages.push(i);
// // // // // // // // // // // //                     }
// // // // // // // // // // // //                   } else {
// // // // // // // // // // // //                     for (let i = currentPage - 2; i <= currentPage + 2; i++) {
// // // // // // // // // // // //                       pages.push(i);
// // // // // // // // // // // //                     }
// // // // // // // // // // // //                   }
// // // // // // // // // // // //                 }
                
// // // // // // // // // // // //                 return pages.map((pageNum) => (
// // // // // // // // // // // //                   <button
// // // // // // // // // // // //                     key={pageNum}
// // // // // // // // // // // //                     onClick={() => goToPage(pageNum)}
// // // // // // // // // // // //                     className={`px-3 py-1 rounded-md ${
// // // // // // // // // // // //                       currentPage === pageNum
// // // // // // // // // // // //                         ? 'bg-blue-600 text-white'
// // // // // // // // // // // //                         : 'text-gray-700 hover:bg-gray-100'
// // // // // // // // // // // //                     }`}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     {pageNum}
// // // // // // // // // // // //                   </button>
// // // // // // // // // // // //                 ));
// // // // // // // // // // // //               })()}
              
// // // // // // // // // // // //               <button
// // // // // // // // // // // //                 onClick={handleNextPage}
// // // // // // // // // // // //                 disabled={currentPage === pagination.lastPage}
// // // // // // // // // // // //                 className={`p-2 rounded-md ${currentPage === pagination.lastPage ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <ChevronRight className="h-5 w-5" />
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // /* ======== COMPONENTS ======== */

// // // // // // // // // // // // const StatCard = ({ icon: Icon, label, value, color }) => (
// // // // // // // // // // // //   <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
// // // // // // // // // // // //     <Icon className={`h-8 w-8 ${color}`} />
// // // // // // // // // // // //     <div className="ml-4">
// // // // // // // // // // // //       <p className="text-sm text-gray-600">{label}</p>
// // // // // // // // // // // //       <p className="text-2xl font-bold">{value}</p>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   </div>
// // // // // // // // // // // // );

// // // // // // // // // // // // const AttendeeRow = ({ attendee, selectedAttendees, handleSelectAttendee, handleCheckIn, checkInMutation }) => {
// // // // // // // // // // // //   const [showMenu, setShowMenu] = useState(false);

// // // // // // // // // // // //   // Safely extract attendee information
// // // // // // // // // // // //   const attendeeId = attendee?.id || '';
// // // // // // // // // // // //   const userName = attendee?.user?.name || 'Unknown';
// // // // // // // // // // // //   const userEmail = attendee?.user?.email || '';
// // // // // // // // // // // //   const userPhone = attendee?.user?.phone || '';
// // // // // // // // // // // //   const eventName = attendee?.eventName || 'Unknown Event';
// // // // // // // // // // // //   const eventDate = attendee?.date ? new Date(attendee.date).toLocaleDateString() : 'N/A';
// // // // // // // // // // // //   const eventTime = attendee?.time || '';
// // // // // // // // // // // //   const location = attendee?.location || '';
  
// // // // // // // // // // // //   // Status handling
// // // // // // // // // // // //   const bookingStatus = attendee?.booking_status?.toLowerCase() || 'pending';
// // // // // // // // // // // //   const isActive = bookingStatus === 'active';
// // // // // // // // // // // //   const isConfirmed = bookingStatus === 'confirmed';
// // // // // // // // // // // //   const isCheckedIn = attendee?.checked_in || false;
  
// // // // // // // // // // // //   const ticketType = attendee?.ticketType || 'General';
// // // // // // // // // // // //   const tickets = attendee?.tickets || 1;
// // // // // // // // // // // //   const totalPrice = attendee?.totalPrice || '0.00';

// // // // // // // // // // // //   // Generate initials safely
// // // // // // // // // // // //   const initials = userName
// // // // // // // // // // // //     .split(" ")
// // // // // // // // // // // //     .map((n) => n && n[0] ? n[0] : '')
// // // // // // // // // // // //     .filter(Boolean)
// // // // // // // // // // // //     .join("")
// // // // // // // // // // // //     .toUpperCase()
// // // // // // // // // // // //     .slice(0, 2);

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <tr className="hover:bg-gray-50">
// // // // // // // // // // // //       <td className="px-6 py-4 w-12">
// // // // // // // // // // // //         <input
// // // // // // // // // // // //           type="checkbox"
// // // // // // // // // // // //           checked={selectedAttendees.includes(attendeeId)}
// // // // // // // // // // // //           onChange={() => handleSelectAttendee(attendeeId)}
// // // // // // // // // // // //           disabled={bookingStatus === 'cancelled'}
// // // // // // // // // // // //         />
// // // // // // // // // // // //       </td>

// // // // // // // // // // // //       <td className="px-6 py-4">
// // // // // // // // // // // //         <div className="flex items-center">
// // // // // // // // // // // //           <div className="h-10 w-10 bg-blue-100 rounded-full flex justify-center items-center font-medium text-blue-600">
// // // // // // // // // // // //             {initials || <User className="h-5 w-5" />}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="ml-3">
// // // // // // // // // // // //             <div className="text-sm font-medium text-gray-900">{userName}</div>
// // // // // // // // // // // //             <div className="text-sm text-gray-500">{userEmail}</div>
// // // // // // // // // // // //             {userPhone && <div className="text-xs text-gray-400">{userPhone}</div>}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </td>

// // // // // // // // // // // //       <td className="px-6 py-4">
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <div className="text-sm font-medium text-gray-900">{eventName}</div>
// // // // // // // // // // // //           {location && (
// // // // // // // // // // // //             <div className="text-xs text-gray-500 flex items-center mt-1">
// // // // // // // // // // // //               <MapPin className="h-3 w-3 mr-1" />
// // // // // // // // // // // //               {location}
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </td>

// // // // // // // // // // // //       <td className="px-6 py-4">
// // // // // // // // // // // //         <StatusBadge status={bookingStatus} />
// // // // // // // // // // // //       </td>

// // // // // // // // // // // //       <td className="px-6 py-4">
// // // // // // // // // // // //         <div className="text-sm text-gray-900">{eventDate}</div>
// // // // // // // // // // // //         {eventTime && <div className="text-xs text-gray-500">{eventTime}</div>}
// // // // // // // // // // // //       </td>

// // // // // // // // // // // //       <td className="px-6 py-4">
// // // // // // // // // // // //         {isCheckedIn ? (
// // // // // // // // // // // //           <span className="text-green-600 flex items-center">
// // // // // // // // // // // //             <CheckCircle className="h-4 w-4 mr-1" />
// // // // // // // // // // // //             <span className="text-xs">Checked In</span>
// // // // // // // // // // // //           </span>
// // // // // // // // // // // //         ) : (isActive || isConfirmed) ? (
// // // // // // // // // // // //           <button
// // // // // // // // // // // //             className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1 bg-blue-50 rounded-md hover:bg-blue-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // // // // // // // //             onClick={() => handleCheckIn(attendeeId)}
// // // // // // // // // // // //             disabled={checkInMutation.isLoading}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             {checkInMutation.isLoading ? 'Processing...' : 'Check In'}
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         ) : (
// // // // // // // // // // // //           <span className="text-sm text-gray-500">Not Available</span>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </td>

// // // // // // // // // // // //       <td className="px-6 py-4">
// // // // // // // // // // // //         <div className="text-sm text-gray-900">{ticketType}</div>
// // // // // // // // // // // //         <div className="text-xs text-gray-500">{tickets} ticket(s)</div>
// // // // // // // // // // // //       </td>

// // // // // // // // // // // //       <td className="px-6 py-4">
// // // // // // // // // // // //         <div className="text-sm font-medium text-gray-900">${totalPrice}</div>
// // // // // // // // // // // //       </td>

// // // // // // // // // // // //       <td className="px-6 py-4">
// // // // // // // // // // // //         <div className="relative">
// // // // // // // // // // // //           <button 
// // // // // // // // // // // //             onClick={() => setShowMenu(!showMenu)}
// // // // // // // // // // // //             className="p-1 hover:bg-gray-100 rounded"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <MoreVertical className="h-5 w-5 text-gray-500" />
// // // // // // // // // // // //           </button>
          
// // // // // // // // // // // //           {showMenu && (
// // // // // // // // // // // //             <>
// // // // // // // // // // // //               <div 
// // // // // // // // // // // //                 className="fixed inset-0 z-10"
// // // // // // // // // // // //                 onClick={() => setShowMenu(false)}
// // // // // // // // // // // //               />
// // // // // // // // // // // //               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border border-gray-200">
// // // // // // // // // // // //                 <div className="py-1">
// // // // // // // // // // // //                   <button 
// // // // // // // // // // // //                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// // // // // // // // // // // //                     onClick={() => console.log('View details:', attendeeId)}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     View Details
// // // // // // // // // // // //                   </button>
// // // // // // // // // // // //                   {attendee?.qr_code && (
// // // // // // // // // // // //                     <button 
// // // // // // // // // // // //                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// // // // // // // // // // // //                       onClick={() => console.log('QR Code:', attendeeId)}
// // // // // // // // // // // //                     >
// // // // // // // // // // // //                       View QR Code
// // // // // // // // // // // //                     </button>
// // // // // // // // // // // //                   )}
// // // // // // // // // // // //                   <button 
// // // // // // // // // // // //                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// // // // // // // // // // // //                     onClick={() => console.log('Send email:', attendeeId)}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     Send Email
// // // // // // // // // // // //                   </button>
// // // // // // // // // // // //                   {(isActive || isConfirmed) && !isCheckedIn && (
// // // // // // // // // // // //                     <button 
// // // // // // // // // // // //                       className="block w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
// // // // // // // // // // // //                       onClick={() => handleCheckIn(attendeeId)}
// // // // // // // // // // // //                     >
// // // // // // // // // // // //                       Check In
// // // // // // // // // // // //                     </button>
// // // // // // // // // // // //                   )}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </td>
// // // // // // // // // // // //     </tr>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const StatusBadge = ({ status }) => {
// // // // // // // // // // // //   const statusMap = {
// // // // // // // // // // // //     active: { class: "bg-green-100 text-green-800", label: "Active" },
// // // // // // // // // // // //     confirmed: { class: "bg-blue-100 text-blue-800", label: "Confirmed" },
// // // // // // // // // // // //     pending: { class: "bg-yellow-100 text-yellow-800", label: "Pending" },
// // // // // // // // // // // //     cancelled: { class: "bg-red-100 text-red-800", label: "Cancelled" },
// // // // // // // // // // // //     checked_in: { class: "bg-purple-100 text-purple-800", label: "Checked In" },
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const statusInfo = statusMap[status] || { 
// // // // // // // // // // // //     class: "bg-gray-100 text-gray-800", 
// // // // // // // // // // // //     label: status ? status.charAt(0).toUpperCase() + status.slice(1) : 'Unknown' 
// // // // // // // // // // // //   };
  
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <span className={`px-2 py-1 text-xs rounded-full font-medium ${statusInfo.class}`}>
// // // // // // // // // // // //       {statusInfo.label}
// // // // // // // // // // // //     </span>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default OrganizerAttendees;
// // // // // // // // // // // "use client";

// // // // // // // // // // // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// // // // // // // // // // // import {
// // // // // // // // // // //   Calendar,
// // // // // // // // // // //   CheckCircle,
// // // // // // // // // // //   Clock,
// // // // // // // // // // //   Download,
// // // // // // // // // // //   MoreVertical,
// // // // // // // // // // //   Search,
// // // // // // // // // // //   Users,
// // // // // // // // // // //   ChevronLeft,
// // // // // // // // // // //   ChevronRight,
// // // // // // // // // // //   User,
// // // // // // // // // // //   MapPin,
// // // // // // // // // // //   Eye,
// // // // // // // // // // //   Mail,
// // // // // // // // // // //   Phone,
// // // // // // // // // // //   Ticket,
// // // // // // // // // // //   DollarSign
// // // // // // // // // // // } from "lucide-react";
// // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // import { attendeesService } from "../../services/attendeesService";

// // // // // // // // // // // const OrganizerAttendees = () => {
// // // // // // // // // // //   const queryClient = useQueryClient();

// // // // // // // // // // //   // Filters
// // // // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // // // //   const [statusFilter, setStatusFilter] = useState("all");
// // // // // // // // // // //   const [selectedAttendees, setSelectedAttendees] = useState([]);
// // // // // // // // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // // // // // // // //   const [perPage] = useState(20);

// // // // // // // // // // //   // Fetch attendees with pagination
// // // // // // // // // // //   const { data, isLoading, error } = useQuery({
// // // // // // // // // // //     queryKey: ["attendees", currentPage, searchTerm, statusFilter],
// // // // // // // // // // //     queryFn: () => attendeesService.list({
// // // // // // // // // // //       page: currentPage,
// // // // // // // // // // //       perPage: perPage,
// // // // // // // // // // //       search: searchTerm,
// // // // // // // // // // //       status: statusFilter !== "all" ? statusFilter : undefined,
// // // // // // // // // // //     }),
// // // // // // // // // // //   });

// // // // // // // // // // //   // Extract data from response
// // // // // // // // // // //   const attendees = data?.data || [];
// // // // // // // // // // //   const pagination = data || {};
  
// // // // // // // // // // //   console.log("API Response:", data); // Debug

// // // // // // // // // // //   // Check-In Mutation
// // // // // // // // // // //   const checkInMutation = useMutation({
// // // // // // // // // // //     mutationFn: (id) => attendeesService.checkIn(id),
// // // // // // // // // // //     onSuccess: () => queryClient.invalidateQueries(["attendees"]),
// // // // // // // // // // //   });

// // // // // // // // // // //   const handleCheckIn = (id) => {
// // // // // // // // // // //     if (id && window.confirm("Mark this attendee as checked in?")) {
// // // // // // // // // // //       checkInMutation.mutate(id);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // Filter attendees based on search
// // // // // // // // // // //   const filteredAttendees = attendees.filter((att) => {
// // // // // // // // // // //     if (!att) return false;
    
// // // // // // // // // // //     const searchLower = searchTerm.toLowerCase();
// // // // // // // // // // //     const matchesSearch = 
// // // // // // // // // // //       (att.user?.name && att.user.name.toLowerCase().includes(searchLower)) ||
// // // // // // // // // // //       (att.user?.email && att.user.email.toLowerCase().includes(searchLower)) ||
// // // // // // // // // // //       (att.eventName && att.eventName.toLowerCase().includes(searchLower));

// // // // // // // // // // //     const matchesStatus = statusFilter === "all" || 
// // // // // // // // // // //       (att.booking_status && att.booking_status.toLowerCase() === statusFilter.toLowerCase());

// // // // // // // // // // //     return matchesSearch && matchesStatus;
// // // // // // // // // // //   });

// // // // // // // // // // //   const handleSelectAttendee = (id) => {
// // // // // // // // // // //     setSelectedAttendees((prev) =>
// // // // // // // // // // //       prev.includes(id)
// // // // // // // // // // //         ? prev.filter((x) => x !== id)
// // // // // // // // // // //         : [...prev, id]
// // // // // // // // // // //     );
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSelectAll = () => {
// // // // // // // // // // //     if (selectedAttendees.length === filteredAttendees.length) {
// // // // // // // // // // //       setSelectedAttendees([]);
// // // // // // // // // // //     } else {
// // // // // // // // // // //       setSelectedAttendees(filteredAttendees.map((a) => a.id).filter(Boolean));
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // Calculate stats
// // // // // // // // // // //   const stats = {
// // // // // // // // // // //     total: pagination.total || 0,
// // // // // // // // // // //     active: attendees.filter((a) => a?.booking_status?.toLowerCase() === "active").length,
// // // // // // // // // // //     cancelled: attendees.filter((a) => a?.booking_status?.toLowerCase() === "cancelled").length,
// // // // // // // // // // //   };

// // // // // // // // // // //   // Handle pagination
// // // // // // // // // // //   const handleNextPage = () => {
// // // // // // // // // // //     if (currentPage < (pagination.lastPage || 1)) {
// // // // // // // // // // //       setCurrentPage(prev => prev + 1);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handlePrevPage = () => {
// // // // // // // // // // //     if (currentPage > 1) {
// // // // // // // // // // //       setCurrentPage(prev => prev - 1);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     setCurrentPage(1);
// // // // // // // // // // //   }, [searchTerm, statusFilter]);

// // // // // // // // // // //   if (isLoading) return (
// // // // // // // // // // //     <div className="min-h-screen bg-gray-50 p-8">
// // // // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // // // //         <div className="animate-pulse">
// // // // // // // // // // //           <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
// // // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
// // // // // // // // // // //             {[1, 2, 3].map(i => (
// // // // // // // // // // //               <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
// // // // // // // // // // //                 <div className="h-8 w-8 bg-gray-300 rounded"></div>
// // // // // // // // // // //                 <div className="mt-4 space-y-2">
// // // // // // // // // // //                   <div className="h-4 bg-gray-300 rounded w-1/2"></div>
// // // // // // // // // // //                   <div className="h-6 bg-gray-300 rounded w-1/3"></div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="bg-white p-4 rounded-lg shadow-sm h-12 mb-6"></div>
// // // // // // // // // // //           <div className="bg-white rounded-lg shadow-sm h-96"></div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );

// // // // // // // // // // //   if (error) return (
// // // // // // // // // // //     <div className="min-h-screen bg-gray-50 p-8">
// // // // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // // // //         <div className="bg-red-50 border border-red-200 rounded-lg p-6">
// // // // // // // // // // //           <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Attendees</h2>
// // // // // // // // // // //           <p className="text-red-700">{error.message}</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // // // // // // //       {/* PAGE HEADER */}
// // // // // // // // // // //       <div className="max-w-7xl mx-auto px-4 py-8">
// // // // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // // // //           <div>
// // // // // // // // // // //             <h1 className="text-2xl font-bold text-gray-900">Attendees Management</h1>
// // // // // // // // // // //             <p className="text-gray-600">Manage all event attendees in one place</p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* STATS CARDS */}
// // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // // // // // // // // //           <StatCard 
// // // // // // // // // // //             icon={Users} 
// // // // // // // // // // //             label="Total Attendees" 
// // // // // // // // // // //             value={stats.total} 
// // // // // // // // // // //             color="text-blue-600" 
// // // // // // // // // // //             bgColor="bg-blue-50"
// // // // // // // // // // //           />
// // // // // // // // // // //           <StatCard 
// // // // // // // // // // //             icon={CheckCircle} 
// // // // // // // // // // //             label="Active Bookings" 
// // // // // // // // // // //             value={stats.active} 
// // // // // // // // // // //             color="text-green-600" 
// // // // // // // // // // //             bgColor="bg-green-50"
// // // // // // // // // // //           />
// // // // // // // // // // //           <StatCard 
// // // // // // // // // // //             icon={Clock} 
// // // // // // // // // // //             label="Cancelled" 
// // // // // // // // // // //             value={stats.cancelled} 
// // // // // // // // // // //             color="text-red-600" 
// // // // // // // // // // //             bgColor="bg-red-50"
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* FILTERS */}
// // // // // // // // // // //         <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
// // // // // // // // // // //           <div className="flex flex-col md:flex-row md:items-center gap-4">
// // // // // // // // // // //             <div className="flex-1">
// // // // // // // // // // //               <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
// // // // // // // // // // //                 <Search className="h-4 w-4 text-gray-500" />
// // // // // // // // // // //                 <input
// // // // // // // // // // //                   className="ml-2 bg-transparent outline-none w-full"
// // // // // // // // // // //                   placeholder="Search attendees by name, email, or event..."
// // // // // // // // // // //                   value={searchTerm}
// // // // // // // // // // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // // // //                 />
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
            
// // // // // // // // // // //             <div className="flex items-center gap-4">
// // // // // // // // // // //               <select
// // // // // // // // // // //                 className="bg-gray-100 px-3 py-2 rounded-md min-w-[150px]"
// // // // // // // // // // //                 value={statusFilter}
// // // // // // // // // // //                 onChange={(e) => setStatusFilter(e.target.value)}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <option value="all">All Status</option>
// // // // // // // // // // //                 <option value="active">Active</option>
// // // // // // // // // // //                 <option value="cancelled">Cancelled</option>
// // // // // // // // // // //               </select>
              
// // // // // // // // // // //               <button
// // // // // // // // // // //                 onClick={() => {
// // // // // // // // // // //                   // Export functionality
// // // // // // // // // // //                   const dataStr = JSON.stringify(filteredAttendees, null, 2);
// // // // // // // // // // //                   const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
// // // // // // // // // // //                   const exportFileDefaultName = 'attendees.json';
// // // // // // // // // // //                   const linkElement = document.createElement('a');
// // // // // // // // // // //                   linkElement.setAttribute('href', dataUri);
// // // // // // // // // // //                   linkElement.setAttribute('download', exportFileDefaultName);
// // // // // // // // // // //                   linkElement.click();
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <Download className="h-4 w-4 mr-2" /> Export
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* ATTENDEES TABLE */}
// // // // // // // // // // //         <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-6">
// // // // // // // // // // //           <div className="overflow-x-auto">
// // // // // // // // // // //             <table className="min-w-full divide-y divide-gray-200">
// // // // // // // // // // //               <thead className="bg-gray-50">
// // // // // // // // // // //                 <tr>
// // // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // // // //                     <input
// // // // // // // // // // //                       type="checkbox"
// // // // // // // // // // //                       onChange={handleSelectAll}
// // // // // // // // // // //                       checked={selectedAttendees.length === filteredAttendees.length && filteredAttendees.length > 0}
// // // // // // // // // // //                       disabled={filteredAttendees.length === 0}
// // // // // // // // // // //                       className="rounded"
// // // // // // // // // // //                     />
// // // // // // // // // // //                   </th>
// // // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // // // //                     Attendee
// // // // // // // // // // //                   </th>
// // // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // // // //                     Event
// // // // // // // // // // //                   </th>
// // // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // // // //                     Status
// // // // // // // // // // //                   </th>
// // // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // // // //                     Ticket Details
// // // // // // // // // // //                   </th>
// // // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // // // //                     Actions
// // // // // // // // // // //                   </th>
// // // // // // // // // // //                 </tr>
// // // // // // // // // // //               </thead>

// // // // // // // // // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // // // // // // // // //                 {filteredAttendees.length > 0 ? (
// // // // // // // // // // //                   filteredAttendees.map((attendee) => (
// // // // // // // // // // //                     <tr key={attendee.id} className="hover:bg-gray-50">
// // // // // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // // // // //                         <input
// // // // // // // // // // //                           type="checkbox"
// // // // // // // // // // //                           checked={selectedAttendees.includes(attendee.id)}
// // // // // // // // // // //                           onChange={() => handleSelectAttendee(attendee.id)}
// // // // // // // // // // //                           className="rounded"
// // // // // // // // // // //                         />
// // // // // // // // // // //                       </td>
                      
// // // // // // // // // // //                       <td className="px-6 py-4">
// // // // // // // // // // //                         <div className="flex items-center">
// // // // // // // // // // //                           <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
// // // // // // // // // // //                             <User className="h-5 w-5 text-blue-600" />
// // // // // // // // // // //                           </div>
// // // // // // // // // // //                           <div className="ml-4">
// // // // // // // // // // //                             <div className="text-sm font-medium text-gray-900">
// // // // // // // // // // //                               {attendee.user?.name || 'Unknown'}
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                             <div className="text-sm text-gray-500 flex items-center">
// // // // // // // // // // //                               <Mail className="h-3 w-3 mr-1" />
// // // // // // // // // // //                               {attendee.user?.email}
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                             <div className="text-xs text-gray-400 flex items-center mt-1">
// // // // // // // // // // //                               <Phone className="h-3 w-3 mr-1" />
// // // // // // // // // // //                               {attendee.user?.phone || 'N/A'}
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                           </div>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </td>
                      
// // // // // // // // // // //                       <td className="px-6 py-4">
// // // // // // // // // // //                         <div className="text-sm font-medium text-gray-900">
// // // // // // // // // // //                           {attendee.eventName}
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                         <div className="text-sm text-gray-500 flex items-center mt-1">
// // // // // // // // // // //                           <Calendar className="h-3 w-3 mr-1" />
// // // // // // // // // // //                           {new Date(attendee.date).toLocaleDateString()}
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                         <div className="text-xs text-gray-400 flex items-center mt-1">
// // // // // // // // // // //                           <MapPin className="h-3 w-3 mr-1" />
// // // // // // // // // // //                           {attendee.location?.split(',')[0] || 'Online'}
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </td>
                      
// // // // // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // // // // //                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
// // // // // // // // // // //                           attendee.booking_status === 'active' 
// // // // // // // // // // //                             ? 'bg-green-100 text-green-800'
// // // // // // // // // // //                             : 'bg-red-100 text-red-800'
// // // // // // // // // // //                         }`}>
// // // // // // // // // // //                           {attendee.booking_status === 'active' ? (
// // // // // // // // // // //                             <>
// // // // // // // // // // //                               <CheckCircle className="h-3 w-3 mr-1" />
// // // // // // // // // // //                               Active
// // // // // // // // // // //                             </>
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             'Cancelled'
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </span>
// // // // // // // // // // //                         <div className="text-xs text-gray-500 mt-1">
// // // // // // // // // // //                           {attendee.tickets} ticket(s)
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </td>
                      
// // // // // // // // // // //                       <td className="px-6 py-4">
// // // // // // // // // // //                         <div className="text-sm text-gray-900 flex items-center">
// // // // // // // // // // //                           <Ticket className="h-4 w-4 mr-1" />
// // // // // // // // // // //                           {attendee.ticketType}
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                         <div className="text-sm font-medium text-gray-900 flex items-center mt-1">
// // // // // // // // // // //                           <DollarSign className="h-4 w-4 mr-1" />
// // // // // // // // // // //                           {attendee.totalPrice}
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </td>
                      
// // // // // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // // // // // // // // // //                         <div className="flex items-center space-x-2">
// // // // // // // // // // //                           <button
// // // // // // // // // // //                             onClick={() => {
// // // // // // // // // // //                               // View details
// // // // // // // // // // //                               console.log('View attendee:', attendee);
// // // // // // // // // // //                               alert(`Attendee: ${attendee.user?.name}\nEvent: ${attendee.eventName}\nStatus: ${attendee.booking_status}\nAmount: $${attendee.totalPrice}`);
// // // // // // // // // // //                             }}
// // // // // // // // // // //                             className="text-blue-600 hover:text-blue-900 flex items-center"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <Eye className="h-4 w-4 mr-1" />
// // // // // // // // // // //                             View
// // // // // // // // // // //                           </button>
                          
// // // // // // // // // // //                           {attendee.booking_status === 'active' && (
// // // // // // // // // // //                             <button
// // // // // // // // // // //                               onClick={() => handleCheckIn(attendee.id)}
// // // // // // // // // // //                               className="text-green-600 hover:text-green-900 flex items-center"
// // // // // // // // // // //                               disabled={checkInMutation.isLoading}
// // // // // // // // // // //                             >
// // // // // // // // // // //                               <CheckCircle className="h-4 w-4 mr-1" />
// // // // // // // // // // //                               {checkInMutation.isLoading ? 'Processing...' : 'Check In'}
// // // // // // // // // // //                             </button>
// // // // // // // // // // //                           )}
                          
// // // // // // // // // // //                           <button
// // // // // // // // // // //                             onClick={() => setSelectedAttendees([attendee.id])}
// // // // // // // // // // //                             className="text-gray-600 hover:text-gray-900"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <MoreVertical className="h-4 w-4" />
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </td>
// // // // // // // // // // //                     </tr>
// // // // // // // // // // //                   ))
// // // // // // // // // // //                 ) : (
// // // // // // // // // // //                   <tr>
// // // // // // // // // // //                     <td colSpan="6" className="px-6 py-12 text-center">
// // // // // // // // // // //                       <div className="flex flex-col items-center">
// // // // // // // // // // //                         <Users className="h-12 w-12 text-gray-300 mb-4" />
// // // // // // // // // // //                         <h3 className="text-lg font-medium text-gray-900 mb-2">No attendees found</h3>
// // // // // // // // // // //                         <p className="text-gray-500">Try adjusting your search or filters</p>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </td>
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                 )}
// // // // // // // // // // //               </tbody>
// // // // // // // // // // //             </table>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* PAGINATION */}
// // // // // // // // // // //         {pagination.lastPage > 1 && (
// // // // // // // // // // //           <div className="flex items-center justify-between bg-white px-6 py-3 rounded-lg shadow-sm">
// // // // // // // // // // //             <div className="text-sm text-gray-700">
// // // // // // // // // // //               Showing <span className="font-medium">{(currentPage - 1) * perPage + 1}</span> to{" "}
// // // // // // // // // // //               <span className="font-medium">
// // // // // // // // // // //                 {Math.min(currentPage * perPage, pagination.total || 0)}
// // // // // // // // // // //               </span> of{" "}
// // // // // // // // // // //               <span className="font-medium">{pagination.total || 0}</span> attendees
// // // // // // // // // // //             </div>
            
// // // // // // // // // // //             <div className="flex items-center space-x-2">
// // // // // // // // // // //               <button
// // // // // // // // // // //                 onClick={handlePrevPage}
// // // // // // // // // // //                 disabled={currentPage === 1}
// // // // // // // // // // //                 className={`px-3 py-1 rounded ${
// // // // // // // // // // //                   currentPage === 1 
// // // // // // // // // // //                     ? 'text-gray-400 cursor-not-allowed' 
// // // // // // // // // // //                     : 'text-gray-700 hover:bg-gray-100'
// // // // // // // // // // //                 }`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <ChevronLeft className="h-5 w-5" />
// // // // // // // // // // //               </button>
              
// // // // // // // // // // //               <span className="text-sm text-gray-700">
// // // // // // // // // // //                 Page {currentPage} of {pagination.lastPage}
// // // // // // // // // // //               </span>
              
// // // // // // // // // // //               <button
// // // // // // // // // // //                 onClick={handleNextPage}
// // // // // // // // // // //                 disabled={currentPage === pagination.lastPage}
// // // // // // // // // // //                 className={`px-3 py-1 rounded ${
// // // // // // // // // // //                   currentPage === pagination.lastPage 
// // // // // // // // // // //                     ? 'text-gray-400 cursor-not-allowed' 
// // // // // // // // // // //                     : 'text-gray-700 hover:bg-gray-100'
// // // // // // // // // // //                 }`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <ChevronRight className="h-5 w-5" />
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const StatCard = ({ icon: Icon, label, value, color, bgColor }) => (
// // // // // // // // // // //   <div className={`${bgColor} p-6 rounded-lg shadow-sm`}>
// // // // // // // // // // //     <div className="flex items-center">
// // // // // // // // // // //       <Icon className={`h-8 w-8 ${color}`} />
// // // // // // // // // // //       <div className="ml-4">
// // // // // // // // // // //         <p className="text-sm text-gray-600">{label}</p>
// // // // // // // // // // //         <p className="text-2xl font-bold text-gray-900">{value}</p>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   </div>
// // // // // // // // // // // );

// // // // // // // // // // // export default OrganizerAttendees;
// // // // // // // // // // "use client";

// // // // // // // // // // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// // // // // // // // // // import {
// // // // // // // // // //   Calendar,
// // // // // // // // // //   CheckCircle,
// // // // // // // // // //   ChevronLeft,
// // // // // // // // // //   ChevronRight,
// // // // // // // // // //   Clock,
// // // // // // // // // //   DollarSign,
// // // // // // // // // //   Download,
// // // // // // // // // //   Eye,
// // // // // // // // // //   Mail,
// // // // // // // // // //   MapPin,
// // // // // // // // // //   Phone,
// // // // // // // // // //   Search,
// // // // // // // // // //   Ticket,
// // // // // // // // // //   User,
// // // // // // // // // //   Users
// // // // // // // // // // } from "lucide-react";
// // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // import { attendeesService } from "../../services/attendeesService";

// // // // // // // // // // const OrganizerAttendees = () => {
// // // // // // // // // //   const queryClient = useQueryClient();

// // // // // // // // // //   // Filters
// // // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // // //   const [statusFilter, setStatusFilter] = useState("all");
// // // // // // // // // //   const [selectedAttendees, setSelectedAttendees] = useState([]);
// // // // // // // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // // // // // // //   const [perPage] = useState(20);

// // // // // // // // // //   // Fetch attendees with pagination
// // // // // // // // // //   const { data, isLoading, error } = useQuery({
// // // // // // // // // //     queryKey: ["attendees", currentPage, searchTerm, statusFilter],
// // // // // // // // // //     queryFn: () => attendeesService.list({
// // // // // // // // // //       page: currentPage,
// // // // // // // // // //       perPage: perPage,
// // // // // // // // // //       search: searchTerm,
// // // // // // // // // //       status: statusFilter !== "all" ? statusFilter : undefined,
// // // // // // // // // //     }),
// // // // // // // // // //   });

// // // // // // // // // //   // Debug log to see actual response structure
// // // // // // // // // //   console.log("API Response data:", data);

// // // // // // // // // //   // SAFELY extract attendees data - FIXED VERSION
// // // // // // // // // //   let attendees = [];
// // // // // // // // // //   if (data) {
// // // // // // // // // //     // Check for data.data array
// // // // // // // // // //     if (Array.isArray(data.data)) {
// // // // // // // // // //       attendees = data.data;
// // // // // // // // // //     } 
// // // // // // // // // //     // Check if data is directly an array (fallback)
// // // // // // // // // //     else if (Array.isArray(data)) {
// // // // // // // // // //       attendees = data;
// // // // // // // // // //     }
// // // // // // // // // //     // Check for other possible structures
// // // // // // // // // //     else if (data.attendees && Array.isArray(data.attendees)) {
// // // // // // // // // //       attendees = data.attendees;
// // // // // // // // // //     }
// // // // // // // // // //     // If data has items array
// // // // // // // // // //     else if (data.items && Array.isArray(data.items)) {
// // // // // // // // // //       attendees = data.items;
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   // Extract pagination info
// // // // // // // // // //   const pagination = {
// // // // // // // // // //     currentPage: data?.currentPage || 1,
// // // // // // // // // //     lastPage: data?.lastPage || 1,
// // // // // // // // // //     perPage: data?.perPage || perPage,
// // // // // // // // // //     total: data?.total || 0
// // // // // // // // // //   };

// // // // // // // // // //   // Check-In Mutation
// // // // // // // // // //   const checkInMutation = useMutation({
// // // // // // // // // //     mutationFn: (id) => attendeesService.checkIn(id),
// // // // // // // // // //     onSuccess: () => queryClient.invalidateQueries(["attendees"]),
// // // // // // // // // //   });

// // // // // // // // // //   const handleCheckIn = (id) => {
// // // // // // // // // //     if (id && window.confirm("Mark this attendee as checked in?")) {
// // // // // // // // // //       checkInMutation.mutate(id);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   // SAFELY filter attendees - ensure attendees is always an array
// // // // // // // // // //   const filteredAttendees = Array.isArray(attendees) ? attendees.filter((att) => {
// // // // // // // // // //     if (!att || typeof att !== 'object') return false;
    
// // // // // // // // // //     const searchLower = searchTerm.toLowerCase();
    
// // // // // // // // // //     // Safely check name
// // // // // // // // // //     const name = att.user?.name || '';
// // // // // // // // // //     const email = att.user?.email || '';
// // // // // // // // // //     const eventName = att.eventName || '';
    
// // // // // // // // // //     const matchesSearch = 
// // // // // // // // // //       name.toLowerCase().includes(searchLower) ||
// // // // // // // // // //       email.toLowerCase().includes(searchLower) ||
// // // // // // // // // //       eventName.toLowerCase().includes(searchLower);

// // // // // // // // // //     // Safely check status
// // // // // // // // // //     const bookingStatus = att.booking_status?.toLowerCase() || '';
// // // // // // // // // //     const matchesStatus = statusFilter === "all" || 
// // // // // // // // // //       bookingStatus === statusFilter.toLowerCase();

// // // // // // // // // //     return matchesSearch && matchesStatus;
// // // // // // // // // //   }) : [];

// // // // // // // // // //   const handleSelectAttendee = (id) => {
// // // // // // // // // //     setSelectedAttendees((prev) =>
// // // // // // // // // //       prev.includes(id)
// // // // // // // // // //         ? prev.filter((x) => x !== id)
// // // // // // // // // //         : [...prev, id]
// // // // // // // // // //     );
// // // // // // // // // //   };

// // // // // // // // // //   const handleSelectAll = () => {
// // // // // // // // // //     if (!Array.isArray(filteredAttendees) || filteredAttendees.length === 0) {
// // // // // // // // // //       setSelectedAttendees([]);
// // // // // // // // // //       return;
// // // // // // // // // //     }
    
// // // // // // // // // //     if (selectedAttendees.length === filteredAttendees.length) {
// // // // // // // // // //       setSelectedAttendees([]);
// // // // // // // // // //     } else {
// // // // // // // // // //       const ids = filteredAttendees
// // // // // // // // // //         .map((a) => a?.id)
// // // // // // // // // //         .filter(Boolean); // Remove undefined/null
// // // // // // // // // //       setSelectedAttendees(ids);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   // SAFELY calculate stats
// // // // // // // // // //   const stats = {
// // // // // // // // // //     total: pagination.total || 0,
// // // // // // // // // //     active: Array.isArray(attendees) ? attendees.filter((a) => {
// // // // // // // // // //       return a && a.booking_status && a.booking_status.toLowerCase() === "active";
// // // // // // // // // //     }).length : 0,
// // // // // // // // // //     cancelled: Array.isArray(attendees) ? attendees.filter((a) => {
// // // // // // // // // //       return a && a.booking_status && a.booking_status.toLowerCase() === "cancelled";
// // // // // // // // // //     }).length : 0,
// // // // // // // // // //   };

// // // // // // // // // //   // Handle pagination
// // // // // // // // // //   const handleNextPage = () => {
// // // // // // // // // //     if (currentPage < pagination.lastPage) {
// // // // // // // // // //       setCurrentPage(prev => prev + 1);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handlePrevPage = () => {
// // // // // // // // // //     if (currentPage > 1) {
// // // // // // // // // //       setCurrentPage(prev => prev - 1);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     setCurrentPage(1);
// // // // // // // // // //   }, [searchTerm, statusFilter]);

// // // // // // // // // //   if (isLoading) return (
// // // // // // // // // //     <div className="min-h-screen bg-gray-50 p-8">
// // // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // // //         <div className="animate-pulse">
// // // // // // // // // //           <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
// // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
// // // // // // // // // //             {[1, 2, 3].map(i => (
// // // // // // // // // //               <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
// // // // // // // // // //                 <div className="h-8 w-8 bg-gray-300 rounded"></div>
// // // // // // // // // //                 <div className="mt-4 space-y-2">
// // // // // // // // // //                   <div className="h-4 bg-gray-300 rounded w-1/2"></div>
// // // // // // // // // //                   <div className="h-6 bg-gray-300 rounded w-1/3"></div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="bg-white p-4 rounded-lg shadow-sm h-12 mb-6"></div>
// // // // // // // // // //           <div className="bg-white rounded-lg shadow-sm h-96"></div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );

// // // // // // // // // //   if (error) return (
// // // // // // // // // //     <div className="min-h-screen bg-gray-50 p-8">
// // // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // // //         <div className="bg-red-50 border border-red-200 rounded-lg p-6">
// // // // // // // // // //           <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Attendees</h2>
// // // // // // // // // //           <p className="text-red-700">{error.message}</p>
// // // // // // // // // //           <p className="text-sm text-red-600 mt-2">Please check your API connection.</p>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // // // // // //       {/* PAGE HEADER */}
// // // // // // // // // //       <div className="max-w-7xl mx-auto px-4 py-8">
// // // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // // //           <div>
// // // // // // // // // //             <h1 className="text-2xl font-bold text-gray-900">Attendees Management</h1>
// // // // // // // // // //             <p className="text-gray-600">Manage all event attendees in one place</p>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* STATS CARDS */}
// // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // // // // // // // //           <StatCard 
// // // // // // // // // //             icon={Users} 
// // // // // // // // // //             label="Total Attendees" 
// // // // // // // // // //             value={stats.total} 
// // // // // // // // // //             color="text-blue-600" 
// // // // // // // // // //             bgColor="bg-blue-50"
// // // // // // // // // //           />
// // // // // // // // // //           <StatCard 
// // // // // // // // // //             icon={CheckCircle} 
// // // // // // // // // //             label="Active Bookings" 
// // // // // // // // // //             value={stats.active} 
// // // // // // // // // //             color="text-green-600" 
// // // // // // // // // //             bgColor="bg-green-50"
// // // // // // // // // //           />
// // // // // // // // // //           <StatCard 
// // // // // // // // // //             icon={Clock} 
// // // // // // // // // //             label="Cancelled" 
// // // // // // // // // //             value={stats.cancelled} 
// // // // // // // // // //             color="text-red-600" 
// // // // // // // // // //             bgColor="bg-red-50"
// // // // // // // // // //           />
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* FILTERS */}
// // // // // // // // // //         <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
// // // // // // // // // //           <div className="flex flex-col md:flex-row md:items-center gap-4">
// // // // // // // // // //             <div className="flex-1">
// // // // // // // // // //               <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
// // // // // // // // // //                 <Search className="h-4 w-4 text-gray-500" />
// // // // // // // // // //                 <input
// // // // // // // // // //                   className="ml-2 bg-transparent outline-none w-full"
// // // // // // // // // //                   placeholder="Search attendees by name, email, or event..."
// // // // // // // // // //                   value={searchTerm}
// // // // // // // // // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // // //                 />
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
            
// // // // // // // // // //             <div className="flex items-center gap-4">
// // // // // // // // // //               <select
// // // // // // // // // //                 className="bg-gray-100 px-3 py-2 rounded-md min-w-[150px]"
// // // // // // // // // //                 value={statusFilter}
// // // // // // // // // //                 onChange={(e) => setStatusFilter(e.target.value)}
// // // // // // // // // //               >
// // // // // // // // // //                 <option value="all">All Status</option>
// // // // // // // // // //                 <option value="active">Active</option>
// // // // // // // // // //                 <option value="cancelled">Cancelled</option>
// // // // // // // // // //               </select>
              
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => {
// // // // // // // // // //                   if (filteredAttendees.length === 0) {
// // // // // // // // // //                     alert("No data to export");
// // // // // // // // // //                     return;
// // // // // // // // // //                   }
// // // // // // // // // //                   // Export functionality
// // // // // // // // // //                   const dataStr = JSON.stringify(filteredAttendees, null, 2);
// // // // // // // // // //                   const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
// // // // // // // // // //                   const exportFileDefaultName = `attendees-page-${currentPage}.json`;
// // // // // // // // // //                   const linkElement = document.createElement('a');
// // // // // // // // // //                   linkElement.setAttribute('href', dataUri);
// // // // // // // // // //                   linkElement.setAttribute('download', exportFileDefaultName);
// // // // // // // // // //                   linkElement.click();
// // // // // // // // // //                 }}
// // // // // // // // // //                 className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
// // // // // // // // // //                 disabled={filteredAttendees.length === 0}
// // // // // // // // // //               >
// // // // // // // // // //                 <Download className="h-4 w-4 mr-2" /> Export
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* ATTENDEES TABLE */}
// // // // // // // // // //         <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-6">
// // // // // // // // // //           <div className="overflow-x-auto">
// // // // // // // // // //             <table className="min-w-full divide-y divide-gray-200">
// // // // // // // // // //               <thead className="bg-gray-50">
// // // // // // // // // //                 <tr>
// // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
// // // // // // // // // //                     <input
// // // // // // // // // //                       type="checkbox"
// // // // // // // // // //                       onChange={handleSelectAll}
// // // // // // // // // //                       checked={filteredAttendees.length > 0 && selectedAttendees.length === filteredAttendees.length}
// // // // // // // // // //                       disabled={filteredAttendees.length === 0}
// // // // // // // // // //                       className="rounded"
// // // // // // // // // //                     />
// // // // // // // // // //                   </th>
// // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // // //                     Attendee
// // // // // // // // // //                   </th>
// // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // // //                     Event
// // // // // // // // // //                   </th>
// // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // // //                     Status
// // // // // // // // // //                   </th>
// // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // // //                     Ticket Details
// // // // // // // // // //                   </th>
// // // // // // // // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // // // //                     Actions
// // // // // // // // // //                   </th>
// // // // // // // // // //                 </tr>
// // // // // // // // // //               </thead>

// // // // // // // // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // // // // // // // //                 {filteredAttendees.length > 0 ? (
// // // // // // // // // //                   filteredAttendees.map((attendee) => {
// // // // // // // // // //                     if (!attendee || typeof attendee !== 'object') return null;
                    
// // // // // // // // // //                     return (
// // // // // // // // // //                       <tr key={attendee.id || Math.random()} className="hover:bg-gray-50">
// // // // // // // // // //                         <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // // // //                           <input
// // // // // // // // // //                             type="checkbox"
// // // // // // // // // //                             checked={selectedAttendees.includes(attendee.id)}
// // // // // // // // // //                             onChange={() => handleSelectAttendee(attendee.id)}
// // // // // // // // // //                             className="rounded"
// // // // // // // // // //                             disabled={!attendee.id}
// // // // // // // // // //                           />
// // // // // // // // // //                         </td>
                        
// // // // // // // // // //                         <td className="px-6 py-4">
// // // // // // // // // //                           <div className="flex items-center">
// // // // // // // // // //                             <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
// // // // // // // // // //                               <User className="h-5 w-5 text-blue-600" />
// // // // // // // // // //                             </div>
// // // // // // // // // //                             <div className="ml-4">
// // // // // // // // // //                               <div className="text-sm font-medium text-gray-900">
// // // // // // // // // //                                 {attendee.user?.name || 'Unknown'}
// // // // // // // // // //                               </div>
// // // // // // // // // //                               <div className="text-sm text-gray-500 flex items-center">
// // // // // // // // // //                                 <Mail className="h-3 w-3 mr-1" />
// // // // // // // // // //                                 {attendee.user?.email || 'No email'}
// // // // // // // // // //                               </div>
// // // // // // // // // //                               <div className="text-xs text-gray-400 flex items-center mt-1">
// // // // // // // // // //                                 <Phone className="h-3 w-3 mr-1" />
// // // // // // // // // //                                 {attendee.user?.phone || 'N/A'}
// // // // // // // // // //                               </div>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           </div>
// // // // // // // // // //                         </td>
                        
// // // // // // // // // //                         <td className="px-6 py-4">
// // // // // // // // // //                           <div className="text-sm font-medium text-gray-900">
// // // // // // // // // //                             {attendee.eventName || 'Unknown Event'}
// // // // // // // // // //                           </div>
// // // // // // // // // //                           <div className="text-sm text-gray-500 flex items-center mt-1">
// // // // // // // // // //                             <Calendar className="h-3 w-3 mr-1" />
// // // // // // // // // //                             {attendee.date ? new Date(attendee.date).toLocaleDateString() : 'N/A'}
// // // // // // // // // //                           </div>
// // // // // // // // // //                           <div className="text-xs text-gray-400 flex items-center mt-1">
// // // // // // // // // //                             <MapPin className="h-3 w-3 mr-1" />
// // // // // // // // // //                             {attendee.location ? attendee.location.split(',')[0] : 'Online'}
// // // // // // // // // //                           </div>
// // // // // // // // // //                         </td>
                        
// // // // // // // // // //                         <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // // // //                           <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
// // // // // // // // // //                             attendee.booking_status === 'active' 
// // // // // // // // // //                               ? 'bg-green-100 text-green-800'
// // // // // // // // // //                               : 'bg-red-100 text-red-800'
// // // // // // // // // //                           }`}>
// // // // // // // // // //                             {attendee.booking_status === 'active' ? (
// // // // // // // // // //                               <>
// // // // // // // // // //                                 <CheckCircle className="h-3 w-3 mr-1" />
// // // // // // // // // //                                 Active
// // // // // // // // // //                               </>
// // // // // // // // // //                             ) : (
// // // // // // // // // //                               'Cancelled'
// // // // // // // // // //                             )}
// // // // // // // // // //                           </span>
// // // // // // // // // //                           <div className="text-xs text-gray-500 mt-1">
// // // // // // // // // //                             {attendee.tickets || 1} ticket(s)
// // // // // // // // // //                           </div>
// // // // // // // // // //                         </td>
                        
// // // // // // // // // //                         <td className="px-6 py-4">
// // // // // // // // // //                           <div className="text-sm text-gray-900 flex items-center">
// // // // // // // // // //                             <Ticket className="h-4 w-4 mr-1" />
// // // // // // // // // //                             {attendee.ticketType || 'General'}
// // // // // // // // // //                           </div>
// // // // // // // // // //                           <div className="text-sm font-medium text-gray-900 flex items-center mt-1">
// // // // // // // // // //                             <DollarSign className="h-4 w-4 mr-1" />
// // // // // // // // // //                             {attendee.totalPrice || '0.00'}
// // // // // // // // // //                           </div>
// // // // // // // // // //                         </td>
                        
// // // // // // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // // // // // // // // //                           <div className="flex items-center space-x-2">
// // // // // // // // // //                             <button
// // // // // // // // // //                               onClick={() => {
// // // // // // // // // //                                 // View details
// // // // // // // // // //                                 alert(
// // // // // // // // // //                                   `Attendee Details:\n\n` +
// // // // // // // // // //                                   `Name: ${attendee.user?.name || 'Unknown'}\n` +
// // // // // // // // // //                                   `Email: ${attendee.user?.email || 'N/A'}\n` +
// // // // // // // // // //                                   `Phone: ${attendee.user?.phone || 'N/A'}\n` +
// // // // // // // // // //                                   `Event: ${attendee.eventName || 'Unknown'}\n` +
// // // // // // // // // //                                   `Date: ${attendee.date ? new Date(attendee.date).toLocaleDateString() : 'N/A'}\n` +
// // // // // // // // // //                                   `Status: ${attendee.booking_status || 'Unknown'}\n` +
// // // // // // // // // //                                   `Ticket: ${attendee.ticketType || 'General'}\n` +
// // // // // // // // // //                                   `Amount: $${attendee.totalPrice || '0.00'}`
// // // // // // // // // //                                 );
// // // // // // // // // //                               }}
// // // // // // // // // //                               className="text-blue-600 hover:text-blue-900 flex items-center"
// // // // // // // // // //                             >
// // // // // // // // // //                               <Eye className="h-4 w-4 mr-1" />
// // // // // // // // // //                               View
// // // // // // // // // //                             </button>
                            
// // // // // // // // // //                             {attendee.booking_status === 'active' && (
// // // // // // // // // //                               <button
// // // // // // // // // //                                 onClick={() => handleCheckIn(attendee.id)}
// // // // // // // // // //                                 className="text-green-600 hover:text-green-900 flex items-center"
// // // // // // // // // //                                 disabled={checkInMutation.isLoading}
// // // // // // // // // //                               >
// // // // // // // // // //                                 <CheckCircle className="h-4 w-4 mr-1" />
// // // // // // // // // //                                 {checkInMutation.isLoading ? 'Processing...' : 'Check In'}
// // // // // // // // // //                               </button>
// // // // // // // // // //                             )}
// // // // // // // // // //                           </div>
// // // // // // // // // //                         </td>
// // // // // // // // // //                       </tr>
// // // // // // // // // //                     );
// // // // // // // // // //                   })
// // // // // // // // // //                 ) : (
// // // // // // // // // //                   <tr>
// // // // // // // // // //                     <td colSpan="6" className="px-6 py-12 text-center">
// // // // // // // // // //                       <div className="flex flex-col items-center">
// // // // // // // // // //                         <Users className="h-12 w-12 text-gray-300 mb-4" />
// // // // // // // // // //                         <h3 className="text-lg font-medium text-gray-900 mb-2">No attendees found</h3>
// // // // // // // // // //                         <p className="text-gray-500">Try adjusting your search or filters</p>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </td>
// // // // // // // // // //                   </tr>
// // // // // // // // // //                 )}
// // // // // // // // // //               </tbody>
// // // // // // // // // //             </table>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* PAGINATION */}
// // // // // // // // // //         {pagination.lastPage > 1 && (
// // // // // // // // // //           <div className="flex items-center justify-between bg-white px-6 py-3 rounded-lg shadow-sm">
// // // // // // // // // //             <div className="text-sm text-gray-700">
// // // // // // // // // //               Showing <span className="font-medium">{(currentPage - 1) * perPage + 1}</span> to{" "}
// // // // // // // // // //               <span className="font-medium">
// // // // // // // // // //                 {Math.min(currentPage * perPage, pagination.total || 0)}
// // // // // // // // // //               </span> of{" "}
// // // // // // // // // //               <span className="font-medium">{pagination.total || 0}</span> attendees
// // // // // // // // // //             </div>
            
// // // // // // // // // //             <div className="flex items-center space-x-2">
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={handlePrevPage}
// // // // // // // // // //                 disabled={currentPage === 1}
// // // // // // // // // //                 className={`px-3 py-1 rounded ${
// // // // // // // // // //                   currentPage === 1 
// // // // // // // // // //                     ? 'text-gray-400 cursor-not-allowed' 
// // // // // // // // // //                     : 'text-gray-700 hover:bg-gray-100'
// // // // // // // // // //                 }`}
// // // // // // // // // //               >
// // // // // // // // // //                 <ChevronLeft className="h-5 w-5" />
// // // // // // // // // //               </button>
              
// // // // // // // // // //               <span className="text-sm text-gray-700">
// // // // // // // // // //                 Page {currentPage} of {pagination.lastPage}
// // // // // // // // // //               </span>
              
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={handleNextPage}
// // // // // // // // // //                 disabled={currentPage === pagination.lastPage}
// // // // // // // // // //                 className={`px-3 py-1 rounded ${
// // // // // // // // // //                   currentPage === pagination.lastPage 
// // // // // // // // // //                     ? 'text-gray-400 cursor-not-allowed' 
// // // // // // // // // //                     : 'text-gray-700 hover:bg-gray-100'
// // // // // // // // // //                 }`}
// // // // // // // // // //               >
// // // // // // // // // //                 <ChevronRight className="h-5 w-5" />
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         )}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const StatCard = ({ icon: Icon, label, value, color, bgColor }) => (
// // // // // // // // // //   <div className={`${bgColor} p-6 rounded-lg shadow-sm`}>
// // // // // // // // // //     <div className="flex items-center">
// // // // // // // // // //       <Icon className={`h-8 w-8 ${color}`} />
// // // // // // // // // //       <div className="ml-4">
// // // // // // // // // //         <p className="text-sm text-gray-600">{label}</p>
// // // // // // // // // //         <p className="text-2xl font-bold text-gray-900">{value}</p>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   </div>
// // // // // // // // // // );

// // // // // // // // // // export default OrganizerAttendees;
// // // // // // // // // "use client";

// // // // // // // // // import { useQuery } from "@tanstack/react-query";
// // // // // // // // // import {
// // // // // // // // //   Calendar,
// // // // // // // // //   CheckCircle,
// // // // // // // // //   ChevronLeft,
// // // // // // // // //   ChevronRight,
// // // // // // // // //   DollarSign,
// // // // // // // // //   Download,
// // // // // // // // //   Eye,
// // // // // // // // //   Mail,
// // // // // // // // //   MapPin,
// // // // // // // // //   Phone,
// // // // // // // // //   Search,
// // // // // // // // //   Ticket,
// // // // // // // // //   User,
// // // // // // // // //   Users
// // // // // // // // // } from "lucide-react";
// // // // // // // // // import { useState } from "react";
// // // // // // // // // import { attendeesService } from "../../services/attendeesService";

// // // // // // // // // const OrganizerAttendees = () => {
// // // // // // // // //   // Filters
// // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // //   const [statusFilter, setStatusFilter] = useState("all");
// // // // // // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // // // // // //   const [perPage] = useState(20);

// // // // // // // // //   // Fetch attendees
// // // // // // // // //   const { data, isLoading, error } = useQuery({
// // // // // // // // //     queryKey: ["attendees", currentPage],
// // // // // // // // //     queryFn: () => attendeesService.list({
// // // // // // // // //       page: currentPage,
// // // // // // // // //       perPage: perPage,
// // // // // // // // //     }),
// // // // // // // // //   });

// // // // // // // // //   // Debug: Check what data we're getting
// // // // // // // // //   console.log("Full API Response:", data);

// // // // // // // // //   // Extract attendees - SIMPLIFIED APPROACH
// // // // // // // // //   let attendees = [];
// // // // // // // // //   let pagination = {
// // // // // // // // //     currentPage: 1,
// // // // // // // // //     lastPage: 1,
// // // // // // // // //     total: 0
// // // // // // // // //   };

// // // // // // // // //   if (data) {
// // // // // // // // //     // Check if data.data exists and is an array
// // // // // // // // //     if (data.data && Array.isArray(data.data)) {
// // // // // // // // //       attendees = data.data;
// // // // // // // // //     }
    
// // // // // // // // //     // Get pagination info
// // // // // // // // //     if (data.currentPage) pagination.currentPage = data.currentPage;
// // // // // // // // //     if (data.lastPage) pagination.lastPage = data.lastPage;
// // // // // // // // //     if (data.total) pagination.total = data.total;
// // // // // // // // //   }

// // // // // // // // //   console.log("Extracted attendees:", attendees.length, "items");
// // // // // // // // //   console.log("Pagination:", pagination);

// // // // // // // // //   // Filter attendees based on search and status
// // // // // // // // //   const filteredAttendees = attendees.filter(attendee => {
// // // // // // // // //     if (!attendee) return false;
    
// // // // // // // // //     // Check search term
// // // // // // // // //     const searchLower = searchTerm.toLowerCase();
// // // // // // // // //     const matchesSearch = 
// // // // // // // // //       (attendee.user?.name?.toLowerCase() || '').includes(searchLower) ||
// // // // // // // // //       (attendee.user?.email?.toLowerCase() || '').includes(searchLower) ||
// // // // // // // // //       (attendee.eventName?.toLowerCase() || '').includes(searchLower);
    
// // // // // // // // //     // Check status filter
// // // // // // // // //     const matchesStatus = 
// // // // // // // // //       statusFilter === "all" || 
// // // // // // // // //       (attendee.booking_status?.toLowerCase() || '') === statusFilter.toLowerCase();
    
// // // // // // // // //     return matchesSearch && matchesStatus;
// // // // // // // // //   });

// // // // // // // // //   // Calculate stats
// // // // // // // // //   const stats = {
// // // // // // // // //     total: pagination.total || 0,
// // // // // // // // //     active: attendees.filter(a => a?.booking_status === 'active').length,
// // // // // // // // //     cancelled: attendees.filter(a => a?.booking_status === 'cancelled').length,
// // // // // // // // //   };

// // // // // // // // //   // Handle pagination
// // // // // // // // //   const handleNextPage = () => {
// // // // // // // // //     if (currentPage < pagination.lastPage) {
// // // // // // // // //       setCurrentPage(prev => prev + 1);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handlePrevPage = () => {
// // // // // // // // //     if (currentPage > 1) {
// // // // // // // // //       setCurrentPage(prev => prev - 1);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   if (isLoading) return (
// // // // // // // // //     <div className="min-h-screen bg-gray-50 p-8">
// // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // //         <div className="animate-pulse">
// // // // // // // // //           <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
// // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
// // // // // // // // //             {[1, 2, 3].map(i => (
// // // // // // // // //               <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
// // // // // // // // //                 <div className="h-8 w-8 bg-gray-300 rounded"></div>
// // // // // // // // //                 <div className="mt-4 space-y-2">
// // // // // // // // //                   <div className="h-4 bg-gray-300 rounded w-1/2"></div>
// // // // // // // // //                   <div className="h-6 bg-gray-300 rounded w-1/3"></div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //           <div className="bg-white p-4 rounded-lg shadow-sm h-12 mb-6"></div>
// // // // // // // // //           <div className="bg-white rounded-lg shadow-sm h-96"></div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );

// // // // // // // // //   if (error) return (
// // // // // // // // //     <div className="min-h-screen bg-gray-50 p-8">
// // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // //         <div className="bg-red-50 border border-red-200 rounded-lg p-6">
// // // // // // // // //           <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Data</h2>
// // // // // // // // //           <p className="text-red-700">Error: {error.message}</p>
// // // // // // // // //           <p className="text-sm text-red-600 mt-2">Please try again later.</p>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // //         {/* Header */}
// // // // // // // // //         <div className="mb-8">
// // // // // // // // //           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Attendees Management</h1>
// // // // // // // // //           <p className="text-gray-600 mt-2">View and manage all event attendees</p>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Stats Cards */}
// // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
// // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // // // // // // // //             <div className="flex items-center">
// // // // // // // // //               <Users className="h-8 w-8 text-blue-600" />
// // // // // // // // //               <div className="ml-4">
// // // // // // // // //                 <p className="text-sm text-gray-600">Total Attendees</p>
// // // // // // // // //                 <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
          
// // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // // // // // // // //             <div className="flex items-center">
// // // // // // // // //               <CheckCircle className="h-8 w-8 text-green-600" />
// // // // // // // // //               <div className="ml-4">
// // // // // // // // //                 <p className="text-sm text-gray-600">Active Bookings</p>
// // // // // // // // //                 <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
          
// // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // // // // // // // //             <div className="flex items-center">
// // // // // // // // //               <Calendar className="h-8 w-8 text-red-600" />
// // // // // // // // //               <div className="ml-4">
// // // // // // // // //                 <p className="text-sm text-gray-600">Cancelled</p>
// // // // // // // // //                 <p className="text-2xl font-bold text-gray-900">{stats.cancelled}</p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Filters */}
// // // // // // // // //         <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm mb-6">
// // // // // // // // //           <div className="flex flex-col md:flex-row gap-4">
// // // // // // // // //             <div className="flex-1">
// // // // // // // // //               <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg">
// // // // // // // // //                 <Search className="h-5 w-5 text-gray-500" />
// // // // // // // // //                 <input
// // // // // // // // //                   className="ml-3 bg-transparent outline-none w-full"
// // // // // // // // //                   placeholder="Search by name, email, or event..."
// // // // // // // // //                   value={searchTerm}
// // // // // // // // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="flex items-center gap-4">
// // // // // // // // //               <select
// // // // // // // // //                 className="bg-gray-100 px-4 py-3 rounded-lg min-w-[150px]"
// // // // // // // // //                 value={statusFilter}
// // // // // // // // //                 onChange={(e) => setStatusFilter(e.target.value)}
// // // // // // // // //               >
// // // // // // // // //                 <option value="all">All Status</option>
// // // // // // // // //                 <option value="active">Active</option>
// // // // // // // // //                 <option value="cancelled">Cancelled</option>
// // // // // // // // //               </select>
              
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => {
// // // // // // // // //                   const dataStr = JSON.stringify(filteredAttendees, null, 2);
// // // // // // // // //                   const blob = new Blob([dataStr], { type: 'application/json' });
// // // // // // // // //                   const url = URL.createObjectURL(blob);
// // // // // // // // //                   const a = document.createElement('a');
// // // // // // // // //                   a.href = url;
// // // // // // // // //                   a.download = `attendees-${new Date().toISOString().split('T')[0]}.json`;
// // // // // // // // //                   document.body.appendChild(a);
// // // // // // // // //                   a.click();
// // // // // // // // //                   document.body.removeChild(a);
// // // // // // // // //                   URL.revokeObjectURL(url);
// // // // // // // // //                 }}
// // // // // // // // //                 className="flex items-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
// // // // // // // // //                 disabled={filteredAttendees.length === 0}
// // // // // // // // //               >
// // // // // // // // //                 <Download className="h-5 w-5 mr-2" /> Export
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Attendees Table */}
// // // // // // // // //         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
// // // // // // // // //           <div className="overflow-x-auto">
// // // // // // // // //             <table className="min-w-full">
// // // // // // // // //               <thead className="bg-gray-50">
// // // // // // // // //                 <tr>
// // // // // // // // //                   <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Attendee</th>
// // // // // // // // //                   <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Event</th>
// // // // // // // // //                   <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
// // // // // // // // //                   <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Ticket</th>
// // // // // // // // //                   <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
// // // // // // // // //                 </tr>
// // // // // // // // //               </thead>
              
// // // // // // // // //               <tbody className="divide-y divide-gray-200">
// // // // // // // // //                 {filteredAttendees.length > 0 ? (
// // // // // // // // //                   filteredAttendees.map((attendee) => (
// // // // // // // // //                     <tr key={attendee.id} className="hover:bg-gray-50">
// // // // // // // // //                       <td className="px-6 py-4">
// // // // // // // // //                         <div className="flex items-center">
// // // // // // // // //                           <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
// // // // // // // // //                             <User className="h-5 w-5 text-blue-600" />
// // // // // // // // //                           </div>
// // // // // // // // //                           <div className="ml-4">
// // // // // // // // //                             <div className="font-medium text-gray-900">
// // // // // // // // //                               {attendee.user?.name || 'Unknown'}
// // // // // // // // //                             </div>
// // // // // // // // //                             <div className="text-sm text-gray-500 flex items-center mt-1">
// // // // // // // // //                               <Mail className="h-3 w-3 mr-1" />
// // // // // // // // //                               {attendee.user?.email || 'No email'}
// // // // // // // // //                             </div>
// // // // // // // // //                             {attendee.user?.phone && (
// // // // // // // // //                               <div className="text-xs text-gray-400 flex items-center mt-1">
// // // // // // // // //                                 <Phone className="h-3 w-3 mr-1" />
// // // // // // // // //                                 {attendee.user.phone}
// // // // // // // // //                               </div>
// // // // // // // // //                             )}
// // // // // // // // //                           </div>
// // // // // // // // //                         </div>
// // // // // // // // //                       </td>
                      
// // // // // // // // //                       <td className="px-6 py-4">
// // // // // // // // //                         <div className="font-medium text-gray-900">
// // // // // // // // //                           {attendee.eventName || 'Unknown Event'}
// // // // // // // // //                         </div>
// // // // // // // // //                         <div className="text-sm text-gray-500 flex items-center mt-1">
// // // // // // // // //                           <Calendar className="h-3 w-3 mr-1" />
// // // // // // // // //                           {attendee.date ? new Date(attendee.date).toLocaleDateString() : 'N/A'}
// // // // // // // // //                         </div>
// // // // // // // // //                         <div className="text-sm text-gray-500 flex items-center mt-1">
// // // // // // // // //                           <MapPin className="h-3 w-3 mr-1" />
// // // // // // // // //                           {attendee.location ? attendee.location.split(',')[0] : 'Online'}
// // // // // // // // //                         </div>
// // // // // // // // //                       </td>
                      
// // // // // // // // //                       <td className="px-6 py-4">
// // // // // // // // //                         <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
// // // // // // // // //                           attendee.booking_status === 'active' 
// // // // // // // // //                             ? 'bg-green-100 text-green-800'
// // // // // // // // //                             : 'bg-red-100 text-red-800'
// // // // // // // // //                         }`}>
// // // // // // // // //                           {attendee.booking_status === 'active' ? 'Active' : 'Cancelled'}
// // // // // // // // //                         </span>
// // // // // // // // //                         <div className="text-xs text-gray-500 mt-2">
// // // // // // // // //                           {attendee.tickets || 1} ticket(s)
// // // // // // // // //                         </div>
// // // // // // // // //                       </td>
                      
// // // // // // // // //                       <td className="px-6 py-4">
// // // // // // // // //                         <div className="flex items-center text-gray-900">
// // // // // // // // //                           <Ticket className="h-4 w-4 mr-2" />
// // // // // // // // //                           <span className="font-medium">{attendee.ticketType || 'General'}</span>
// // // // // // // // //                         </div>
// // // // // // // // //                         <div className="flex items-center text-gray-900 mt-2">
// // // // // // // // //                           <DollarSign className="h-4 w-4 mr-2" />
// // // // // // // // //                           <span className="font-medium">${attendee.totalPrice || '0.00'}</span>
// // // // // // // // //                         </div>
// // // // // // // // //                       </td>
                      
// // // // // // // // //                       <td className="px-6 py-4">
// // // // // // // // //                         <div className="flex flex-col space-y-2">
// // // // // // // // //                           <button
// // // // // // // // //                             onClick={() => {
// // // // // // // // //                               alert(
// // // // // // // // //                                 `Attendee Details:\n\n` +
// // // // // // // // //                                 `Name: ${attendee.user?.name || 'Unknown'}\n` +
// // // // // // // // //                                 `Email: ${attendee.user?.email || 'N/A'}\n` +
// // // // // // // // //                                 `Phone: ${attendee.user?.phone || 'N/A'}\n` +
// // // // // // // // //                                 `Event: ${attendee.eventName || 'Unknown'}\n` +
// // // // // // // // //                                 `Date: ${attendee.date ? new Date(attendee.date).toLocaleDateString() : 'N/A'}\n` +
// // // // // // // // //                                 `Location: ${attendee.location || 'Online'}\n` +
// // // // // // // // //                                 `Status: ${attendee.booking_status || 'Unknown'}\n` +
// // // // // // // // //                                 `Ticket: ${attendee.ticketType || 'General'}\n` +
// // // // // // // // //                                 `Amount: $${attendee.totalPrice || '0.00'}\n` +
// // // // // // // // //                                 `Tickets: ${attendee.tickets || 1}`
// // // // // // // // //                               );
// // // // // // // // //                             }}
// // // // // // // // //                             className="flex items-center text-blue-600 hover:text-blue-800"
// // // // // // // // //                           >
// // // // // // // // //                             <Eye className="h-4 w-4 mr-2" />
// // // // // // // // //                             View Details
// // // // // // // // //                           </button>
                          
// // // // // // // // //                           {attendee.booking_status === 'active' && (
// // // // // // // // //                             <button
// // // // // // // // //                               onClick={() => alert(`Check-in functionality for ${attendee.user?.name}`)}
// // // // // // // // //                               className="flex items-center text-green-600 hover:text-green-800"
// // // // // // // // //                             >
// // // // // // // // //                               <CheckCircle className="h-4 w-4 mr-2" />
// // // // // // // // //                               Check In
// // // // // // // // //                             </button>
// // // // // // // // //                           )}
// // // // // // // // //                         </div>
// // // // // // // // //                       </td>
// // // // // // // // //                     </tr>
// // // // // // // // //                   ))
// // // // // // // // //                 ) : (
// // // // // // // // //                   <tr>
// // // // // // // // //                     <td colSpan="5" className="px-6 py-12 text-center">
// // // // // // // // //                       <div className="flex flex-col items-center">
// // // // // // // // //                         <Users className="h-12 w-12 text-gray-300 mb-4" />
// // // // // // // // //                         <h3 className="text-lg font-medium text-gray-900 mb-2">
// // // // // // // // //                           {attendees.length === 0 ? 'No attendees found' : 'No matching attendees'}
// // // // // // // // //                         </h3>
// // // // // // // // //                         <p className="text-gray-500">
// // // // // // // // //                           {attendees.length === 0 
// // // // // // // // //                             ? 'There are no attendees in the system yet.' 
// // // // // // // // //                             : 'Try adjusting your search or filters.'}
// // // // // // // // //                         </p>
// // // // // // // // //                       </div>
// // // // // // // // //                     </td>
// // // // // // // // //                   </tr>
// // // // // // // // //                 )}
// // // // // // // // //               </tbody>
// // // // // // // // //             </table>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Pagination */}
// // // // // // // // //         {pagination.lastPage > 1 && (
// // // // // // // // //           <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
// // // // // // // // //             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
// // // // // // // // //               <div className="text-sm text-gray-700">
// // // // // // // // //                 Page {pagination.currentPage} of {pagination.lastPage} • 
// // // // // // // // //                 Total {pagination.total} attendees
// // // // // // // // //               </div>
              
// // // // // // // // //               <div className="flex items-center space-x-2">
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={handlePrevPage}
// // // // // // // // //                   disabled={currentPage === 1}
// // // // // // // // //                   className={`px-3 py-2 rounded ${
// // // // // // // // //                     currentPage === 1 
// // // // // // // // //                       ? 'text-gray-400 cursor-not-allowed' 
// // // // // // // // //                       : 'text-gray-700 hover:bg-gray-100'
// // // // // // // // //                   }`}
// // // // // // // // //                 >
// // // // // // // // //                   <ChevronLeft className="h-5 w-5" />
// // // // // // // // //                 </button>
                
// // // // // // // // //                 <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
// // // // // // // // //                   {currentPage}
// // // // // // // // //                 </span>
                
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={handleNextPage}
// // // // // // // // //                   disabled={currentPage === pagination.lastPage}
// // // // // // // // //                   className={`px-3 py-2 rounded ${
// // // // // // // // //                     currentPage === pagination.lastPage 
// // // // // // // // //                       ? 'text-gray-400 cursor-not-allowed' 
// // // // // // // // //                       : 'text-gray-700 hover:bg-gray-100'
// // // // // // // // //                   }`}
// // // // // // // // //                 >
// // // // // // // // //                   <ChevronRight className="h-5 w-5" />
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default OrganizerAttendees;
// // // // // // // // "use client";

// // // // // // // // import { useQuery } from "@tanstack/react-query";
// // // // // // // // import {
// // // // // // // //   BadgeCheck,
// // // // // // // //   Calendar,
// // // // // // // //   CheckCircle,
// // // // // // // //   ChevronLeft,
// // // // // // // //   ChevronRight,
// // // // // // // //   DollarSign,
// // // // // // // //   Download,
// // // // // // // //   Eye,
// // // // // // // //   Mail,
// // // // // // // //   MapPin,
// // // // // // // //   Phone,
// // // // // // // //   Search,
// // // // // // // //   Ticket,
// // // // // // // //   User,
// // // // // // // //   Users,
// // // // // // // //   XCircle
// // // // // // // // } from "lucide-react";
// // // // // // // // import { useState } from "react";
// // // // // // // // import { attendeesService } from "../../services/attendeesService";

// // // // // // // // const OrganizerAttendees = () => {
// // // // // // // //   // State
// // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // //   const [statusFilter, setStatusFilter] = useState("all");
// // // // // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // // // // //   const perPage = 20;

// // // // // // // //   // Fetch attendees
// // // // // // // //   const { data, isLoading, error } = useQuery({
// // // // // // // //     queryKey: ["attendees", currentPage],
// // // // // // // //     queryFn: () => attendeesService.list({
// // // // // // // //       page: currentPage,
// // // // // // // //       perPage: perPage,
// // // // // // // //     }),
// // // // // // // //   });

// // // // // // // //   // Extract data from response
// // // // // // // //   const attendees = data?.data || []; // This is the array from your response
// // // // // // // //   const pagination = {
// // // // // // // //     currentPage: data?.currentPage || 1,
// // // // // // // //     lastPage: data?.lastPage || 1,
// // // // // // // //     total: data?.total || 0
// // // // // // // //   };

// // // // // // // //   // Filter attendees based on search and status
// // // // // // // //   const filteredAttendees = attendees.filter(attendee => {
// // // // // // // //     // Search filter
// // // // // // // //     const searchLower = searchTerm.toLowerCase();
// // // // // // // //     const matchesSearch = 
// // // // // // // //       (attendee.user?.name || '').toLowerCase().includes(searchLower) ||
// // // // // // // //       (attendee.user?.email || '').toLowerCase().includes(searchLower) ||
// // // // // // // //       (attendee.eventName || '').toLowerCase().includes(searchLower);
    
// // // // // // // //     // Status filter
// // // // // // // //     const matchesStatus = 
// // // // // // // //       statusFilter === "all" || 
// // // // // // // //       (attendee.booking_status || '').toLowerCase() === statusFilter.toLowerCase();
    
// // // // // // // //     return matchesSearch && matchesStatus;
// // // // // // // //   });

// // // // // // // //   // Calculate stats
// // // // // // // //   const stats = {
// // // // // // // //     total: pagination.total,
// // // // // // // //     active: attendees.filter(a => a.booking_status === 'active').length,
// // // // // // // //     cancelled: attendees.filter(a => a.booking_status === 'cancelled').length,
// // // // // // // //   };

// // // // // // // //   // Pagination handlers
// // // // // // // //   const handleNextPage = () => {
// // // // // // // //     if (currentPage < pagination.lastPage) {
// // // // // // // //       setCurrentPage(prev => prev + 1);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handlePrevPage = () => {
// // // // // // // //     if (currentPage > 1) {
// // // // // // // //       setCurrentPage(prev => prev - 1);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Handle check-in
// // // // // // // //   const handleCheckIn = (attendeeId, attendeeName) => {
// // // // // // // //     if (window.confirm(`Check in ${attendeeName}?`)) {
// // // // // // // //       alert(`Checking in ${attendeeName}... (ID: ${attendeeId})`);
// // // // // // // //       // In real app: attendeesService.checkIn(attendeeId);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Handle export
// // // // // // // //   const handleExport = () => {
// // // // // // // //     const exportData = filteredAttendees.map(att => ({
// // // // // // // //       name: att.user?.name,
// // // // // // // //       email: att.user?.email,
// // // // // // // //       event: att.eventName,
// // // // // // // //       date: att.date,
// // // // // // // //       status: att.booking_status,
// // // // // // // //       ticket: att.ticketType,
// // // // // // // //       amount: att.totalPrice,
// // // // // // // //       tickets: att.tickets
// // // // // // // //     }));

// // // // // // // //     const dataStr = JSON.stringify(exportData, null, 2);
// // // // // // // //     const blob = new Blob([dataStr], { type: 'application/json' });
// // // // // // // //     const url = URL.createObjectURL(blob);
// // // // // // // //     const a = document.createElement('a');
// // // // // // // //     a.href = url;
// // // // // // // //     a.download = `attendees-export-${new Date().toISOString().split('T')[0]}.json`;
// // // // // // // //     document.body.appendChild(a);
// // // // // // // //     a.click();
// // // // // // // //     document.body.removeChild(a);
// // // // // // // //     URL.revokeObjectURL(url);
// // // // // // // //   };

// // // // // // // //   // Loading state
// // // // // // // //   if (isLoading) {
// // // // // // // //     return (
// // // // // // // //       <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// // // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // // //           <div className="animate-pulse">
// // // // // // // //             <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
// // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // // // // // //               {[1, 2, 3].map(i => (
// // // // // // // //                 <div key={i} className="bg-white p-6 rounded-lg shadow">
// // // // // // // //                   <div className="h-8 w-8 bg-gray-300 rounded"></div>
// // // // // // // //                   <div className="mt-4 space-y-2">
// // // // // // // //                     <div className="h-4 bg-gray-300 rounded w-1/2"></div>
// // // // // // // //                     <div className="h-6 bg-gray-300 rounded w-1/3"></div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //             <div className="bg-white p-6 rounded-lg shadow h-96"></div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   // Error state
// // // // // // // //   if (error) {
// // // // // // // //     return (
// // // // // // // //       <div className="min-h-screen bg-gray-50 p-8">
// // // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // // //           <div className="bg-red-50 border border-red-200 rounded-lg p-6">
// // // // // // // //             <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Attendees</h2>
// // // // // // // //             <p className="text-red-700">{error.message}</p>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // //         {/* Header */}
// // // // // // // //         <div className="mb-8">
// // // // // // // //           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Attendees Management</h1>
// // // // // // // //           <p className="text-gray-600 mt-1">Manage all event attendees and bookings</p>
// // // // // // // //         </div>

// // // // // // // //         {/* Stats */}
// // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
// // // // // // // //           <div className="bg-white rounded-xl shadow p-6">
// // // // // // // //             <div className="flex items-center">
// // // // // // // //               <Users className="h-10 w-10 text-blue-500" />
// // // // // // // //               <div className="ml-4">
// // // // // // // //                 <p className="text-sm text-gray-600">Total Attendees</p>
// // // // // // // //                 <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
          
// // // // // // // //           <div className="bg-white rounded-xl shadow p-6">
// // // // // // // //             <div className="flex items-center">
// // // // // // // //               <BadgeCheck className="h-10 w-10 text-green-500" />
// // // // // // // //               <div className="ml-4">
// // // // // // // //                 <p className="text-sm text-gray-600">Active Bookings</p>
// // // // // // // //                 <p className="text-3xl font-bold text-gray-900">{stats.active}</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
          
// // // // // // // //           <div className="bg-white rounded-xl shadow p-6">
// // // // // // // //             <div className="flex items-center">
// // // // // // // //               <XCircle className="h-10 w-10 text-red-500" />
// // // // // // // //               <div className="ml-4">
// // // // // // // //                 <p className="text-sm text-gray-600">Cancelled</p>
// // // // // // // //                 <p className="text-3xl font-bold text-gray-900">{stats.cancelled}</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Filters */}
// // // // // // // //         <div className="bg-white rounded-xl shadow p-4 md:p-6 mb-6">
// // // // // // // //           <div className="flex flex-col md:flex-row gap-4">
// // // // // // // //             <div className="flex-1">
// // // // // // // //               <div className="relative">
// // // // // // // //                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="Search by name, email, or event..."
// // // // // // // //                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
// // // // // // // //                   value={searchTerm}
// // // // // // // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             </div>
            
// // // // // // // //             <div className="flex flex-col sm:flex-row gap-4">
// // // // // // // //               <select
// // // // // // // //                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
// // // // // // // //                 value={statusFilter}
// // // // // // // //                 onChange={(e) => setStatusFilter(e.target.value)}
// // // // // // // //               >
// // // // // // // //                 <option value="all">All Status</option>
// // // // // // // //                 <option value="active">Active</option>
// // // // // // // //                 <option value="cancelled">Cancelled</option>
// // // // // // // //               </select>
              
// // // // // // // //               <button
// // // // // // // //                 onClick={handleExport}
// // // // // // // //                 disabled={filteredAttendees.length === 0}
// // // // // // // //                 className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
// // // // // // // //               >
// // // // // // // //                 <Download className="h-5 w-5" />
// // // // // // // //                 <span>Export ({filteredAttendees.length})</span>
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Attendees Table */}
// // // // // // // //         <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
// // // // // // // //           <div className="overflow-x-auto">
// // // // // // // //             <table className="min-w-full divide-y divide-gray-200">
// // // // // // // //               <thead className="bg-gray-50">
// // // // // // // //                 <tr>
// // // // // // // //                   <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // //                     Attendee
// // // // // // // //                   </th>
// // // // // // // //                   <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // //                     Event Details
// // // // // // // //                   </th>
// // // // // // // //                   <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // //                     Status
// // // // // // // //                   </th>
// // // // // // // //                   <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // //                     Ticket Info
// // // // // // // //                   </th>
// // // // // // // //                   <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // // //                     Actions
// // // // // // // //                   </th>
// // // // // // // //                 </tr>
// // // // // // // //               </thead>
// // // // // // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // // // // // //                 {filteredAttendees.length > 0 ? (
// // // // // // // //                   filteredAttendees.map((attendee) => (
// // // // // // // //                     <tr key={attendee.id} className="hover:bg-gray-50 transition">
// // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                         <div className="flex items-center">
// // // // // // // //                           <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
// // // // // // // //                             <User className="h-6 w-6 text-blue-600" />
// // // // // // // //                           </div>
// // // // // // // //                           <div className="ml-4">
// // // // // // // //                             <div className="text-sm font-semibold text-gray-900">
// // // // // // // //                               {attendee.user?.name}
// // // // // // // //                             </div>
// // // // // // // //                             <div className="text-sm text-gray-500 flex items-center mt-1">
// // // // // // // //                               <Mail className="h-3 w-3 mr-1" />
// // // // // // // //                               {attendee.user?.email}
// // // // // // // //                             </div>
// // // // // // // //                             {attendee.user?.phone && (
// // // // // // // //                               <div className="text-xs text-gray-400 flex items-center mt-1">
// // // // // // // //                                 <Phone className="h-3 w-3 mr-1" />
// // // // // // // //                                 {attendee.user.phone}
// // // // // // // //                               </div>
// // // // // // // //                             )}
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       </td>
                      
// // // // // // // //                       <td className="px-6 py-4">
// // // // // // // //                         <div className="text-sm font-semibold text-gray-900">
// // // // // // // //                           {attendee.eventName}
// // // // // // // //                         </div>
// // // // // // // //                         <div className="text-sm text-gray-600 flex items-center mt-1">
// // // // // // // //                           <Calendar className="h-3 w-3 mr-2" />
// // // // // // // //                           {new Date(attendee.date).toLocaleDateString('en-US', {
// // // // // // // //                             weekday: 'short',
// // // // // // // //                             year: 'numeric',
// // // // // // // //                             month: 'short',
// // // // // // // //                             day: 'numeric'
// // // // // // // //                           })}
// // // // // // // //                         </div>
// // // // // // // //                         <div className="text-sm text-gray-600 flex items-start mt-1">
// // // // // // // //                           <MapPin className="h-3 w-3 mr-2 mt-1 flex-shrink-0" />
// // // // // // // //                           <span className="line-clamp-2">{attendee.location}</span>
// // // // // // // //                         </div>
// // // // // // // //                       </td>
                      
// // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                         <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${
// // // // // // // //                           attendee.booking_status === 'active'
// // // // // // // //                             ? 'bg-green-100 text-green-800'
// // // // // // // //                             : 'bg-red-100 text-red-800'
// // // // // // // //                         }`}>
// // // // // // // //                           {attendee.booking_status === 'active' ? (
// // // // // // // //                             <>
// // // // // // // //                               <BadgeCheck className="h-4 w-4 mr-1.5" />
// // // // // // // //                               Active
// // // // // // // //                             </>
// // // // // // // //                           ) : (
// // // // // // // //                             <>
// // // // // // // //                               <XCircle className="h-4 w-4 mr-1.5" />
// // // // // // // //                               Cancelled
// // // // // // // //                             </>
// // // // // // // //                           )}
// // // // // // // //                         </div>
// // // // // // // //                         <div className="text-xs text-gray-500 mt-2">
// // // // // // // //                           {attendee.tickets} ticket{attendee.tickets !== 1 ? 's' : ''}
// // // // // // // //                         </div>
// // // // // // // //                       </td>
                      
// // // // // // // //                       <td className="px-6 py-4">
// // // // // // // //                         <div className="flex items-center text-gray-900">
// // // // // // // //                           <Ticket className="h-4 w-4 mr-2 text-blue-500" />
// // // // // // // //                           <span className="font-medium">{attendee.ticketType}</span>
// // // // // // // //                         </div>
// // // // // // // //                         <div className="flex items-center text-gray-900 mt-2">
// // // // // // // //                           <DollarSign className="h-4 w-4 mr-2 text-green-500" />
// // // // // // // //                           <span className="font-semibold">${attendee.totalPrice}</span>
// // // // // // // //                         </div>
// // // // // // // //                       </td>
                      
// // // // // // // //                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // // // // // // //                         <div className="flex flex-col space-y-2">
// // // // // // // //                           <button
// // // // // // // //                             onClick={() => {
// // // // // // // //                               alert(
// // // // // // // //                                 `Attendee Details:\n\n` +
// // // // // // // //                                 `Name: ${attendee.user?.name}\n` +
// // // // // // // //                                 `Email: ${attendee.user?.email}\n` +
// // // // // // // //                                 `Phone: ${attendee.user?.phone}\n` +
// // // // // // // //                                 `Event: ${attendee.eventName}\n` +
// // // // // // // //                                 `Date: ${new Date(attendee.date).toLocaleDateString()}\n` +
// // // // // // // //                                 `Time: ${attendee.time}\n` +
// // // // // // // //                                 `Location: ${attendee.location}\n` +
// // // // // // // //                                 `Status: ${attendee.booking_status}\n` +
// // // // // // // //                                 `Ticket: ${attendee.ticketType}\n` +
// // // // // // // //                                 `Price: $${attendee.ticketPrice}\n` +
// // // // // // // //                                 `Total: $${attendee.totalPrice}\n` +
// // // // // // // //                                 `Tickets: ${attendee.tickets}\n` +
// // // // // // // //                                 `Booking ID: ${attendee.id}`
// // // // // // // //                               );
// // // // // // // //                             }}
// // // // // // // //                             className="inline-flex items-center text-blue-600 hover:text-blue-900"
// // // // // // // //                           >
// // // // // // // //                             <Eye className="h-4 w-4 mr-1.5" />
// // // // // // // //                             View Details
// // // // // // // //                           </button>
                          
// // // // // // // //                           {attendee.booking_status === 'active' && (
// // // // // // // //                             <button
// // // // // // // //                               onClick={() => handleCheckIn(attendee.id, attendee.user?.name)}
// // // // // // // //                               className="inline-flex items-center text-green-600 hover:text-green-900"
// // // // // // // //                             >
// // // // // // // //                               <CheckCircle className="h-4 w-4 mr-1.5" />
// // // // // // // //                               Check In
// // // // // // // //                             </button>
// // // // // // // //                           )}
// // // // // // // //                         </div>
// // // // // // // //                       </td>
// // // // // // // //                     </tr>
// // // // // // // //                   ))
// // // // // // // //                 ) : (
// // // // // // // //                   <tr>
// // // // // // // //                     <td colSpan="5" className="px-6 py-12 text-center">
// // // // // // // //                       <div className="flex flex-col items-center justify-center">
// // // // // // // //                         <Users className="h-16 w-16 text-gray-300 mb-4" />
// // // // // // // //                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // // // // // // //                           {searchTerm || statusFilter !== 'all' ? 'No matching attendees found' : 'No attendees yet'}
// // // // // // // //                         </h3>
// // // // // // // //                         <p className="text-gray-500 max-w-md">
// // // // // // // //                           {searchTerm || statusFilter !== 'all' 
// // // // // // // //                             ? 'Try adjusting your search terms or filters.' 
// // // // // // // //                             : 'Attendees will appear here once they register for your events.'}
// // // // // // // //                         </p>
// // // // // // // //                       </div>
// // // // // // // //                     </td>
// // // // // // // //                   </tr>
// // // // // // // //                 )}
// // // // // // // //               </tbody>
// // // // // // // //             </table>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Pagination */}
// // // // // // // //         {pagination.lastPage > 1 && (
// // // // // // // //           <div className="bg-white rounded-xl shadow px-6 py-4">
// // // // // // // //             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
// // // // // // // //               <div className="text-sm text-gray-700">
// // // // // // // //                 <span className="font-medium">Page {pagination.currentPage}</span> of{" "}
// // // // // // // //                 <span className="font-medium">{pagination.lastPage}</span> •{" "}
// // // // // // // //                 <span className="font-medium">{filteredAttendees.length}</span> of{" "}
// // // // // // // //                 <span className="font-medium">{pagination.total}</span> total attendees
// // // // // // // //               </div>
              
// // // // // // // //               <div className="flex items-center space-x-2">
// // // // // // // //                 <button
// // // // // // // //                   onClick={handlePrevPage}
// // // // // // // //                   disabled={currentPage === 1}
// // // // // // // //                   className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium ${
// // // // // // // //                     currentPage === 1
// // // // // // // //                       ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
// // // // // // // //                       : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
// // // // // // // //                   }`}
// // // // // // // //                 >
// // // // // // // //                   <ChevronLeft className="h-4 w-4 mr-1" />
// // // // // // // //                   Previous
// // // // // // // //                 </button>
                
// // // // // // // //                 <span className="px-3 py-2 text-sm font-medium text-gray-700">
// // // // // // // //                   Page {currentPage}
// // // // // // // //                 </span>
                
// // // // // // // //                 <button
// // // // // // // //                   onClick={handleNextPage}
// // // // // // // //                   disabled={currentPage === pagination.lastPage}
// // // // // // // //                   className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium ${
// // // // // // // //                     currentPage === pagination.lastPage
// // // // // // // //                       ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
// // // // // // // //                       : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
// // // // // // // //                   }`}
// // // // // // // //                 >
// // // // // // // //                   Next
// // // // // // // //                   <ChevronRight className="h-4 w-4 ml-1" />
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default OrganizerAttendees;
// // // // // // // "use client";

// // // // // // // import { useQuery } from "@tanstack/react-query";
// // // // // // // import {
// // // // // // //   BadgeCheck,
// // // // // // //   Calendar,
// // // // // // //   CheckCircle,
// // // // // // //   ChevronLeft,
// // // // // // //   ChevronRight,
// // // // // // //   DollarSign,
// // // // // // //   Download,
// // // // // // //   Eye,
// // // // // // //   Mail,
// // // // // // //   MapPin,
// // // // // // //   Phone,
// // // // // // //   Search,
// // // // // // //   Ticket,
// // // // // // //   User,
// // // // // // //   Users,
// // // // // // //   XCircle
// // // // // // // } from "lucide-react";
// // // // // // // import { useState } from "react";
// // // // // // // import { attendeesService } from "../../services/attendeesService";

// // // // // // // const OrganizerAttendees = () => {
// // // // // // //   // State
// // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // //   const [statusFilter, setStatusFilter] = useState("all");
// // // // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // // // //   const perPage = 20;

// // // // // // //   // Fetch attendees
// // // // // // //   const { data, isLoading, error } = useQuery({
// // // // // // //     queryKey: ["attendees", currentPage],
// // // // // // //     queryFn: () => attendeesService.list({
// // // // // // //       page: currentPage,
// // // // // // //       perPage: perPage,
// // // // // // //     }),
// // // // // // //   });

// // // // // // //   // DEBUG: Log the data to see what we're getting
// // // // // // //   console.log("API Data received:", data);
// // // // // // //   console.log("Type of data:", typeof data);
// // // // // // //   console.log("Is data an array?", Array.isArray(data));

// // // // // // //   // BULLETPROOF data extraction
// // // // // // //   let attendees = [];
// // // // // // //   let pagination = {
// // // // // // //     currentPage: 1,
// // // // // // //     lastPage: 1,
// // // // // // //     total: 0
// // // // // // //   };

// // // // // // //   // Method 1: Check if data.data exists and is an array
// // // // // // //   if (data && data.data && Array.isArray(data.data)) {
// // // // // // //     console.log("Using data.data array");
// // // // // // //     attendees = data.data;
// // // // // // //   } 
// // // // // // //   // Method 2: Check if data itself is an array
// // // // // // //   else if (Array.isArray(data)) {
// // // // // // //     console.log("Using data as array directly");
// // // // // // //     attendees = data;
// // // // // // //   }
// // // // // // //   // Method 3: Check for any other array property
// // // // // // //   else if (data && typeof data === 'object') {
// // // // // // //     console.log("Checking for array properties in data object");
// // // // // // //     // Check all properties for an array
// // // // // // //     const possibleArrays = ['attendees', 'items', 'results', 'list', 'records'];
// // // // // // //     for (const key of possibleArrays) {
// // // // // // //       if (data[key] && Array.isArray(data[key])) {
// // // // // // //         console.log(`Found array in property: ${key}`);
// // // // // // //         attendees = data[key];
// // // // // // //         break;
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }

// // // // // // //   console.log("Final attendees array length:", attendees.length);

// // // // // // //   // Extract pagination info safely
// // // // // // //   if (data && typeof data === 'object') {
// // // // // // //     pagination = {
// // // // // // //       currentPage: data.currentPage || 1,
// // // // // // //       lastPage: data.lastPage || 1,
// // // // // // //       total: data.total || 0
// // // // // // //     };
// // // // // // //   }

// // // // // // //   // SAFE filter function - ensures attendees is always an array
// // // // // // //   const getFilteredAttendees = () => {
// // // // // // //     if (!Array.isArray(attendees)) {
// // // // // // //       console.error("attendees is not an array, returning empty array");
// // // // // // //       return [];
// // // // // // //     }

// // // // // // //     return attendees.filter(attendee => {
// // // // // // //       if (!attendee || typeof attendee !== 'object') return false;
      
// // // // // // //       // Search filter
// // // // // // //       const searchLower = searchTerm.toLowerCase();
// // // // // // //       const name = attendee.user?.name || '';
// // // // // // //       const email = attendee.user?.email || '';
// // // // // // //       const eventName = attendee.eventName || '';
      
// // // // // // //       const matchesSearch = 
// // // // // // //         name.toLowerCase().includes(searchLower) ||
// // // // // // //         email.toLowerCase().includes(searchLower) ||
// // // // // // //         eventName.toLowerCase().includes(searchLower);
      
// // // // // // //       // Status filter
// // // // // // //       const bookingStatus = attendee.booking_status || '';
// // // // // // //       const matchesStatus = 
// // // // // // //         statusFilter === "all" || 
// // // // // // //         bookingStatus.toLowerCase() === statusFilter.toLowerCase();
      
// // // // // // //       return matchesSearch && matchesStatus;
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const filteredAttendees = getFilteredAttendees();

// // // // // // //   // SAFE stats calculation
// // // // // // //   const getStats = () => {
// // // // // // //     if (!Array.isArray(attendees)) {
// // // // // // //       return { total: 0, active: 0, cancelled: 0 };
// // // // // // //     }

// // // // // // //     return {
// // // // // // //       total: pagination.total,
// // // // // // //       active: attendees.filter(a => a && a.booking_status === 'active').length,
// // // // // // //       cancelled: attendees.filter(a => a && a.booking_status === 'cancelled').length,
// // // // // // //     };
// // // // // // //   };

// // // // // // //   const stats = getStats();

// // // // // // //   // Pagination handlers
// // // // // // //   const handleNextPage = () => {
// // // // // // //     if (currentPage < pagination.lastPage) {
// // // // // // //       setCurrentPage(prev => prev + 1);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handlePrevPage = () => {
// // // // // // //     if (currentPage > 1) {
// // // // // // //       setCurrentPage(prev => prev - 1);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Handle check-in
// // // // // // //   const handleCheckIn = (attendeeId, attendeeName) => {
// // // // // // //     if (window.confirm(`Check in ${attendeeName}?`)) {
// // // // // // //       alert(`Checking in ${attendeeName}... (ID: ${attendeeId})`);
// // // // // // //       // In real app: attendeesService.checkIn(attendeeId);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Handle export
// // // // // // //   const handleExport = () => {
// // // // // // //     const exportData = filteredAttendees.map(att => ({
// // // // // // //       name: att.user?.name,
// // // // // // //       email: att.user?.email,
// // // // // // //       event: att.eventName,
// // // // // // //       date: att.date,
// // // // // // //       status: att.booking_status,
// // // // // // //       ticket: att.ticketType,
// // // // // // //       amount: att.totalPrice,
// // // // // // //       tickets: att.tickets
// // // // // // //     }));

// // // // // // //     const dataStr = JSON.stringify(exportData, null, 2);
// // // // // // //     const blob = new Blob([dataStr], { type: 'application/json' });
// // // // // // //     const url = URL.createObjectURL(blob);
// // // // // // //     const a = document.createElement('a');
// // // // // // //     a.href = url;
// // // // // // //     a.download = `attendees-export-${new Date().toISOString().split('T')[0]}.json`;
// // // // // // //     document.body.appendChild(a);
// // // // // // //     a.click();
// // // // // // //     document.body.removeChild(a);
// // // // // // //     URL.revokeObjectURL(url);
// // // // // // //   };

// // // // // // //   // Loading state
// // // // // // //   if (isLoading) {
// // // // // // //     return (
// // // // // // //       <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // //           <div className="animate-pulse">
// // // // // // //             <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
// // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // // // // //               {[1, 2, 3].map(i => (
// // // // // // //                 <div key={i} className="bg-white p-6 rounded-lg shadow">
// // // // // // //                   <div className="h-8 w-8 bg-gray-300 rounded"></div>
// // // // // // //                   <div className="mt-4 space-y-2">
// // // // // // //                     <div className="h-4 bg-gray-300 rounded w-1/2"></div>
// // // // // // //                     <div className="h-6 bg-gray-300 rounded w-1/3"></div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //             <div className="bg-white p-6 rounded-lg shadow h-96"></div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   // Error state
// // // // // // //   if (error) {
// // // // // // //     return (
// // // // // // //       <div className="min-h-screen bg-gray-50 p-8">
// // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // //           <div className="bg-red-50 border border-red-200 rounded-lg p-6">
// // // // // // //             <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Attendees</h2>
// // // // // // //             <p className="text-red-700">{error.message}</p>
// // // // // // //             <p className="text-sm text-red-600 mt-2">Please check the browser console for more details.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // //         {/* Header */}
// // // // // // //         <div className="mb-8">
// // // // // // //           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Attendees Management</h1>
// // // // // // //           <p className="text-gray-600 mt-1">Manage all event attendees and bookings</p>
// // // // // // //         </div>

// // // // // // //         {/* Stats */}
// // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
// // // // // // //           <div className="bg-white rounded-xl shadow p-6">
// // // // // // //             <div className="flex items-center">
// // // // // // //               <Users className="h-10 w-10 text-blue-500" />
// // // // // // //               <div className="ml-4">
// // // // // // //                 <p className="text-sm text-gray-600">Total Attendees</p>
// // // // // // //                 <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="bg-white rounded-xl shadow p-6">
// // // // // // //             <div className="flex items-center">
// // // // // // //               <BadgeCheck className="h-10 w-10 text-green-500" />
// // // // // // //               <div className="ml-4">
// // // // // // //                 <p className="text-sm text-gray-600">Active Bookings</p>
// // // // // // //                 <p className="text-3xl font-bold text-gray-900">{stats.active}</p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="bg-white rounded-xl shadow p-6">
// // // // // // //             <div className="flex items-center">
// // // // // // //               <XCircle className="h-10 w-10 text-red-500" />
// // // // // // //               <div className="ml-4">
// // // // // // //                 <p className="text-sm text-gray-600">Cancelled</p>
// // // // // // //                 <p className="text-3xl font-bold text-gray-900">{stats.cancelled}</p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Filters */}
// // // // // // //         <div className="bg-white rounded-xl shadow p-4 md:p-6 mb-6">
// // // // // // //           <div className="flex flex-col md:flex-row gap-4">
// // // // // // //             <div className="flex-1">
// // // // // // //               <div className="relative">
// // // // // // //                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   placeholder="Search by name, email, or event..."
// // // // // // //                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
// // // // // // //                   value={searchTerm}
// // // // // // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </div>
            
// // // // // // //             <div className="flex flex-col sm:flex-row gap-4">
// // // // // // //               <select
// // // // // // //                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
// // // // // // //                 value={statusFilter}
// // // // // // //                 onChange={(e) => setStatusFilter(e.target.value)}
// // // // // // //               >
// // // // // // //                 <option value="all">All Status</option>
// // // // // // //                 <option value="active">Active</option>
// // // // // // //                 <option value="cancelled">Cancelled</option>
// // // // // // //               </select>
              
// // // // // // //               <button
// // // // // // //                 onClick={handleExport}
// // // // // // //                 disabled={filteredAttendees.length === 0}
// // // // // // //                 className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
// // // // // // //               >
// // // // // // //                 <Download className="h-5 w-5" />
// // // // // // //                 <span>Export ({filteredAttendees.length})</span>
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Attendees Table */}
// // // // // // //         <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
// // // // // // //           <div className="overflow-x-auto">
// // // // // // //             <table className="min-w-full divide-y divide-gray-200">
// // // // // // //               <thead className="bg-gray-50">
// // // // // // //                 <tr>
// // // // // // //                   <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                     Attendee
// // // // // // //                   </th>
// // // // // // //                   <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                     Event Details
// // // // // // //                   </th>
// // // // // // //                   <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                     Status
// // // // // // //                   </th>
// // // // // // //                   <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                     Ticket Info
// // // // // // //                   </th>
// // // // // // //                   <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                     Actions
// // // // // // //                   </th>
// // // // // // //                 </tr>
// // // // // // //               </thead>
// // // // // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // // // // //                 {Array.isArray(filteredAttendees) && filteredAttendees.length > 0 ? (
// // // // // // //                   filteredAttendees.map((attendee) => {
// // // // // // //                     if (!attendee || typeof attendee !== 'object') return null;
                    
// // // // // // //                     return (
// // // // // // //                       <tr key={attendee.id || Math.random()} className="hover:bg-gray-50 transition">
// // // // // // //                         <td className="px-6 py-4 whitespace-nowrap">
// // // // // // //                           <div className="flex items-center">
// // // // // // //                             <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
// // // // // // //                               <User className="h-6 w-6 text-blue-600" />
// // // // // // //                             </div>
// // // // // // //                             <div className="ml-4">
// // // // // // //                               <div className="text-sm font-semibold text-gray-900">
// // // // // // //                                 {attendee.user?.name || 'Unknown'}
// // // // // // //                               </div>
// // // // // // //                               <div className="text-sm text-gray-500 flex items-center mt-1">
// // // // // // //                                 <Mail className="h-3 w-3 mr-1" />
// // // // // // //                                 {attendee.user?.email || 'No email'}
// // // // // // //                               </div>
// // // // // // //                               {attendee.user?.phone && (
// // // // // // //                                 <div className="text-xs text-gray-400 flex items-center mt-1">
// // // // // // //                                   <Phone className="h-3 w-3 mr-1" />
// // // // // // //                                   {attendee.user.phone}
// // // // // // //                                 </div>
// // // // // // //                               )}
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                         </td>
                        
// // // // // // //                         <td className="px-6 py-4">
// // // // // // //                           <div className="text-sm font-semibold text-gray-900">
// // // // // // //                             {attendee.eventName || 'Unknown Event'}
// // // // // // //                           </div>
// // // // // // //                           <div className="text-sm text-gray-600 flex items-center mt-1">
// // // // // // //                             <Calendar className="h-3 w-3 mr-2" />
// // // // // // //                             {attendee.date ? new Date(attendee.date).toLocaleDateString('en-US', {
// // // // // // //                               weekday: 'short',
// // // // // // //                               year: 'numeric',
// // // // // // //                               month: 'short',
// // // // // // //                               day: 'numeric'
// // // // // // //                             }) : 'No date'}
// // // // // // //                           </div>
// // // // // // //                           <div className="text-sm text-gray-600 flex items-start mt-1">
// // // // // // //                             <MapPin className="h-3 w-3 mr-2 mt-1 flex-shrink-0" />
// // // // // // //                             <span className="line-clamp-2">{attendee.location || 'No location'}</span>
// // // // // // //                           </div>
// // // // // // //                         </td>
                        
// // // // // // //                         <td className="px-6 py-4 whitespace-nowrap">
// // // // // // //                           <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${
// // // // // // //                             attendee.booking_status === 'active'
// // // // // // //                               ? 'bg-green-100 text-green-800'
// // // // // // //                               : 'bg-red-100 text-red-800'
// // // // // // //                           }`}>
// // // // // // //                             {attendee.booking_status === 'active' ? (
// // // // // // //                               <>
// // // // // // //                                 <BadgeCheck className="h-4 w-4 mr-1.5" />
// // // // // // //                                 Active
// // // // // // //                               </>
// // // // // // //                             ) : (
// // // // // // //                               <>
// // // // // // //                                 <XCircle className="h-4 w-4 mr-1.5" />
// // // // // // //                                 {attendee.booking_status === 'cancelled' ? 'Cancelled' : 'Unknown'}
// // // // // // //                               </>
// // // // // // //                             )}
// // // // // // //                           </div>
// // // // // // //                           <div className="text-xs text-gray-500 mt-2">
// // // // // // //                             {(attendee.tickets || 1)} ticket{attendee.tickets !== 1 ? 's' : ''}
// // // // // // //                           </div>
// // // // // // //                         </td>
                        
// // // // // // //                         <td className="px-6 py-4">
// // // // // // //                           <div className="flex items-center text-gray-900">
// // // // // // //                             <Ticket className="h-4 w-4 mr-2 text-blue-500" />
// // // // // // //                             <span className="font-medium">{attendee.ticketType || 'General'}</span>
// // // // // // //                           </div>
// // // // // // //                           <div className="flex items-center text-gray-900 mt-2">
// // // // // // //                             <DollarSign className="h-4 w-4 mr-2 text-green-500" />
// // // // // // //                             <span className="font-semibold">${attendee.totalPrice || '0.00'}</span>
// // // // // // //                           </div>
// // // // // // //                         </td>
                        
// // // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // // // // // //                           <div className="flex flex-col space-y-2">
// // // // // // //                             <button
// // // // // // //                               onClick={() => {
// // // // // // //                                 alert(
// // // // // // //                                   `Attendee Details:\n\n` +
// // // // // // //                                   `Name: ${attendee.user?.name || 'Unknown'}\n` +
// // // // // // //                                   `Email: ${attendee.user?.email || 'No email'}\n` +
// // // // // // //                                   `Phone: ${attendee.user?.phone || 'No phone'}\n` +
// // // // // // //                                   `Event: ${attendee.eventName || 'Unknown'}\n` +
// // // // // // //                                   `Date: ${attendee.date ? new Date(attendee.date).toLocaleDateString() : 'No date'}\n` +
// // // // // // //                                   `Time: ${attendee.time || 'No time'}\n` +
// // // // // // //                                   `Location: ${attendee.location || 'No location'}\n` +
// // // // // // //                                   `Status: ${attendee.booking_status || 'Unknown'}\n` +
// // // // // // //                                   `Ticket: ${attendee.ticketType || 'General'}\n` +
// // // // // // //                                   `Price: $${attendee.ticketPrice || '0.00'}\n` +
// // // // // // //                                   `Total: $${attendee.totalPrice || '0.00'}\n` +
// // // // // // //                                   `Tickets: ${attendee.tickets || 1}\n` +
// // // // // // //                                   `Booking ID: ${attendee.id || 'No ID'}`
// // // // // // //                                 );
// // // // // // //                               }}
// // // // // // //                               className="inline-flex items-center text-blue-600 hover:text-blue-900"
// // // // // // //                             >
// // // // // // //                               <Eye className="h-4 w-4 mr-1.5" />
// // // // // // //                               View Details
// // // // // // //                             </button>
                            
// // // // // // //                             {attendee.booking_status === 'active' && (
// // // // // // //                               <button
// // // // // // //                                 onClick={() => handleCheckIn(attendee.id, attendee.user?.name || 'Unknown')}
// // // // // // //                                 className="inline-flex items-center text-green-600 hover:text-green-900"
// // // // // // //                               >
// // // // // // //                                 <CheckCircle className="h-4 w-4 mr-1.5" />
// // // // // // //                                 Check In
// // // // // // //                               </button>
// // // // // // //                             )}
// // // // // // //                           </div>
// // // // // // //                         </td>
// // // // // // //                       </tr>
// // // // // // //                     );
// // // // // // //                   })
// // // // // // //                 ) : (
// // // // // // //                   <tr>
// // // // // // //                     <td colSpan="5" className="px-6 py-12 text-center">
// // // // // // //                       <div className="flex flex-col items-center justify-center">
// // // // // // //                         <Users className="h-16 w-16 text-gray-300 mb-4" />
// // // // // // //                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // // // // // //                           {searchTerm || statusFilter !== 'all' ? 'No matching attendees found' : 'No attendees to display'}
// // // // // // //                         </h3>
// // // // // // //                         <p className="text-gray-500 max-w-md">
// // // // // // //                           {!Array.isArray(attendees) || attendees.length === 0 
// // // // // // //                             ? 'No attendee data available.' 
// // // // // // //                             : 'Try adjusting your search terms or filters.'}
// // // // // // //                         </p>
// // // // // // //                       </div>
// // // // // // //                     </td>
// // // // // // //                   </tr>
// // // // // // //                 )}
// // // // // // //               </tbody>
// // // // // // //             </table>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Pagination */}
// // // // // // //         {pagination.lastPage > 1 && (
// // // // // // //           <div className="bg-white rounded-xl shadow px-6 py-4">
// // // // // // //             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
// // // // // // //               <div className="text-sm text-gray-700">
// // // // // // //                 <span className="font-medium">Page {pagination.currentPage}</span> of{" "}
// // // // // // //                 <span className="font-medium">{pagination.lastPage}</span> •{" "}
// // // // // // //                 <span className="font-medium">{filteredAttendees.length}</span> of{" "}
// // // // // // //                 <span className="font-medium">{pagination.total}</span> total attendees
// // // // // // //               </div>
              
// // // // // // //               <div className="flex items-center space-x-2">
// // // // // // //                 <button
// // // // // // //                   onClick={handlePrevPage}
// // // // // // //                   disabled={currentPage === 1}
// // // // // // //                   className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium ${
// // // // // // //                     currentPage === 1
// // // // // // //                       ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
// // // // // // //                       : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
// // // // // // //                   }`}
// // // // // // //                 >
// // // // // // //                   <ChevronLeft className="h-4 w-4 mr-1" />
// // // // // // //                   Previous
// // // // // // //                 </button>
                
// // // // // // //                 <span className="px-3 py-2 text-sm font-medium text-gray-700">
// // // // // // //                   Page {currentPage}
// // // // // // //                 </span>
                
// // // // // // //                 <button
// // // // // // //                   onClick={handleNextPage}
// // // // // // //                   disabled={currentPage === pagination.lastPage}
// // // // // // //                   className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium ${
// // // // // // //                     currentPage === pagination.lastPage
// // // // // // //                       ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
// // // // // // //                       : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
// // // // // // //                   }`}
// // // // // // //                 >
// // // // // // //                   Next
// // // // // // //                   <ChevronRight className="h-4 w-4 ml-1" />
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default OrganizerAttendees;
// // // // // // "use client";

// // // // // // import { useQuery } from "@tanstack/react-query";
// // // // // // import { useState } from "react";
// // // // // // import { attendeesService } from "../../services/attendeesService";

// // // // // // const OrganizerAttendees = () => {
// // // // // //   const [currentPage, setCurrentPage] = useState(1);

// // // // // //   // Fetch attendees
// // // // // //   const { data, isLoading, error } = useQuery({
// // // // // //     queryKey: ["attendees", currentPage],
// // // // // //     queryFn: () => attendeesService.list({
// // // // // //       page: currentPage,
// // // // // //       perPage: 20,
// // // // // //     }),
// // // // // //   });

// // // // // //   // SIMPLE: Just check if data exists and has data property
// // // // // //   const attendees = data?.data || [];

// // // // // //   // SIMPLE: Get pagination info
// // // // // //   const pagination = {
// // // // // //     currentPage: data?.currentPage || 1,
// // // // // //     lastPage: data?.lastPage || 1,
// // // // // //     total: data?.total || 0
// // // // // //   };

// // // // // //   // SIMPLE: Calculate stats directly
// // // // // //   const activeCount = attendees.filter(a => a?.booking_status === 'active').length;
// // // // // //   const cancelledCount = attendees.filter(a => a?.booking_status === 'cancelled').length;

// // // // // //   if (isLoading) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-gray-50 p-8">
// // // // // //         <div className="max-w-7xl mx-auto">
// // // // // //           <h1 className="text-2xl font-bold mb-4">Loading attendees...</h1>
// // // // // //           <div className="animate-pulse">
// // // // // //             <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
// // // // // //             <div className="bg-white rounded-lg shadow p-6 h-64"></div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   if (error) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-gray-50 p-8">
// // // // // //         <div className="max-w-7xl mx-auto">
// // // // // //           <div className="bg-red-50 border border-red-200 rounded-lg p-6">
// // // // // //             <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Data</h2>
// // // // // //             <p className="text-red-700">{error.message}</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// // // // // //       <div className="max-w-7xl mx-auto">
// // // // // //         {/* Header */}
// // // // // //         <div className="mb-8">
// // // // // //           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Attendees Management</h1>
// // // // // //           <p className="text-gray-600 mt-1">Total: {pagination.total} attendees</p>
// // // // // //         </div>

// // // // // //         {/* Simple Stats */}
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
// // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // //             <div className="text-sm text-gray-600">Active Bookings</div>
// // // // // //             <div className="text-2xl font-bold text-green-600">{activeCount}</div>
// // // // // //           </div>
// // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // //             <div className="text-sm text-gray-600">Cancelled Bookings</div>
// // // // // //             <div className="text-2xl font-bold text-red-600">{cancelledCount}</div>
// // // // // //           </div>
// // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // //             <div className="text-sm text-gray-600">Current Page</div>
// // // // // //             <div className="text-2xl font-bold text-blue-600">Page {currentPage} of {pagination.lastPage}</div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Attendees Table - SIMPLE VERSION */}
// // // // // //         <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
// // // // // //           <div className="overflow-x-auto">
// // // // // //             <table className="min-w-full">
// // // // // //               <thead className="bg-gray-50">
// // // // // //                 <tr>
// // // // // //                   <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Attendee</th>
// // // // // //                   <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Event</th>
// // // // // //                   <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
// // // // // //                   <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
// // // // // //                   <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Date</th>
// // // // // //                 </tr>
// // // // // //               </thead>
// // // // // //               <tbody className="divide-y divide-gray-200">
// // // // // //                 {attendees.length > 0 ? (
// // // // // //                   attendees.map((attendee) => (
// // // // // //                     <tr key={attendee.id} className="hover:bg-gray-50">
// // // // // //                       <td className="px-6 py-4">
// // // // // //                         <div>
// // // // // //                           <div className="font-medium text-gray-900">
// // // // // //                             {attendee.user?.name || 'Unknown'}
// // // // // //                           </div>
// // // // // //                           <div className="text-sm text-gray-500">
// // // // // //                             {attendee.user?.email || 'No email'}
// // // // // //                           </div>
// // // // // //                           {attendee.user?.phone && (
// // // // // //                             <div className="text-xs text-gray-400">
// // // // // //                               {attendee.user.phone}
// // // // // //                             </div>
// // // // // //                           )}
// // // // // //                         </div>
// // // // // //                       </td>
                      
// // // // // //                       <td className="px-6 py-4">
// // // // // //                         <div className="font-medium text-gray-900">
// // // // // //                           {attendee.eventName}
// // // // // //                         </div>
// // // // // //                         <div className="text-sm text-gray-500">
// // // // // //                           {attendee.location?.split(',')[0] || 'Online'}
// // // // // //                         </div>
// // // // // //                       </td>
                      
// // // // // //                       <td className="px-6 py-4">
// // // // // //                         <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
// // // // // //                           attendee.booking_status === 'active'
// // // // // //                             ? 'bg-green-100 text-green-800'
// // // // // //                             : 'bg-red-100 text-red-800'
// // // // // //                         }`}>
// // // // // //                           {attendee.booking_status === 'active' ? 'Active' : 'Cancelled'}
// // // // // //                         </span>
// // // // // //                       </td>
                      
// // // // // //                       <td className="px-6 py-4">
// // // // // //                         <div className="font-semibold text-gray-900">
// // // // // //                           ${attendee.totalPrice}
// // // // // //                         </div>
// // // // // //                         <div className="text-sm text-gray-500">
// // // // // //                           {attendee.ticketType}
// // // // // //                         </div>
// // // // // //                       </td>
                      
// // // // // //                       <td className="px-6 py-4">
// // // // // //                         <div className="text-sm text-gray-900">
// // // // // //                           {attendee.date ? new Date(attendee.date).toLocaleDateString() : 'N/A'}
// // // // // //                         </div>
// // // // // //                         <div className="text-xs text-gray-500">
// // // // // //                           {attendee.time}
// // // // // //                         </div>
// // // // // //                       </td>
// // // // // //                     </tr>
// // // // // //                   ))
// // // // // //                 ) : (
// // // // // //                   <tr>
// // // // // //                     <td colSpan="5" className="px-6 py-12 text-center">
// // // // // //                       <div className="flex flex-col items-center">
// // // // // //                         <div className="text-gray-400 mb-4">👥</div>
// // // // // //                         <h3 className="text-lg font-medium text-gray-900 mb-2">No attendees found</h3>
// // // // // //                         <p className="text-gray-500">No attendee data available for this page.</p>
// // // // // //                       </div>
// // // // // //                     </td>
// // // // // //                   </tr>
// // // // // //                 )}
// // // // // //               </tbody>
// // // // // //             </table>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Simple Pagination */}
// // // // // //         {pagination.lastPage > 1 && (
// // // // // //           <div className="bg-white rounded-lg shadow px-6 py-4">
// // // // // //             <div className="flex items-center justify-between">
// // // // // //               <div className="text-sm text-gray-700">
// // // // // //                 Showing page {currentPage} of {pagination.lastPage}
// // // // // //               </div>
// // // // // //               <div className="flex space-x-2">
// // // // // //                 <button
// // // // // //                   onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
// // // // // //                   disabled={currentPage === 1}
// // // // // //                   className={`px-4 py-2 rounded-lg ${
// // // // // //                     currentPage === 1
// // // // // //                       ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
// // // // // //                       : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   Previous
// // // // // //                 </button>
// // // // // //                 <button
// // // // // //                   onClick={() => setCurrentPage(prev => Math.min(pagination.lastPage, prev + 1))}
// // // // // //                   disabled={currentPage === pagination.lastPage}
// // // // // //                   className={`px-4 py-2 rounded-lg ${
// // // // // //                     currentPage === pagination.lastPage
// // // // // //                       ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
// // // // // //                       : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   Next
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default OrganizerAttendees;
// // // // // "use client";

// // // // // import { useQuery } from "@tanstack/react-query";
// // // // // import { attendeesService } from "../../services/attendeesService";

// // // // // const OrganizerAttendees = () => {
// // // // //   console.log("Component rendering...");

// // // // //   // Fetch attendees
// // // // //   const { data, isLoading, error } = useQuery({
// // // // //     queryKey: ["attendees"],
// // // // //     queryFn: () => attendeesService.list({ page: 1, perPage: 20 }),
// // // // //   });

// // // // //   console.log("Query result:", { data, isLoading, error });
// // // // //   console.log("Type of data:", typeof data);
// // // // //   console.log("Is data an array?", Array.isArray(data));

// // // // //   // DEBUG: Let's check what we actually get
// // // // //   let debugInfo = "";
// // // // //   let attendees = [];
  
// // // // //   if (data) {
// // // // //     console.log("Data keys:", Object.keys(data));
// // // // //     console.log("Data structure:", data);
    
// // // // //     // Try different ways to get attendees
// // // // //     if (Array.isArray(data)) {
// // // // //       console.log("Data is directly an array");
// // // // //       attendees = data;
// // // // //       debugInfo = "Data is array";
// // // // //     } else if (data.data && Array.isArray(data.data)) {
// // // // //       console.log("Data has data property that is array");
// // // // //       attendees = data.data;
// // // // //       debugInfo = "data.data is array";
// // // // //     } else if (data.attendees && Array.isArray(data.attendees)) {
// // // // //       console.log("Data has attendees property");
// // // // //       attendees = data.attendees;
// // // // //       debugInfo = "data.attendees is array";
// // // // //     } else {
// // // // //       console.log("Could not find array in data");
// // // // //       debugInfo = "No array found";
// // // // //     }
// // // // //   }

// // // // //   console.log("Final attendees:", attendees);
// // // // //   console.log("Attendees is array?", Array.isArray(attendees));
// // // // //   console.log("Attendees length:", attendees.length);

// // // // //   // SAFE calculation - ONLY if attendees is an array
// // // // //   let activeCount = 0;
// // // // //   let cancelledCount = 0;
  
// // // // //   if (Array.isArray(attendees)) {
// // // // //     activeCount = attendees.filter(a => a && a.booking_status === 'active').length;
// // // // //     cancelledCount = attendees.filter(a => a && a.booking_status === 'cancelled').length;
// // // // //   } else {
// // // // //     console.error("ERROR: attendees is not an array, cannot use filter!");
// // // // //   }

// // // // //   if (isLoading) {
// // // // //     return <div>Loading...</div>;
// // // // //   }

// // // // //   if (error) {
// // // // //     return <div>Error: {error.message}</div>;
// // // // //   }

// // // // //   return (
// // // // //     <div>
// // // // //       <h1>Attendees Management (Debug Mode)</h1>
      
// // // // //       <div style={{ backgroundColor: '#f0f0f0', padding: '20px', margin: '20px 0' }}>
// // // // //         <h3>Debug Information:</h3>
// // // // //         <p>Debug Info: {debugInfo}</p>
// // // // //         <p>Attendees is array: {Array.isArray(attendees) ? 'YES' : 'NO'}</p>
// // // // //         <p>Attendees length: {attendees.length}</p>
// // // // //         <p>Active: {activeCount}</p>
// // // // //         <p>Cancelled: {cancelledCount}</p>
// // // // //       </div>

// // // // //       <h2>Raw Data Preview:</h2>
// // // // //       <pre style={{ backgroundColor: '#eee', padding: '10px', maxHeight: '200px', overflow: 'auto' }}>
// // // // //         {JSON.stringify(data, null, 2)}
// // // // //       </pre>

// // // // //       {Array.isArray(attendees) && attendees.length > 0 ? (
// // // // //         <div>
// // // // //           <h2>Attendees List ({attendees.length}):</h2>
// // // // //           <table border="1" cellPadding="10" style={{ width: '100%' }}>
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th>Name</th>
// // // // //                 <th>Email</th>
// // // // //                 <th>Event</th>
// // // // //                 <th>Status</th>
// // // // //                 <th>Amount</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {attendees.map((attendee, index) => (
// // // // //                 <tr key={attendee.id || index}>
// // // // //                   <td>{attendee.user?.name || 'Unknown'}</td>
// // // // //                   <td>{attendee.user?.email || 'No email'}</td>
// // // // //                   <td>{attendee.eventName || 'No event'}</td>
// // // // //                   <td>{attendee.booking_status || 'Unknown'}</td>
// // // // //                   <td>${attendee.totalPrice || '0.00'}</td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <div>
// // // // //           <h2>No attendees to display</h2>
// // // // //           <p>Attendees is not an array or is empty.</p>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default OrganizerAttendees;
// // // // "use client";

// // // // import { useQuery } from "@tanstack/react-query";
// // // // import { attendeesService } from "../../services/attendeesService";

// // // // const OrganizerAttendees = () => {
// // // //   // Fetch attendees
// // // //   const { data, isLoading, error } = useQuery({
// // // //     queryKey: ["attendees"],
// // // //     queryFn: () => attendeesService.list({ page: 1, perPage: 20 }),
// // // //   });

// // // //   // Extract data from Axios response structure
// // // //   const responseData = data?.data; // This gets the inner data object
// // // //   const attendees = responseData?.data || []; // This gets the actual attendees array
  
// // // //   // Get pagination info
// // // //   const pagination = {
// // // //     currentPage: responseData?.currentPage || 1,
// // // //     lastPage: responseData?.lastPage || 1,
// // // //     total: responseData?.total || 0
// // // //   };

// // // //   // Calculate stats
// // // //   const activeCount = attendees.filter(a => a?.booking_status === 'active').length;
// // // //   const cancelledCount = attendees.filter(a => a?.booking_status === 'cancelled').length;

// // // //   if (isLoading) {
// // // //     return <div>Loading...</div>;
// // // //   }

// // // //   if (error) {
// // // //     return <div>Error: {error.message}</div>;
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         {/* Header */}
// // // //         <div className="mb-8">
// // // //           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Attendees Management</h1>
// // // //           <p className="text-gray-600 mt-1">Total: {pagination.total} attendees</p>
// // // //         </div>

// // // //         {/* Stats */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
// // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // //             <div className="text-sm text-gray-600">Active Bookings</div>
// // // //             <div className="text-2xl font-bold text-green-600">{activeCount}</div>
// // // //           </div>
// // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // //             <div className="text-sm text-gray-600">Cancelled Bookings</div>
// // // //             <div className="text-2xl font-bold text-red-600">{cancelledCount}</div>
// // // //           </div>
// // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // //             <div className="text-sm text-gray-600">Page Info</div>
// // // //             <div className="text-2xl font-bold text-blue-600">
// // // //               Page {pagination.currentPage} of {pagination.lastPage}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Debug info - you can remove this later */}
// // // //         <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
// // // //           <p className="text-sm text-yellow-800">
// // // //             <strong>Debug Info:</strong> Found {attendees.length} attendees in response
// // // //           </p>
// // // //         </div>

// // // //         {/* Attendees Table */}
// // // //         <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
// // // //           <div className="overflow-x-auto">
// // // //             <table className="min-w-full divide-y divide-gray-200">
// // // //               <thead className="bg-gray-50">
// // // //                 <tr>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                     Attendee
// // // //                   </th>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                     Event
// // // //                   </th>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                     Status
// // // //                   </th>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                     Amount
// // // //                   </th>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                     Date
// // // //                   </th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // //                 {attendees.length > 0 ? (
// // // //                   attendees.map((attendee) => (
// // // //                     <tr key={attendee.id} className="hover:bg-gray-50">
// // // //                       <td className="px-6 py-4">
// // // //                         <div>
// // // //                           <div className="font-medium text-gray-900">
// // // //                             {attendee.user?.name}
// // // //                           </div>
// // // //                           <div className="text-sm text-gray-500">
// // // //                             {attendee.user?.email}
// // // //                           </div>
// // // //                           {attendee.user?.phone && (
// // // //                             <div className="text-xs text-gray-400">
// // // //                               {attendee.user.phone}
// // // //                             </div>
// // // //                           )}
// // // //                         </div>
// // // //                       </td>
                      
// // // //                       <td className="px-6 py-4">
// // // //                         <div className="font-medium text-gray-900">
// // // //                           {attendee.eventName}
// // // //                         </div>
// // // //                         <div className="text-sm text-gray-500 line-clamp-2">
// // // //                           {attendee.location}
// // // //                         </div>
// // // //                       </td>
                      
// // // //                       <td className="px-6 py-4">
// // // //                         <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
// // // //                           attendee.booking_status === 'active'
// // // //                             ? 'bg-green-100 text-green-800'
// // // //                             : 'bg-red-100 text-red-800'
// // // //                         }`}>
// // // //                           {attendee.booking_status === 'active' ? 'Active' : 'Cancelled'}
// // // //                         </span>
// // // //                         <div className="text-xs text-gray-500 mt-1">
// // // //                           {attendee.tickets} ticket{attendee.tickets !== 1 ? 's' : ''}
// // // //                         </div>
// // // //                       </td>
                      
// // // //                       <td className="px-6 py-4">
// // // //                         <div className="font-semibold text-gray-900">
// // // //                           ${attendee.totalPrice}
// // // //                         </div>
// // // //                         <div className="text-sm text-gray-500">
// // // //                           {attendee.ticketType}
// // // //                         </div>
// // // //                       </td>
                      
// // // //                       <td className="px-6 py-4">
// // // //                         <div className="text-sm text-gray-900">
// // // //                           {new Date(attendee.date).toLocaleDateString('en-US', {
// // // //                             year: 'numeric',
// // // //                             month: 'short',
// // // //                             day: 'numeric'
// // // //                           })}
// // // //                         </div>
// // // //                         <div className="text-xs text-gray-500">
// // // //                           {attendee.time}
// // // //                         </div>
// // // //                       </td>
// // // //                     </tr>
// // // //                   ))
// // // //                 ) : (
// // // //                   <tr>
// // // //                     <td colSpan="5" className="px-6 py-12 text-center">
// // // //                       <div className="flex flex-col items-center">
// // // //                         <div className="text-4xl text-gray-300 mb-4">👥</div>
// // // //                         <h3 className="text-lg font-medium text-gray-900 mb-2">No attendees found</h3>
// // // //                         <p className="text-gray-500">No attendee data available.</p>
// // // //                       </div>
// // // //                     </td>
// // // //                   </tr>
// // // //                 )}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         </div>

// // // //         {/* Pagination */}
// // // //         {pagination.lastPage > 1 && (
// // // //           <div className="bg-white rounded-lg shadow px-6 py-4">
// // // //             <div className="flex items-center justify-between">
// // // //               <div className="text-sm text-gray-700">
// // // //                 Showing page {pagination.currentPage} of {pagination.lastPage} • 
// // // //                 Total {pagination.total} attendees
// // // //               </div>
// // // //               <div className="flex space-x-2">
// // // //                 <button
// // // //                   onClick={() => {/* Add pagination logic here */}}
// // // //                   disabled={pagination.currentPage === 1}
// // // //                   className={`px-4 py-2 rounded-lg ${
// // // //                     pagination.currentPage === 1
// // // //                       ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
// // // //                       : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
// // // //                   }`}
// // // //                 >
// // // //                   Previous
// // // //                 </button>
// // // //                 <button
// // // //                   onClick={() => {/* Add pagination logic here */}}
// // // //                   disabled={pagination.currentPage === pagination.lastPage}
// // // //                   className={`px-4 py-2 rounded-lg ${
// // // //                     pagination.currentPage === pagination.lastPage
// // // //                       ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
// // // //                       : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
// // // //                   }`}
// // // //                 >
// // // //                   Next
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default OrganizerAttendees;
// // // "use client";

// // // import { useQuery } from "@tanstack/react-query";
// // // import {
// // //   Calendar,
// // //   CheckCircle,
// // //   ChevronLeft,
// // //   ChevronRight,
// // //   DollarSign,
// // //   Download,
// // //   Filter,
// // //   Mail,
// // //   MapPin,
// // //   Phone,
// // //   Search,
// // //   Ticket,
// // //   User,
// // //   XCircle
// // // } from "lucide-react";
// // // import { useEffect, useState } from "react";
// // // import { attendeesService } from "../../services/attendeesService";

// // // const OrganizerAttendees = () => {
// // //   // State for filters
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [statusFilter, setStatusFilter] = useState("all");
// // //   const [eventFilter, setEventFilter] = useState("all");
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [perPage] = useState(20);
  
// // //   // State for events list
// // //   const [events, setEvents] = useState([]);

// // //   // Fetch attendees with filters
// // //   const { data, isLoading, error, refetch } = useQuery({
// // //     queryKey: ["attendees", currentPage, statusFilter, eventFilter],
// // //     queryFn: () => attendeesService.list({
// // //       page: currentPage,
// // //       perPage: perPage,
// // //       status: statusFilter !== "all" ? statusFilter : undefined,
// // //       event_id: eventFilter !== "all" ? eventFilter : undefined,
// // //     }),
// // //   });

// // //   // Extract data from response
// // //   const responseData = data?.data;
// // //   const attendees = responseData?.data || [];
// // //   const pagination = {
// // //     currentPage: responseData?.currentPage || 1,
// // //     lastPage: responseData?.lastPage || 1,
// // //     perPage: responseData?.perPage || perPage,
// // //     total: responseData?.total || 0
// // //   };

// // //   // Extract unique events from attendees data
// // //   useEffect(() => {
// // //     if (attendees.length > 0) {
// // //       const uniqueEvents = [];
// // //       const eventMap = new Map();
      
// // //       attendees.forEach(attendee => {
// // //         if (attendee.event_id && attendee.eventName && !eventMap.has(attendee.event_id)) {
// // //           eventMap.set(attendee.event_id, true);
// // //           uniqueEvents.push({
// // //             id: attendee.event_id,
// // //             name: attendee.eventName
// // //           });
// // //         }
// // //       });
      
// // //       setEvents(uniqueEvents);
// // //     }
// // //   }, [attendees]);

// // //   // Filter attendees locally based on search
// // //   const filteredAttendees = attendees.filter(attendee => {
// // //     if (!attendee) return false;
    
// // //     const searchLower = searchTerm.toLowerCase();
// // //     const matchesSearch = 
// // //       (attendee.user?.name || '').toLowerCase().includes(searchLower) ||
// // //       (attendee.user?.email || '').toLowerCase().includes(searchLower) ||
// // //       (attendee.eventName || '').toLowerCase().includes(searchLower) ||
// // //       (attendee.user?.phone || '').toLowerCase().includes(searchLower);
    
// // //     return matchesSearch;
// // //   });

// // //   // Calculate stats
// // //   const stats = {
// // //     total: pagination.total,
// // //     active: attendees.filter(a => a?.booking_status === 'active').length,
// // //     cancelled: attendees.filter(a => a?.booking_status === 'cancelled').length,
// // //     pending: attendees.filter(a => a?.booking_status === 'pending').length,
// // //   };

// // //   // Handle pagination
// // //   const handleNextPage = () => {
// // //     if (currentPage < pagination.lastPage) {
// // //       setCurrentPage(prev => prev + 1);
// // //     }
// // //   };

// // //   const handlePrevPage = () => {
// // //     if (currentPage > 1) {
// // //       setCurrentPage(prev => prev - 1);
// // //     }
// // //   };

// // //   // Handle check-in
// // //   const handleCheckIn = (attendeeId, attendeeName) => {
// // //     if (window.confirm(`Check in ${attendeeName}?`)) {
// // //       alert(`Checking in ${attendeeName}... (ID: ${attendeeId})`);
// // //       // TODO: Call check-in API
// // //     }
// // //   };

// // //   // Handle export
// // //   const handleExport = () => {
// // //     const exportData = filteredAttendees.map(att => ({
// // //       name: att.user?.name,
// // //       email: att.user?.email,
// // //       phone: att.user?.phone,
// // //       event: att.eventName,
// // //       date: att.date,
// // //       time: att.time,
// // //       location: att.location,
// // //       status: att.booking_status,
// // //       ticket: att.ticketType,
// // //       price: att.ticketPrice,
// // //       total: att.totalPrice,
// // //       tickets: att.tickets,
// // //       booking_id: att.id
// // //     }));

// // //     const dataStr = JSON.stringify(exportData, null, 2);
// // //     const blob = new Blob([dataStr], { type: 'application/json' });
// // //     const url = URL.createObjectURL(blob);
// // //     const a = document.createElement('a');
// // //     a.href = url;
// // //     a.download = `attendees-${new Date().toISOString().split('T')[0]}.json`;
// // //     document.body.appendChild(a);
// // //     a.click();
// // //     document.body.removeChild(a);
// // //     URL.revokeObjectURL(url);
// // //   };

// // //   // Reset to page 1 when filters change
// // //   useEffect(() => {
// // //     setCurrentPage(1);
// // //   }, [statusFilter, eventFilter]);

// // //   if (isLoading) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 p-8">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="animate-pulse">
// // //             <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
// // //             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
// // //               {[1, 2, 3, 4].map(i => (
// // //                 <div key={i} className="bg-white p-6 rounded-lg shadow">
// // //                   <div className="h-8 w-8 bg-gray-300 rounded"></div>
// // //                   <div className="mt-4 space-y-2">
// // //                     <div className="h-4 bg-gray-300 rounded w-1/2"></div>
// // //                     <div className="h-6 bg-gray-300 rounded w-1/3"></div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //             <div className="bg-white p-6 rounded-lg shadow h-96"></div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 p-8">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="bg-red-50 border border-red-200 rounded-lg p-6">
// // //             <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Data</h2>
// // //             <p className="text-red-700">{error.message}</p>
// // //             <button
// // //               onClick={() => refetch()}
// // //               className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
// // //             >
// // //               Retry
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// // //       <div className="max-w-7xl mx-auto">
// // //         {/* Header */}
// // //         <div className="mb-8">
// // //           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Attendees Management</h1>
// // //           <p className="text-gray-600 mt-1">Manage all event attendees and bookings</p>
// // //         </div>

// // //         {/* Stats */}
// // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
// // //           <div className="bg-white p-6 rounded-lg shadow">
// // //             <div className="flex items-center">
// // //               <div className="p-2 bg-blue-100 rounded-lg">
// // //                 <User className="h-6 w-6 text-blue-600" />
// // //               </div>
// // //               <div className="ml-4">
// // //                 <p className="text-sm text-gray-600">Total Attendees</p>
// // //                 <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           <div className="bg-white p-6 rounded-lg shadow">
// // //             <div className="flex items-center">
// // //               <div className="p-2 bg-green-100 rounded-lg">
// // //                 <CheckCircle className="h-6 w-6 text-green-600" />
// // //               </div>
// // //               <div className="ml-4">
// // //                 <p className="text-sm text-gray-600">Active</p>
// // //                 <p className="text-2xl font-bold text-green-600">{stats.active}</p>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           <div className="bg-white p-6 rounded-lg shadow">
// // //             <div className="flex items-center">
// // //               <div className="p-2 bg-red-100 rounded-lg">
// // //                 <XCircle className="h-6 w-6 text-red-600" />
// // //               </div>
// // //               <div className="ml-4">
// // //                 <p className="text-sm text-gray-600">Cancelled</p>
// // //                 <p className="text-2xl font-bold text-red-600">{stats.cancelled}</p>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           <div className="bg-white p-6 rounded-lg shadow">
// // //             <div className="flex items-center">
// // //               <div className="p-2 bg-yellow-100 rounded-lg">
// // //                 <Calendar className="h-6 w-6 text-yellow-600" />
// // //               </div>
// // //               <div className="ml-4">
// // //                 <p className="text-sm text-gray-600">Pending</p>
// // //                 <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Filters */}
// // //         <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-6">
// // //           <div className="flex flex-col md:flex-row gap-4">
// // //             {/* Search */}
// // //             <div className="flex-1">
// // //               <div className="relative">
// // //                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search by name, email, phone, or event..."
// // //                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
// // //                   value={searchTerm}
// // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // //                 />
// // //               </div>
// // //             </div>
            
// // //             {/* Status Filter */}
// // //             <div className="flex flex-col sm:flex-row gap-4">
// // //               <div className="relative">
// // //                 <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
// // //                 <select
// // //                   className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none"
// // //                   value={statusFilter}
// // //                   onChange={(e) => setStatusFilter(e.target.value)}
// // //                 >
// // //                   <option value="all">All Status</option>
// // //                   <option value="active">Active</option>
// // //                   <option value="cancelled">Cancelled</option>
// // //                   <option value="pending">Pending</option>
// // //                 </select>
// // //               </div>
              
// // //               {/* Event Filter */}
// // //               <select
// // //                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
// // //                 value={eventFilter}
// // //                 onChange={(e) => setEventFilter(e.target.value)}
// // //               >
// // //                 <option value="all">All Events</option>
// // //                 {events.map(event => (
// // //                   <option key={event.id} value={event.id}>
// // //                     {event.name}
// // //                   </option>
// // //                 ))}
// // //               </select>
              
// // //               {/* Export Button */}
// // //               <button
// // //                 onClick={handleExport}
// // //                 disabled={filteredAttendees.length === 0}
// // //                 className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
// // //               >
// // //                 <Download className="h-5 w-5" />
// // //                 <span className="hidden sm:inline">Export</span>
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Results Info */}
// // //         <div className="mb-4 text-sm text-gray-600">
// // //           Showing {filteredAttendees.length} of {attendees.length} attendees on this page
// // //           {searchTerm && ` • Search: "${searchTerm}"`}
// // //           {statusFilter !== 'all' && ` • Status: ${statusFilter}`}
// // //           {eventFilter !== 'all' && ` • Event: ${events.find(e => e.id === eventFilter)?.name || ''}`}
// // //         </div>

// // //         {/* Attendees Table */}
// // //         <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
// // //           <div className="overflow-x-auto">
// // //             <table className="min-w-full divide-y divide-gray-200">
// // //               <thead className="bg-gray-50">
// // //                 <tr>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                     Attendee
// // //                   </th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                     Event Details
// // //                   </th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                     Status
// // //                   </th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                     Ticket & Payment
// // //                   </th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                     Actions
// // //                   </th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="bg-white divide-y divide-gray-200">
// // //                 {filteredAttendees.length > 0 ? (
// // //                   filteredAttendees.map((attendee) => (
// // //                     <tr key={attendee.id} className="hover:bg-gray-50">
// // //                       <td className="px-6 py-4">
// // //                         <div>
// // //                           <div className="font-medium text-gray-900 flex items-center">
// // //                             <User className="h-4 w-4 mr-2 text-blue-500" />
// // //                             {attendee.user?.name}
// // //                           </div>
// // //                           <div className="text-sm text-gray-500 flex items-center mt-1">
// // //                             <Mail className="h-3 w-3 mr-2" />
// // //                             {attendee.user?.email}
// // //                           </div>
// // //                           {attendee.user?.phone && (
// // //                             <div className="text-sm text-gray-500 flex items-center mt-1">
// // //                               <Phone className="h-3 w-3 mr-2" />
// // //                               {attendee.user.phone}
// // //                             </div>
// // //                           )}
// // //                         </div>
// // //                       </td>
                      
// // //                       <td className="px-6 py-4">
// // //                         <div className="font-medium text-gray-900">
// // //                           {attendee.eventName}
// // //                         </div>
// // //                         <div className="text-sm text-gray-500 flex items-center mt-1">
// // //                           <Calendar className="h-3 w-3 mr-2" />
// // //                           {attendee.date ? new Date(attendee.date).toLocaleDateString('en-US', {
// // //                             weekday: 'short',
// // //                             year: 'numeric',
// // //                             month: 'short',
// // //                             day: 'numeric'
// // //                           }) : 'N/A'}
// // //                           {attendee.time && ` • ${attendee.time}`}
// // //                         </div>
// // //                         {attendee.location && (
// // //                           <div className="text-sm text-gray-500 flex items-start mt-1">
// // //                             <MapPin className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0" />
// // //                             <span className="line-clamp-2">{attendee.location}</span>
// // //                           </div>
// // //                         )}
// // //                       </td>
                      
// // //                       <td className="px-6 py-4">
// // //                         <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
// // //                           attendee.booking_status === 'active'
// // //                             ? 'bg-green-100 text-green-800'
// // //                             : attendee.booking_status === 'cancelled'
// // //                             ? 'bg-red-100 text-red-800'
// // //                             : 'bg-yellow-100 text-yellow-800'
// // //                         }`}>
// // //                           {attendee.booking_status === 'active' ? (
// // //                             <>
// // //                               <CheckCircle className="h-4 w-4 mr-1" />
// // //                               Active
// // //                             </>
// // //                           ) : attendee.booking_status === 'cancelled' ? (
// // //                             <>
// // //                               <XCircle className="h-4 w-4 mr-1" />
// // //                               Cancelled
// // //                             </>
// // //                           ) : (
// // //                             'Pending'
// // //                           )}
// // //                         </span>
// // //                         <div className="text-xs text-gray-500 mt-2">
// // //                           {attendee.tickets} ticket{attendee.tickets !== 1 ? 's' : ''}
// // //                         </div>
// // //                       </td>
                      
// // //                       <td className="px-6 py-4">
// // //                         <div className="flex items-center text-gray-900">
// // //                           <Ticket className="h-4 w-4 mr-2 text-blue-500" />
// // //                           <span className="font-medium">{attendee.ticketType}</span>
// // //                         </div>
// // //                         <div className="flex items-center text-gray-900 mt-2">
// // //                           <DollarSign className="h-4 w-4 mr-2 text-green-500" />
// // //                           <span className="font-semibold">${attendee.totalPrice}</span>
// // //                           {parseFloat(attendee.ticketPrice) > 0 && (
// // //                             <span className="text-sm text-gray-500 ml-2">
// // //                               (${attendee.ticketPrice} each)
// // //                             </span>
// // //                           )}
// // //                         </div>
// // //                       </td>
                      
// // //                       <td className="px-6 py-4">
// // //                         <div className="flex flex-col space-y-2">
// // //                           <button
// // //                             onClick={() => {
// // //                               alert(
// // //                                 `Attendee Details:\n\n` +
// // //                                 `Name: ${attendee.user?.name}\n` +
// // //                                 `Email: ${attendee.user?.email}\n` +
// // //                                 `Phone: ${attendee.user?.phone || 'N/A'}\n` +
// // //                                 `Event: ${attendee.eventName}\n` +
// // //                                 `Date: ${attendee.date ? new Date(attendee.date).toLocaleDateString() : 'N/A'}\n` +
// // //                                 `Time: ${attendee.time || 'N/A'}\n` +
// // //                                 `Location: ${attendee.location || 'N/A'}\n` +
// // //                                 `Status: ${attendee.booking_status}\n` +
// // //                                 `Ticket: ${attendee.ticketType}\n` +
// // //                                 `Price: $${attendee.ticketPrice}\n` +
// // //                                 `Total: $${attendee.totalPrice}\n` +
// // //                                 `Tickets: ${attendee.tickets}\n` +
// // //                                 `Booking ID: ${attendee.id}`
// // //                               );
// // //                             }}
// // //                             className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
// // //                           >
// // //                             View Details
// // //                           </button>
                          
// // //                           {attendee.booking_status === 'active' && (
// // //                             <button
// // //                               onClick={() => handleCheckIn(attendee.id, attendee.user?.name)}
// // //                               className="text-sm text-green-600 hover:text-green-800 hover:underline"
// // //                             >
// // //                               Check In
// // //                             </button>
// // //                           )}
                          
// // //                           {attendee.qr_code && (
// // //                             <button
// // //                               onClick={() => alert(`QR Code: ${attendee.qr_code}`)}
// // //                               className="text-sm text-purple-600 hover:text-purple-800 hover:underline"
// // //                             >
// // //                               View QR Code
// // //                             </button>
// // //                           )}
// // //                         </div>
// // //                       </td>
// // //                     </tr>
// // //                   ))
// // //                 ) : (
// // //                   <tr>
// // //                     <td colSpan="5" className="px-6 py-12 text-center">
// // //                       <div className="flex flex-col items-center">
// // //                         <div className="text-4xl text-gray-300 mb-4">👥</div>
// // //                         <h3 className="text-lg font-medium text-gray-900 mb-2">
// // //                           {searchTerm || statusFilter !== 'all' || eventFilter !== 'all' 
// // //                             ? 'No matching attendees found' 
// // //                             : 'No attendees to display'}
// // //                         </h3>
// // //                         <p className="text-gray-500">
// // //                           {searchTerm || statusFilter !== 'all' || eventFilter !== 'all'
// // //                             ? 'Try adjusting your search or filters.'
// // //                             : 'No attendee data available for the selected filters.'}
// // //                         </p>
// // //                       </div>
// // //                     </td>
// // //                   </tr>
// // //                 )}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>

// // //         {/* Pagination */}
// // //         {pagination.lastPage > 1 && (
// // //           <div className="bg-white rounded-lg shadow px-6 py-4">
// // //             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
// // //               <div className="text-sm text-gray-700">
// // //                 Page <span className="font-medium">{pagination.currentPage}</span> of{" "}
// // //                 <span className="font-medium">{pagination.lastPage}</span> •{" "}
// // //                 <span className="font-medium">{pagination.total}</span> total attendees
// // //               </div>
              
// // //               <div className="flex items-center space-x-2">
// // //                 <button
// // //                   onClick={handlePrevPage}
// // //                   disabled={currentPage === 1}
// // //                   className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded text-sm font-medium ${
// // //                     currentPage === 1
// // //                       ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
// // //                       : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
// // //                   }`}
// // //                 >
// // //                   <ChevronLeft className="h-4 w-4 mr-1" />
// // //                   Previous
// // //                 </button>
                
// // //                 <div className="flex items-center space-x-1">
// // //                   {Array.from({ length: Math.min(5, pagination.lastPage) }, (_, i) => {
// // //                     let pageNum;
// // //                     if (pagination.lastPage <= 5) {
// // //                       pageNum = i + 1;
// // //                     } else if (currentPage <= 3) {
// // //                       pageNum = i + 1;
// // //                     } else if (currentPage >= pagination.lastPage - 2) {
// // //                       pageNum = pagination.lastPage - 4 + i;
// // //                     } else {
// // //                       pageNum = currentPage - 2 + i;
// // //                     }
                    
// // //                     return (
// // //                       <button
// // //                         key={pageNum}
// // //                         onClick={() => setCurrentPage(pageNum)}
// // //                         className={`px-3 py-1 text-sm rounded ${
// // //                           currentPage === pageNum
// // //                             ? 'bg-blue-600 text-white'
// // //                             : 'text-gray-700 hover:bg-gray-100'
// // //                         }`}
// // //                       >
// // //                         {pageNum}
// // //                       </button>
// // //                     );
// // //                   })}
// // //                 </div>
                
// // //                 <button
// // //                   onClick={handleNextPage}
// // //                   disabled={currentPage === pagination.lastPage}
// // //                   className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded text-sm font-medium ${
// // //                     currentPage === pagination.lastPage
// // //                       ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
// // //                       : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
// // //                   }`}
// // //                 >
// // //                   Next
// // //                   <ChevronRight className="h-4 w-4 ml-1" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default OrganizerAttendees;
// // "use client";

// // import { useQuery } from "@tanstack/react-query";
// // import {
// //   Calendar,
// //   CheckCircle,
// //   ChevronLeft,
// //   ChevronRight,
// //   DollarSign,
// //   Download,
// //   Filter,
// //   Mail,
// //   MapPin,
// //   Phone,
// //   Search,
// //   Ticket,
// //   User,
// //   UserCheck,
// //   Users,
// //   XCircle
// // } from "lucide-react";
// // import { useEffect, useState } from "react";
// // import { attendeesService } from "../../services/attendeesService";

// // const OrganizerAttendees = () => {
// //   // State for filters
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [statusFilter, setStatusFilter] = useState("all");
// //   const [eventFilter, setEventFilter] = useState("all");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [perPage] = useState(20);
  
// //   // State for events list and total stats
// //   const [events, setEvents] = useState([]);
// //   const [totalStats, setTotalStats] = useState({
// //     total: 0,
// //     active: 0,
// //     checked_in: 0,
// //     cancelled: 0
// //   });

// //   // Fetch attendees with filters
// //   const { data, isLoading, error, refetch } = useQuery({
// //     queryKey: ["attendees", currentPage, statusFilter, eventFilter],
// //     queryFn: () => attendeesService.list({
// //       page: currentPage,
// //       perPage: perPage,
// //       status: statusFilter !== "all" ? statusFilter : undefined,
// //       event_id: eventFilter !== "all" ? eventFilter : undefined,
// //     }),
// //   });

// //   // Extract data from response
// //   const responseData = data?.data;
// //   const attendees = responseData?.data || [];
// //   const pagination = {
// //     currentPage: responseData?.currentPage || 1,
// //     lastPage: responseData?.lastPage || 1,
// //     perPage: responseData?.perPage || perPage,
// //     total: responseData?.total || 0
// //   };

// //   // Extract unique events from attendees data
// //   useEffect(() => {
// //     if (attendees.length > 0) {
// //       const uniqueEvents = [];
// //       const eventMap = new Map();
      
// //       attendees.forEach(attendee => {
// //         if (attendee.event_id && attendee.eventName && !eventMap.has(attendee.event_id)) {
// //           eventMap.set(attendee.event_id, true);
// //           uniqueEvents.push({
// //             id: attendee.event_id,
// //             name: attendee.eventName
// //           });
// //         }
// //       });
      
// //       setEvents(uniqueEvents);
// //     }
// //   }, [attendees]);

// //   // Fetch total stats separately (first page to get overview)
// //   const { data: statsData } = useQuery({
// //     queryKey: ["attendees-stats"],
// //     queryFn: () => attendeesService.list({
// //       page: 1,
// //       perPage: 100, // Get more data for accurate stats
// //     }),
// //     enabled: !isLoading,
// //   });

// //   // Update total stats when stats data is available
// //   useEffect(() => {
// //     if (statsData?.data?.data) {
// //       const allAttendees = statsData.data.data;
// //       const stats = {
// //         total: statsData.data.total || 0,
// //         active: allAttendees.filter(a => a?.booking_status === 'active').length,
// //         checked_in: allAttendees.filter(a => a?.booking_status === 'checked_in').length,
// //         cancelled: allAttendees.filter(a => a?.booking_status === 'cancelled').length,
// //       };
// //       setTotalStats(stats);
// //     }
// //   }, [statsData]);

// //   // Filter attendees locally based on search
// //   const filteredAttendees = attendees.filter(attendee => {
// //     if (!attendee) return false;
    
// //     const searchLower = searchTerm.toLowerCase();
// //     const matchesSearch = 
// //       (attendee.user?.name || '').toLowerCase().includes(searchLower) ||
// //       (attendee.user?.email || '').toLowerCase().includes(searchLower) ||
// //       (attendee.eventName || '').toLowerCase().includes(searchLower) ||
// //       (attendee.user?.phone || '').toLowerCase().includes(searchLower);
    
// //     return matchesSearch;
// //   });

// //   // Calculate current page stats
// //   const pageStats = {
// //     active: attendees.filter(a => a?.booking_status === 'active').length,
// //     checked_in: attendees.filter(a => a?.booking_status === 'checked_in').length,
// //     cancelled: attendees.filter(a => a?.booking_status === 'cancelled').length,
// //   };

// //   // Handle pagination
// //   const handleNextPage = () => {
// //     if (currentPage < pagination.lastPage) {
// //       setCurrentPage(prev => prev + 1);
// //     }
// //   };

// //   const handlePrevPage = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage(prev => prev - 1);
// //     }
// //   };

// //   // Handle check-in
// //   const handleCheckIn = (attendeeId, attendeeName) => {
// //     if (window.confirm(`Check in ${attendeeName}?`)) {
// //       alert(`Checking in ${attendeeName}... (ID: ${attendeeId})`);
// //       // TODO: Call check-in API endpoint
// //       // Example: attendeesService.checkIn(attendeeId)
// //     }
// //   };

// //   // Handle mark as checked out (if needed)
// //   const handleCheckOut = (attendeeId, attendeeName) => {
// //     if (window.confirm(`Mark ${attendeeName} as not checked in?`)) {
// //       alert(`Marking ${attendeeName} as not checked in...`);
// //       // TODO: Call check-out API endpoint
// //     }
// //   };

// //   // Handle export
// //   const handleExport = () => {
// //     const exportData = filteredAttendees.map(att => ({
// //       name: att.user?.name,
// //       email: att.user?.email,
// //       phone: att.user?.phone,
// //       event: att.eventName,
// //       date: att.date,
// //       time: att.time,
// //       location: att.location,
// //       status: att.booking_status,
// //       ticket: att.ticketType,
// //       price: att.ticketPrice,
// //       total: att.totalPrice,
// //       tickets: att.tickets,
// //       booking_id: att.id,
// //       qr_code: att.qr_code
// //     }));

// //     const dataStr = JSON.stringify(exportData, null, 2);
// //     const blob = new Blob([dataStr], { type: 'application/json' });
// //     const url = URL.createObjectURL(blob);
// //     const a = document.createElement('a');
// //     a.href = url;
// //     a.download = `attendees-${new Date().toISOString().split('T')[0]}.json`;
// //     document.body.appendChild(a);
// //     a.click();
// //     document.body.removeChild(a);
// //     URL.revokeObjectURL(url);
// //   };

// //   // Reset to page 1 when filters change
// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [statusFilter, eventFilter]);

// //   if (isLoading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 p-8">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="animate-pulse">
// //             <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
// //             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
// //               {[1, 2, 3, 4].map(i => (
// //                 <div key={i} className="bg-white p-6 rounded-lg shadow">
// //                   <div className="h-8 w-8 bg-gray-300 rounded"></div>
// //                   <div className="mt-4 space-y-2">
// //                     <div className="h-4 bg-gray-300 rounded w-1/2"></div>
// //                     <div className="h-6 bg-gray-300 rounded w-1/3"></div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow h-96"></div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 p-8">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="bg-red-50 border border-red-200 rounded-lg p-6">
// //             <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Data</h2>
// //             <p className="text-red-700">{error.message}</p>
// //             <button
// //               onClick={() => refetch()}
// //               className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
// //             >
// //               Retry
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className="mb-8">
// //           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Attendees Management</h1>
// //           <p className="text-gray-600 mt-1">Manage all event attendees and bookings</p>
// //         </div>

// //         {/* Stats - TOTAL COUNTS */}
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
// //           <div className="bg-white p-6 rounded-lg shadow">
// //             <div className="flex items-center">
// //               <div className="p-2 bg-blue-100 rounded-lg">
// //                 <Users className="h-6 w-6 text-blue-600" />
// //               </div>
// //               <div className="ml-4">
// //                 <p className="text-sm text-gray-600">Total Attendees</p>
// //                 <p className="text-2xl font-bold text-gray-900">{totalStats.total}</p>
// //               </div>
// //             </div>
// //           </div>
          
// //           <div className="bg-white p-6 rounded-lg shadow">
// //             <div className="flex items-center">
// //               <div className="p-2 bg-green-100 rounded-lg">
// //                 <CheckCircle className="h-6 w-6 text-green-600" />
// //               </div>
// //               <div className="ml-4">
// //                 <p className="text-sm text-gray-600">Active</p>
// //                 <p className="text-2xl font-bold text-green-600">{totalStats.active}</p>
// //                 <p className="text-xs text-gray-500 mt-1">({pageStats.active} on this page)</p>
// //               </div>
// //             </div>
// //           </div>
          
// //           <div className="bg-white p-6 rounded-lg shadow">
// //             <div className="flex items-center">
// //               <div className="p-2 bg-purple-100 rounded-lg">
// //                 <UserCheck className="h-6 w-6 text-purple-600" />
// //               </div>
// //               <div className="ml-4">
// //                 <p className="text-sm text-gray-600">Checked In</p>
// //                 <p className="text-2xl font-bold text-purple-600">{totalStats.checked_in}</p>
// //                 <p className="text-xs text-gray-500 mt-1">({pageStats.checked_in} on this page)</p>
// //               </div>
// //             </div>
// //           </div>
          
// //           <div className="bg-white p-6 rounded-lg shadow">
// //             <div className="flex items-center">
// //               <div className="p-2 bg-red-100 rounded-lg">
// //                 <XCircle className="h-6 w-6 text-red-600" />
// //               </div>
// //               <div className="ml-4">
// //                 <p className="text-sm text-gray-600">Cancelled</p>
// //                 <p className="text-2xl font-bold text-red-600">{totalStats.cancelled}</p>
// //                 <p className="text-xs text-gray-500 mt-1">({pageStats.cancelled} on this page)</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Filters */}
// //         <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-6">
// //           <div className="flex flex-col md:flex-row gap-4">
// //             {/* Search */}
// //             <div className="flex-1">
// //               <div className="relative">
// //                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
// //                 <input
// //                   type="text"
// //                   placeholder="Search by name, email, phone, or event..."
// //                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //               </div>
// //             </div>
            
// //             {/* Status Filter */}
// //             <div className="flex flex-col sm:flex-row gap-4">
// //               <div className="relative">
// //                 <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
// //                 <select
// //                   className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none"
// //                   value={statusFilter}
// //                   onChange={(e) => setStatusFilter(e.target.value)}
// //                 >
// //                   <option value="all">All Status</option>
// //                   <option value="active">Active</option>
// //                   <option value="checked_in">Checked In</option>
// //                   <option value="cancelled">Cancelled</option>
// //                 </select>
// //               </div>
              
// //               {/* Event Filter */}
// //               <select
// //                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
// //                 value={eventFilter}
// //                 onChange={(e) => setEventFilter(e.target.value)}
// //               >
// //                 <option value="all">All Events</option>
// //                 {events.map(event => (
// //                   <option key={event.id} value={event.id}>
// //                     {event.name}
// //                   </option>
// //                 ))}
// //               </select>
              
// //               {/* Export Button */}
// //               <button
// //                 onClick={handleExport}
// //                 disabled={filteredAttendees.length === 0}
// //                 className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
// //               >
// //                 <Download className="h-5 w-5" />
// //                 <span className="hidden sm:inline">Export</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Results Info */}
// //         <div className="mb-4 text-sm text-gray-600">
// //           Showing {filteredAttendees.length} of {attendees.length} attendees on this page
// //           {searchTerm && ` • Search: "${searchTerm}"`}
// //           {statusFilter !== 'all' && ` • Status: ${statusFilter}`}
// //           {eventFilter !== 'all' && ` • Event: ${events.find(e => e.id === eventFilter)?.name || ''}`}
// //         </div>

// //         {/* Attendees Table */}
// //         <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
// //           <div className="overflow-x-auto">
// //             <table className="min-w-full divide-y divide-gray-200">
// //               <thead className="bg-gray-50">
// //                 <tr>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     Attendee
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     Event Details
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     Status
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     Ticket & Payment
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     Actions
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody className="bg-white divide-y divide-gray-200">
// //                 {filteredAttendees.length > 0 ? (
// //                   filteredAttendees.map((attendee) => (
// //                     <tr key={attendee.id} className="hover:bg-gray-50">
// //                       <td className="px-6 py-4">
// //                         <div>
// //                           <div className="font-medium text-gray-900 flex items-center">
// //                             <User className="h-4 w-4 mr-2 text-blue-500" />
// //                             {attendee.user?.name}
// //                           </div>
// //                           <div className="text-sm text-gray-500 flex items-center mt-1">
// //                             <Mail className="h-3 w-3 mr-2" />
// //                             {attendee.user?.email}
// //                           </div>
// //                           {attendee.user?.phone && (
// //                             <div className="text-sm text-gray-500 flex items-center mt-1">
// //                               <Phone className="h-3 w-3 mr-2" />
// //                               {attendee.user.phone}
// //                             </div>
// //                           )}
// //                         </div>
// //                       </td>
                      
// //                       <td className="px-6 py-4">
// //                         <div className="font-medium text-gray-900">
// //                           {attendee.eventName}
// //                         </div>
// //                         <div className="text-sm text-gray-500 flex items-center mt-1">
// //                           <Calendar className="h-3 w-3 mr-2" />
// //                           {attendee.date ? new Date(attendee.date).toLocaleDateString('en-US', {
// //                             weekday: 'short',
// //                             year: 'numeric',
// //                             month: 'short',
// //                             day: 'numeric'
// //                           }) : 'N/A'}
// //                           {attendee.time && ` • ${attendee.time}`}
// //                         </div>
// //                         {attendee.location && (
// //                           <div className="text-sm text-gray-500 flex items-start mt-1">
// //                             <MapPin className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0" />
// //                             <span className="line-clamp-2">{attendee.location}</span>
// //                           </div>
// //                         )}
// //                       </td>
                      
// //                       <td className="px-6 py-4">
// //                         <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
// //                           attendee.booking_status === 'active'
// //                             ? 'bg-green-100 text-green-800'
// //                             : attendee.booking_status === 'checked_in'
// //                             ? 'bg-purple-100 text-purple-800'
// //                             : 'bg-red-100 text-red-800'
// //                         }`}>
// //                           {attendee.booking_status === 'active' ? (
// //                             <>
// //                               <CheckCircle className="h-4 w-4 mr-1" />
// //                               Active
// //                             </>
// //                           ) : attendee.booking_status === 'checked_in' ? (
// //                             <>
// //                               <UserCheck className="h-4 w-4 mr-1" />
// //                               Checked In
// //                             </>
// //                           ) : (
// //                             <>
// //                               <XCircle className="h-4 w-4 mr-1" />
// //                               Cancelled
// //                             </>
// //                           )}
// //                         </span>
// //                         <div className="text-xs text-gray-500 mt-2">
// //                           {attendee.tickets} ticket{attendee.tickets !== 1 ? 's' : ''}
// //                         </div>
// //                       </td>
                      
// //                       <td className="px-6 py-4">
// //                         <div className="flex items-center text-gray-900">
// //                           <Ticket className="h-4 w-4 mr-2 text-blue-500" />
// //                           <span className="font-medium">{attendee.ticketType}</span>
// //                         </div>
// //                         <div className="flex items-center text-gray-900 mt-2">
// //                           <DollarSign className="h-4 w-4 mr-2 text-green-500" />
// //                           <span className="font-semibold">${attendee.totalPrice}</span>
// //                           {parseFloat(attendee.ticketPrice) > 0 && (
// //                             <span className="text-sm text-gray-500 ml-2">
// //                               (${attendee.ticketPrice} each)
// //                             </span>
// //                           )}
// //                         </div>
// //                       </td>
                      
// //                       <td className="px-6 py-4">
// //                         <div className="flex flex-col space-y-2">
// //                           <button
// //                             onClick={() => {
// //                               alert(
// //                                 `Attendee Details:\n\n` +
// //                                 `Name: ${attendee.user?.name}\n` +
// //                                 `Email: ${attendee.user?.email}\n` +
// //                                 `Phone: ${attendee.user?.phone || 'N/A'}\n` +
// //                                 `Event: ${attendee.eventName}\n` +
// //                                 `Date: ${attendee.date ? new Date(attendee.date).toLocaleDateString() : 'N/A'}\n` +
// //                                 `Time: ${attendee.time || 'N/A'}\n` +
// //                                 `Location: ${attendee.location || 'N/A'}\n` +
// //                                 `Status: ${attendee.booking_status}\n` +
// //                                 `Ticket: ${attendee.ticketType}\n` +
// //                                 `Price: $${attendee.ticketPrice}\n` +
// //                                 `Total: $${attendee.totalPrice}\n` +
// //                                 `Tickets: ${attendee.tickets}\n` +
// //                                 `Booking ID: ${attendee.id}\n` +
// //                                 `QR Code: ${attendee.qr_code || 'N/A'}`
// //                               );
// //                             }}
// //                             className="text-sm text-blue-600 hover:text-blue-800 hover:underline text-left"
// //                           >
// //                             View Details
// //                           </button>
                          
// //                           {attendee.booking_status === 'active' && (
// //                             <button
// //                               onClick={() => handleCheckIn(attendee.id, attendee.user?.name)}
// //                               className="text-sm text-green-600 hover:text-green-800 hover:underline text-left"
// //                             >
// //                               Check In
// //                             </button>
// //                           )}
                          
// //                           {attendee.booking_status === 'checked_in' && (
// //                             <button
// //                               onClick={() => handleCheckOut(attendee.id, attendee.user?.name)}
// //                               className="text-sm text-yellow-600 hover:text-yellow-800 hover:underline text-left"
// //                             >
// //                               Undo Check-in
// //                             </button>
// //                           )}
                          
// //                           {attendee.qr_code && (
// //                             <button
// //                               onClick={() => {
// //                                 // Open QR code in new window or modal
// //                                 const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${attendee.qr_code}`;
// //                                 window.open(qrUrl, '_blank');
// //                               }}
// //                               className="text-sm text-purple-600 hover:text-purple-800 hover:underline text-left"
// //                             >
// //                               View QR Code
// //                             </button>
// //                           )}
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   ))
// //                 ) : (
// //                   <tr>
// //                     <td colSpan="5" className="px-6 py-12 text-center">
// //                       <div className="flex flex-col items-center">
// //                         <div className="text-4xl text-gray-300 mb-4">👥</div>
// //                         <h3 className="text-lg font-medium text-gray-900 mb-2">
// //                           {searchTerm || statusFilter !== 'all' || eventFilter !== 'all' 
// //                             ? 'No matching attendees found' 
// //                             : 'No attendees to display'}
// //                         </h3>
// //                         <p className="text-gray-500">
// //                           {searchTerm || statusFilter !== 'all' || eventFilter !== 'all'
// //                             ? 'Try adjusting your search or filters.'
// //                             : 'No attendee data available for the selected filters.'}
// //                         </p>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Pagination */}
// //         {pagination.lastPage > 1 && (
// //           <div className="bg-white rounded-lg shadow px-6 py-4">
// //             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
// //               <div className="text-sm text-gray-700">
// //                 Page <span className="font-medium">{pagination.currentPage}</span> of{" "}
// //                 <span className="font-medium">{pagination.lastPage}</span> •{" "}
// //                 <span className="font-medium">{pagination.total}</span> total attendees
// //               </div>
              
// //               <div className="flex items-center space-x-2">
// //                 <button
// //                   onClick={handlePrevPage}
// //                   disabled={currentPage === 1}
// //                   className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded text-sm font-medium ${
// //                     currentPage === 1
// //                       ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
// //                       : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
// //                   }`}
// //                 >
// //                   <ChevronLeft className="h-4 w-4 mr-1" />
// //                   Previous
// //                 </button>
                
// //                 <div className="flex items-center space-x-1">
// //                   {Array.from({ length: Math.min(5, pagination.lastPage) }, (_, i) => {
// //                     let pageNum;
// //                     if (pagination.lastPage <= 5) {
// //                       pageNum = i + 1;
// //                     } else if (currentPage <= 3) {
// //                       pageNum = i + 1;
// //                     } else if (currentPage >= pagination.lastPage - 2) {
// //                       pageNum = pagination.lastPage - 4 + i;
// //                     } else {
// //                       pageNum = currentPage - 2 + i;
// //                     }
                    
// //                     return (
// //                       <button
// //                         key={pageNum}
// //                         onClick={() => setCurrentPage(pageNum)}
// //                         className={`px-3 py-1 text-sm rounded ${
// //                           currentPage === pageNum
// //                             ? 'bg-blue-600 text-white'
// //                             : 'text-gray-700 hover:bg-gray-100'
// //                         }`}
// //                       >
// //                         {pageNum}
// //                       </button>
// //                     );
// //                   })}
// //                 </div>
                
// //                 <button
// //                   onClick={handleNextPage}
// //                   disabled={currentPage === pagination.lastPage}
// //                   className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded text-sm font-medium ${
// //                     currentPage === pagination.lastPage
// //                       ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
// //                       : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
// //                   }`}
// //                 >
// //                   Next
// //                   <ChevronRight className="h-4 w-4 ml-1" />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrganizerAttendees;
// "use client";

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { attendeesService } from "../../services/attendeesService";
// import { useState, useEffect } from "react";
// import {
//   Search,
//   Filter,
//   Calendar,
//   CheckCircle,
//   XCircle,
//   UserCheck,
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Ticket,
//   DollarSign,
//   ChevronLeft,
//   ChevronRight,
//   Download,
//   Users,
//   Loader2
// } from "lucide-react";

// const OrganizerAttendees = () => {
//   const queryClient = useQueryClient();
  
//   // State for filters
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [eventFilter, setEventFilter] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage] = useState(20);
  
//   // State for events list and total stats
//   const [events, setEvents] = useState([]);
//   const [totalStats, setTotalStats] = useState({
//     total: 0,
//     active: 0,
//     checked_in: 0,
//     cancelled: 0
//   });

//   // Fetch attendees with filters
//   const { data, isLoading, error, refetch } = useQuery({
//     queryKey: ["attendees", currentPage, statusFilter, eventFilter],
//     queryFn: () => attendeesService.list({
//       page: currentPage,
//       perPage: perPage,
//       status: statusFilter !== "all" ? statusFilter : undefined,
//       event_id: eventFilter !== "all" ? eventFilter : undefined,
//     }),
//   });

//   // Check-in mutation
//   const checkInMutation = useMutation({
//     mutationFn: (bookingId) => attendeesService.checkIn(bookingId),
//     onSuccess: () => {
//       // Invalidate and refetch attendees data
//       queryClient.invalidateQueries(["attendees"]);
//       queryClient.invalidateQueries(["attendees-stats"]);
//     },
//     onError: (error) => {
//       alert(error.response?.data?.message || "Failed to check in attendee");
//     }
//   });

//   // Undo check-in mutation
//   const undoCheckInMutation = useMutation({
//     mutationFn: (bookingId) => attendeesService.undoCheckIn(bookingId),
//     onSuccess: () => {
//       // Invalidate and refetch attendees data
//       queryClient.invalidateQueries(["attendees"]);
//       queryClient.invalidateQueries(["attendees-stats"]);
//     },
//     onError: (error) => {
//       alert(error.response?.data?.message || "Failed to undo check-in");
//     }
//   });

//   // Extract data from response
//   const responseData = data?.data;
//   const attendees = responseData?.data || [];
//   const pagination = {
//     currentPage: responseData?.currentPage || 1,
//     lastPage: responseData?.lastPage || 1,
//     perPage: responseData?.perPage || perPage,
//     total: responseData?.total || 0
//   };

//   // Extract unique events from attendees data
//   useEffect(() => {
//     if (attendees.length > 0) {
//       const uniqueEvents = [];
//       const eventMap = new Map();
      
//       attendees.forEach(attendee => {
//         if (attendee.event_id && attendee.eventName && !eventMap.has(attendee.event_id)) {
//           eventMap.set(attendee.event_id, true);
//           uniqueEvents.push({
//             id: attendee.event_id,
//             name: attendee.eventName
//           });
//         }
//       });
      
//       setEvents(uniqueEvents);
//     }
//   }, [attendees]);

//   // Fetch total stats separately (first page to get overview)
//   const { data: statsData } = useQuery({
//     queryKey: ["attendees-stats"],
//     queryFn: () => attendeesService.list({
//       page: 1,
//       perPage: 100,
//     }),
//     enabled: !isLoading,
//   });

//   // Update total stats when stats data is available
//   useEffect(() => {
//     if (statsData?.data?.data) {
//       const allAttendees = statsData.data.data;
//       const stats = {
//         total: statsData.data.total || 0,
//         active: allAttendees.filter(a => a?.booking_status === 'active').length,
//         checked_in: allAttendees.filter(a => a?.booking_status === 'checked_in').length,
//         cancelled: allAttendees.filter(a => a?.booking_status === 'cancelled').length,
//       };
//       setTotalStats(stats);
//     }
//   }, [statsData]);

//   // Filter attendees locally based on search
//   const filteredAttendees = attendees.filter(attendee => {
//     if (!attendee) return false;
    
//     const searchLower = searchTerm.toLowerCase();
//     const matchesSearch = 
//       (attendee.user?.name || '').toLowerCase().includes(searchLower) ||
//       (attendee.user?.email || '').toLowerCase().includes(searchLower) ||
//       (attendee.eventName || '').toLowerCase().includes(searchLower) ||
//       (attendee.user?.phone || '').toLowerCase().includes(searchLower);
    
//     return matchesSearch;
//   });

//   // Calculate current page stats
//   const pageStats = {
//     active: attendees.filter(a => a?.booking_status === 'active').length,
//     checked_in: attendees.filter(a => a?.booking_status === 'checked_in').length,
//     cancelled: attendees.filter(a => a?.booking_status === 'cancelled').length,
//   };

//   // Handle check-in
//   const handleCheckIn = (attendeeId, attendeeName) => {
//     if (window.confirm(`Check in ${attendeeName}?`)) {
//       checkInMutation.mutate(attendeeId);
//     }
//   };

//   // Handle undo check-in
//   const handleUndoCheckIn = (attendeeId, attendeeName) => {
//     if (window.confirm(`Undo check-in for ${attendeeName}?`)) {
//       undoCheckInMutation.mutate(attendeeId);
//     }
//   };

//   // Handle export
//   const handleExport = () => {
//     const exportData = filteredAttendees.map(att => ({
//       name: att.user?.name,
//       email: att.user?.email,
//       phone: att.user?.phone,
//       event: att.eventName,
//       date: att.date,
//       time: att.time,
//       location: att.location,
//       status: att.booking_status,
//       ticket: att.ticketType,
//       price: att.ticketPrice,
//       total: att.totalPrice,
//       tickets: att.tickets,
//       booking_id: att.id,
//       qr_code: att.qr_code
//     }));

//     const dataStr = JSON.stringify(exportData, null, 2);
//     const blob = new Blob([dataStr], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `attendees-${new Date().toISOString().split('T')[0]}.json`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   // Reset to page 1 when filters change
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [statusFilter, eventFilter]);

//   // Handle pagination
//   const handleNextPage = () => {
//     if (currentPage < pagination.lastPage) {
//       setCurrentPage(prev => prev + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(prev => prev - 1);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="animate-pulse">
//             <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//               {[1, 2, 3, 4].map(i => (
//                 <div key={i} className="bg-white p-6 rounded-lg shadow">
//                   <div className="h-8 w-8 bg-gray-300 rounded"></div>
//                   <div className="mt-4 space-y-2">
//                     <div className="h-4 bg-gray-300 rounded w-1/2"></div>
//                     <div className="h-6 bg-gray-300 rounded w-1/3"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow h-96"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-red-50 border border-red-200 rounded-lg p-6">
//             <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Data</h2>
//             <p className="text-red-700">{error.message}</p>
//             <button
//               onClick={() => refetch()}
//               className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//             >
//               Retry
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Attendees Management</h1>
//           <p className="text-gray-600 mt-1">Manage all event attendees and bookings</p>
//         </div>

//         {/* Stats - TOTAL COUNTS */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow">
//             <div className="flex items-center">
//               <div className="p-2 bg-blue-100 rounded-lg">
//                 <Users className="h-6 w-6 text-blue-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm text-gray-600">Total Attendees</p>
//                 <p className="text-2xl font-bold text-gray-900">{totalStats.total}</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white p-6 rounded-lg shadow">
//             <div className="flex items-center">
//               <div className="p-2 bg-green-100 rounded-lg">
//                 <CheckCircle className="h-6 w-6 text-green-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm text-gray-600">Active</p>
//                 <p className="text-2xl font-bold text-green-600">{totalStats.active}</p>
//                 <p className="text-xs text-gray-500 mt-1">({pageStats.active} on this page)</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white p-6 rounded-lg shadow">
//             <div className="flex items-center">
//               <div className="p-2 bg-purple-100 rounded-lg">
//                 <UserCheck className="h-6 w-6 text-purple-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm text-gray-600">Checked In</p>
//                 <p className="text-2xl font-bold text-purple-600">{totalStats.checked_in}</p>
//                 <p className="text-xs text-gray-500 mt-1">({pageStats.checked_in} on this page)</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white p-6 rounded-lg shadow">
//             <div className="flex items-center">
//               <div className="p-2 bg-red-100 rounded-lg">
//                 <XCircle className="h-6 w-6 text-red-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm text-gray-600">Cancelled</p>
//                 <p className="text-2xl font-bold text-red-600">{totalStats.cancelled}</p>
//                 <p className="text-xs text-gray-500 mt-1">({pageStats.cancelled} on this page)</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-6">
//           <div className="flex flex-col md:flex-row gap-4">
//             {/* Search */}
//             <div className="flex-1">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search by name, email, phone, or event..."
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//             </div>
            
//             {/* Status Filter */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <div className="relative">
//                 <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <select
//                   className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none"
//                   value={statusFilter}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                 >
//                   <option value="all">All Status</option>
//                   <option value="active">Active</option>
//                   <option value="checked_in">Checked In</option>
//                   <option value="cancelled">Cancelled</option>
//                 </select>
//               </div>
              
//               {/* Event Filter */}
//               <select
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                 value={eventFilter}
//                 onChange={(e) => setEventFilter(e.target.value)}
//               >
//                 <option value="all">All Events</option>
//                 {events.map(event => (
//                   <option key={event.id} value={event.id}>
//                     {event.name}
//                   </option>
//                 ))}
//               </select>
              
//               {/* Export Button */}
//               <button
//                 onClick={handleExport}
//                 disabled={filteredAttendees.length === 0}
//                 className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
//               >
//                 <Download className="h-5 w-5" />
//                 <span className="hidden sm:inline">Export</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Results Info */}
//         <div className="mb-4 text-sm text-gray-600">
//           Showing {filteredAttendees.length} of {attendees.length} attendees on this page
//           {searchTerm && ` • Search: "${searchTerm}"`}
//           {statusFilter !== 'all' && ` • Status: ${statusFilter}`}
//           {eventFilter !== 'all' && ` • Event: ${events.find(e => e.id === eventFilter)?.name || ''}`}
//         </div>

//         {/* Loading overlay for mutations */}
//         {(checkInMutation.isLoading || undoCheckInMutation.isLoading) && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <div className="flex items-center gap-3">
//                 <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
//                 <span className="text-lg font-medium">Processing...</span>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Attendees Table */}
//         <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Attendee
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Event Details
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Ticket & Payment
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredAttendees.length > 0 ? (
//                   filteredAttendees.map((attendee) => (
//                     <tr key={attendee.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4">
//                         <div>
//                           <div className="font-medium text-gray-900 flex items-center">
//                             <User className="h-4 w-4 mr-2 text-blue-500" />
//                             {attendee.user?.name}
//                           </div>
//                           <div className="text-sm text-gray-500 flex items-center mt-1">
//                             <Mail className="h-3 w-3 mr-2" />
//                             {attendee.user?.email}
//                           </div>
//                           {attendee.user?.phone && (
//                             <div className="text-sm text-gray-500 flex items-center mt-1">
//                               <Phone className="h-3 w-3 mr-2" />
//                               {attendee.user.phone}
//                             </div>
//                           )}
//                         </div>
//                       </td>
                      
//                       <td className="px-6 py-4">
//                         <div className="font-medium text-gray-900">
//                           {attendee.eventName}
//                         </div>
//                         <div className="text-sm text-gray-500 flex items-center mt-1">
//                           <Calendar className="h-3 w-3 mr-2" />
//                           {attendee.date ? new Date(attendee.date).toLocaleDateString('en-US', {
//                             weekday: 'short',
//                             year: 'numeric',
//                             month: 'short',
//                             day: 'numeric'
//                           }) : 'N/A'}
//                           {attendee.time && ` • ${attendee.time}`}
//                         </div>
//                         {attendee.location && (
//                           <div className="text-sm text-gray-500 flex items-start mt-1">
//                             <MapPin className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0" />
//                             <span className="line-clamp-2">{attendee.location}</span>
//                           </div>
//                         )}
//                       </td>
                      
//                       <td className="px-6 py-4">
//                         <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                           attendee.booking_status === 'active'
//                             ? 'bg-green-100 text-green-800'
//                             : attendee.booking_status === 'checked_in'
//                             ? 'bg-purple-100 text-purple-800'
//                             : 'bg-red-100 text-red-800'
//                         }`}>
//                           {attendee.booking_status === 'active' ? (
//                             <>
//                               <CheckCircle className="h-4 w-4 mr-1" />
//                               Active
//                             </>
//                           ) : attendee.booking_status === 'checked_in' ? (
//                             <>
//                               <UserCheck className="h-4 w-4 mr-1" />
//                               Checked In
//                             </>
//                           ) : (
//                             <>
//                               <XCircle className="h-4 w-4 mr-1" />
//                               Cancelled
//                             </>
//                           )}
//                         </span>
//                         <div className="text-xs text-gray-500 mt-2">
//                           {attendee.tickets} ticket{attendee.tickets !== 1 ? 's' : ''}
//                         </div>
//                       </td>
                      
//                       <td className="px-6 py-4">
//                         <div className="flex items-center text-gray-900">
//                           <Ticket className="h-4 w-4 mr-2 text-blue-500" />
//                           <span className="font-medium">{attendee.ticketType}</span>
//                         </div>
//                         <div className="flex items-center text-gray-900 mt-2">
//                           <DollarSign className="h-4 w-4 mr-2 text-green-500" />
//                           <span className="font-semibold">${attendee.totalPrice}</span>
//                           {parseFloat(attendee.ticketPrice) > 0 && (
//                             <span className="text-sm text-gray-500 ml-2">
//                               (${attendee.ticketPrice} each)
//                             </span>
//                           )}
//                         </div>
//                       </td>
                      
//                       <td className="px-6 py-4">
//                         <div className="flex flex-col space-y-2">
//                           <button
//                             onClick={() => {
//                               alert(
//                                 `Attendee Details:\n\n` +
//                                 `Name: ${attendee.user?.name}\n` +
//                                 `Email: ${attendee.user?.email}\n` +
//                                 `Phone: ${attendee.user?.phone || 'N/A'}\n` +
//                                 `Event: ${attendee.eventName}\n` +
//                                 `Date: ${attendee.date ? new Date(attendee.date).toLocaleDateString() : 'N/A'}\n` +
//                                 `Time: ${attendee.time || 'N/A'}\n` +
//                                 `Location: ${attendee.location || 'N/A'}\n` +
//                                 `Status: ${attendee.booking_status}\n` +
//                                 `Ticket: ${attendee.ticketType}\n` +
//                                 `Price: $${attendee.ticketPrice}\n` +
//                                 `Total: $${attendee.totalPrice}\n` +
//                                 `Tickets: ${attendee.tickets}\n` +
//                                 `Booking ID: ${attendee.id}\n` +
//                                 `QR Code: ${attendee.qr_code || 'N/A'}`
//                               );
//                             }}
//                             className="text-sm text-blue-600 hover:text-blue-800 hover:underline text-left"
//                           >
//                             View Details
//                           </button>
                          
//                           {attendee.booking_status === 'active' && (
//                             <button
//                               onClick={() => handleCheckIn(attendee.id, attendee.user?.name)}
//                               disabled={checkInMutation.isLoading}
//                               className="text-sm text-green-600 hover:text-green-800 hover:underline text-left disabled:opacity-50 disabled:cursor-not-allowed"
//                             >
//                               {checkInMutation.isLoading ? (
//                                 <span className="flex items-center">
//                                   <Loader2 className="h-3 w-3 mr-1 animate-spin" />
//                                   Checking In...
//                                 </span>
//                               ) : (
//                                 'Check In'
//                               )}
//                             </button>
//                           )}
                          
//                           {attendee.booking_status === 'checked_in' && (
//                             <button
//                               onClick={() => handleUndoCheckIn(attendee.id, attendee.user?.name)}
//                               disabled={undoCheckInMutation.isLoading}
//                               className="text-sm text-yellow-600 hover:text-yellow-800 hover:underline text-left disabled:opacity-50 disabled:cursor-not-allowed"
//                             >
//                               {undoCheckInMutation.isLoading ? (
//                                 <span className="flex items-center">
//                                   <Loader2 className="h-3 w-3 mr-1 animate-spin" />
//                                   Processing...
//                                 </span>
//                               ) : (
//                                 'Undo Check-in'
//                               )}
//                             </button>
//                           )}
                          
//                           {attendee.qr_code && (
//                             <button
//                               onClick={() => {
//                                 // Open QR code in new window or modal
//                                 const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${attendee.qr_code}`;
//                                 window.open(qrUrl, '_blank');
//                               }}
//                               className="text-sm text-purple-600 hover:text-purple-800 hover:underline text-left"
//                             >
//                               View QR Code
//                             </button>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="px-6 py-12 text-center">
//                       <div className="flex flex-col items-center">
//                         <div className="text-4xl text-gray-300 mb-4">👥</div>
//                         <h3 className="text-lg font-medium text-gray-900 mb-2">
//                           {searchTerm || statusFilter !== 'all' || eventFilter !== 'all' 
//                             ? 'No matching attendees found' 
//                             : 'No attendees to display'}
//                         </h3>
//                         <p className="text-gray-500">
//                           {searchTerm || statusFilter !== 'all' || eventFilter !== 'all'
//                             ? 'Try adjusting your search or filters.'
//                             : 'No attendee data available for the selected filters.'}
//                         </p>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Pagination */}
//         {pagination.lastPage > 1 && (
//           <div className="bg-white rounded-lg shadow px-6 py-4">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//               <div className="text-sm text-gray-700">
//                 Page <span className="font-medium">{pagination.currentPage}</span> of{" "}
//                 <span className="font-medium">{pagination.lastPage}</span> •{" "}
//                 <span className="font-medium">{pagination.total}</span> total attendees
//               </div>
              
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={handlePrevPage}
//                   disabled={currentPage === 1}
//                   className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded text-sm font-medium ${
//                     currentPage === 1
//                       ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
//                       : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
//                   }`}
//                 >
//                   <ChevronLeft className="h-4 w-4 mr-1" />
//                   Previous
//                 </button>
                
//                 <div className="flex items-center space-x-1">
//                   {Array.from({ length: Math.min(5, pagination.lastPage) }, (_, i) => {
//                     let pageNum;
//                     if (pagination.lastPage <= 5) {
//                       pageNum = i + 1;
//                     } else if (currentPage <= 3) {
//                       pageNum = i + 1;
//                     } else if (currentPage >= pagination.lastPage - 2) {
//                       pageNum = pagination.lastPage - 4 + i;
//                     } else {
//                       pageNum = currentPage - 2 + i;
//                     }
                    
//                     return (
//                       <button
//                         key={pageNum}
//                         onClick={() => setCurrentPage(pageNum)}
//                         className={`px-3 py-1 text-sm rounded ${
//                           currentPage === pageNum
//                             ? 'bg-blue-600 text-white'
//                             : 'text-gray-700 hover:bg-gray-100'
//                         }`}
//                       >
//                         {pageNum}
//                       </button>
//                     );
//                   })}
//                 </div>
                
//                 <button
//                   onClick={handleNextPage}
//                   disabled={currentPage === pagination.lastPage}
//                   className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded text-sm font-medium ${
//                     currentPage === pagination.lastPage
//                       ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
//                       : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
//                   }`}
//                 >
//                   Next
//                   <ChevronRight className="h-4 w-4 ml-1" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrganizerAttendees;
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Filter,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Search,
  Ticket,
  User,
  UserCheck,
  Users,
  XCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import { attendeesService } from "../../services/attendeesService";

const OrganizerAttendees = () => {
  const queryClient = useQueryClient();
  
  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [eventFilter, setEventFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(20);
  
  // State for events list and total stats
  const [events, setEvents] = useState([]);
  const [totalStats, setTotalStats] = useState({
    total: 0,
    active: 0,
    checked_in: 0,
    cancelled: 0
  });

  // Fetch attendees with filters
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["attendees", currentPage, statusFilter, eventFilter],
    queryFn: () => attendeesService.list({
      page: currentPage,
      perPage: perPage,
      status: statusFilter !== "all" ? statusFilter : undefined,
      event_id: eventFilter !== "all" ? eventFilter : undefined,
    }),
  });

  // Check-in mutation with optimistic updates
  const checkInMutation = useMutation({
    mutationFn: (bookingId) => attendeesService.checkIn(bookingId),
    onMutate: async (bookingId) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries(["attendees"]);
      
      // Snapshot the previous value
      const previousAttendees = queryClient.getQueryData(["attendees"]);
      
      // Optimistically update to the new value
      queryClient.setQueryData(["attendees"], (old) => {
        if (!old) return old;
        
        return {
          ...old,
          data: {
            ...old.data,
            data: old.data.data.map(attendee => 
              attendee.id === bookingId 
                ? { ...attendee, booking_status: 'checked_in' }
                : attendee
            )
          }
        };
      });
      
      // Also update stats optimistically
      queryClient.setQueryData(["attendees-stats"], (old) => {
        if (!old) return old;
        
        return {
          ...old,
          data: {
            ...old.data,
            data: old.data.data.map(attendee => 
              attendee.id === bookingId 
                ? { ...attendee, booking_status: 'checked_in' }
                : attendee
            )
          }
        };
      });
      
      return { previousAttendees };
    },
    onError: (err, bookingId, context) => {
      // If the mutation fails, roll back
      if (context?.previousAttendees) {
        queryClient.setQueryData(["attendees"], context.previousAttendees);
      }
      alert(err.response?.data?.message || "Failed to check in attendee");
    },
    onSuccess: () => {
      // Invalidate to refetch fresh data
      queryClient.invalidateQueries(["attendees"]);
      queryClient.invalidateQueries(["attendees-stats"]);
    }
  });

  // Undo check-in mutation with optimistic updates
  const undoCheckInMutation = useMutation({
    mutationFn: (bookingId) => attendeesService.undoCheckIn(bookingId),
    onMutate: async (bookingId) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries(["attendees"]);
      
      // Snapshot the previous value
      const previousAttendees = queryClient.getQueryData(["attendees"]);
      
      // Optimistically update to the new value
      queryClient.setQueryData(["attendees"], (old) => {
        if (!old) return old;
        
        return {
          ...old,
          data: {
            ...old.data,
            data: old.data.data.map(attendee => 
              attendee.id === bookingId 
                ? { ...attendee, booking_status: 'active' }
                : attendee
            )
          }
        };
      });
      
      // Also update stats optimistically
      queryClient.setQueryData(["attendees-stats"], (old) => {
        if (!old) return old;
        
        return {
          ...old,
          data: {
            ...old.data,
            data: old.data.data.map(attendee => 
              attendee.id === bookingId 
                ? { ...attendee, booking_status: 'active' }
                : attendee
            )
          }
        };
      });
      
      return { previousAttendees };
    },
    onError: (err, bookingId, context) => {
      // If the mutation fails, roll back
      if (context?.previousAttendees) {
        queryClient.setQueryData(["attendees"], context.previousAttendees);
      }
      alert(err.response?.data?.message || "Failed to undo check-in");
    },
    onSuccess: () => {
      // Invalidate to refetch fresh data
      queryClient.invalidateQueries(["attendees"]);
      queryClient.invalidateQueries(["attendees-stats"]);
    }
  });

  // Extract data from response
  const responseData = data?.data;
  const attendees = responseData?.data || [];
  const pagination = {
    currentPage: responseData?.currentPage || 1,
    lastPage: responseData?.lastPage || 1,
    perPage: responseData?.perPage || perPage,
    total: responseData?.total || 0
  };

  // Extract unique events from attendees data
  useEffect(() => {
    if (attendees.length > 0) {
      const uniqueEvents = [];
      const eventMap = new Map();
      
      attendees.forEach(attendee => {
        if (attendee.event_id && attendee.eventName && !eventMap.has(attendee.event_id)) {
          eventMap.set(attendee.event_id, true);
          uniqueEvents.push({
            id: attendee.event_id,
            name: attendee.eventName
          });
        }
      });
      
      setEvents(uniqueEvents);
    }
  }, [attendees]);

  // Fetch total stats separately (first page to get overview)
  const { data: statsData } = useQuery({
    queryKey: ["attendees-stats"],
    queryFn: () => attendeesService.list({
      page: 1,
      perPage: 100,
    }),
    enabled: !isLoading,
  });

  // Update total stats when stats data is available
  useEffect(() => {
    if (statsData?.data?.data) {
      const allAttendees = statsData.data.data;
      const stats = {
        total: statsData.data.total || 0,
        active: allAttendees.filter(a => a?.booking_status === 'active').length,
        checked_in: allAttendees.filter(a => a?.booking_status === 'checked_in').length,
        cancelled: allAttendees.filter(a => a?.booking_status === 'cancelled').length,
      };
      setTotalStats(stats);
    }
  }, [statsData]);

  // Filter attendees locally based on search
  const filteredAttendees = attendees.filter(attendee => {
    if (!attendee) return false;
    
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      (attendee.user?.name || '').toLowerCase().includes(searchLower) ||
      (attendee.user?.email || '').toLowerCase().includes(searchLower) ||
      (attendee.eventName || '').toLowerCase().includes(searchLower) ||
      (attendee.user?.phone || '').toLowerCase().includes(searchLower);
    
    return matchesSearch;
  });

  // Calculate current page stats
  const pageStats = {
    active: attendees.filter(a => a?.booking_status === 'active').length,
    checked_in: attendees.filter(a => a?.booking_status === 'checked_in').length,
    cancelled: attendees.filter(a => a?.booking_status === 'cancelled').length,
  };

  // Handle check-in
  const handleCheckIn = (attendeeId, attendeeName) => {
    if (window.confirm(`Check in ${attendeeName}?`)) {
      checkInMutation.mutate(attendeeId);
    }
  };

  // Handle undo check-in
  const handleUndoCheckIn = (attendeeId, attendeeName) => {
    if (window.confirm(`Undo check-in for ${attendeeName}?`)) {
      undoCheckInMutation.mutate(attendeeId);
    }
  };

  // Handle export
  const handleExport = () => {
    const exportData = filteredAttendees.map(att => ({
      name: att.user?.name,
      email: att.user?.email,
      phone: att.user?.phone,
      event: att.eventName,
      date: att.date,
      time: att.time,
      location: att.location,
      status: att.booking_status,
      ticket: att.ticketType,
      price: att.ticketPrice,
      total: att.totalPrice,
      tickets: att.tickets,
      booking_id: att.id,
      qr_code: att.qr_code
    }));

    const dataStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `attendees-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, eventFilter]);

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < pagination.lastPage) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <div className="h-8 w-8 bg-gray-300 rounded"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow h-96"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Data</h2>
            <p className="text-red-700">{error.message}</p>
            <button
              onClick={() => refetch()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Attendees Management</h1>
          <p className="text-gray-600 mt-1">Manage all event attendees and bookings</p>
        </div>

        {/* Stats - TOTAL COUNTS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Attendees</p>
                <p className="text-2xl font-bold text-gray-900">{totalStats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active</p>
                <p className="text-2xl font-bold text-green-600">{totalStats.active}</p>
                <p className="text-xs text-gray-500 mt-1">({pageStats.active} on this page)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <UserCheck className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Checked In</p>
                <p className="text-2xl font-bold text-purple-600">{totalStats.checked_in}</p>
                <p className="text-xs text-gray-500 mt-1">({pageStats.checked_in} on this page)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Cancelled</p>
                <p className="text-2xl font-bold text-red-600">{totalStats.cancelled}</p>
                <p className="text-xs text-gray-500 mt-1">({pageStats.cancelled} on this page)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, phone, or event..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* Status Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="checked_in">Checked In</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              
              {/* Event Filter */}
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={eventFilter}
                onChange={(e) => setEventFilter(e.target.value)}
              >
                <option value="all">All Events</option>
                {events.map(event => (
                  <option key={event.id} value={event.id}>
                    {event.name}
                  </option>
                ))}
              </select>
              
              {/* Export Button */}
              {/* <button
                onClick={handleExport}
                disabled={filteredAttendees.length === 0}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <Download className="h-5 w-5" />
                <span className="hidden sm:inline">Export</span>
              </button> */}
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-4 text-sm text-gray-600">
          Showing {filteredAttendees.length} of {attendees.length} attendees on this page
          {searchTerm && ` • Search: "${searchTerm}"`}
          {statusFilter !== 'all' && ` • Status: ${statusFilter}`}
          {eventFilter !== 'all' && ` • Event: ${events.find(e => e.id === eventFilter)?.name || ''}`}
        </div>

        {/* Loading overlay for mutations */}
        {(checkInMutation.isLoading || undoCheckInMutation.isLoading) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
                <span className="text-lg font-medium">Processing...</span>
              </div>
            </div>
          </div>
        )}

        {/* Attendees Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Attendee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ticket & Payment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAttendees.length > 0 ? (
                  filteredAttendees.map((attendee) => (
                    <tr key={attendee.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900 flex items-center">
                            <User className="h-4 w-4 mr-2 text-blue-500" />
                            {attendee.user?.name}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <Mail className="h-3 w-3 mr-2" />
                            {attendee.user?.email}
                          </div>
                          {attendee.user?.phone && (
                            <div className="text-sm text-gray-500 flex items-center mt-1">
                              <Phone className="h-3 w-3 mr-2" />
                              {attendee.user.phone}
                            </div>
                          )}
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">
                          {attendee.eventName}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <Calendar className="h-3 w-3 mr-2" />
                          {attendee.date ? new Date(attendee.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          }) : 'N/A'}
                          {attendee.time && ` • ${attendee.time}`}
                        </div>
                        {attendee.location && (
                          <div className="text-sm text-gray-500 flex items-start mt-1">
                            <MapPin className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">{attendee.location}</span>
                          </div>
                        )}
                      </td>
                      
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          attendee.booking_status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : attendee.booking_status === 'checked_in'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {attendee.booking_status === 'active' ? (
                            <>
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Active
                            </>
                          ) : attendee.booking_status === 'checked_in' ? (
                            <>
                              <UserCheck className="h-4 w-4 mr-1" />
                              Checked In
                            </>
                          ) : (
                            <>
                              <XCircle className="h-4 w-4 mr-1" />
                              Cancelled
                            </>
                          )}
                        </span>
                        <div className="text-xs text-gray-500 mt-2">
                          {attendee.tickets} ticket{attendee.tickets !== 1 ? 's' : ''}
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex items-center text-gray-900">
                          <Ticket className="h-4 w-4 mr-2 text-blue-500" />
                          <span className="font-medium">{attendee.ticketType}</span>
                        </div>
                        <div className="flex items-center text-gray-900 mt-2">
    
                          <span className="font-semibold">Rs.{attendee.totalPrice}</span>
                          {parseFloat(attendee.ticketPrice) > 0 && (
                            <span className="text-sm text-gray-500 ml-2">
                              (Rs.{attendee.ticketPrice} each)
                            </span>
                          )}
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex flex-col space-y-2">
                          <button
                            onClick={() => {
                              alert(
                                `Attendee Details:\n\n` +
                                `Name: ${attendee.user?.name}\n` +
                                `Email: ${attendee.user?.email}\n` +
                                `Phone: ${attendee.user?.phone || 'N/A'}\n` +
                                `Event: ${attendee.eventName}\n` +
                                `Date: ${attendee.date ? new Date(attendee.date).toLocaleDateString() : 'N/A'}\n` +
                                `Time: ${attendee.time || 'N/A'}\n` +
                                `Location: ${attendee.location || 'N/A'}\n` +
                                `Status: ${attendee.booking_status}\n` +
                                `Ticket: ${attendee.ticketType}\n` +
                                `Price: $${attendee.ticketPrice}\n` +
                                `Total: $${attendee.totalPrice}\n` +
                                `Tickets: ${attendee.tickets}\n` +
                                `Booking ID: ${attendee.id}\n` +
                                `QR Code: ${attendee.qr_code || 'N/A'}`
                              );
                            }}
                            className="text-sm text-blue-600 hover:text-blue-800 hover:underline text-left"
                          >
                            View Details
                          </button>
                          
                          {/* Show Check In button only if status is 'active' */}
                          {attendee.booking_status === 'active' && (
                            <button
                              onClick={() => handleCheckIn(attendee.id, attendee.user?.name)}
                              disabled={checkInMutation.isLoading}
                              className="text-sm text-green-600 hover:text-green-800 hover:underline text-left disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {checkInMutation.variables === attendee.id && checkInMutation.isLoading ? (
                                <span className="flex items-center">
                                  <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                                  Checking In...
                                </span>
                              ) : (
                                'Check In'
                              )}
                            </button>
                          )}
                          
                          {/* Show Undo Check-in button only if status is 'checked_in' */}
                          {attendee.booking_status === 'checked_in' && (
                            <button
                              onClick={() => handleUndoCheckIn(attendee.id, attendee.user?.name)}
                              disabled={undoCheckInMutation.isLoading}
                              className="text-sm text-yellow-600 hover:text-yellow-800 hover:underline text-left disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {undoCheckInMutation.variables === attendee.id && undoCheckInMutation.isLoading ? (
                                <span className="flex items-center">
                                  <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                                  Processing...
                                </span>
                              ) : (
                                'Undo Check-in'
                              )}
                            </button>
                          )}
                          
                          {attendee.qr_code && (
                            <button
                              onClick={() => {
                                const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${attendee.qr_code}`;
                                window.open(qrUrl, '_blank');
                              }}
                              className="text-sm text-purple-600 hover:text-purple-800 hover:underline text-left"
                            >
                              View QR Code
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center">
                        <div className="text-4xl text-gray-300 mb-4">👥</div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          {searchTerm || statusFilter !== 'all' || eventFilter !== 'all' 
                            ? 'No matching attendees found' 
                            : 'No attendees to display'}
                        </h3>
                        <p className="text-gray-500">
                          {searchTerm || statusFilter !== 'all' || eventFilter !== 'all'
                            ? 'Try adjusting your search or filters.'
                            : 'No attendee data available for the selected filters.'}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {pagination.lastPage > 1 && (
          <div className="bg-white rounded-lg shadow px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-700">
                Page <span className="font-medium">{pagination.currentPage}</span> of{" "}
                <span className="font-medium">{pagination.lastPage}</span> •{" "}
                <span className="font-medium">{pagination.total}</span> total attendees
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded text-sm font-medium ${
                    currentPage === 1
                      ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
                      : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(5, pagination.lastPage) }, (_, i) => {
                    let pageNum;
                    if (pagination.lastPage <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= pagination.lastPage - 2) {
                      pageNum = pagination.lastPage - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-1 text-sm rounded ${
                          currentPage === pageNum
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === pagination.lastPage}
                  className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded text-sm font-medium ${
                    currentPage === pagination.lastPage
                      ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
                      : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizerAttendees;