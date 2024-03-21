'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent, useEffect, useState } from 'react'

import { signIn } from '@/actions'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Input } from '@/components/Input'
import { Typography } from '@/components/Typography'

import Fankee from '../../public/fankee.svg'

const { Email } = Input.Type
const { Red } = Typography.Color
const { H1, BodyM, BodyS } = Typography.Hierarchy

const TITLE = 'Stay Tuned'
const HEAD_1 = 'Be part of something big!'
const HEAD_2 = 'Stay tuned to be the first to know about our upcoming launch!'
const DESCRIPTION = 'You will receive an email containing a "Magic Link" that can be used to sign in without the need for a password.'

const INSERT_EMAIL = 'Insert your email'
const INVALID_EMAIL_ERROR = 'Please enter a valid email address.'

const SEND = 'Send Email'
const SENDING = 'Sending...'
const SENT = 'Sent'

export default function Login({
   searchParams = {},
}: {
   searchParams?: Record<string, string>
}) {
   const { message } = searchParams

   const [email, setEmail] = useState('')
   const [reqId, setReqId] = useState(searchParams.reqId)
   const [error, setError] = useState(searchParams.error)
   const [isLoading, setIsLoading] = useState(false)
   const [hasSent, setHasSent] = useState(false)

   useEffect(() => {
      hasSent && setIsLoading(!(message || error))
   }, [hasSent, message, error, reqId, searchParams.reqId])

   useEffect(() => {
      setError(searchParams.error)
      setReqId(searchParams.reqId)
   }, [searchParams])

   const validateEmail = (email: string) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)

   const onChangeEmail = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setError('')
      setHasSent(false)
      setEmail(value)
   }

   const onSubmit = () => {
      if (validateEmail(email)) {
         setError('')
         setIsLoading(true)
         setHasSent(true)
         signIn(email)
      } else {
         setError(INVALID_EMAIL_ERROR)
         setHasSent(false)
      }
   }

   return (
      <main className="flex min-h-screen flex-col items-center gap-5 justify-center p-8 animate-in-up">
         <Link href="/">
            <Image priority src={Fankee} alt='Fankee Logo' />
         </Link>
         <div className='w-full max-w-2xl'>
            <Card
               header={(
                  <div className='flex flex-col gap-2'>
                     <Typography hierarchy={H1} text={TITLE} />
                     <div>
                        <Typography hierarchy={BodyM} text={HEAD_1} />
                        <Typography hierarchy={BodyM} text={HEAD_2} />
                     </div>
                  </div>
               )}
               body={(
                  <div className='flex flex-col gap-2'>
                     <Input
                        placeholder={INSERT_EMAIL}
                        type={Email}
                        value={email}
                        onChange={onChangeEmail}
                     />
                     <Typography hierarchy={BodyS} text={message || DESCRIPTION} />
                     {error &&
                        <Typography className={'animate-in-down'} color={Red} hierarchy={BodyS} text={error} />
                     }
                  </div>
               )}
               actions={(
                  <div className='flex justify-end'>
                     <Button
                        disabled={Boolean(message)}
                        label={isLoading ? SENDING : (message ? SENT : SEND)}
                        onClick={onSubmit}
                     />
                  </div>
               )}
            />
         </div>
      </main>
   )
}
