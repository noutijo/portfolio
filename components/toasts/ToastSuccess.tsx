"use client"

import { ToastContainer } from "react-toastify"

export default function ToastSuccess({ notify }: { notify: () => void }) {
  return (
    <div>
      <ToastContainer />
    </div>
  )
}
