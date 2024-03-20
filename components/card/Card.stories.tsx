import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'

import { Card } from './Card'
import { Typography } from '../typography/Typography'

const { H3, BodyL, BodyS } = Typography.Hierarchy

const meta = {
  title: 'Card',
  component: Card,
  argTypes: {
    header: { control: { disable: true } },
    body: { control: { disable: true } },
    actions: { control: { disable: true } },
  },
  args: {
    header: <Typography hierarchy={H3} text={'Header'} />,
    body: <Typography hierarchy={BodyL} text={'Body'} />,
    actions: <Typography hierarchy={BodyS} text={'Actions'} />,
  }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    expect(canvas.getByTestId('card')).toBeVisible()

    expect(canvas.getByText('Header')).toBeVisible()
    expect(canvas.getByText('Body')).toBeVisible()
    expect(canvas.getByText('Actions')).toBeVisible()
  },
}