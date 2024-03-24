import Image from 'next/image'

import { Typography } from '@/components/Typography'

import Fankee from '../public/fankee.svg'

import { AuthButton } from './page.button'

const { H1, BodyM, BodyS } = Typography.Hierarchy

const DEFINITION = 'FANKEE IS THE FIRST COMMUNITY-DRIVEN MUSIC LABEL'
const HEAD_1 = 'We promote the tracks that are most loved by fans.'
const HEAD_2 = 'Are you ready to drop yours?'
const TITLE = 'Join the Competition'

export default function Home() {

   return (
      <main className="min-h-screen h-full flex flex-col items-center justify-center gap-16 p-4 pt-1 pb-36">
         <Image
            className='animate-in-up'
            priority
            src={Fankee}
            alt='Fankee Logo'
         />
         <Typography className='text-center animate-in-up' hierarchy={BodyM} text={DEFINITION} />
         <div className='flex flex-col gap-1 items-center'>
            <Typography className='text-center animate-in-up' hierarchy={BodyS} text={HEAD_1} />
            <Typography className='text-center animate-in-up' hierarchy={BodyS} text={HEAD_2} />
         </div>
         <div className='flex flex-col gap-6 items-center halo-text pb-28'>
            <Typography className='text-center animate-in-up' hierarchy={H1} text={TITLE} />
            <AuthButton />
         </div>
      </main>
   )
}
