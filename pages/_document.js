"use client"

import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" className="text-[14px] scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/fav.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try {if ((localStorage.theme) && (localStorage.theme === 'light')) {document.documentElement.classList.add('light')} else {document.documentElement.classList.add('dark')}} catch (__) {}`,
          }}
        ></script>
      </Head>
      <body className="w-screen h-screen overflow-x-hidden font-medium text-white selection:bg-colorBgLight selection:text-colorPrimary bg-white dark:bg-colorBg_DM transition-all duration-300 ease-out">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
