import { X } from "lucide-react"
import { useEffect, useState } from "react"

const OrganizerTicketForm = ({ onChange }) => {
  const [tickets, setTickets] = useState([
    { name: "", price: "", capacity: "", description: "", sale_start_date: "", sale_end_date: "" },
  ])

  // Notify parent of changes
  useEffect(() => {
    onChange(tickets)
  }, [tickets, onChange])

  const updateTicket = (index, field, value) => {
    const updatedTickets = [...tickets]
    
    // If price is being updated to 0, automatically mark as free
    if (field === 'price') {
      updatedTickets[index][field] = value
      updatedTickets[index].is_free = parseFloat(value) === 0
    } else {
      updatedTickets[index][field] = value
    }
    
    setTickets(updatedTickets)
  }

  const addTicket = () => {
    setTickets([
      ...tickets,
      { name: "", price: "", capacity: "", description: "", sale_start_date: "", sale_end_date: "" },
    ])
  }

  const removeTicket = (index) => {
    const updated = tickets.filter((_, i) => i !== index)
    setTickets(updated)
  }

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-medium text-blue-800">Ticket Information</h3>
        <p className="text-sm text-blue-600 mt-1">
          Add different ticket types for your event. Set price to 0 for free tickets.
        </p>
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
          >
            <X className="h-5 w-5" />
          </button>

          <h4 className="font-medium mb-4">Ticket Tier {index + 1}</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ticket Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Ticket Name *</label>
              <input
                type="text"
                value={ticket.name}
                onChange={(e) => updateTicket(index, 'name', e.target.value)}
                placeholder="e.g., General Admission, VIP"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium mb-1">Price ($) *</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={ticket.price}
                onChange={(e) => updateTicket(index, 'price', e.target.value)}
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              {parseFloat(ticket.price) === 0 && (
                <p className="text-sm text-green-600 mt-1">This is a free ticket</p>
              )}
            </div>

            {/* Capacity */}
            <div>
              <label className="block text-sm font-medium mb-1">Capacity *</label>
              <input
                type="number"
                min="1"
                value={ticket.capacity}
                onChange={(e) => updateTicket(index, 'capacity', e.target.value)}
                placeholder="Number of tickets available"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <input
                type="text"
                value={ticket.description}
                onChange={(e) => updateTicket(index, 'description', e.target.value)}
                placeholder="What's included with this ticket"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Sale Period */}
            <div>
              <label className="block text-sm font-medium mb-1">Sale Start Date</label>
              <input
                type="date"
                value={ticket.sale_start_date}
                onChange={(e) => updateTicket(index, 'sale_start_date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Sale End Date</label>
              <input
                type="date"
                value={ticket.sale_end_date}
                onChange={(e) => updateTicket(index, 'sale_end_date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
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
    </div>
  )
}

export default OrganizerTicketForm