import classnames from 'classnames'

import { ButtonProps } from './Button.props'
import { Type } from './Button.types'
import { Typography } from '../typography/Typography'

const { Primary, Neutral } = Type

/**
 * UI component for user interaction
 */
export const Button = ({
  label,
  icon,
  type,
  onClick
}: ButtonProps) => {

  return (
    <button
      type="button"
      className={classnames([
        'rounded-full inline-flex gap-2 px-5 py-2.5 cursor-pointer',
        'hover:text-gray-400',
        'active:scale-95',
        'transition duration-250 ease-in-out',
        type === Primary && 'bg-yellow-400 hover:bg-yellow-300',
        type === Neutral && 'bg-white'
      ])}
      onClick={onClick}
    >
      {icon}
      {label && <Typography text={label} />}
    </button>
  )
}

Button.defaultProps = {
  type: Type.Primary,
}

Button.Type = Type