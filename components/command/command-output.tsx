import Content from './content'
import Prompt from './prompt'

export default function CommandOutput(props: Record<string, any>) {
  const { cmd } = props
  return (
    <div className="command-output mb-12">
      <Prompt />
      <div className=" flex mb-5">
        <div className="text-green-500 text-lg">❯</div>
        <input
          readOnly
          type="text"
          value={cmd}
          className="flex-1 ml-3 border-none outline-none"
        />
      </div>

      <div className="pl-6">{Content(props)}</div>
    </div>
  )
}
