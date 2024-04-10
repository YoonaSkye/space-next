export const SPACE_NAME = 'YoonaSkye'
export const LINKS = {
  Home: '/',
  Blog: '/blog',
  About: '/about'
}

export type LinksType = keyof typeof LINKS

// CMDS
export const HELP = 'help',
  CLEAR = 'clear',
  LIST = 'list',
  LS = 'ls',
  ABOUT = 'about',
  POSTS = 'posts',
  INIT_CMD = ABOUT,
  RMRF = 'rm -rf',
  COMMAND_NOT_FOUND = 'command not found',
  COMMANDS = [POSTS, ABOUT, HELP, LIST, LS, CLEAR] as const

export type CommandType = (typeof COMMANDS)[number]

export const COMMAND_CONTENT_MAP: Record<Exclude<CommandType, 'clear'>, any> = {
  [HELP]: {
    [HELP]: 'show details',
    [`${LIST}/${LS}`]: ['list all commands', COMMANDS],
    [CLEAR]: 'clear all outputs',
    [ABOUT]: 'some information about me',
    [POSTS]: 'list all posts'
  },
  [LIST]: COMMANDS,
  [LS]: COMMANDS,
  [ABOUT]: {
    introduction: `我是YoonaSkye，API调用经验丰富，写API中，对CLI开发感兴趣，有个公众号【前端仓库】👈 欢迎戳`,
    skills: ['javascript', 'typescript', 'react', 'vite', 'nextjs'],
    platforms: {
      github: 'https://github.com/YoonaSkye'
    }
  },
  [POSTS]: 'post'
}

// PROMPT
export const SPACE = 'yoonaSkye.space',
  BRANCH = 'main',
  INIT_BLOG_VERSION = '1.0.0',
  FRAMEWORK = 'next',
  INIT_FRAMEWORK_VERSION = '13.4.10'
