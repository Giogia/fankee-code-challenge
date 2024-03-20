import classNames from 'classnames'

import { CardProps } from './Card.props'

/**
 * UI component for presenting data
 */
export const Card = ({
   header,
   body,
   actions
}: CardProps) => {

   return (
      <div
         className={classNames([
            'flex flex-col gap-2 p-4',
            'bg-white rounded-lg shadow-md',
         ])}
         data-testid='card'
      >
         <div className="header">{header}</div>
         <div className="body">{body}</div>
         <div className="actions">{actions}</div>
      </div>
   )
}