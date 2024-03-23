import classNames from 'classnames'

import { CardProps } from './Card.props'

/**
 * UI component for presenting data
 */
export const Card = ({
   className,
   header,
   body,
   actions
}: CardProps) => {

   return (
      <div
         className={classNames([
            'flex flex-col gap-10 p-9 pb-6',
            'bg-transparent border rounded-lg shadow-md',
            'w-full min-w-min max-w-2xl',
            'halo',
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