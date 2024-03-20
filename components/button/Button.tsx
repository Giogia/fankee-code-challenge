import React from 'react'
import classnames from 'classnames'

import { ButtonProps } from './Button.props'
import { Type } from './Button.types'

const { Primary, Neutral } = Type

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  icon,
  type
}: ButtonProps) => {

  return (
    <button
      type="button"
      className={classnames([
        'rounded-full inline-flex gap-2 px-5 py-2.5',
        'text-sm text-gray-800 hover:text-gray-400',
        'cursor-pointer transition duration-250 ease-in-out',
        type === Primary && 'bg-yellow-400 hover:bg-yellow-300',
        type === Neutral && 'bg-white'
      ])}
    >
      {icon}
      {label}
    </button>
  )
}

Button.defaultProps = {
  type: Type.Primary,
}