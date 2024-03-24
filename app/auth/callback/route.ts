import { type EmailOtpType } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {

   const { origin, searchParams } = new URL(request.url)

   const token_hash = searchParams.get('token_hash')
   const type = searchParams.get('type') as EmailOtpType | null

   if (token_hash && type) {
      
      const supabase = createClient()

      const { error } = await supabase.auth.verifyOtp({ type, token_hash })

      if (!error) {
         return NextResponse.redirect(`${origin}/user`)
      }
   }
   return NextResponse.redirect(`${origin}/error`)
}
