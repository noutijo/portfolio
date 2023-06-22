"use client"

import { useState } from "react"

import Contact from "@/components/cta/Contact"
import MentorShipItem from "@/components/mentoship/MentoshipItem"
import { learningToolsData } from "@/data/data"
import { learningToolType } from "@/types/types"
import Seo from "@/seo/seo"

export default function MentorShip() {
  let [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <Seo
        title="Mentorship"
        img={"/seo/mentorship.png"}
        description={
          "All of these phrases of encouragement are a powerful weapon when we are going through difficult times. Their power is to remind us that we can be perfectly happy. That we can achieve anything we want. And that continuing to move forward is worth it."
        }
      />
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-bold !text-gradient flex items-center">
          Mentorship!
          {/* <span className="bg-colorBgLight text-colorPrimary py- ml-2 px-3 rounded-full text-sm">
            Free
          </span> */}
        </p>

        <p className={`text-color text-lg font-medium mt-3 text-center italic`}>
          {`"All of these phrases of encouragement are a powerful weapon when we are going through difficult times. Their power is to remind us that we can be perfectly happy. That we can achieve anything we want. And that continuing to move forward is worth it."`}
        </p>

        <div className="my-4 w-full flex flex-col gap-4">
          {learningToolsData?.map((item: learningToolType, index: number) => (
            <MentorShipItem
              key={index}
              title={item.title}
              category={item.category}
              duration={item.duration}
              tools={item.tools}
            />
          ))}
        </div>

        <div className="mt-6">
          <div>
            <i className="bi bi-arrow-down-short text-3xl text-gradient flex items-center justify-center"></i>
          </div>
        </div>
        <div className="mt-3">
          <div
            onClick={toggleModal}
            className="btn bg-colorBgLight h-[46px] px-10 text-colorPrimary rounded-full flex items-center gap-2 justify-center font-bold cursor-pointer"
          >
            <p>I&apos;m Ready</p>
          </div>
        </div>
      </div>

      {isModalOpen ? (
        <Contact toggleModal={toggleModal} ready={"I'm Ready"} />
      ) : (
        ""
      )}
    </>
  )
}
