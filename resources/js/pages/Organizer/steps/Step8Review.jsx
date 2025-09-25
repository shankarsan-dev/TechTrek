export default function Step8Review({ formData }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review Your Event</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  )
}
