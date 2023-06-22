"use client"

import Image from "next/image"
import Link from "next/link"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavBar() {
  const pathname = usePathname()

  const [currentTheme, setCurrentTheme] = useState<string>("")

  useEffect(() => {
    if (localStorage.theme && localStorage.theme === "light") {
      setCurrentTheme("light")
    } else {
      setCurrentTheme("dark")
      localStorage.theme = "dark"
    }
  }, [])

  //toggle theme
  const setTheme = (theme: string) => {
    document.documentElement.classList.add(`${theme}`)
    document.documentElement.classList.remove(
      `${theme === "dark" ? "light" : "dark"}`
    )

    setCurrentTheme(`${theme}`)
    localStorage.theme = `${theme}`
  }

  return (
    <>
      <div className="hidden md:block bg-gradiant overflow-hidden"></div>
      <nav className="fixed top-6 z-30 w-full flex items-center justify-center">
        <div className="sm:w-[92%] md:w-[80%] lg:w-[640px] backdrop-blur-[5px] overflow-hidden rounded-full m-auto bg-colorWhite/50 dark:bg-colorWhite_DM/50 flex items-center justify-between shadow-glass ring-style loading-border-nav">
          <i aria-hidden="false"></i>

          <Link href={"/"} className="item">
            <div
              className={`${
                pathname === "/" ? "display-bubble-on-profile" : ""
              }`}
            >
              <div className="rounded-full w-[44px] h-[44px] flex items-center justify-center bg-gradient-to-b from-colorDanger/30 to-colorPrimary/30 m-2 cursor-pointer overflow-hidden">
                <div className="rounded-full w-[38px] h-[38px] flex items-center justify-center bg-gradient-to-b from-colorDanger to-colorPrimary cursor-pointer overflow-hidden">
                  <Image
                    className="rounded-full"
                    src="/profiles/avatar.jpg"
                    width={34}
                    height={34}
                    alt="avatar"
                    priority
                  />
                </div>
              </div>
            </div>
          </Link>

          <div className="right p-2 flex items-center justify-end gap-8">
            <Link href={"/skills"} className="item">
              <div
                className={`flex group sm:flex-col sm:landscape:flex-row md:flex-row items-center justify-center sm:gap-1 landscape:sm:gap-2 md:gap-2 cursor-pointer ${
                  pathname === "/skills" ? "display-bubble-on-item-skills" : ""
                }`}
              >
                <div className="icon group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-md group-hover:shadow-colorDanger/40 transition-all ease-in duration-300 w-[26px] h-[26px] rounded-xl bg-gradient-to-b from-colorDanger to-colorPrimary flex items-center justify-center">
                  <i className="bi bi-patch-check-fill text-lg text-colorBg flex items-center justify-center"></i>
                </div>
                <p className="text-color font-bold text-base">Skills</p>
              </div>
            </Link>

            <Link href={"/works"} className="item">
              <div
                className={`flex group sm:flex-col sm:landscape:flex-row md:flex-row items-center justify-center sm:gap-1 landscape:sm:gap-2 md:gap-2 cursor-pointer ${
                  pathname === "/works" || pathname === "/designs"
                    ? "display-bubble-on-item-works"
                    : ""
                }`}
              >
                <div className="icon group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-md group-hover:shadow-colorDanger/40 transition-all ease-in duration-300 w-[26px] h-[26px] rounded-xl bg-gradient-to-b from-colorDanger to-colorPrimary flex items-center justify-center">
                  <i className="bi bi-clipboard-data-fill text-lg text-colorBg flex items-center justify-center"></i>
                </div>
                <p className="text-color font-bold text-base">Projects</p>
              </div>
            </Link>

            <Link href={"/blog"} className="item">
              <div
                className={`flex group sm:flex-col sm:landscape:flex-row md:flex-row items-center justify-center sm:gap-1 landscape:sm:gap-2 md:gap-2 cursor-pointer ${
                  pathname?.includes("/blog")
                    ? "display-bubble-on-item-blog"
                    : ""
                }`}
              >
                <div className="icon group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-md group-hover:shadow-colorDanger/40 transition-all ease-in duration-300 w-[26px] h-[26px] rounded-xl bg-gradient-to-b from-colorDanger to-colorPrimary flex items-center justify-center">
                  <i className="bi bi-chat-text-fill text-lg text-colorBg flex items-center justify-center"></i>
                </div>
                <p className="text-color font-bold text-base">Blog</p>
              </div>
            </Link>

            <div className="cursor-pointer mr-2">
              <div className="flex group items-center gap-2">
                <div className="icon group-hover:shadow-sm group-hover:shadow-colorPrimary/40 transition-all ease-in duration-300 w-[26px] h-[26px] rounded-full bg-colorBgLight flex items-center justify-center">
                  {currentTheme === "light" ? (
                    <i
                      onClick={() => {
                        setTheme("dark")
                      }}
                      className="bi bi-moon-stars-fill text-lg text-color flex items-center justify-center"
                    ></i>
                  ) : (
                    <i
                      onClick={() => {
                        setTheme("light")
                      }}
                      className="bi bi-brightness-high-fill text-lg text-color flex items-center justify-center"
                    ></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
