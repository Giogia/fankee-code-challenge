'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { validateEmail } from '@/utils/validation/email'

import { EMAIL_VALIDATION_ERROR, EMAIL_ERROR, EMAIL_SUCCESS } from './auth.strings'

export async function signIn(prevState: unknown, formData: FormData) {

   const email = formData.get('email') as string

   if(!validateEmail(email)){
      return {
         message: '',
         error: EMAIL_VALIDATION_ERROR
      }
   }

   const supabase = createClient()

   const { error } = await supabase.auth.signInWithOtp(({
      email,
      options: { shouldCreateUser: true },
   }))
      
   if (error) {
      return {
         message: '',
         error: `${EMAIL_ERROR}: ${error.message}`
      }
   }
   
   return {
      message: EMAIL_SUCCESS
   }
}

export async function signOut() {

   const supabase = createClient()

   const { error } = await supabase.auth.signOut()

   console.error(error)

   redirect('/')
}