'use client'

import { Profile } from '@/actions/user.types'
import { Input } from '@/components/Input'
import { Typography } from '@/components/Typography'

const { H2, BodyM } = Typography.Hierarchy

const TITLE = 'Social'
const HEAD_1 = 'Add your social profiles'

const INSTAGRAM = 'Instagram:'
const INSERT_INSTAGRAM = 'Insert your Instagram profile'

const X = 'X:'
const INSERT_X = 'Insert your X profile'

const FACEBOOK = 'Facebook:'
const INSERT_FACEBOOK = 'Insert your Facebook profile'

const TIKTOK = 'TikTok:'
const INSERT_TIKTOK = 'Insert your TikTok profile'

export const Header = (
   <div className='flex flex-col gap-2 min-w-64'>
      <Typography hierarchy={H2} text={TITLE} />
      <Typography hierarchy={BodyM} text={HEAD_1} />
   </div>
)

export const Body = ({ instagram, x, facebook, tiktok }: Profile) => (
   <div className='grid-2 gap-6'>
      <div className='flex flex-col gap-4'>
         <Typography className='pl-2' hierarchy={BodyM} text={INSTAGRAM} />
         <Input
            id='instagram'
            name='instagram'
            placeholder={INSERT_INSTAGRAM}
            defaultValue={instagram}
         />
      </div>
      <div className='flex flex-col gap-4'>
         <Typography className='pl-2' hierarchy={BodyM} text={X} />
         <Input
            id='x'
            name='x'
            placeholder={INSERT_X}
            defaultValue={x}
         />
      </div>
      <div className='flex flex-col gap-4'>
         <Typography className='pl-2' hierarchy={BodyM} text={FACEBOOK} />
         <Input
            id='facebook'
            name='facebook'
            placeholder={INSERT_FACEBOOK}
            defaultValue={facebook}
         />
      </div>
      <div className='flex flex-col gap-4'>
         <Typography className='pl-2' hierarchy={BodyM} text={TIKTOK} />
         <Input
            id='tiktok'
            name='tiktok'
            placeholder={INSERT_TIKTOK}
            defaultValue={tiktok}
         />
      </div>
   </div>
)