import classNames from 'classnames'

import { CardProps } from './Card.props'

/**
 * UI component for presenting data
 */
export const Card = ({
   bordered = true,
   className,
   header,
   body,
   actions
}: CardProps) => {

   return (
      <div
         className={classNames([
            'flex flex-col gap-10 p-10 pb-8',
            'bg-transparent rounded-lg',
            bordered && 'border-2 border-gray-400/20 shadow-md halo',
            'w-full min-w-min',
            'animate-in-up',
            className
         ])}
         data-testid='card'
      >
         <div className="header">{header}</div>
         <div className="body">{body}</div>
         <div className="actions">{actions}</div>
      </div>
   )
}