import classnames from 'classnames'

import { Typography } from '../Typography'

import { ButtonProps } from './Button.props'
import { Hierarchy } from './Button.types'

const { Primary, Neutral } = Hierarchy

/**
 * UI component for user interaction
 */
export const Button = ({
   label,
   icon,
   hierarchy,
   onClick,
   ...props
}: ButtonProps) => {

   return (
      <button
         className={classnames([
            'rounded-full inline-flex gap-2 px-5 py-2.5 cursor-pointer',
            'hover:text-gray-400',
            'active:scale-95',
            'transition duration-300 ease-in-out',
            hierarchy === Primary && 'bg-yellow-400 hover:bg-yellow-300',
            hierarchy === Neutral && 'bg-white hover:bg-gray-200'
         ])}
         onClick={onClick}
         {...props}
      >
         {icon}
         {label && <Typography text={label} />}
      </button>
   )
}

Button.defaultProps = {
   hierarchy: Hierarchy.Primary,
}

Button.Hierarchy = Hierarchy