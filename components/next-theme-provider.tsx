'use client'

import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

export default function NextThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </ThemeProvider>
  )
}
