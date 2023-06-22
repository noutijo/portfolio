"use client"

import { testimonialType } from "@/types/types"
import Image from "next/image"
import { useState } from "react"

export default function Testtimonial({
  name,
  title,
  profileImage,
  link,
  description,
  icon,
}: testimonialType) {
  const [seeMore, setSeeMore] = useState<boolean>(false)
  const toggleSeeMore = () => {
    setSeeMore(!seeMore)
  }

  return (
    <>
      <div className="group hover:scale-[1.02] transition-all duration-300 ease-out ring-style first:mt-6 rounded-2xl p-4 bg-colorWhite dark:bg-colorWhite_DM  w-full">
        <div className="title flex items-center justify-between">
          <div className="Profile flex items-center gap-2">
            <div className="rounded-full w-[45px] h-[45px] flex items-center justify-center bg-gradient-to-r from-colorDanger/30 to-colorPrimary/30 overflow-hidden">
              <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center bg-gradient-to-r from-colorDanger to-colorPrimary overflow-hidden">
                <Image
                  className="rounded-full"
                  src={profileImage}
                  width={36}
                  height={36}
                  alt={name}
                  priority
                />
              </div>
            </div>
            <div>
              <p className="text-color text-base font-semibold line-clamp-1">
                {name}
              </p>
              <p className="text-color-secondary sm:text-xs md:text-sm line-clamp-1">
                {title}
              </p>
            </div>
          </div>

          <div className="link">
            <div className="p-3 w-[26px] h-[26px] rounded-full bg-colorBgLight flex items-center justify-center">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <i
                  className={`bi ${icon} text-base text-gradient flex items-center rounded-[3px] overflow-hidden justify-center`}
                ></i>
              </a>
            </div>
          </div>
        </div>

        <div className="description mt-6">
          <p
            className={`text-color text-lg font-normal leading-[28px] ${
              description.length > 180 && !seeMore ? "line-clamp-3" : ""
            }`}
          >
            {description}
          </p>
          {description.length > 180 && !seeMore ? (
            <span
              className="text-colorPrimary font-bold cursor-pointer"
              onClick={toggleSeeMore}
            >
              See More
            </span>
          ) : (
            ""
          )}

          {description.length > 180 && seeMore ? (
            <span
              className="text-colorPrimary font-bold cursor-pointer"
              onClick={toggleSeeMore}
            >
              See Less
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}
