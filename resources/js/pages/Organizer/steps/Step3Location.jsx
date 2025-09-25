export default function Step3Location({ formData, setFormData }) {
  const updateLocation = (field, value) => {
    setFormData({
      ...formData,
      location: { ...formData.location, [field]: value },
    })
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Location</h2>

      <div className="mb-4">
        <label className="block mb-1">Type</label>
        <select
          value={formData.location.type}
          onChange={(e) => updateLocation("type", e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="Physical">Physical</option>
          <option value="Online">Online</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Address</label>
        <input
          type="text"
          value={formData.location.address}
          onChange={(e) => updateLocation("address", e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Enter location address"
        />
      </div>
    </div>
  )
}
