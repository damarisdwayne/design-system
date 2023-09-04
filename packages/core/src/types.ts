import { CSSProperties, HTMLAttributes, ReactNode } from 'react'

export interface ComponentProps extends HTMLAttributes<HTMLElement> {
  as?: any
  className?: string
  children?: ReactNode | string | undefined
  customStyles?: CSSProperties
}
