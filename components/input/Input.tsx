import classNames from 'classnames'

import { InputProps } from './Input.props'
import { Type } from './Input.types'

const { Text } = Type

/**
 * UI component for handling user input data
 */
export const Input = ({
   type = Text,
   placeholder,
   value,
   onChange,
   ...props
}: InputProps) => {

   return (
      <input
         id={type}
         name={type}
         type={type}
         className={classNames([
            'inline-flex w-full',
            'border-2 border-gray-300',
            'focus:backdrop-blur-sm',
            'text-sm text-gray-400',
            'bg-transparent h-10 px-3 rounded-lg',
            'transition duration-250 ease-in-out',
            'animate-in-up'
         ])}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         {...props}
      />
   )
}

Input.Type = Type