import type { Meta, StoryObj } from '@storybook/react'

import { expect, fn, userEvent, within, waitFor } from '@storybook/test'

import { Button } from './Button'

const { Type } = Button

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
type Story = StoryObj<typeof meta>

export const Primary: Story = {
   args: {
      type: Type.Primary,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)

      const button = canvas.getByRole('button', {name: args.label})
      expect(button).toBeVisible()

      await userEvent.click(button)
      await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(1))
   },
}

export const Neutral: Story = {
   args: {
      type: Type.Neutral,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)

      const button = canvas.getByRole('button', {name: args.label})
      expect(button).toBeVisible()

      await userEvent.click(button)
      await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(1))
   },
}