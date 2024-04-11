'use client'

import { CLEAR } from '@/constants'
import { useEffect, useRef, useState } from 'react'
import CommandInput from './command-input'
import CommandOutput from './command-output'

export default function CommandLine(props: Record<string, any>) {
  // 当前点击的cmd
  const [currentClickCmd, setCurrentClickCmd] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  // 键入过的cmd集合
  const [typedCmds, setTypedCmds] = useState<string[]>([])
  const onTypingCmd = (cmd: string) => {
    setTypedCmds(cmd === CLEAR ? [] : (prev) => [...prev, cmd])
  }

  // 出现滚动条自动滚动到可视区域底部
  useEffect(() => {
    if (props.scroll) {
      props.scroll()
    } else {
      containerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
    }
    // eslint-disable-next-line
  }, [typedCmds])

  return (
    <div ref={containerRef} className="pt-10 pb-16">
      {typedCmds.length
        ? typedCmds.map(
            (cmd, index) =>
              cmd && <CommandOutput key={`${cmd}-${index}`} cmd={cmd} />
          )
        : ''}
      <CommandInput
        currentClickCmd={currentClickCmd}
        onTypingCmd={onTypingCmd}
      />

      {typedCmds.length === 2 ? (
        <div className="mt-3 text-slate-400">
          输入
          <button className="mx-2 text-sky-500">help</button>
          查看更多命令
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
