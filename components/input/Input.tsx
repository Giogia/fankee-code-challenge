import classNames from 'classnames'

import { InputProps } from './Input.props'
import { Type } from './Input.types'

/**
 * UI component for handling user input data
 */
export const Input = ({
   type,
   placeholder,
   value,
   onChange
}: InputProps) => {

   return (
      <input
         type={type}
         className={classNames([
            'inline-flex w-full',
            'border-2 border-gray-300',
            'focus:backdrop-blur-sm',
            'text-sm text-gray-800',
            'bg-transparent h-10 px-3 rounded-lg',
            'transition duration-250 ease-in-out',
         ])}
         placeholder={placeholder}
         value={value}
         onChange={e => onChange?.(e?.target?.value)}
      />
   )
}

Input.defaultProps = {
   type: Type.Text
}

Input.Type = Type