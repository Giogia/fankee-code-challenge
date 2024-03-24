'use-client'

import Link from 'next/link'
import { use } from 'react'

import { getUser } from '@/actions/user'
import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'

const { Ghost } = Button.Hierarchy
const { White } = Typography.Color

const LOGIN = 'Click here to login'
const CONTINUE_AS = 'Continue as'

export function AuthButton() {

   const {data: {user}} = use(getUser())

   return (
      <Link className='flex justify-center w-full' href={user ? '/user' : '/login'}>
         <Button
            className='flex justify-center w-full max-w-72'
            color={White}
            hierarchy={Ghost}
            label={user?.email ? `${CONTINUE_AS} ${user?.email}` : LOGIN}
         />
      </Link>
   )
}
