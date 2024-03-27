import { ChangeEvent, ComponentProps } from 'react'

import { Hierarchy, Type } from './Input.types'

export interface InputProps extends ComponentProps<'input'> {
  /**
   * Indicates the button hierarchy:
   * - Neutral: the input is a generic data collector on the page.
   * - Ghost: the input is a subtle data collector on the page.
   */
  hierarchy?: Hierarchy
  /**
   * Placeholder text for the input field.
   */
  placeholder?: string
  /**
   * Specifies the type of input.
   */
  type?: Type
  /**
   * The current value of the input field.
   */
  value?: string
  /**
   * Optional change handler that is called when the input value changes.
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
