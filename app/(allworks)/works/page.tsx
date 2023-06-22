import { webDeskData } from "@/data/data"
import WebDesktopItem from "@/components/projects/webDesktop"
import Seo from "@/seo/seo"

export default function WebCategory() {
  return (
    <>
      <Seo
        title={`Projects -Web_desktop`}
        img={"/seo/projects.png"}
        description={`Here are some Web and Desktop projects I've worked on.`}
      />
      <div>
        <WebDesktopItem data={webDeskData} />
      </div>
    </>
  )
}
