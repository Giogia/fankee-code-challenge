import { ComponentProps, ReactNode } from 'react'

import { Hierarchy } from './Button.types'

export interface ButtonProps extends ComponentProps<'button'> {
  /**
   * Indicates the button hierarchy:
   * - Primary: the button is the primary call to action on the page.
   * - Neutral: the button is a generic call to action on the page.
   */
  hierarchy?: Hierarchy
  /**
   * The icon displayed on the button, if any.
   */
  icon?: ReactNode
  /**
   * The text or content displayed on the button.
   */
  label?: string
  /**
   * An optional click handler that is called when the button is clicked.
   */
  onClick?: () => void
}