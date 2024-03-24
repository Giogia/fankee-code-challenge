'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useFormState } from 'react-dom'

import { signIn } from '@/actions/auth'
import { Card } from '@/components/Card'

import Fankee from '../../public/fankee.svg'

import { SendButton } from './page.button'
import { Header, Body } from './page.card'

export default function Login() {

   const [{ message, error }, formAction] = useFormState(signIn, { message: '' })

   return (
      <main className='flex min-h-screen w-full flex-col items-center gap-16 justify-center p-4 pt-12 animate-in-up'>
         <Link href='/'>
            <Image priority src={Fankee} alt='Fankee Logo' />
         </Link>
         <form className='flex w-full justify-center max-w-4xl pb-36' noValidate={true}>
            <Card
               header={Header}
               body={<Body message={message} error={error} />}
               actions={<SendButton formAction={formAction} hasSent={Boolean(message)} />}
            />
         </form>
      </main>
   )
}
