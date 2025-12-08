// // import { X } from "lucide-react"
// // import { useEffect, useState } from "react"

// // const OrganizerTicketForm = ({ onChange }) => {
// //   const [tickets, setTickets] = useState([
// //     { name: "", price: "", capacity: "", description: "", sale_start_date: "", sale_end_date: "" },
// //   ])

// //   // Notify parent of changes
// //   useEffect(() => {
// //     onChange(tickets)
// //   }, [tickets, onChange])

// //   const updateTicket = (index, field, value) => {
// //     const updatedTickets = [...tickets]
    
// //     // If price is being updated to 0, automatically mark as free
// //     if (field === 'price') {
// //       updatedTickets[index][field] = value
// //       updatedTickets[index].is_free = parseFloat(value) === 0
// //     } else {
// //       updatedTickets[index][field] = value
// //     }
    
// //     setTickets(updatedTickets)
// //   }

// //   const addTicket = () => {
// //     setTickets([
// //       ...tickets,
// //       { name: "", price: "", capacity: "", description: "", sale_start_date: "", sale_end_date: "" },
// //     ])
// //   }

// //   const removeTicket = (index) => {
// //     const updated = tickets.filter((_, i) => i !== index)
// //     setTickets(updated)
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
// //         <h3 className="font-medium text-blue-800">Ticket Information</h3>
// //         <p className="text-sm text-blue-600 mt-1">
// //           Add different ticket types for your event. Set price to 0 for free tickets.
// //         </p>
// //       </div>

// //       {tickets.map((ticket, index) => (
// //         <div
// //           key={index}
// //           className="border border-gray-300 rounded-lg p-4 relative bg-white"
// //         >
// //           <button
// //             type="button"
// //             onClick={() => removeTicket(index)}
// //             className="absolute top-2 right-2 text-red-600 hover:text-red-800"
// //             aria-label={`Remove ticket ${index + 1}`}
// //           >
// //             <X className="h-5 w-5" />
// //           </button>

// //           <h4 className="font-medium mb-4">Ticket Tier {index + 1}</h4>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             {/* Ticket Name */}
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Ticket Name *</label>
// //               <input
// //                 type="text"
// //                 value={ticket.name}
// //                 onChange={(e) => updateTicket(index, 'name', e.target.value)}
// //                 placeholder="e.g., General Admission, VIP"
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
// //                 required
// //               />
// //             </div>

// //             {/* Price */}
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Price (Rs.) *</label>
// //               <input
// //                 type="number"
// //                 min="0"
// //                 step="0.01"
// //                 value={ticket.price}
// //                 onChange={(e) => updateTicket(index, 'price', e.target.value)}
// //                 placeholder="0.00"
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
// //                 required
// //               />
// //               {parseFloat(ticket.price) === 0 && (
// //                 <p className="text-sm text-green-600 mt-1">This is a free ticket</p>
// //               )}
// //             </div>

// //             {/* Capacity */}
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Capacity *</label>
// //               <input
// //                 type="number"
// //                 min="1"
// //                 value={ticket.capacity}
// //                 onChange={(e) => updateTicket(index, 'capacity', e.target.value)}
// //                 placeholder="Number of tickets available"
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
// //                 required
// //               />
// //             </div>

// //             {/* Description */}
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Description</label>
// //               <input
// //                 type="text"
// //                 value={ticket.description}
// //                 onChange={(e) => updateTicket(index, 'description', e.target.value)}
// //                 placeholder="What's included with this ticket"
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
// //               />
// //             </div>

// //             {/* Sale Period */}
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Sale Start Date</label>
// //               <input
// //                 type="date"
// //                 value={ticket.sale_start_date}
// //                 onChange={(e) => updateTicket(index, 'sale_start_date', e.target.value)}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
// //               />
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium mb-1">Sale End Date</label>
// //               <input
// //                 type="date"
// //                 value={ticket.sale_end_date}
// //                 onChange={(e) => updateTicket(index, 'sale_end_date', e.target.value)}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       ))}

