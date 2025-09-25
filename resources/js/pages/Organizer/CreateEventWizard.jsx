"use client"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { eventService } from "../../services/eventService"

// Import step components
import Step1BasicInfo from "./Steps/Step1BasicInfo"
import Step2DateTime from "./Steps/Step2DateTime"
import Step3Location from "./Steps/Step3Location"
import Step4Tickets from "./Steps/Step4Tickets"
import Step5Image from "./Steps/Step5Image"
import Step6TagsAgenda from "./Steps/Step6TagsAgenda"
import Step7Speakers from "./Steps/Step7Speakers"
import Step8Review from "./steps/Step8Review.jsx"

const steps = [
  "Basic Info",
  "Date & Time",
  "Location",
  "Tickets",
  "Image",
  "Tags & Agenda",
  "Speakers",
  "Review & Submit",
]

export default function CreateEventWizard() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category_id: "",
    start_date: "",
    end_date: "",
    location: { type: "Physical", address: "" },
    tickets: [],
    image: null,
    tags: [],
    agenda: [],
    speakers: [],
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => eventService.createEvent(data),
    onSuccess: () => {
      toast.success("Event created successfully 🎉")
      navigate("/organizer/events")
    },
    onError: (err) => {
      toast.error(err.message || "Failed to create event")
    },
  })

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length))
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1))

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(formData)
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
      {/* Progress Bar */}
      <div className="flex justify-between mb-8">
        {steps.map((label, index) => (
          <div
            key={index}
            className={`flex-1 text-center text-sm ${
              step === index + 1
                ? "font-bold text-primary-600"
                : step > index + 1
                ? "text-green-600"
                : "text-gray-400"
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Render Step Components */}
        {step === 1 && <Step1BasicInfo formData={formData} setFormData={setFormData} />}
        {step === 2 && <Step2DateTime formData={formData} setFormData={setFormData} />}
        {step === 3 && <Step3Location formData={formData} setFormData={setFormData} />}
        {step === 4 && <Step4Tickets formData={formData} setFormData={setFormData} />}
        {step === 5 && <Step5Image formData={formData} setFormData={setFormData} />}
        {step === 6 && <Step6TagsAgenda formData={formData} setFormData={setFormData} />}
        {step === 7 && <Step7Speakers formData={formData} setFormData={setFormData} />}
        {step === 8 && <Step8Review formData={formData} />}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-2 border rounded-lg"
            >
              Back
            </button>
          )}

          {step < steps.length ? (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto px-6 py-2 bg-primary-600 text-white rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={isLoading}
              className="ml-auto px-6 py-2 bg-primary-600 text-white rounded-lg"
            >
              {isLoading ? "Publishing..." : "Publish Event"}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
export { CreateEventWizard }
