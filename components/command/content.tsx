import { COMMAND_CONTENT_MAP, CommandType, HELP, LIST, LS } from '@/constants'

export default function Content(props: Record<string, any>) {
  const { cmd } = props
  const args = {
    ...props,
    content: COMMAND_CONTENT_MAP[cmd as Exclude<CommandType, 'clear'>]
  }

  if (cmd === HELP) {
    return HelpContent(args)
  } else if (cmd === LIST || cmd === LS) {
    return ListContent(args)
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
            {item[0].includes(LIST) ? (
              <div>
                <p className="mb-2">{item[1][0]}:</p>
                <div className="mb-2">
                  {ListContent({
                    ...props,
                    source: HELP,
                    cmd: LIST,
                    content: COMMAND_CONTENT_MAP[LIST]
                  })}
                </div>
              </div>
            ) : (
              <span>{item[1]}</span>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

function ListContent(props: Record<string, any>) {
  const { source, content } = props

  const containerStyle = 'grid grid-cols-5 gap-x-12 gap-y-4 text-green-500'

  return (
    <div
      className={
        source && source === HELP ? containerStyle : `${containerStyle} w-1/2`
      }
    >
      {content.map((cmd: string) => (
        <button key={cmd} className="text-left">
          {cmd}
        </button>
      ))}
    </div>
  )
}
