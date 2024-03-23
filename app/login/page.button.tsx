'use client'

import { useFormStatus } from 'react-dom'

import { Button } from '@/components/Button'

const SEND = 'Send Email'
const SENDING = 'Sending...'
const SENT = 'Sent ✓'

export function SubmitButton({ ...props }) {
   const { formAction, hasSent } = props
   const { pending, action } = useFormStatus()

   const isLoading = pending && action === formAction

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
