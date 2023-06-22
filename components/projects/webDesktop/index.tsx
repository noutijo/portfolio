"use client"

import { webDeskType } from "@/types/types"
import WebDesktopItem from "./WebDesktopItem"
import { useState } from "react"

export default function WebDesktop({ data }: { data: webDeskType[] }) {
  const [projectssArray, setProjectsArray] = useState<webDeskType[]>(
    data?.slice(0, 6)
  )
  const [showMore, setShowMore] = useState<boolean>(false)

  const toggleShowMore = () => {
    if (!showMore) {
      setProjectsArray(data?.slice(0, data?.length))
      setShowMore(!showMore)
    }
    if (showMore) {
      setProjectsArray(data?.slice(0, 6))
      setShowMore(!showMore)
    }
  }
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-1 sm:landscape:grid-cols-2 md:grid-cols-2 mt-3 w-full">
        {projectssArray.map((item: webDeskType, index: number) => (
          <WebDesktopItem key={index} data={item} />
        ))}
      </div>

      <div
        onClick={toggleShowMore}
        className="cursor-pointer flex items-center justify-center gap-1 mt-6"
      >
        <div className="flex items-center justify-center">
          <i className="bi bi-eye-fill text-lg text-colorPrimary flex items-center justify-center"></i>
        </div>
        <div>
          <span className="text-colorPrimary font-bold">
            {!showMore ? "Show More" : "Show Less"}
          </span>
        </div>
      </div>
    </>
  )
}
