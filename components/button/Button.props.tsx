import { ReactNode } from 'react'
import { Type } from './Button.types'

export interface ButtonProps {
  /**
   * The icon displayed on the button, if any.
   */
  icon?: ReactNode;
  /**
   * The text or content displayed on the button.
   */
  label?: string;
  /**
   * Indicates the button type:
   * - Primary: the button is the primary call to action on the page.
   * - Neutral: the button is a generic call to action on the page.
   */
  type: Type;
  /**
   * An optional click handler that is called when the button is clicked.
   */
  onClick?: () => void;
}
