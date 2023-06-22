"use client"

import Seo from "@/seo/seo"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <>
      <Seo
        title="500 Error"
        img={"/seo/403.png"}
        description={"Something went wrong!"}
      />
      <div className="text-color text-center text-2xl mb-24">
        <i className="bi bi-patch-exclamation text-4xl mb-3 text-colorDanger flex items-center justify-center"></i>
        <p>Something went wrong!</p>
        <p>{error?.message}</p>
      </div>
    </>
  )
}
