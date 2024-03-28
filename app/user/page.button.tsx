'use client'

import { useEffect, useState } from 'react'
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

   const [clicked, setClicked] = useState(false)

   useEffect(() => {
      if (clicked) setTimeout(() => setClicked(false), 4000)
   }, [clicked, setClicked])

   const isLoading = pending && action === props.formAction

   return (
      <div className='flex justify-end'>
         <Button
            {...props}
            hierarchy={Neutral}
            disabled={isLoading || hasSaved}
            label={clicked && isLoading ? SAVING : (clicked || hasSaved ? SAVED : SAVE)}
            onClick={() => setClicked(true)}
         />
      </div>
   )
}
