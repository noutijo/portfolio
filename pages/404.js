import "@/styles/globals.css"

export default function NotFound() {
  return (
    <>
      <title>404 Page Not Found</title>
      <div className="h-[80vh] w-full flex items-center justify-center !bg-transparent !text-colorDark">
        <div className="text-color">
          <p className="text-4xl font-bold text-center">404</p>
          <p className="text-base font-bold text-center my-3">
            {"This page could not be found."}
          </p>
          <p className="text-sm text-center">
            <span>Follow me on Twitter: </span>
            <a
              className="text-colorDanger font-bold"
              href="https://twitter.com/JuniorOreol"
              target="_blank"
              rel="noopener noreferrer"
            >
              @JuniorOreol
            </a>
          </p>
          <p className="mt-2 text-sm text-center">
            <a
              className="flex items-center justify-center gap-1 text-colorDanger"
              href="https://oreolnoumodong.com"
              rel="noopener noreferrer"
            >
              <i className="bi bi-link text-2xl flex items-center justify-center"></i>
              <span>www.oreolnoumodong.com</span>
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
