import classnames from 'classnames'

import { Typography } from '../Typography'

import { ButtonProps } from './Button.props'
import { Hierarchy } from './Button.types'

const { Gray, White } = Typography.Color
const { Primary, Neutral, Ghost } = Hierarchy

/**
 * UI component for user interaction
 */
export const Button = ({
   className,
   label,
   icon,
   hierarchy = Primary,
   onClick,
   ...props
}: ButtonProps) => {

   return (
      <button
         className={classnames([
            'rounded-full inline-flex gap-2 px-5 py-2.5 cursor-pointer',
            'active:scale-95 transition duration-300 ease-in-out',
            'animate-in-up',
            hierarchy === Primary && 'bg-yellow-400 hover:bg-yellow-300',
            hierarchy === Neutral && 'bg-white hover:bg-gray-200',
            hierarchy === Ghost && 'bg-transparent',
            className
         ])}
         onClick={onClick}
         {...props}
      >
         {icon}
         {label && (
            <Typography 
               className={classnames([
                  'transition duration-300 ease-in-out',
                  hierarchy === Ghost && 'hover:text-gray-300',
               ])} 
               color={hierarchy === Ghost ? White : Gray} text={label} />
         )}
      </button>
   )
}

Button.Hierarchy = Hierarchy