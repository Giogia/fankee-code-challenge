import classNames from 'classnames'

import { TypographyProps } from './Typography.props'
import { Color, Hierarchy } from './Typography.types'

const { Gray, Red, White } = Color
const { H1, H2, H3, BodyS, BodyM, BodyL } = Hierarchy

/**
 * UI component for displaying text
 */
export const Typography = ({
   className,
   text,
   color = Gray,
   hierarchy = BodyS,
   ...props
}: TypographyProps) => {

   const typography: { [key: string]: React.ElementType }  = {
      [H1]: 'h1',
      [H2]: 'h2',
      [H3]: 'h3',
      [BodyL]: 'p',
      [BodyM]: 'p',
      [BodyS]: 'p',
   }

   const Component = typography[hierarchy]

   return (
      <Component 
         className={classNames([
            hierarchy === H1 && 'text-6xl font-extrabold',
            hierarchy === H2 && 'text-4xl',
            hierarchy === H3 && 'text-2xl',
            hierarchy === BodyL && 'text-lg',
            hierarchy === BodyM && 'text-md',
            hierarchy === BodyS && 'text-xs',
            color===Gray && 'text-gray-800',
            color===Red && 'text-red-500',
            color===White && 'text-white',
            'animate-in',
            className
         ])}
         {...props}
      >
         {text}
      </Component>
   )
}

Typography.Color = Color
Typography.Hierarchy = Hierarchy