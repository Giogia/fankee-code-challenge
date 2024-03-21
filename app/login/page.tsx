import Image from 'next/image'
import Link from 'next/link'

import { signIn } from '@/actions'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Input } from '@/components/Input'
import { Typography } from '@/components/Typography'

import Fankee from '../../public/fankee.svg'

const { Email } = Input.Type
const { Gray, Red } = Typography.Color
const { H1, BodyM, BodyS } = Typography.Hierarchy

export default function Login({
   searchParams: { message, error } = {},
}: {
   searchParams?: Record<string, string>
}) {
   return (
      <main className="flex min-h-screen flex-col items-center gap-5 justify-center p-8 animate-in-up">
         <Link href="/">
            <Image priority src={Fankee} alt='Fankee Logo' />
         </Link>
         <form className='w-full max-w-2xl'>
            <Card
               header={(
                  <div className='flex flex-col gap-2'>
                     <Typography hierarchy={H1} text={'Stay Tuned'} />
                     <div>
                        <Typography hierarchy={BodyM} text={'Be part of something big!'} />
                        <Typography hierarchy={BodyM} text={'Stay tuned to be the first to know about our upcoming launch!'} />
                     </div>
                  </div>
               )}
               body={(
                  <div className='flex flex-col gap-2'>
                     <Input placeholder={'Insert your email'} type={Email} />
                     <Typography 
                        className={(error || message) && 'animate-in-down'}
                        color={error? Red : Gray}
                        hierarchy={BodyS} 
                        text={error || message || 'You will receive an email containing a "Magic Link" that can be used to sign in without the need for a password.'} 
                     />
                  </div>
               )}
               actions={(
                  <div className='flex justify-end'>
                     <Button label='Send Email' formAction={signIn} type='submit' />
                  </div>
               )}
            />
         </form>
      </main>
   )
}
