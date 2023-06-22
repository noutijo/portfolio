"use client"

import { useState } from "react"
import Contact from "@/components/cta/Contact"
import Link from "next/link"

export default function LetWorkTogether() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      {isModalOpen ? (
        <Contact toggleModal={toggleModal} ready={"Contact Me"} />
      ) : (
        ""
      )}

      <div className="flex flex-col items-center justify-center mt-14">
        <p className="text-3xl font-bold !text-gradient">
          {"Let's work together!"}
        </p>

        <p className={`text-color text-lg font-normal mt-3 text-center px-12`}>
          I am available for new remote opportunities or to be your mentor.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3">
          <div className="flex z-[2] relative w-full">
            <button
              onClick={toggleModal}
              disabled={false}
              className="btn bg-white h-[46px] px-10 w-full text-sm md:text-lg text-colorWhite_DM rounded-full flex items-center justify-center font-bold wrap-submit100 ring-style overflow-hidden  py-4 text-md opacity-1"
            >
              Contact Me
            </button>
            <span className={`wrap-submit2`}></span>
          </div>

          <div className="btn bg-gradient-to-r from-colorDanger w-full to-colorPrimary text-colorWhite h-[46px] px-10 text-sm md:text-lg text-colorWhie rounded-full flex items-center justify-center font-bold cursor-pointer">
            <Link href="/mentorship">I Need Mentoring</Link>
          </div>
        </div>
      </div>
    </>
  )
}
