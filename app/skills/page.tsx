"use client"

import SkillItem from "@/components/skills/SkillItem"
import Seo from "@/seo/seo"
import { skillsData } from "@/data/data"
import { skillType } from "@/types/types"
import { useState } from "react"

export default function Skills() {
  const [skillsArray, setTestimanialsArray] = useState<skillType[]>(
    skillsData?.slice(0, 8)
  )
  const [showMore, setShowMore] = useState<boolean>(false)

  const toggleShowMore = () => {
    if (!showMore) {
      setTestimanialsArray(skillsData?.slice(0, skillsData?.length))
      setShowMore(!showMore)
    }
    if (showMore) {
      setTestimanialsArray(skillsData?.slice(0, 8))
      setShowMore(!showMore)
    }
  }

  return (
    <>
      <Seo
        title="Skills"
        img={"/seo/skills.png"}
        description={
          "Here are some of the skills that I have acquired since my professional insertion."
        }
      />
      <div className="mt-6 flex items-center gap-2">
        <p className="text-xl font-extrabold text-gradient">Skills</p>
        <div className="flex items-center">
          <i className="bi bi-patch-check-fill text-lg text-gradient flex items-center justify-center"></i>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 sm:landscape:grid-cols-2 md:grid-cols-2 mt-6">
        {skillsArray.map((item: skillType, index) => (
          <SkillItem key={index} data={item} />
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
