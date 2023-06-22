"use client"

import { usePathname, useRouter } from "next/navigation"

export default function WorksLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="mt-6 flex items-center gap-2">
          <p className="text-xl font-extrabold text-gradient">Projects</p>
          <div className="flex items-center">
            <i className="bi bi-clipboard-data-fill text-lg text-gradient flex items-center justify-center"></i>
          </div>
        </div>

        <div className="flex items-center text-color">
          <p
            onClick={() => {
              router.push("/works")
            }}
            className={`cursor-pointer text-md font-bold px-4 py-2 border-b-[2px] rounded-bl-xl border-colorBgLight w-full h-11 relative ${
              pathname === "/works"
                ? "display-bubble-works"
                : "text-color-secondary  after:w-[0px]"
            }`}
          >
            Web/Desktop
          </p>
          <p
            onClick={() => {
              router.push("/designs")
            }}
            className={`cursor-pointer text-md font-bold px-4 py-2 border-b-[2px] rounded-bl-xl border-colorBgLight w-full h-11 relative ${
              pathname === "/designs"
                ? "display-bubble-works"
                : "text-color-secondary after:w-[0px]"
            }`}
          >
            Designs
          </p>
        </div>
      </div>

      {/* display children here */}
      <div className="mt-6">{children}</div>
    </>
  )
}
