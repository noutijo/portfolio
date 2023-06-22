import { testimonialsData } from "data/data"
import Seo from "@/seo/seo"
import Profile from "@/components/home/Profile"
import Testimonials from "@/components/home/Testimonials"

export default function Home() {
  return (
    <>
      <Seo
        title={"Oreol | MERN Stack Developer & UX/UI Designer"}
        img={"/seo/profile.png"}
        description={
          "Welcome, I'm a Software Engineer and UX/UI Designer. As grant holder from @Meta through the @Meta Developers Circle Community, I was able to follow a Front-end path at @OpenClassrooms. With over 2 years of experience as freelancer, I am defined by my collaborative work and my ability to learn quickly. Building@nooutidev."
        }
      />
      <Profile />
      <Testimonials testimonials={testimonialsData} />
    </>
  )
}
