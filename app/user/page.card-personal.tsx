'use client'

import { Profile } from '@/actions/user.types'
import { Input } from '@/components/Input'
import { Typography } from '@/components/Typography'

const { TextArea } = Input.Type
const { H2, BodyM } = Typography.Hierarchy

const TITLE = 'Personal Info'
const HEAD_1 = 'Add your personal information'

const NAME = 'Name:'
const INSERT_NAME = 'Insert your full name'

const DESCRIPTION = 'Description:'
const INSERT_DESCRIPTION = 'Insert a brief description'

export const Header = (
   <div className='flex flex-col gap-2 min-w-64'>
      <Typography hierarchy={H2} text={TITLE} />
      <Typography hierarchy={BodyM} text={HEAD_1} />
   </div>
)

export const Body = ({ name, description }: Profile) => (
   <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-4'>
         <Typography className='pl-2' hierarchy={BodyM} text={NAME} />
         <Input
            id='name'
            name='name'
            placeholder={INSERT_NAME}
            defaultValue={name}
         />
      </div>
      <div className='flex flex-col gap-4'>
         <Typography className='pl-2' hierarchy={BodyM} text={DESCRIPTION} />
         <Input
            id='description'
            name='description'
            placeholder={INSERT_DESCRIPTION}
            type={TextArea}
            defaultValue={description}
         />
      </div>
   </div>
)