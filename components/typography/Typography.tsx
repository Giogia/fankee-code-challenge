import classNames from 'classnames'

import { TypographyProps } from './Typography.props'
import { Color, Hierarchy } from './Typography.types'

const { H1, H2, H3, BodyS, BodyM, BodyL } = Hierarchy

/**
 * UI component for displaying text
 */
export const Typography = ({
   text,
   color,
   hierarchy
}: TypographyProps) => {

   return (
      <h1 className={classNames([
         hierarchy === H1 && 'text-4xl',
         hierarchy === H2 && 'text-3xl',
         hierarchy === H3 && 'text-2xl',
         hierarchy === BodyL && 'text-lg',
         hierarchy === BodyM && 'text-md',
         hierarchy === BodyS && 'text-sm',
         `text-${color}`,
      ])}>
         {text}
      </h1>
   )
}

Typography.defaultProps = {
   hierarchy: BodyS,
   color: Color.Gray,
}

Typography.Color = Color
Typography.Hierarchy = Hierarchy