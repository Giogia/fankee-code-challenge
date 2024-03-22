'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import { EMAIL_ERROR, EMAIL_SUCCESS } from './auth.strings'

export async function signIn(email: string) {

   const supabase = createClient()

   const { error } = await supabase.auth.signInWithOtp(({
      email,
      options: {
         shouldCreateUser: true,
         emailRedirectTo: 'https://localhost:3000',
      },
   }))
      
   if (error) {
      redirect(`/login?reqId=${Date.now()}&error=${EMAIL_ERROR}: ${error}`)
   }
      
   redirect(`/login?reqId=${Date.now()}&message=${EMAIL_SUCCESS}`)
}

export async function signOut() {

   const supabase = createClient()

   const { error } = await supabase.auth.signOut()

   console.error(error)

   redirect('/')
}