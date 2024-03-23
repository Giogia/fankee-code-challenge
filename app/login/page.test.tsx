import { render } from '@testing-library/react'

jest.mock('react-dom', () => ({
   ...jest.requireActual('react-dom'),
   useFormState: jest.fn().mockReturnValue([{ message: '' }, jest.fn()]),
   useFormStatus: jest.fn().mockReturnValue({ pending: false, action: jest.fn() })
}))

import Login from './page'

describe('Login', () => {
   it('renders correctly', () => {
      const { asFragment } = render(<Login />)
      expect(asFragment()).toMatchSnapshot()
   })
})