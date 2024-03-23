'use client'

import { Input } from '@/components/Input'
import { Typography } from '@/components/Typography'

const { Email } = Input.Type
const { Red } = Typography.Color
const { H1, BodyM, BodyS } = Typography.Hierarchy

const TITLE = 'Stay Tuned 🪩'
const HEAD_1 = 'Be part of something big!'
const HEAD_2 = 'Stay tuned to be the first to know about our upcoming launch!'
const DESCRIPTION = 'You will receive an email containing a "Magic Link" that can be used to sign in without the need for a password.'

const INSERT_EMAIL = 'Insert your email'

export const Header = (
   <div className='flex flex-col gap-2 min-w-64'>
      <Typography hierarchy={H1} text={TITLE} />
      <div>
         <Typography hierarchy={BodyM} text={HEAD_1} />
         <Typography hierarchy={BodyM} text={HEAD_2} />
      </div>
   </div>
)

export const Body = ({ message, error }: { message: string, error?: string }) => (
   <div className='flex flex-col gap-2'>
      <Input
         placeholder={INSERT_EMAIL}
         type={Email}
      />
      <div className='h-20'>
         <Typography hierarchy={BodyS} text={message || DESCRIPTION} />
         {error &&
            <Typography className={'animate-in-down'} color={Red} hierarchy={BodyS} text={error} />
         }
      </div>
   </div>
)