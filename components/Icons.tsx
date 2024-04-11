import { Laptop, Menu, Moon, SunMedium } from 'lucide-react'
import Image from 'next/image'

export const Icons = {
  moon: Moon,
  sun: SunMedium,
  menu: Menu,
  system: Laptop
}

export function Icon({
  name,
  width = 28,
  height = 28,
  ...props
}: {
  name: string
  [props: string]: any
}) {
  return (
    <Image
      src={name.includes('http') ? name : `/${name}.svg`}
      width={width}
      height={height}
      {...props}
      alt="Icon"
    />
  )
}
