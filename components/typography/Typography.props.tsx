import { Color, Hierarchy } from './Typography.types'

export interface TypographyProps {
  /**
   * The color of the text displayed.
   */
  color?: Color
  /**
   * The semantic hierarchy of the text.
   */
  hierarchy: Hierarchy
  /**
   * The text to be displayed.
   */
  text: string
}