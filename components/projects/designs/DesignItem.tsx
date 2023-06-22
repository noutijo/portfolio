import Image from "next/image"
import { designType } from "@/types/types"

export default function DesignItem({ img, link }: designType) {
  return (
    <>
      <div className="relative group w-full rounded-2xl overflow-hidden bg-colorWhite dark:bg-colorWhite_DM hover:scale-[1.02] transition-all duration-300 ease-out ring-style">
        <div className="relative w-full h-[250px] md:h-[430px]">
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL={`/projects/design/${img}`}
            src={`/projects/design/${img}`}
            alt={img}
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="link absolute top-4 right-4">
          <div className="icon w-[26px] h-[26px] rounded-full bg-gradient-to-r from-colorDanger to-colorPrimary flex items-center justify-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-box-arrow-up-right text-md text-colorWhite flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
