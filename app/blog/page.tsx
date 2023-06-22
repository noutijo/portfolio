import BlogItem from "@/components/blog/BlogItem"
import Seo from "@/seo/seo"
import { blogData } from "data/data"
import { blogType } from "@/types/types"

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog"
        img={"/seo/blog.png"}
        description={
          "Welcome to my blog where I share my knowledge about web application development and design."
        }
      />
      <div className="mt-6 flex items-center gap-2">
        <p className="text-xl font-extrabold text-gradient">Blog</p>
        <div className="flex items-center">
          <i className="bi bi-chat-text-fill text-lg text-gradient flex items-center justify-center"></i>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {blogData?.map((item: blogType, index: number) => (
          <BlogItem key={index} data={item} />
        ))}
      </div>
    </>
  )
}
