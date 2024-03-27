import { redirect } from 'next/navigation'
import { use } from 'react'

import { getUser } from '@/actions/user'

import { UserForm } from './page.form'
import { Header, Title } from './page.header'

export default function User() {

   const { data, error: authError } = use(getUser())
   const { user, profile } = data ?? {}

   if (authError || !user) {
      redirect('/')
   }

   return (
      <main className='flex min-h-screen w-full flex-col items-center gap-12 justify-start p-6 animate-in'>
         <Header email={user.email!} />
         {Title}
         <UserForm profile={{ ...profile, email: user.email! }} />
      </main>
   )
}
