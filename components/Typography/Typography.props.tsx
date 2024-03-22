import { ComponentProps } from 'react'

import { Color, Hierarchy } from './Typography.types'

export interface TypographyProps extends ComponentProps<'p'> {
  /**
   * The color of the text displayed.
   */
  color?: Color
  /**
   * The semantic hierarchy of the text.
   */
  hierarchy?: Hierarchy
  /**
   * The text to be displayed.
   */
  text: string
}