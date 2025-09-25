export default function Step1BasicInfo({ formData, setFormData }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

      <div className="mb-4">
        <label className="block mb-1">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border rounded p-2"
          placeholder="Enter event title"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full border rounded p-2"
          placeholder="Enter event description"
        />
      </div>
    </div>
  )
}
