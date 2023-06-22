import Image from "next/image"
import { webDeskType } from "@/types/types"

export default function WebDesktopItem({ data }: { data: webDeskType }) {
  const { title, subTitle, img, tags, gitLink, viewLink, description } = data

  return (
    <>
      <div className="main w-full rounded-2xl overflow-hidden bg-colorWhite dark:bg-colorWhite_DM hover:scale-[1.02] transition-all duration-300 ease-out ring-style">
        <div className="w-full relative h-[200px]">
          <Image
            placeholder="blur"
            blurDataURL={`/projects/${img}`}
            layout="fill"
            src={`/projects/${img}`}
            alt={title}
            objectFit="cover"
            objectPosition="bottom center"
          />
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="left">
            <p className="text-color text-md font-bold">{title}</p>
            <p className="text-color-secondary text-xs leading-3">{subTitle}</p>
          </div>
          <div className="flex items-center justify-end gap-3">
            {gitLink != "" ? (
              <div className="icon w-[26px] h-[26px] rounded-full bg-colorBgLight flex items-center justify-center">
                <a href={gitLink} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github text-xl text-gradient flex items-center justify-center"></i>
                </a>
              </div>
            ) : (
              ""
            )}
            <div className="icon w-[26px] h-[26px] rounded-full bg-gradient-to-r from-colorDanger to-colorPrimary flex items-center justify-center">
              <a href={viewLink} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-box-arrow-up-right text-md text-colorWhite flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className={`text-color text-lg font-normal px-4 line-clamp-3`}>
            {description}
          </p>
        </div>

        <div className="p-4 flex items-center flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-colorBgLight text-colorPrimary py-1 px-3 rounded-full text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
