import { designsData } from "@/data/data"
import Designs from "@/components/projects/designs"
import Seo from "@/seo/seo"

export default function DesignCategory() {
  return (
    <>
      <Seo
        title={`Projects -Designs`}
        img={"/seo/projects.png"}
        description={`Here are some Designs projects I've worked on.`}
      />
      <div>
        <Designs data={designsData} />
      </div>
    </>
  )
}
