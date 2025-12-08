import { Check } from 'lucide-react'
import React from 'react'

const Stepper = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors ${
              index < currentStep
                ? 'bg-green-500 text-white'
                : index === currentStep
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-600'
            }`}
            onClick={() => onStepClick && onStepClick(index)}
          >
            {index < currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              <span className="text-sm font-medium">{index + 1}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-2 ${
                index < currentStep ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Stepper