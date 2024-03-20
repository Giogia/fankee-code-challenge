import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'
import { Type } from './Button.types'

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {},
  args: {
    ...Button.defaultProps,
    label: 'Button',
    onClick: fn()
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: Type.Primary,
  },
}

export const Neutral: Story = {
  args: {
    type: Type.Neutral,
  },
}