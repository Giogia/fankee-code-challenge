'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signIn(formData: FormData) {
   const supabase = createClient()

   const { error } = await supabase.auth.signInWithOtp(({
      email: formData.get('email') as string,
      options: {
         shouldCreateUser: true,
         emailRedirectTo: 'https://localhost:3000',
      },
   }))
   
   if (error) {
      redirect(`/login?error=Could not authenticate user: ${error}`)
   }
   
   redirect('/login?message=Check email to continue sign in process')
}

export async function signOut() {
   const supabase = createClient()

   const { error } = await supabase.auth.signOut()

   console.error(error)

   redirect('/')
}