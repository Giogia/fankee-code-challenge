'use server'

import { createClient } from '@/utils/supabase/server'

export async function getUser(){

   const supabase = createClient()
    
   return supabase.auth.getUser()
}