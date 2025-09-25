export default function Step5Image({ formData, setFormData }) {
  const handleFile = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Event Image</h2>

      <input type="file" onChange={handleFile} className="mb-4" />

      {formData.image && (
        <p className="text-sm text-gray-600">Selected: {formData.image.name}</p>
      )}
    </div>
  )
}
