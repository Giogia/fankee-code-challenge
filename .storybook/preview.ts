import type { Preview } from "@storybook/react"

import { themes } from '@storybook/theming'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      grid: {
        disable: true
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
}

export default preview
