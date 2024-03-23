'use client'

import { useFormStatus } from 'react-dom'

import { Button } from '@/components/Button'
import { ButtonProps } from '@/components/Button/Button.props'

const { Neutral } = Button.Hierarchy

const SAVE = 'Save'
const SAVING = 'Saving...'
const SAVED = 'Saved ✓'

interface SaveButtonProps extends ButtonProps {
   hasSaved?: boolean
}

export function SaveButton({ hasSaved, ...props }: SaveButtonProps) {

   const { pending, action } = useFormStatus()
   
   const isLoading = pending && action === props.formAction

   return (
      <div className='flex justify-end'>
         <Button
            {...props}
            hierarchy={Neutral}
            disabled={isLoading || hasSaved}
            label={isLoading ? SAVING : (hasSaved ? SAVED : SAVE)}
         />
      </div>
   )
}
