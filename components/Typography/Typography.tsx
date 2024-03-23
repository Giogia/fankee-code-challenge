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
   color = White,
   hierarchy = BodyS,
   style,
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
            hierarchy === H1 && 'text-6xl',
            hierarchy === H2 && 'text-4xl',
            hierarchy === H3 && 'text-2xl',
            hierarchy === BodyL && 'text-lg text-thin',
            hierarchy === BodyM && 'text-md text-thin',
            hierarchy === BodyS && 'text-xs text-thin',
            color===Gray && 'text-gray-800',
            color===Red && 'text-red-500',
            color===White && 'text-white',
            'animate-in',
            className
         ])}
         style={{
            fontFamily: hierarchy === H1 ? 
               'Arial Black, Arial Bold, Gadget, sans-serif':
               'Arial',
            ...style
         }}
         {...props}
      >
         {text}
      </Component>
   )
}

Typography.Color = Color
Typography.Hierarchy = Hierarchy