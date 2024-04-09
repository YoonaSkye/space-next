'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Icons } from './Icons'

const themeOptions = [
  {
    value: 'light',
    label: '浅色',
    icon: <Icons.sun className="h-[1.5rem] w-[1.5rem]" />
  },
  {
    value: 'dark',
    label: '深色',
    icon: <Icons.moon className="h-[1.5rem] w-[1.5rem]" />
  },
  {
    value: 'system',
    label: '系统',
    icon: <Icons.system className="text-base" />
  }
]

export default function ThemeMode() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  // Avoid Hydration Mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {/* {themeOptions.find((option) => theme === option.value)?.icon} */}
        {resolvedTheme === 'light' ? (
          <Icons.sun className="h-[1.5rem] w-[1.5rem]" />
        ) : (
          <Icons.moon className="h-[1.5rem] w-[1.5rem]" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className={cn('min-w-[6rem]')}>
        {themeOptions.map((optoin) => (
          <DropdownMenuItem
            key={optoin.value}
            className="cursor-pointer"
            onClick={() => setTheme(optoin.value)}
          >
            <div className="flex items-center  gap-2">
              <div
                className={cn(
                  theme === optoin.value ? 'opacity-100' : 'opacity-50',
                  'flex items-center'
                )}
              >
                {optoin.icon}
              </div>
              <div
                className={cn(
                  'text-sm',
                  theme === optoin.value ? 'opacity-100' : 'opacity-50'
                )}
              >
                {optoin.label}
              </div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
