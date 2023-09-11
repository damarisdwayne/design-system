import { ComponentProps } from '../../types'

export interface RadioButtonProps extends ComponentProps {
  label: string
  id?: string
  name?: string
  disabled?: boolean
  messageStatus?: string
  isSelected: boolean
  setIsSelected: (isSelected: boolean) => void
  error?: boolean
}
