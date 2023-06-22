import Image from "next/image"

export default function ImageType({ img }: { img: string }) {
  return (
    <>
      <div className="mt-3">
        <Image src={img} width={250} height={180} alt={img} priority />
      </div>
    </>
  )
}
