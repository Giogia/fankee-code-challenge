import { render } from '@testing-library/react'

import Home from './page'

jest.mock('react', () => ({
   ...jest.requireActual('react'),
   use: jest.fn()
      .mockReturnValueOnce({ data: { user: null } })
      .mockReturnValueOnce({ data: { user: { email: 'mail@user.com' } } }),
}))

jest.mock('../utils/supabase/server', () => ({
   createClient: jest.fn().mockReturnValue({ auth: { getUser: jest.fn() } })
}))

describe('Home', () => {
   it('renders correctly', () => {
      const { asFragment } = render(<Home />)
      expect(asFragment()).toMatchSnapshot()
   })

   it('renders correctly when user is logged in', () => {
      const { asFragment } = render(<Home />)
      expect(asFragment()).toMatchSnapshot()
   })
})