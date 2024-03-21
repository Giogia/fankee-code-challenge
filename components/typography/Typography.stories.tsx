import type { Meta, StoryObj } from '@storybook/react'

import { expect, within } from '@storybook/test'

import { Typography } from './Typography'

const { Color, Hierarchy } = Typography

const meta = {
   title: 'Typography',
   component: Typography,
   argTypes: {},
   args: {
      ...Typography.defaultProps,
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
      expect(canvas.getByRole('heading', { name: args.text })).toBeVisible()
   },
}

export const H2: Story = {
   args: {
      hierarchy: Hierarchy.H2,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      expect(canvas.getByRole('heading', { name: args.text })).toBeVisible()
   },
}

export const H3: Story = {
   args: {
      hierarchy: Hierarchy.H3,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      expect(canvas.getByRole('heading', { name: args.text })).toBeVisible()
   },
}

export const BodyL: Story = {
   args: {
      hierarchy: Hierarchy.BodyL,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      expect(canvas.getByText(args.text)).toBeVisible()
   },
}

export const BodyM: Story = {
   args: {
      hierarchy: Hierarchy.BodyM,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      expect(canvas.getByText(args.text)).toBeVisible()
   },
}

export const BodyS: Story = {
   args: {
      hierarchy: Hierarchy.BodyS,
   },
   play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement)
      expect(canvas.getByText(args.text)).toBeVisible()
   },
}