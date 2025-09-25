export default function Step7Speakers({ formData, setFormData }) {
  const addSpeaker = () => {
    setFormData({
      ...formData,
      speakers: [...formData.speakers, { name: "", bio: "" }],
    })
  }

  const updateSpeaker = (index, field, value) => {
    const updated = [...formData.speakers]
    updated[index][field] = value
    setFormData({ ...formData, speakers: updated })
  }

  const removeSpeaker = (index) => {
    const updated = formData.speakers.filter((_, i) => i !== index)
    setFormData({ ...formData, speakers: updated })
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Speakers</h2>

      {formData.speakers.map((speaker, index) => (
        <div key={index} className="mb-4 border p-3 rounded">
          <input
            type="text"
            value={speaker.name}
            onChange={(e) => updateSpeaker(index, "name", e.target.value)}
            className="w-full mb-2 border rounded p-2"
            placeholder="Speaker Name"
          />
          <textarea
            value={speaker.bio}
            onChange={(e) => updateSpeaker(index, "bio", e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Speaker Bio"
          />
          <button
            type="button"
            onClick={() => removeSpeaker(index)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addSpeaker}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        + Add Speaker
      </button>
    </div>
  )
}
