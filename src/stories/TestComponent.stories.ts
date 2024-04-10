import type { Meta, StoryObj } from '@storybook/react';
import TestComponent from '../components/TestComponent/index';

const meta: Meta<typeof TestComponent> = {
  component: TestComponent,
};

export default meta;
type Story = StoryObj<typeof TestComponent>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};