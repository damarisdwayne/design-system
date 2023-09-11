export interface CheckboxProps {
  label: string
  id?: string
  name?: string
  disabled?: boolean
  error?: boolean
  messageStatus?: string
  isSelected: boolean
  setIsSelected: (isSelected: boolean) => void
}
