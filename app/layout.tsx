import "styles/globals.css"
import "react-toastify/dist/ReactToastify.css"
import "prismjs/themes/prism-tomorrow.css"
import "animate.css"

import Footer from "@/components/footer/Footer"
import LetWorkTogether from "@/components/cta/LetWorkTogether"
import NavBar from "@/components/navbar/NavBar"

import { Raleway } from "next/font/google"
const raleway = Raleway({ subsets: ["latin"] })

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <html
        lang="en"
        className={`text-[14px] scroll-smooth ${raleway.className}`}
      >
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" type="image/png" href="/logo.png" />
          <link rel="apple-touch-icon" href="/fav.png" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `try {if ((localStorage.theme) && (localStorage.theme === 'light')) {document.documentElement.classList.add('light')} else {document.documentElement.classList.add('dark')}} catch (__) {}`,
            }}
          ></script>
        </head>

        <body className="w-screen h-screen overflow-x-hidden font-medium text-white selection:bg-colorBgLight selection:text-colorPrimary bg-white dark:bg-colorBg_DM transition-all duration-300 ease-out">
          <NavBar />
          <main className="relative w-full mt-52 sm:w-[92%] md:w-[80%] lg:w-[640px] m-auto pb-40">
            {children}
            <LetWorkTogether />
            <Footer />
          </main>
        </body>
      </html>
    </>
  )
}
