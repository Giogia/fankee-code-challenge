'use client'

import { useFormStatus } from 'react-dom'

import { Button } from '@/components/Button'
import { ButtonProps } from '@/components/Button/Button.props'

const SEND = 'Send Email'
const SENDING = 'Sending...'
const SENT = 'Sent ✓'

interface SendButtonProps extends ButtonProps {
   hasSent?: boolean
}

export function SubmitButton({ hasSent, ...props }: SendButtonProps) {

   const { pending, action } = useFormStatus()
   
   const isLoading = pending && action === props.formAction

   return (
      <div className='flex justify-end'>
         <Button
            {...props}
            disabled={isLoading || hasSent}
            label={isLoading ? SENDING : (hasSent ? SENT : SEND)}
         />
      </div>
   )
}
