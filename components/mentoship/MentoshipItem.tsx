"use client"

import { useState } from "react"
import { learningToolType } from "@/types/types"

export default function MentorShipItem({
  title,
  category,
  tools,
  duration,
}: learningToolType) {
  const [showMore, setShowMore] = useState<boolean>(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }
  return (
    <>
      <div
        onClick={toggleShowMore}
        className="cursor-pointer text-color hover:scale-[1.02] transition-all duration-300 ease-out ring-style first:mt-3 rounded-2xl p-4 bg-colorWhite dark:bg-colorWhite_DM dark:hover:border-colorText w-full"
      >
        <div className="title flex items-center justify-between">
          <div className="Profile flex items-center gap-2">
            <div>
              <p className="text-color-secondary text-sm font-medium">
                {category}
              </p>
              <p className="text-lg font-semibold">{title}</p>
            </div>
          </div>

          <div className="toggle">
            <div
              className={`icon w-[26px] h-[26px] rounded-full bg-colorBgLight flex items-center justify-center`}
            >
              <i
                className={`bi bi-chevron-down text-sm flex items-center justify-center ease-in duration-300 ${
                  showMore ? "rotate-180" : ""
                }`}
              ></i>
            </div>
          </div>
        </div>

        <div
          className={`description mt-3 pt-3 border-t border-dashed border-colorText/20 dark:border-colorText ${
            showMore ? "" : "hidden"
          }`}
        >
          <p className="flex md:justify-between sm:landscape:justify-between sm:flex-col sm:gap-1 sm:landscape:gap-0 sm:landscape:flex-row md:flex-row">
            <span className="font-semibold text-lg">
              Tools that will be use:
            </span>
            <span className="bg-colorBgLight text-colorPrimary md:ml-2 px-3 rounded-full text-sm flex items-center w-[fit-content]">
              <span className="font-semibold mr-1">Duration: </span>
              <span>{duration} months or more</span>
            </span>
          </p>

          <div className="mt-3">
            <ul>
              {tools.map((item: string, index: number) => (
                <li
                  key={index}
                  className="relative text-base pl-7 before:absolute before:left-1 before:top-[9px] before:h-2 before:w-2 before:rounded-full before:bg-colorPrimary before:ring-[3px] before:ring-colorPrimary/20 before:ring-offset-1 before:ring-offset-black/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3">
            <p className="text-lg font-semibold">Prerequisites:</p>
            <p className="text-base">
              None, just a computer, an internet connection and the will to
              learn and progress in the professional world.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
