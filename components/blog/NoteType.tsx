export default function NoteType({ note }: { note: string }) {
  return (
    <>
      <pre className="rounded-lg !bg-colorWhite dark:!bg-colorWhite_DM ring-style">
        <code className="language-javascript">{`${note}`}</code>
      </pre>
    </>
  )
}
