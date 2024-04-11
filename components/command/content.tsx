import {
  ABOUT,
  COMMAND_CONTENT_MAP,
  CommandType,
  HELP,
  LIST,
  LS,
  POSTS
} from '@/constants'
import Link from 'next/link'
import { useContext } from 'react'
import { Icon } from '../Icons'
import { CommandContext } from './command-provider'

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
  } else if (cmd === POSTS) {
    return MDXContent(cmd)
  } else if (cmd === ABOUT) {
    return AbountContent(args)
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

function AbountContent(props: Record<string, any>) {
  const {
    content: { introduction, skills, platforms }
  } = props

  return (
    <>
      <p className="mb-6">{introduction}</p>
      <div className="flex items-center mb-6">
        <span className="mr-3">常用技术栈✨:</span>
        <div className="grid gap-5 grid-cols-12 items-center">
          {skills.map((skill: string) => (
            <Icon key={skill} name={skill} />
          ))}
        </div>
      </div>

      <p className="mb-5">也可以在这些地方找到我:</p>
      <ul className="ml-1">
        {Object.entries(platforms).map((platform: Record<string, any>) => (
          <li key={platform[0]} className="flex mb-2">
            <Icon name={platform[0]} width={22} height={22} />
            <Link href={platform[1]} target="_blank" className="underline ml-2">
              {platform[0]}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

function MDXContent(cmd: string) {
  const { posts } = useContext(CommandContext)

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.slugAsParams} className="mb-2 list-disc list-inside">
            <Link
              href={`/blog/${post.slugAsParams}`}
              className="text-sky-500"
              target="_blank"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
