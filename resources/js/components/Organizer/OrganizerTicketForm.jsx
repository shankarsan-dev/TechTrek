// import { DollarSign } from "lucide-react";
// import { useState } from "react";

// const OrganizerTicketForm = ({ onChange }) => {
//   const [tickets, setTickets] = useState([
//     { name: "", price: "", quantity: "", description: "" },
//   ]);

// //   const handleChange = (index, field, value) => {
// //     const updatedTickets = [...tickets];
// //     updatedTickets[index][field] = value;
// //     setTickets(updatedTickets);
// //   };
// const handleChange = (index, field, value) => {
//   const updatedTickets = [...tickets];
//   updatedTickets[index][field] = value;
//   setTickets(updatedTickets);
//   onChange?.(updatedTickets); // automatically pass to parent
// };

//   const handleAddTicket = () => {
//     setTickets([
//       ...tickets,
//       { name: "", price: "", quantity: "", description: "" },
//     ]);
//   };

//   const handleRemoveTicket = (index) => {
//     const updatedTickets = tickets.filter((_, i) => i !== index);
//     setTickets(updatedTickets);
//   };

//   const handleSave = () => {
//     const filtered = tickets.filter(
//       (ticket) => ticket.name && ticket.price && ticket.quantity
//     );
//     onSave(filtered);
//   };

//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">Ticket Categories</h2>
//       {tickets.map((ticket, index) => (
//         <div
//   key={index}
//   className="border border-gray-300 rounded-lg p-4 space-y-4 bg-white shadow-sm"
// >
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1">
//         Ticket Name
//       </label>
//       <input
//         type="text"
//         value={ticket.name}
//         onChange={(e) => handleChange(index, "name", e.target.value)}
//         placeholder="General, VIP, Student..."
//         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//       />
//     </div>

//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
//         <DollarSign className="w-4 h-4 mr-1" />
//         Price
//       </label>
//       <input
//         type="number"
//         value={ticket.price}
//         onChange={(e) => handleChange(index, "price", e.target.value)}
//         placeholder="0.00"
//         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//         min="0"
//         step="0.01"
//       />
//     </div>

//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1">
//         Quantity
//       </label>
//       <input
//         type="number"
//         value={ticket.quantity}
//         onChange={(e) => handleChange(index, "quantity", e.target.value)}
//         placeholder="Number of tickets available"
//         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//         min="1"
//       />
//     </div>

//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1">
//         Service Description
//       </label>
//       <input
//         type="text"
//         value={ticket.description}
//         onChange={(e) => handleChange(index, "description", e.target.value)}
//         placeholder="Includes lunch, reserved seating, etc."
//         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//       />
//     </div>
//   </div>

//   <div className="text-right">
//     {tickets.length > 1 && (
//       <button
//         type="button"
//         onClick={() => handleRemoveTicket(index)}
//         className="text-red-600 text-sm hover:underline"
//       >
//         Remove Ticket
//       </button>
//     )}
//   </div>
// </div>

//       ))}

//       <div className="flex justify-between items-center">
//         <button
//           type="button"
//           onClick={handleAddTicket}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Ticket
//         </button>

//         <button
//           type="button"
//           onClick={handleSave}
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Save Tickets
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrganizerTicketForm;
import { X } from "lucide-react"
import { useEffect, useState } from "react"

const OrganizerTicketForm = ({ onChange }) => {
  const [tickets, setTickets] = useState([
    { name: "", price: "", capacity: "", is_free: false, features:"", rank: null },
  ])

  // Notify parent of changes
  useEffect(() => {
    onChange(tickets)
  }, [tickets, onChange])

  const updateTicket = (index, updatedTicket) => {
    const updatedTickets = [...tickets]
    updatedTickets[index] = updatedTicket
    setTickets(updatedTickets)
  }

  const addTicket = () => {
    setTickets([
      ...tickets,
      { name: "", price: "", capacity: "", is_free: false, rank: null },
    ])
  }

  const removeTicket = (index) => {
    const updated = tickets.filter((_, i) => i !== index)
    setTickets(updated)
  }

  // Always show these 5 tiers
  const allRanks = [1, 2, 3, 4, 5]

  // Get ranks already selected by other tickets (excluding current)
  const getAvailableRanks = (currentIndex) => {
    const selectedRanks = tickets
      .map((t, i) => (i !== currentIndex ? t.rank : null))
      .filter(Boolean)
    return allRanks.filter((rank) => !selectedRanks.includes(rank))
  }

  return (
    <div className="space-y-6">
      {tickets.map((ticket, index) => {
        const availableRanks = getAvailableRanks(index)

        return (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 relative bg-white"
          >
            <button
              type="button"
              onClick={() => removeTicket(index)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              aria-label={`Remove ticket ${index + 1}`}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Ticket Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Ticket Name</label>
              <input
                type="text"
                value={ticket.name}
                onChange={(e) =>
                  updateTicket(index, { ...ticket, name: e.target.value })
                }
                placeholder="e.g., VIP, Student"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

              <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Ticket Features</label>
              <input
                type="text"
                value={ticket.features}
                onChange={(e) =>
                  updateTicket(index, { ...ticket, features: e.target.value })
                }
                placeholder="e.g., Includes lunch, reserved seating"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Rank Dropdown */}
            {/* <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Rank / Tier</label>
              <select
                value={ticket.rank || ""}
                onChange={(e) =>
                  updateTicket(index, {
                    ...ticket,
                    rank: e.target.value ? parseInt(e.target.value) : null,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Rank</option>
                {availableRanks.map((rank) => (
                  <option key={rank} value={rank}>
                    Tier {rank}
                  </option>
                ))}

                {ticket.rank && !availableRanks.includes(ticket.rank) && (
                  <option value={ticket.rank}>Tier {ticket.rank}</option>
                )}
              </select>
            </div> */}

            {/* Is Free Checkbox */}
            <div className="mb-4 flex items-center gap-2">
              <input
                type="checkbox"
                checked={ticket.is_free}
                onChange={(e) =>
                  updateTicket(index, {
                    ...ticket,
                    is_free: e.target.checked,
                    price: e.target.checked ? 0 : ticket.price,
                  })
                }
                id={`is_free_${index}`}
              />
              <label htmlFor={`is_free_${index}`} className="text-sm">
                Free Ticket
              </label>
            </div>

            {/* Price Input (disabled if free) */}
            {!ticket.is_free && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={ticket.price}
                  onChange={(e) =>
                    updateTicket(index, {
                      ...ticket,
                      price: e.target.value,
                    })
                  }
                  placeholder="Ticket price"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            )}

            {/* Capacity */}
            <div>
              <label className="block text-sm font-medium mb-1">Capacity</label>
              <input
                type="number"
                min="1"
                value={ticket.capacity}
                onChange={(e) =>
                  updateTicket(index, {
                    ...ticket,
                    capacity: e.target.value,
                  })
                }
                placeholder="Number of tickets available"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        )
      })}
      

      <button
        type="button"
        onClick={addTicket}
        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
      >
        + Add Ticket Tier
      </button>
    </div>
  )
}

export default OrganizerTicketForm
