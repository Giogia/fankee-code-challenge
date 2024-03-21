import { render } from '@testing-library/react'

import Home from './page'

describe('Home', () => {
   it('renders correctly', () => {
      const { asFragment } = render(<Home />)
      expect(asFragment()).toMatchSnapshot()
   })
})