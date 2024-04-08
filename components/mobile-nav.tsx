'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { LINKS } from '@/constants'
import { useNavActive } from '@/hooks/useNavActive'
import Link, { LinkProps } from 'next/link'
import { useState } from 'react'
import { Icons } from './Icons'
import { Button } from './ui/button'

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [active] = useNavActive()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="w-10 px-0 sm:hidden">
          <Icons.menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[200px] flex flex-col">
        {Object.entries(LINKS).map((link) => {
          const className = `py-3 px-5 transition-transform duration-200 hover:text-cyan-500 ${link[0] === active ? 'text-cyan-500' : ''}`
          return (
            <MobileLink
              key={link[0]}
              href={link[1]}
              onOpenChange={setOpen}
              className={className}
            >
              {link[0]}
            </MobileLink>
          )
        })}
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode
  onOpenChange?: (open: boolean) => void
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
