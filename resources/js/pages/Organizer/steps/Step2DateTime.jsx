export default function Step2DateTime({ formData, setFormData }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Date & Time</h2>

      <div className="mb-4">
        <label className="block mb-1">Start Date</label>
        <input
          type="datetime-local"
          value={formData.start_date}
          onChange={(e) =>
            setFormData({ ...formData, start_date: e.target.value })
          }
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">End Date</label>
        <input
          type="datetime-local"
          value={formData.end_date}
          onChange={(e) =>
            setFormData({ ...formData, end_date: e.target.value })
          }
          className="w-full border rounded p-2"
        />
      </div>
    </div>
  )
}
