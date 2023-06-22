"use client"

import Image from "next/image"
import Link from "next/link"
import { blogType } from "@/types/types"

export default function BlogItem({ data }: { data: blogType }) {
  const { title, date, time, description, user } = data
  return (
    <>
      <div className="cursor-pointer text-color group hover:scale-[1.03] transition-all duration-300 ease-out ring-style mt-3 rounded-2xl p-4 bg-colorWhite dark:bg-colorWhite_DM dark:hover:border-colorText w-full">
        <Link
          href={`/blog/${title
            .toLowerCase()
            .trim()
            .split(" ")
            .join("-")
            .toString()}`}
        >
          <div>
            <div className="profile flex items-center gap-2">
              <div>
                <p className="text-lg font-semibold line-clamp-2">{title}</p>
                <p className="text-color-secondary text-sm leading-6">
                  {`${date} - ${time}`}
                </p>
              </div>
            </div>

            <div className="description mt-4">
              <p className="text-lg font-normal leading-[28px] line-clamp-3">
                {description}
              </p>
            </div>

            <div className="Profile flex items-center gap-2 mt-6">
              <div className="rounded-full w-[36px] h-[36px] flex items-center justify-center bg-gradient-to-r from-colorDanger/30 to-colorPrimary/30">
                <div className="rounded-full w-[32px] h-[32px] flex items-center justify-center bg-gradient-to-r from-colorDanger to-colorPrimary">
                  <Image
                    className="rounded-full"
                    src={user?.img}
                    width={28}
                    height={28}
                    alt={user?.name}
                    priority
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">{user?.name}</p>
                <p className="text-color-secondary text-sm font-normal leading-4">
                  {user?.title}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
