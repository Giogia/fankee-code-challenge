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

   it('renders correctly on mobile', () => {
      Object.defineProperty(window, 'matchMedia', {
         writable: true,
         value: (query: string) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
         }),
      })

      const { asFragment } = render(<Login />)
      expect(asFragment()).toMatchSnapshot()
   })
})