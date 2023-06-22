"use client"

import TextType from "@/components/blog/TextType"
import ImageType from "@/components/blog/ImageType"
import CodeType from "@/components/blog/CodeType"
import NoteType from "@/components/blog/NoteType"
import { bodyBlogType } from "@/types/types"

export default function Blog({ item }: { item: bodyBlogType }) {
  const { type, value } = item
  return (
    <>
      {type === "TEXT" ? (
        <TextType text={value} />
      ) : type === "CODE" ? (
        <CodeType codeData={value} />
      ) : type === "NOTE" ? (
        <NoteType note={value} />
      ) : (
        <ImageType img={value} />
      )}
    </>
  )
}
