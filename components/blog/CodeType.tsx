"use client"

import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

export default function CodeType({ codeData }: { codeData: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  return (
    <>
      <div className="relative mt-4">
        <CopyToClipboard
          text={codeData}
          onCopy={() => {
            setIsCopied(true)
            setTimeout(() => {
              setIsCopied(false)
            }, 1500)
          }}
        >
          <div
            className={`icon cursor-pointer absolute z-[2] top-[10px] right-[10px] w-[26px] h-[26px] rounded-full flex items-center justify-center ring-style ${
              isCopied ? "bg-colorSuccess/80" : "bg-white"
            }`}
          >
            <i
              className={`bi bi-clipboard text-base flex items-center justify-center ${
                isCopied ? "text-colorWhite" : "text-colorWhite_DM"
              }`}
            ></i>
          </div>
        </CopyToClipboard>
        <pre
          data-plugin-header="line-numbers"
          data-remove-trailing
          className="line-numbers rounded-xl !bg-colorWhite dark:!bg-colorWhite_DM ring-style"
        >
          <code className="language-javascript">{`${codeData}`}</code>
        </pre>
      </div>
    </>
  )
}
