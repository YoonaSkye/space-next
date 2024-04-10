import {
  BRANCH,
  FRAMEWORK,
  INIT_BLOG_VERSION,
  INIT_FRAMEWORK_VERSION,
  SPACE
} from '@/constants'

export default function Prompt() {
  return (
    <div className="flex mb-4">
      <span className="mr-3 text-cyan-500">{SPACE}</span>
      <span className="mr-3">on</span>
      <span className="mr-3 text-fuchsia-500">❯ {BRANCH}</span>
      <span className="mr-3">is</span>
      <span className="mr-3 text-amber-500">📦 v{INIT_BLOG_VERSION}</span>
      <span className="mr-3">via</span>
      <span className="flex text-green-500">
        {FRAMEWORK}@{INIT_FRAMEWORK_VERSION}
      </span>
    </div>
  )
}
