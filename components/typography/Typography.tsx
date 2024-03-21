import classNames from 'classnames'

import { TypographyProps } from './Typography.props'
import { Color, Hierarchy } from './Typography.types'

const { H1, H2, H3, BodyS, BodyM, BodyL } = Hierarchy

/**
 * UI component for displaying text
 */
export const Typography = ({
   className,
   text,
   color,
   hierarchy,
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
            hierarchy === H1 && 'text-4xl font-extrabold',
            hierarchy === H2 && 'text-3xl',
            hierarchy === H3 && 'text-2xl',
            hierarchy === BodyL && 'text-lg',
            hierarchy === BodyM && 'text-md',
            hierarchy === BodyS && 'text-xs',
            `text-${color}`,
            'animate-in',
            className
         ])}
         {...props}
      >
         {text}
      </Component>
   )
}

Typography.defaultProps = {
   hierarchy: BodyS,
   color: Color.Gray,
}

Typography.Color = Color
Typography.Hierarchy = Hierarchy