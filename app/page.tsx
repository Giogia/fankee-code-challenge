import Image from 'next/image'
import Link from 'next/link'

import Fankee from '../public/fankee.svg'

export default function Home() {    
   return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 animate-in">
         <Image priority src={Fankee} alt='Fankee Logo' />
         <Link href="/login">Login</Link>
      </main>
   )
}
