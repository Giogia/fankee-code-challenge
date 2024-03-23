import { render } from '@testing-library/react'

jest.mock('react-dom', () => ({
   ...jest.requireActual('react-dom'),
   useFormState: jest.fn().mockReturnValue([{ message: '' }, jest.fn()]),
   useFormStatus: jest.fn().mockReturnValue({ pending: false, action: jest.fn() })
}))

import User from './page'

describe('User', () => {
   it('renders correctly', () => {
      const { asFragment } = render(<User />)
      expect(asFragment()).toMatchSnapshot()
   })
})