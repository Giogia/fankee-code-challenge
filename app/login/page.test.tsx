import { render } from '@testing-library/react'

import Login from './page'

describe('Login', () => {
   it('renders correctly', () => {
      const { asFragment } = render(<Login />)
      expect(asFragment()).toMatchSnapshot()
   })
})