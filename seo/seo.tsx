import { seoType } from "@/types/types"

export default function Seo({title, img, description}:seoType) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Twitter Card data  */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@publisher_handle" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@author_handle" />
      <meta name="twitter:image" content={img} />

      {/* Open Graph data for Facebook */}
      <meta property="og:title" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oreolnoumodong.com" />
      <meta property="og:image" content={img} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="fb:admins" content="Facebook numeric ID" />
    </>
  );
}
