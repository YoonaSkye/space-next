import { COMMAND_CONTENT_MAP, CommandType, HELP, LIST } from '@/constants'

export default function Content(props: Record<string, any>) {
  const { cmd } = props
  const args = {
    ...props,
    content: COMMAND_CONTENT_MAP[cmd as Exclude<CommandType, 'clear'>]
  }

  if (cmd === HELP) {
    return HelpContent(args)
  }
  return <div>content</div>
}

function HelpContent(props: Record<string, any>) {
  const { content } = props
  return (
    <>
      <h3 className="mb-8">
        You can enter the following commands to interact:
      </h3>
      <ul>
        {Object.entries(content).map((item: Record<string, any>) => (
          <li key={item[0]} className="flex mb-3">
            <span className="basis-1/6 font-bold text-rose-500">{item[0]}</span>
            {item[0].includes(LIST) ? '' : <span>{item[1]}</span>}
          </li>
        ))}
      </ul>
    </>
  )
}
