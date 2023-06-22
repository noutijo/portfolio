//testimonial Type
export type testimonialType = {
    name: string,
    title: string,
    profileImage: string,
    link:string,
    icon:string,
    description: string
}

//skill type
export type skillType = {
    title: string,
    tag: string,
    percent: number
}

//project type
export type webDeskType = {
    title: string,
    subTitle: string,
    img: string,
    tags: string[],
    gitLink: string,
    viewLink: string,
    description: string
}

//design type
export type designType = {
    img: string,
    link: string
}

//learn tool type
export type learningToolType = {
    title: string,
    category: string,
    duration: number,
    tools: string[],
}

//seo type
export type seoType ={
  title?:string;
  img?:string;
  description?:string;
}

//blog type
export type blogType = {
  id:string;
  title:string;
  date:string;
  time:string;
  description:string;
  body: bodyBlogType[];
  seoImg:string;
  user:{
    name:string;
    title:string;
    img:string
  }
}

//body blog type
export type bodyBlogType = {
    type: "TEXT" | "IMAGE" | "CODE" | "NOTE";
    value: string;
}