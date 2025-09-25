export default function Step4Tickets({ formData, setFormData }) {
  const addTicket = () => {
    setFormData({
      ...formData,
      tickets: [...formData.tickets, { type: "", price: "", quantity: "" }],
    })
  }

  const updateTicket = (index, field, value) => {
    const updated = [...formData.tickets]
    updated[index][field] = value
    setFormData({ ...formData, tickets: updated })
  }

  const removeTicket = (index) => {
    const updated = formData.tickets.filter((_, i) => i !== index)
    setFormData({ ...formData, tickets: updated })
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tickets</h2>

      {formData.tickets.map((ticket, index) => (
        <div key={index} className="mb-4 border p-3 rounded">
          <input
            type="text"
            value={ticket.type}
            onChange={(e) => updateTicket(index, "type", e.target.value)}
            className="w-full mb-2 border rounded p-2"
            placeholder="Ticket Type (General, VIP)"
          />
          <input
            type="number"
            value={ticket.price}
            onChange={(e) => updateTicket(index, "price", e.target.value)}
            className="w-full mb-2 border rounded p-2"
            placeholder="Price"
          />
          <input
            type="number"
            value={ticket.quantity}
            onChange={(e) => updateTicket(index, "quantity", e.target.value)}
            className="w-full mb-2 border rounded p-2"
            placeholder="Quantity"
          />
          <button
            type="button"
            onClick={() => removeTicket(index)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addTicket}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        + Add Ticket
      </button>
    </div>
  )
}