// //       <button
// //         type="button"
// //         onClick={addTicket}
// //         className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
// //       >
// //         + Add Another Ticket Type
// //       </button>
// //     </div>
// //   )
// // }

// // export default OrganizerTicketForm
// import { X } from "lucide-react"
// import { useEffect, useState } from "react"

// const OrganizerTicketForm = ({ onChange, required = true }) => {
//   const [tickets, setTickets] = useState([
//     { 
//       name: "", 
//       price: "0", 
//       capacity: "", 
//       description: "", 
//       sale_start_date: "", 
//       sale_end_date: "",
//       is_unlimited: false,
//       min_per_order: "",
//       max_per_order: ""
//     },
//   ])
//   const [errors, setErrors] = useState({})

//   // Notify parent of changes
//   useEffect(() => {
//     onChange(tickets)
//     validateTickets()
//   }, [tickets, onChange])

//   const validateTickets = () => {
//     const newErrors = {}
    
//     if (required && tickets.length === 0) {
//       newErrors.tickets = "At least one ticket is required"
//     }

//     tickets.forEach((ticket, index) => {
//       // Validate required fields
//       if (!ticket.name.trim()) {
//         newErrors[`ticket-${index}-name`] = "Ticket name is required"
//       }
      
//       if (ticket.price === "" || parseFloat(ticket.price) < 0) {
//         newErrors[`ticket-${index}-price`] = "Price must be 0 or greater"
//       }
      
//       // Validate capacity if not unlimited
//       if (!ticket.is_unlimited && ticket.capacity !== "") {
//         const capacity = parseInt(ticket.capacity)
//         if (isNaN(capacity) || capacity < 1) {
//           newErrors[`ticket-${index}-capacity`] = "Capacity must be at least 1"
//         }
//       }
      
//       // Validate sale dates
//       if (ticket.sale_start_date && ticket.sale_end_date) {
//         const startDate = new Date(ticket.sale_start_date)
//         const endDate = new Date(ticket.sale_end_date)
        
//         if (endDate < startDate) {
//           newErrors[`ticket-${index}-sale_dates`] = "Sale end date must be after start date"
//         }
//       }
      
//       // Validate min/max per order
//       if (ticket.min_per_order && ticket.max_per_order) {
//         const min = parseInt(ticket.min_per_order)
//         const max = parseInt(ticket.max_per_order)
        
