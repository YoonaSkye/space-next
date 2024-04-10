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
