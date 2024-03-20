import { ReactNode } from 'react'

export interface CardProps {
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