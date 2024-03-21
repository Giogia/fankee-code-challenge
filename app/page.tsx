import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'

import Fankee from '../public/fankee.svg'

const {Ghost} = Button.Hierarchy

export default function Home() {    
   return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 animate-in">
         <Image priority src={Fankee} alt='Fankee Logo' />
         <Link href="/login">
            <Button hierarchy={Ghost} label={'Login'}/>
         </Link>
      </main>
   )
}
