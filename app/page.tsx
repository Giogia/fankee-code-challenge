import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'

import Fankee from '../public/fankee.svg'

const {Ghost} = Button.Hierarchy
const {White} = Typography.Color
const {H1, BodyM, BodyS} = Typography.Hierarchy

const DEFINITION = 'FANKEE IS THE FIRST COMMUNITY-DRIVEN MUSIC LABEL'
const HEAD_1 = 'We promote the tracks that are most loved by fans.'
const HEAD_2 = 'Are you ready to drop yours?'
const TITLE = 'Join the Competition'
const LOGIN = 'Click here to login'

export default function Home() {    
   return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-12 p-6 pt-0 pb-32">
         <Image 
            className='animate-in-up' 
            priority 
            src={Fankee} 
            alt='Fankee Logo' 
         />
         <Typography className='text-center animate-in-up' color={White} hierarchy={BodyM} text={DEFINITION}/>
         <div className='flex flex-col gap-1 items-center'>
            <Typography className='text-center animate-in-up' color={White} hierarchy={BodyS} text={HEAD_1}/>
            <Typography className='text-center animate-in-up' color={White} hierarchy={BodyS} text={HEAD_2}/>
         </div>
         <div className='flex flex-col gap-6 items-center'>
            <Typography className='text-center halo-text animate-in-up' color={White} hierarchy={H1} text={TITLE}/>
            <Link className='flex justify-center w-full' href="/login">
               <Button 
                  className='bg-black flex justify-center w-full max-w-96' 
                  color={White} 
                  hierarchy={Ghost} 
                  label={LOGIN}/>
            </Link>
         </div>
      </main> 
   )
}
