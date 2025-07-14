"use client"

import dynamic from "next/dynamic"

// Corrected import path for App.jsx
const App = dynamic(() => import("../../App.jsx"), { ssr: false })

export default function ClientAppWrapper() {
  return <App />
}
