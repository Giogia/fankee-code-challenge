import classNames from 'classnames'

import { InputProps } from './Input.props'
import { Hierarchy } from './Input.types'
import { Type } from './Input.types'

const { Neutral, Ghost } = Hierarchy
const { Text, Email, TextArea } = Type

/**
 * UI component for handling user input data
 */
export const Input = ({
   hierarchy = Neutral,
   type = Text,
   placeholder,
   value,
   onChange,
   ...props
}: InputProps) => {

   const input: { [key: string]: React.ElementType }  = {
      [Text]: 'input',
      [Email]: 'input',
      [TextArea]: 'textarea',
   }

   const Component = input[type]

   return (
      <Component
         id={type}
         name={type}
         type={type}
         className={classNames([
            'inline-flex w-full',
            hierarchy === Neutral && 'bg-gray-400/10 border-0',
            hierarchy === Ghost && 'bg-transparent border-2 border-gray-400/40',
            'focus:backdrop-blur-sm',
            'text-sm text-gray-400',
            'h-10 px-3 rounded-lg',
            'transition duration-250 ease-in-out',
            'animate-in-up',
            type === TextArea && 'min-h-6 h-auto p-2',
         ])}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         {...props}
      />
   )
}

Input.Type = Type