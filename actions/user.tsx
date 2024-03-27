'use server'

import { createClient } from '@/utils/supabase/server'

import { USER_ERROR, USER_UPDATE_ERROR } from './user.strings'
import { Profile } from './user.types'

export async function getUser() {

   const supabase = createClient()

   try {
      const { data: userData, error: userError } = await supabase.auth.getUser()
      const { user } = userData ?? {}

      if (userError || !user?.email) throw userError

      const { data: profileData, error: profileError } = await supabase
         .from('Profiles')
         .select('*')
         .eq('email', user.email)

      if (userError) throw profileError

      const [profile] = profileData ?? [{}] // return only user if profile does not exist yet

      return {
         data: { user, profile: profile as Profile },
         error: null
      }

   } catch (error) {
      console.error(error)

      return {
         data: { profile: {} },
         error: USER_ERROR
      }
   }
}

export async function updateUser(prevState: unknown, formData: FormData) {

   const supabase = createClient()

   const profile: Profile = {
      email: formData.get('email') as string,
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      instagram: formData.get('instagram') as string,
      facebook: formData.get('facebook') as string,
      tiktok: formData.get('tiktok') as string,
      x: formData.get('x') as string,
   }

   try {
      const { data, error } = await supabase
         .from('Profiles')
         .upsert(profile)
         .eq('email', profile.email)
         .single()

      if (error) throw error

      return {
         data: data as { profile: Profile },
         error
      }

   } catch (error) {
      console.error(error)

      return {
         data: { profile: {} },
         error: USER_UPDATE_ERROR
      }
   }
}