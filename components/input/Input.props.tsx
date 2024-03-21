import { Type } from './Input.types'

export interface InputProps {
  /**
   * Placeholder text for the input field.
   */
  placeholder: string
  /**
   * Specifies the type of input.
   */
  type: Type
  /**
   * The current value of the input field.
   */
  value?: string
  /**
   * Optional change handler that is called when the input value changes.
   */
  onChange?: (value: string) => void
}
