import { render } from '@testing-library/react'

import User from './page'

jest.mock('react', () => ({
   ...jest.requireActual('react'),
   use: jest.fn().mockReturnValue({ data: { user: { email: 'mail@user.com' } } })
}))

jest.mock('react-dom', () => ({
   ...jest.requireActual('react-dom'),
   useFormState: jest.fn().mockReturnValue([{ message: '' }, jest.fn()]),
   useFormStatus: jest.fn().mockReturnValue({ pending: false, action: jest.fn() })
}))

jest.mock('../../utils/supabase/server', () => ({
   createClient: jest.fn().mockReturnValue({ auth: { getUser: jest.fn() } })
}))

describe('User', () => {
   it('renders correctly', () => {
      const { asFragment } = render(<User />)
      expect(asFragment()).toMatchSnapshot()
   })
})