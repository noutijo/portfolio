import parse from "html-react-parser"

export default function TextType({ text }: { text: string }) {
  return (
    <>
      <div className="mt-4">{parse(`${text}`)}</div>
    </>
  )
}
