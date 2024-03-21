import { render } from '@testing-library/react'

import Login from './login/page'

describe('Home', () => {
   it('renders correctly', () => {
      const { asFragment } = render(<Login />)
      expect(asFragment()).toMatchSnapshot()
   })
})