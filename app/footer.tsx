'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@/components/Typography'

import Fankee from '../public/fankee-footer.svg'

const NEED_HELP = 'Need help? Visit our'
const SUPPORT_CENTER = 'support center'
const RIGHTS_RESERVED = '© The Fankee Team. All rights reserved.'
const TERMS_PRIVACY = 'Terms of use - Privacy Policy'

const footerText = {
   fontSize: 10
}

const Footer = (
   <footer className='flex flex-col items-center gap-3 w-full opacity-50 p-5'>
      <Image
         className='animate-in-up'
         priority
         src={Fankee}
         alt='Fankee Logo Footer'
         height={16}
      />
      <div className='flex flex-col items-center gap-1'>
         <div className='flex justify-center gap-1'>
            <Typography style={footerText} text={NEED_HELP} />
            <Link href="/support">
               <Typography className='underline text-blue-200' style={footerText} text={SUPPORT_CENTER} />
            </Link>
         </div>
         <Typography style={footerText} text={RIGHTS_RESERVED} />
      </div>
      <Typography style={footerText} text={TERMS_PRIVACY} />
   </footer>
)

export default Footer