import Link from "next/link"

export default function Footer() {
  return (
    <>
      <div className="mt-40 text-color flex md:items-center md:justify-between sm:landscape:justify-between flex-col lg:flex-row sm:landscape:flex-row">
        <div className="text-md flex items-center gap-3 font-bold">
          <Link href="/skills">Skills</Link>
          <Link href="/works">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/mentorship">Mentorship</Link>
        </div>
        <div className="text-md font-bold flex items-center gap-3 sm:mt-3 md:mt-0">
          <span className="font-bold">
            Twitter:
            <a
              className="text-colorPrimary mx-1"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/JuniorOreol"
            >
              @JuniorOreol
            </a>
          </span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/noutijo"
          >
            GitHub
          </a>
        </div>
      </div>

      <div>
        <p className="text-md text-color mt-6">
          Build with Next.js, Tailwindcss, Express.js and Vercel
        </p>
      </div>
    </>
  )
}
