import type { Meta, StoryObj } from '@storybook/react'

import { expect, waitFor, within } from '@storybook/test'

import { Typography } from './Typography'

const { Color, Hierarchy } = Typography

const meta = {
   title: 'Typography',
   component: Typography,
   argTypes: {},
   args: {
      color: Color.White,
      text: 'Text',
   }
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>;

export const H1: Story = {
   args: {
      hierarchy: Hierarchy.H1,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      await waitFor(() => expect(canvas.getByRole('heading', { name: args.text })).toBeVisible())
   },
}

export const H2: Story = {
   args: {
      hierarchy: Hierarchy.H2,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      await waitFor(() => expect(canvas.getByRole('heading', { name: args.text })).toBeVisible())
   },
}

export const H3: Story = {
   args: {
      hierarchy: Hierarchy.H3,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      await waitFor(() => expect(canvas.getByRole('heading', { name: args.text })).toBeVisible())
   },
}

export const BodyL: Story = {
   args: {
      hierarchy: Hierarchy.BodyL,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      await waitFor(() => expect(canvas.getByText(args.text)).toBeVisible())
   },
}

export const BodyM: Story = {
   args: {
      hierarchy: Hierarchy.BodyM,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      await waitFor(() => expect(canvas.getByText(args.text)).toBeVisible())
   },
}

export const BodyS: Story = {
   args: {
      hierarchy: Hierarchy.BodyS,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      await waitFor(() => expect(canvas.getByText(args.text)).toBeVisible())
   },
}

export const Error: Story = {
   args: {
      color: Color.Red,
      hierarchy: Hierarchy.BodyS,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      const text = canvas.getByText(args.text)
      
      await waitFor(() => expect(text).toBeVisible())

      expect(text).toHaveStyle({color: 'rgb(239, 68, 68)'})
   },
}