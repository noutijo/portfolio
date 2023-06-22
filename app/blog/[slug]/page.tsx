"use client"

import Seo from "@/seo/seo"
import Image from "next/image"

import Prism from "prismjs"
import "prismjs/components/prism-jsx"
import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { blogData } from "@/data/data"
import Blog from "@/components/blog/Blog"

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const { slug } = params

  // get single blog post
  const signBlog = blogData.filter((item) => {
    return (
      item.title.toLowerCase().trim().split(" ").join("-").toString() === slug
    )
  })[0]

  if (!signBlog) {
    return (
      <>
        <Seo
          title="404 Page Not Found"
          img={"/seo/403.png"}
          description={"Page No Found"}
        />
        <div className="text-color text-center text-2xl mb-24">
          <i className="bi bi-patch-exclamation text-4xl mb-3 text-colorDanger flex items-center justify-center"></i>
          <p>This page could not be found.</p>
        </div>
      </>
    )
  }

  //enable prism.js
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll()
    }
    highlight()
  }, [])

  return (
    <>
      <Seo
        title={signBlog?.title}
        img={signBlog?.seoImg}
        description={signBlog?.description}
      />

      <div
        onClick={() => router.push("/blog")}
        className="flex w-fit items-center cursor-pointer"
      >
        <i className="bi bi-arrow-left-circle-fill text-3xl text-gradient flex items-center justify-center"></i>
      </div>

      <div className="Profile flex text-color items-center gap-2 mt-6">
        <div className="rounded-full w-[36px] h-[36px] flex items-center justify-center bg-gradient-to-r from-colorDanger/30 to-colorPrimary/30">
          <div className="rounded-full w-[32px] h-[32px] flex items-center justify-center bg-gradient-to-r from-colorDanger to-colorPrimary">
            <Image
              className="rounded-full"
              src={signBlog?.user.img}
              width={28}
              height={28}
              alt={signBlog?.user.name}
              priority
            />
          </div>
        </div>
        <div>
          <p className="text-base font-semibold">{signBlog?.user.name}</p>
          <p className="text-color-secondary text-sm font-medium leading-4">
            {signBlog?.user.title}
          </p>
        </div>
      </div>

      <div className="mt-3 border-b pb-3 border-dashed border-colorText/20 dark:border-colorText">
        <p className="text-color text-lg font-semibold">{signBlog?.title}</p>
        <p className="text-color-secondary text-sm leading-6">
          {`${signBlog?.date} - ${signBlog?.time}`}
        </p>
      </div>

      <div className="description mt-4">
        <div className="text-color text-lg font-normal line-clamp-0">
          {signBlog?.description}

          {signBlog?.body.map((item, index) => (
            <Blog key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.title.toLowerCase().trim().split(" ").join("-").toString(),
  }))
}
