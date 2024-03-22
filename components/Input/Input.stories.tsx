import type { Meta, StoryObj } from '@storybook/react'

import { expect, fn, userEvent, within, waitFor } from '@storybook/test'

import { Input } from './Input'

const { Type } = Input

const meta = {
   title: 'Input',
   component: Input,
   argTypes: {},
   args: {
      onChange: fn()
   }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
   args: {
      type: Type.Text,
      placeholder: 'Insert text'
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)

      const input = canvas.getByRole('textbox')
      await waitFor(() => expect(input).toBeVisible())
      expect(input).toHaveAttribute('placeholder', args.placeholder)

      const userInput = 'test'

      await userEvent.type(input, userInput)
      await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(userInput.length))
   },
}

export const Email: Story = {
   args: {
      type: Type.Email,
      placeholder: 'Insert email'
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)

      const input = canvas.getByRole('textbox')
      await waitFor(() => expect(input).toBeVisible())
      expect(input).toHaveAttribute('placeholder', args.placeholder)

      const userInput = 'test@mail.com'

      await userEvent.type(input, userInput)
      await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(userInput.length))
   },
}