import { NextResponse } from 'next/server'

import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {

   const { origin, searchParams } = new URL(request.url)

   const code = searchParams.get('code')

   if (code) {
      const supabase = createClient()
      await supabase.auth.exchangeCodeForSession(code)
   }

   return NextResponse.redirect(`${origin}/account`)
}
