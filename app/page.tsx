import CommandLine from '@/components/command/command-line'
import CommandProvider from '@/components/command/command-provider'

export default function Home() {
  return (
    <>
      <p>
        Hi there👋
        欢迎来到我的空间👀，在下方👇输入命令交互🔥，更多有意思命令即将开放🥳
      </p>
      <CommandProvider>
        <CommandLine />
      </CommandProvider>
    </>
  )
}
