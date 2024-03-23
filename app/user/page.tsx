'use client'

import { Card } from '@/components/Card'

import { SaveButton } from './page.button'
import {Header as PersonalCardHeader, Body as PersonalCardBody} from './page.card-personal'
import {Header as SocialCardHeader, Body as SocialCardBody} from './page.card-social'
import {Header as PageHeader, Title as PageTitle} from './page.header'

export default function User() {

   return (
      <main className='flex min-h-screen w-full flex-col items-center gap-12 justify-start p-6 animate-in'>
         {PageHeader}
         {PageTitle}
         <form className='flex flex-col h-full justify-center gap-8 w-full max-w-6xl' noValidate={true}>
            <Card
               className='animate-in-up'
               header={PersonalCardHeader}
               body={<PersonalCardBody message='' />}
               actions={<SaveButton formAction={undefined} hasSaved={false} />}
            />
            <Card
               className='animate-in-up'
               header={SocialCardHeader}
               body={<SocialCardBody message='' />}
               actions={<SaveButton formAction={undefined} hasSaved={false} />}
            />
         </form>
      </main>
   )
}
