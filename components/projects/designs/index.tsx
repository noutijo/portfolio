import { designType } from "@/types/types"
import DesignItem from "./DesignItem"

export default function Designs({ data }: { data: designType[] }) {
  return (
    <>
      <div className="flex gap-4 flex-col mt-3 w-full">
        {data?.map((item: designType, index: number) => (
          <DesignItem key={index} img={item.img} link={item.link} />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-6">
        <p className={`text-color text-lg font-normal my-3 text-center`}>
          Check my behance profile to see more about my design works.
        </p>
        <div className="mt-6">
          <div className="animate-bounce">
            <i className="bi bi-arrow-down-short text-3xl text-gradient flex items-center justify-center"></i>
          </div>
        </div>
        <div className="mt-3">
          <a
            href="https://www.behance.net/oreolnoumodong"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-colorBgLight h-[46px] px-10 text-colorPrimary rounded-full flex items-center gap-2 justify-center font-bold cursor-pointer"
          >
            <p>Let&apos;s Go</p>
            <i className="bi bi-box-arrow-up-right text-sm text-gradient flex items-center justify-center"></i>
          </a>
        </div>
      </div>
    </>
  )
}
