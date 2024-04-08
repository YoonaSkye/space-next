import { LINKS, LinksType } from '@/constants'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useNavActive = () => {
  const pathname = usePathname()
  const [active, setActive] = useState<LinksType>('Home')

  useEffect(() => {
    const keys = Object.keys(LINKS) as LinksType[]
    const pathnames = pathname.split('/')
    keys.map((key) => {
      const val = LINKS[key].split('/').join('')
      if (pathnames.includes(val)) setActive(key)
    })
  }, [pathname])
  return [active]
}
