import classnames from 'classnames'

import { Typography } from '../Typography'

import { ButtonProps } from './Button.props'
import { Type } from './Button.types'

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
            'transition duration-300 ease-in-out',
            type === Primary && 'bg-yellow-400 hover:bg-yellow-300',
            type === Neutral && 'bg-white hover:bg-gray-200'
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