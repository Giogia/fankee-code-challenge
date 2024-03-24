'use-client'

import Link from 'next/link'

import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
import { createClient } from '@/utils/supabase/server'

const { Ghost } = Button.Hierarchy
const { White } = Typography.Color

const LOGIN = 'Click here to login'

export default async function AuthButton() {

   const supabase = createClient()

   const { data: { user } } = await supabase.auth.getUser()

   return (
      <Link className='flex justify-center w-full' href={user ? '/user' : '/login'}>
         <Button
            className='flex justify-center w-full max-w-72'
            color={White}
            hierarchy={Ghost}
            label={LOGIN}
         />
      </Link>
   )
}
