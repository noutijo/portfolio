import Image from "next/image"

export default function Profile() {
  return (
    <>
      <div className="Profile text-color flex items-center gap-2">
        <div className="rounded-full w-[76px] h-[76px] flex items-center justify-center bg-gradient-to-r from-colorDanger/30 to-colorPrimary/30 overflow-hidden">
          <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center bg-gradient-to-r from-colorDanger to-colorPrimary overflow-hidden">
            <Image
              className="rounded-full"
              src="/profiles/me.png"
              width={64}
              height={64}
              alt="avatar"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <p className="text-2xl md:text-3xl font-semibold">Oreol Noumodong</p>
          <div className="text-xs md:text-base text-color-secondary">
            <span className="font-medium mr-2 md:hidden">
              Jr. MERN Stack Dev at
            </span>
            <span className="font-medium mr-2 hidden md:inline-block">
              Jr. MERN Stack Developer at
            </span>
            <a
              className="text-gradient font-medium underline underline-offset-1 decoration-dashed"
              href="https://sjultra.com"
              rel="noreferrer"
              target={"_blank"}
            >
              SJULTRA, Inc.
            </a>
          </div>
        </div>
      </div>

      <div className="description mt-6 text-color font-normal">
        <p className="text-lg leading-[28px] text-justify">
          Welcome, {"I'm"} a Software Engineer and UX/UI Designer. As grant
          holder from{" "}
          <a
            className="mx-1 font-bold"
            rel="noopener noreferrer"
            target="_blank"
            href="https://meta.com"
          >
            @Meta
          </a>{" "}
          through the
          <a
            className="mx-1 font-bold"
            rel="noopener noreferrer"
            target="_blank"
            href="https://developers.facebook.com/developercircles"
          >
            @Developer Circles Community
          </a>
          , I was able to follow a Front-end path at{" "}
          <a
            className="mx-1 font-bold"
            rel="noopener noreferrer"
            target="_blank"
            href="https://openclassrooms.com"
          >
            @OpenClassrooms
          </a>
          . With 3 years of experience as freelancer, I am defined by my
          collaborative work and my ability to learn quickly. Building
          <a
            className="mx-1 font-bold"
            rel="noopener noreferrer"
            target="_blank"
            href="https://nooutidev.com"
          >
            @nooutidev
          </a>
          .
        </p>
      </div>

      <div className="social mt-[1rem] flex gap-2 items-center">
        <div className="icon w-[26px] h-[26px] rounded-full bg-colorBgLight ring-style flex items-center justify-center">
          <a
            href="https://github.com/noutijo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-gradient bi bi-github text-bas flex items-center justify-center"></i>
          </a>
        </div>
        <div className="border-t-[1px] border-dashed border-colorPrimary w-6"></div>
        <div className="icon w-[26px] h-[26px] rounded-full bg-colorBgLight ring-style flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/oreolnoumodong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-gradient bi bi-linkedin text-base flex rounded-[3px] items-center justify-center"></i>
          </a>
        </div>
        <div className="border-t-[1px] border-dashed border-colorPrimary w-6"></div>
        <div className="icon w-[26px] h-[26px] rounded-full bg-colorBgLight ring-style flex items-center justify-center">
          <a
            href="https://twitter.com/JuniorOreol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-gradient bi bi-twitter text-base flex items-center justify-center"></i>
          </a>
        </div>
      </div>
    </>
  )
}
