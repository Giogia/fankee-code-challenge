'use client'

import { useFormState } from 'react-dom'

import { updateUser } from '@/actions/user'
import { Profile } from '@/actions/user.types'
import { Card } from '@/components/Card'
import { Input } from '@/components/Input'
import { Typography } from '@/components/Typography'

import { SaveButton } from './page.button'
import { Header as PersonalCardHeader, Body as PersonalCardBody } from './page.card-personal'
import { Header as SocialCardHeader, Body as SocialCardBody } from './page.card-social'

const { Red } = Typography.Color

export function UserForm({ profile }: { profile: Profile }) {

   const [{ data, error }, formAction] = useFormState(updateUser, { data: { profile }, error: null })
   const { profile: updatedProfile } = data ?? {}

   return (
      <form className='flex flex-col h-full justify-center gap-8 w-full max-w-6xl' noValidate={true}>
         <Input className='invisible absolute w-0 h-0' id='email' name='email' defaultValue={profile?.email} />
         {error &&
            <Typography className='flex w-full justify-center animate-in-up' text={error} color={Red} />
         }
         <Card
            className='animate-in-up'
            header={PersonalCardHeader}
            body={<PersonalCardBody {...profile} {...updatedProfile} />}
            actions={<SaveButton formAction={formAction} />}
         />
         <Card
            className='animate-in-up'
            header={SocialCardHeader}
            body={<SocialCardBody {...profile} {...updatedProfile} />}
            actions={<SaveButton formAction={formAction} />}
         />
      </form>
   )
}
