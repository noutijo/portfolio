"use client"

import Image from "next/image"
import Testtimonial from "./Testimonial"
import { testimonialType } from "@/types/types"
import { useState } from "react"

export default function Testimonials({
  testimonials,
}: {
  testimonials: testimonialType[]
}) {
  const [testimanialsArray, setTestimanialsArray] = useState<testimonialType[]>(
    testimonials?.slice(0, 9)
  )

  const [showMore, setShowMore] = useState<boolean>(false)

  const toggleShowMore = () => {
    if (!showMore) {
      setTestimanialsArray(testimonials?.slice(0, testimonials.length))
      setShowMore(!showMore)
    }
    if (showMore) {
      setTestimanialsArray(testimonials?.slice(0, 9))
      setShowMore(!showMore)
    }
  }

  return (
    <>
      <div className="mt-8 flex items-center gap-2">
        <p className="text-xl font-bold text-gradient">
          What people say about me.
        </p>
        <div className="animate-bounce hidden hover:animate-spin">
          <Image
            className="rounded-full rotate-[13deg]"
            src="/profiles/avatar.jpg"
            width={32}
            height={32}
            alt="avatar"
            priority
          />
        </div>
      </div>

      <div className="testtimanials mb-6 flex flex-col gap-4">
        {testimanialsArray?.map((item: testimonialType, index) => (
          <Testtimonial
            key={index}
            name={item.name}
            title={item.title}
            icon={item.icon}
            profileImage={item.profileImage}
            link={item.link}
            description={item.description}
          />
        ))}
      </div>

      <div
        onClick={toggleShowMore}
        className="cursor-pointer flex items-center justify-center gap-1"
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
