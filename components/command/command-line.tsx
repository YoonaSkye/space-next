'use client'

import { CLEAR } from '@/constants'
import { useRef, useState } from 'react'
import CommandInput from './command-input'

export default function CommandLine() {
  // 当前点击的cmd
  const [currentClickCmd, setCurrentClickCmd] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  // 键入过的cmd集合
  const [typedCmds, setTypedCmds] = useState<string[]>([])
  const onTypingCmd = (cmd: string) => {
    setTypedCmds(cmd === CLEAR ? [] : (prev) => [...prev, cmd])
  }

  return (
    <div ref={containerRef} className="pt-10 pb-16">
      command line
      <CommandInput
        currentClickCmd={currentClickCmd}
        onTypingCmd={onTypingCmd}
      />
    </div>
  )
}
