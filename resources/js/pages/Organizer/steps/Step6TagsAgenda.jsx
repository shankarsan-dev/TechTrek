export default function Step6TagsAgenda({ formData, setFormData }) {
  const addTag = (tag) => {
    setFormData({ ...formData, tags: [...formData.tags, tag] })
  }

  const removeTag = (index) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((_, i) => i !== index),
    })
  }

  const addAgendaItem = () => {
    setFormData({
      ...formData,
      agenda: [...formData.agenda, { time: "", activity: "" }],
    })
  }

  const updateAgenda = (index, field, value) => {
    const updated = [...formData.agenda]
    updated[index][field] = value
    setFormData({ ...formData, agenda: updated })
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tags & Agenda</h2>

      {/* Tags */}
      <div className="mb-4">
        <label className="block mb-1">Tags</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            id="tag-input"
            className="flex-1 border rounded p-2"
            placeholder="Enter a tag"
          />
          <button
            type="button"
            onClick={() => {
              const input = document.getElementById("tag-input")
              if (input.value.trim()) {
                addTag(input.value.trim())
                input.value = ""
              }
            }}
            className="px-3 py-2 bg-gray-200 rounded"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full flex items-center gap-2"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(index)}
                className="text-red-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Agenda */}
      <div>
        <label className="block mb-2">Agenda</label>
        {formData.agenda.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="time"
              value={item.time}
              onChange={(e) => updateAgenda(index, "time", e.target.value)}
              className="border rounded p-2"
            />
            <input
              type="text"
              value={item.activity}
              onChange={(e) => updateAgenda(index, "activity", e.target.value)}
              className="flex-1 border rounded p-2"
              placeholder="Agenda activity"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addAgendaItem}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          + Add Agenda Item
        </button>
      </div>
    </div>
  )
}
