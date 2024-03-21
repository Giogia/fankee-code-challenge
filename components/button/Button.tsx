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
            'transition duration-300 ease-in-out',
            'active:scale-95 animate-in-up',
            hierarchy === Primary && 'bg-yellow-400 hover:bg-yellow-300',
            hierarchy === Neutral && 'bg-white hover:bg-gray-200',
            hierarchy === Ghost && 'bg-transparent',
         ])}
         onClick={onClick}
         {...props}
      >
         {icon}
         {label && <Typography color={hierarchy === Ghost ? White : Gray} text={label} />}
      </button>
   )
}

Button.defaultProps = {
   hierarchy: Hierarchy.Primary,
}

Button.Hierarchy = Hierarchy