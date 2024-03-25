import { ComponentProps, ReactNode } from 'react'

export interface CardProps extends ComponentProps<'div'> {
  /**
   * Whether the card shows the border around.
   */
  bordered?: boolean
  /**
   * The header content of the card component.
   */
  header?: ReactNode
  /**
   * The body content of the card component.
   */
  body?: ReactNode
  /**
   * The actions associated with the card component.
   */
  actions?: ReactNode
}