'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Profile } from '@/actions/user.types'
import { Typography } from '@/components/Typography'

import Fankee from '../../public/fankee.svg'

const { H1, BodyM } = Typography.Hierarchy

const TITLE = 'Your Profile'
const DESCRIPTION = 'All you need to do is create a profile and upload your winning track. You\'ll be able to upload more after the first one from your profile page.'

export const Header = ({ email }: Profile) => {

   return (
      <div className={'flex justify-between w-full'}>
         <Link href='/'>
            <Image priority src={Fankee} alt='Fankee Logo' />
         </Link>
         <Typography className='p-2' text={email} />
      </div>
   )
}

export const Title = (
   <div className='flex flex-col justify-center w-full  max-w-4xl'>
      <Typography hierarchy={H1} text={TITLE} />
      <Typography hierarchy={BodyM} text={DESCRIPTION} />
   </div>
)