//         if (!isNaN(min) && !isNaN(max) && min > max) {
//           newErrors[`ticket-${index}-order_limits`] = "Max per order must be greater than or equal to min per order"
//         }
//       }
//     })
    
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const updateTicket = (index, field, value) => {
//     const updatedTickets = [...tickets]
    
//     if (field === 'price') {
//       // Handle price changes
//       updatedTickets[index][field] = value
//       updatedTickets[index].is_free = parseFloat(value) === 0
//     } else if (field === 'is_unlimited') {
//       // Handle unlimited toggle
//       updatedTickets[index][field] = value
//       if (value) {
//         updatedTickets[index].capacity = "" // Clear capacity when unlimited
//       }
//     } else if (field === 'capacity' && value === "") {
//       // Allow empty capacity
//       updatedTickets[index][field] = ""
//     } else if (field === 'capacity') {
//       // Only accept positive integers for capacity
//       const numValue = parseInt(value)
//       if (!isNaN(numValue) && numValue >= 0) {
//         updatedTickets[index][field] = numValue.toString()
//       } else if (value === "") {
//         updatedTickets[index][field] = ""
//       }
//     } else {
//       updatedTickets[index][field] = value
//     }
    
//     setTickets(updatedTickets)
//   }

//   const addTicket = () => {
//     setTickets([
//       ...tickets,
//       { 
//         name: "", 
//         price: "0", 
//         capacity: "", 
//         description: "", 
//         sale_start_date: "", 
//         sale_end_date: "",
//         is_unlimited: false,
//         min_per_order: "",
//         max_per_order: ""
//       },
//     ])
//   }

//   const removeTicket = (index) => {
//     const updated = tickets.filter((_, i) => i !== index)
//     setTickets(updated)
//   }

//   const clearError = (field) => {
//     setErrors(prev => {
//       const newErrors = { ...prev }
//       delete newErrors[field]
//       return newErrors
//     })
//   }

//   return (
//     <div className="space-y-6">
//       <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
//         <h3 className="font-medium text-blue-800">Ticket Information</h3>
//         <p className="text-sm text-blue-600 mt-1">
//           Add different ticket types for your event. Set price to 0 for free tickets.
//         </p>
//         {required && tickets.length === 0 && errors.tickets && (
//           <p className="text-sm text-red-600 mt-2">{errors.tickets}</p>
//         )}
//       </div>

//       {tickets.map((ticket, index) => (
//         <div
//           key={index}
//           className="border border-gray-300 rounded-lg p-4 relative bg-white"
//         >
//           <button
//             type="button"
//             onClick={() => removeTicket(index)}
//             className="absolute top-2 right-2 text-red-600 hover:text-red-800"
//             aria-label={`Remove ticket ${index + 1}`}
//             disabled={required && tickets.length === 1}
//           >
//             <X className="h-5 w-5" />
//           </button>

//           <h4 className="font-medium mb-4 flex items-center gap-2">
//             Ticket Tier {index + 1}
//             {ticket.is_unlimited && (
//               <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
//                 Unlimited
//               </span>
//             )}
//             {parseFloat(ticket.price) === 0 && (
//               <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
//                 Free
//               </span>
//             )}
//           </h4>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Ticket Name */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Ticket Name *
//               </label>
//               <input
//                 type="text"
//                 value={ticket.name}
//                 onChange={(e) => {
//                   updateTicket(index, 'name', e.target.value)
//                   clearError(`ticket-${index}-name`)
//                 }}
//                 placeholder="e.g., General Admission, VIP"
//                 className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                   errors[`ticket-${index}-name`] ? 'border-red-300' : 'border-gray-300'
//                 }`}
//                 required
//               />
//               {errors[`ticket-${index}-name`] && (
//                 <p className="mt-1 text-sm text-red-600">{errors[`ticket-${index}-name`]}</p>
//               )}
//             </div>

//             {/* Price */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Price (Rs.) *
//               </label>
//               <input
//                 type="number"
//                 min="0"
//                 step="0.01"
//                 value={ticket.price}
//                 onChange={(e) => {
//                   updateTicket(index, 'price', e.target.value)
//                   clearError(`ticket-${index}-price`)
//                 }}
//                 placeholder="0.00"
//                 className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                   errors[`ticket-${index}-price`] ? 'border-red-300' : 'border-gray-300'
//                 }`}
//                 required
//               />
//               {errors[`ticket-${index}-price`] && (
//                 <p className="mt-1 text-sm text-red-600">{errors[`ticket-${index}-price`]}</p>
//               )}
//               {parseFloat(ticket.price) === 0 && (
//                 <p className="text-sm text-green-600 mt-1">This is a free ticket</p>
//               )}
//             </div>

//             {/* Capacity - Optional */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Capacity (Optional)
//               </label>
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     id={`unlimited-${index}`}
//                     checked={ticket.is_unlimited}
//                     onChange={(e) => {
//                       updateTicket(index, 'is_unlimited', e.target.checked)
//                       clearError(`ticket-${index}-capacity`)
//                     }}
//                     className="h-4 w-4 text-primary-600"
//                   />
//                   <label htmlFor={`unlimited-${index}`} className="text-sm">
//                     Unlimited capacity
//                   </label>
//                 </div>
                
//                 {!ticket.is_unlimited && (
//                   <input
//                     type="number"
//                     min="1"
//                     value={ticket.capacity}
//                     onChange={(e) => {
//                       updateTicket(index, 'capacity', e.target.value)
//                       clearError(`ticket-${index}-capacity`)
//                     }}
//                     placeholder="Leave empty for unlimited"
//                     className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                       errors[`ticket-${index}-capacity`] ? 'border-red-300' : 'border-gray-300'
//                     }`}
//                   />
//                 )}
//               </div>
//               {errors[`ticket-${index}-capacity`] && (
//                 <p className="mt-1 text-sm text-red-600">{errors[`ticket-${index}-capacity`]}</p>
//               )}
//               <p className="text-xs text-gray-500 mt-1">
//                 {ticket.is_unlimited 
//                   ? "No limit on tickets"
//                   : "Leave empty or enter a number. Empty means unlimited."}
//               </p>
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Description (Optional)</label>
//               <input
//                 type="text"
//                 value={ticket.description}
//                 onChange={(e) => updateTicket(index, 'description', e.target.value)}
//                 placeholder="What's included with this ticket"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//               />
//             </div>

           
//             {/* Sale Period - Optional */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Sale Start Date (Optional)
//               </label>
//               <input
//                 type="date"
//                 value={ticket.sale_start_date}
//                 onChange={(e) => {
//                   updateTicket(index, 'sale_start_date', e.target.value)
//                   clearError(`ticket-${index}-sale_dates`)
//                 }}
//                 className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                   errors[`ticket-${index}-sale_dates`] ? 'border-red-300' : 'border-gray-300'
//                 }`}
//               />
//               {errors[`ticket-${index}-sale_dates`] && (
//                 <p className="mt-1 text-sm text-red-600">{errors[`ticket-${index}-sale_dates`]}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Sale End Date (Optional)
//               </label>
//               <input
//                 type="date"
//                 value={ticket.sale_end_date}
//                 onChange={(e) => {
//                   updateTicket(index, 'sale_end_date', e.target.value)
//                   clearError(`ticket-${index}-sale_dates`)
//                 }}
//                 className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                   errors[`ticket-${index}-sale_dates`] ? 'border-red-300' : 'border-gray-300'
//                 }`}
//               />
//               {errors[`ticket-${index}-sale_dates`] && (
//                 <p className="mt-1 text-sm text-red-600">{errors[`ticket-${index}-sale_dates`]}</p>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}

//       <button
//         type="button"
//         onClick={addTicket}
//         className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
//       >
//         + Add Another Ticket Type
//       </button>

//       {/* Summary */}
//       <div className="mt-4 text-sm text-gray-600">
//         <p>
//           <strong>Summary:</strong> {tickets.length} ticket type{tickets.length !== 1 ? 's' : ''} configured
//           {tickets.some(t => parseFloat(t.price) === 0) && ', including free tickets'}
//           {tickets.some(t => t.is_unlimited) && ', with unlimited capacity'}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default OrganizerTicketForm
import { X } from "lucide-react"
import { useEffect, useState } from "react"

const OrganizerTicketForm = ({ onChange, required = true, initialTickets = [] }) => {
  const [tickets, setTickets] = useState(() => {
    // Use initialTickets if provided, otherwise default
    if (initialTickets && initialTickets.length > 0) {
      return initialTickets.map(ticket => ({
        name: ticket.name || "",
        price: ticket.price?.toString() || "0",
        capacity: ticket.capacity?.toString() || "",
        description: ticket.description || "",
        sale_start_date: ticket.sale_start_date || "",
        sale_end_date: ticket.sale_end_date || "",
        is_unlimited: ticket.is_unlimited || false,
        min_per_order: ticket.min_per_order?.toString() || "",
        max_per_order: ticket.max_per_order?.toString() || "",
        is_free: ticket.price === 0,
      }))
    }
    
    // Default ticket
    return [{ 
      name: "", 
      price: "0", 
      capacity: "", 
      description: "", 
      sale_start_date: "", 
      sale_end_date: "",
      is_unlimited: false,
      min_per_order: "",
      max_per_order: "",
      is_free: false,
    }]
  })
  
  const [errors, setErrors] = useState({})

  // Notify parent of changes
  useEffect(() => {
    onChange(tickets)
    validateTickets()
  }, [tickets, onChange])

  const validateTickets = () => {
    const newErrors = {}
    
    if (required && tickets.length === 0) {
      newErrors.tickets = "At least one ticket is required"
    }

    tickets.forEach((ticket, index) => {
      // Validate required fields
      if (!ticket.name.trim()) {
        newErrors[`ticket-${index}-name`] = "Ticket name is required"
      }
      
      if (ticket.price === "" || parseFloat(ticket.price) < 0) {
        newErrors[`ticket-${index}-price`] = "Price must be 0 or greater"
      }
      
      // Validate capacity if not unlimited
      if (!ticket.is_unlimited && ticket.capacity !== "") {
        const capacity = parseInt(ticket.capacity)
        if (isNaN(capacity) || capacity < 1) {
          newErrors[`ticket-${index}-capacity`] = "Capacity must be at least 1"
        }
      }
      
      // Validate sale dates
      if (ticket.sale_start_date && ticket.sale_end_date) {
        const startDate = new Date(ticket.sale_start_date)
        const endDate = new Date(ticket.sale_end_date)
        
        if (endDate < startDate) {
          newErrors[`ticket-${index}-sale_dates`] = "Sale end date must be after start date"
        }
      }
      
      // Validate min/max per order
      if (ticket.min_per_order && ticket.max_per_order) {
        const min = parseInt(ticket.min_per_order)
        const max = parseInt(ticket.max_per_order)
        
        if (!isNaN(min) && !isNaN(max) && min > max) {
          newErrors[`ticket-${index}-order_limits`] = "Max per order must be greater than or equal to min per order"
        }
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const updateTicket = (index, field, value) => {
    const updatedTickets = [...tickets]
    
    if (field === 'price') {
      // Handle price changes
      updatedTickets[index][field] = value
      updatedTickets[index].is_free = parseFloat(value) === 0
    } else if (field === 'is_unlimited') {
      // Handle unlimited toggle
      updatedTickets[index][field] = value
      if (value) {
        updatedTickets[index].capacity = "" // Clear capacity when unlimited
      }
    } else if (field === 'capacity' && value === "") {
      // Allow empty capacity
      updatedTickets[index][field] = ""
    } else if (field === 'capacity') {
      // Only accept positive integers for capacity
      const numValue = parseInt(value)
      if (!isNaN(numValue) && numValue >= 0) {
        updatedTickets[index][field] = numValue.toString()
      } else if (value === "") {
        updatedTickets[index][field] = ""
      }
    } else {
      updatedTickets[index][field] = value
    }
    
    setTickets(updatedTickets)
  }

  const addTicket = () => {
    setTickets([
      ...tickets,
      { 
        name: "", 
        price: "0", 
        capacity: "", 
        description: "", 
        sale_start_date: "", 
        sale_end_date: "",
        is_unlimited: false,
        min_per_order: "",
        max_per_order: "",
        is_free: false,
      },
    ])
  }

  const removeTicket = (index) => {
    const updated = tickets.filter((_, i) => i !== index)
    setTickets(updated)
  }

  const clearError = (field) => {
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[field]
      return newErrors
    })
  }

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-medium text-blue-800">Ticket Information</h3>
        <p className="text-sm text-blue-600 mt-1">
          Add different ticket types for your event. Set price to 0 for free tickets.
        </p>
        {required && tickets.length === 0 && errors.tickets && (
          <p className="text-sm text-red-600 mt-2">{errors.tickets}</p>
        )}
      </div>

      {tickets.map((ticket, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-4 relative bg-white"
        >
          <button
            type="button"
            onClick={() => removeTicket(index)}
            className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            aria-label={`Remove ticket ${index + 1}`}
            disabled={required && tickets.length === 1}
          >
            <X className="h-5 w-5" />
          </button>

          <h4 className="font-medium mb-4 flex items-center gap-2">
            Ticket Tier {index + 1}
            {ticket.is_unlimited && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Unlimited
              </span>
            )}
            {parseFloat(ticket.price) === 0 && (
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                Free
              </span>
            )}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ticket Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Ticket Name *
              </label>
              <input
                type="text"
                value={ticket.name}
                onChange={(e) => {
                  updateTicket(index, 'name', e.target.value)
                  clearError(`ticket-${index}-name`)
                }}
                placeholder="e.g., General Admission, VIP"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors[`ticket-${index}-name`] ? 'border-red-300' : 'border-gray-300'
                }`}
                required
              />
              {errors[`ticket-${index}-name`] && (
                <p className="mt-1 text-sm text-red-600">{errors[`ticket-${index}-name`]}</p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Price (Rs.) *
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={ticket.price}
                onChange={(e) => {
                  updateTicket(index, 'price', e.target.value)
                  clearError(`ticket-${index}-price`)
                }}
                placeholder="0.00"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors[`ticket-${index}-price`] ? 'border-red-300' : 'border-gray-300'
                }`}
                required
              />
              {errors[`ticket-${index}-price`] && (
                <p className="mt-1 text-sm text-red-600">{errors[`ticket-${index}-price`]}</p>
              )}
              {parseFloat(ticket.price) === 0 && (
                <p className="text-sm text-green-600 mt-1">This is a free ticket</p>
              )}
            </div>

            {/* Capacity - Optional */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Capacity (Optional)
              </label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`unlimited-${index}`}
                    checked={ticket.is_unlimited}
                    onChange={(e) => {
                      updateTicket(index, 'is_unlimited', e.target.checked)
                      clearError(`ticket-${index}-capacity`)
                    }}
                    className="h-4 w-4 text-primary-600"
                  />
                  <label htmlFor={`unlimited-${index}`} className="text-sm">
                    Unlimited capacity
                  </label>
                </div>
                
                {!ticket.is_unlimited && (
                  <input
                    type="number"
                    min="1"
                    value={ticket.capacity}
                    onChange={(e) => {
                      updateTicket(index, 'capacity', e.target.value)
                      clearError(`ticket-${index}-capacity`)
                    }}
                    placeholder="Leave empty for unlimited"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors[`ticket-${index}-capacity`] ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                )}
              </div>
              {errors[`ticket-${index}-capacity`] && (
                <p className="mt-1 text-sm text-red-600">{errors[`ticket-${index}-capacity`]}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                {ticket.is_unlimited 
                  ? "No limit on tickets"
                  : "Leave empty or enter a number. Empty means unlimited."}
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">Description (Optional)</label>
              <input
                type="text"
                value={ticket.description}
                onChange={(e) => updateTicket(index, 'description', e.target.value)}
                placeholder="What's included with this ticket"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Sale Period - Optional */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Sale Start Date (Optional)
              </label>
              <input
                type="date"
                value={ticket.sale_start_date}
                onChange={(e) => {
                  updateTicket(index, 'sale_start_date', e.target.value)
                  clearError(`ticket-${index}-sale_dates`)
                }}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors[`ticket-${index}-sale_dates`] ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors[`ticket-${index}-sale_dates`] && (
                <p className="mt-1 text-sm text-red-600">{errors[`ticket-${index}-sale_dates`]}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Sale End Date (Optional)
              </label>
              <input
                type="date"
                value={ticket.sale_end_date}
                onChange={(e) => {
                  updateTicket(index, 'sale_end_date', e.target.value)
                  clearError(`ticket-${index}-sale_dates`)
                }}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors[`ticket-${index}-sale_dates`] ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors[`ticket-${index}-sale_dates`] && (
                <p className="mt-1 text-sm text-red-600">{errors[`ticket-${index}-sale_dates`]}</p>
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addTicket}
        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
      >
        + Add Another Ticket Type
      </button>

      {/* Summary */}
      <div className="mt-4 text-sm text-gray-600">
        <p>
          <strong>Summary:</strong> {tickets.length} ticket type{tickets.length !== 1 ? 's' : ''} configured
          {tickets.some(t => parseFloat(t.price) === 0) && ', including free tickets'}
          {tickets.some(t => t.is_unlimited) && ', with unlimited capacity'}
        </p>
      </div>
    </div>
  )
}

export default OrganizerTicketForm