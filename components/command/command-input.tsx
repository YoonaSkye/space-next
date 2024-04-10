'use client'

import { INIT_CMD } from '@/constants'
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent
} from 'react'

interface CommandInputProps {
  currentClickCmd: string
  onTypingCmd: (arg: string) => void
}

export default function CommandInput({
  currentClickCmd,
  onTypingCmd
}: CommandInputProps) {
  const [cmd, setCmd] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCmd(event.target.value)
  }

  // 键入的cmd, 包括手动键入和自动键入
  const [typingCmd, setTypingCmd] = useState('')
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && cmd) {
      setTypingCmd(cmd)
    }
  }

  // 自动键入cmd
  const autoTypingCmd = (cmd: string) => {
    const interval = 100
    for (let i = 0; i < cmd.length; i++) {
      setTimeout(
        () => {
          setCmd((prev) => prev + cmd.charAt(i))

          if (i === cmd.length - 1) {
            setTimeout(() => {
              setTypingCmd(cmd)
            }, 100)
          }
        },
        interval * (i + 1)
      )
    }
  }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
    autoTypingCmd(currentClickCmd || INIT_CMD)
  }, [currentClickCmd])

  useEffect(() => {
    setCmd('')
    onTypingCmd(typingCmd)
  }, [typingCmd])

  return (
    <div className="command-input">
      <p>Prompt</p>
      <div className="flex">
        <div className="text-green-500 text-lg">❯</div>
        <input
          ref={inputRef}
          type="text"
          value={cmd}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="flex-1 ml-3 border-none outline-none"
        />
      </div>
    </div>
  )
}
