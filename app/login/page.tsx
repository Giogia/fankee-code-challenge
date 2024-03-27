'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useFormState } from 'react-dom'

import { signIn } from '@/actions/auth'
import { Card } from '@/components/Card'
import { DESKTOP, useMediaQuery } from '@/hooks/useMediaQuery'

import Fankee from '../../public/fankee.svg'

import { SendButton } from './page.button'
import { Header, Body } from './page.card'

export default function Login() {

   const [{ message, error }, formAction] = useFormState(signIn, { message: '' })

   const isDesktop = useMediaQuery(DESKTOP)

   return (
      <main className={classNames([
         'flex min-h-screen w-full flex-col items-center justify-center gap-16 pt-16 animate-in-up',
         isDesktop && 'p-6'
      ])}>
         <Link href='/'>
            <Image priority src={Fankee} alt='Fankee Logo' />
         </Link>
         <form className='flex w-full justify-center max-w-4xl pb-28' noValidate={true}>
            <Card
               bordered={isDesktop}
               header={Header}
               body={<Body message={message} error={error} />}
               actions={<SendButton formAction={formAction} hasSent={Boolean(message)} />}
            />
         </form>
      </main>
   )
}
