import { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  title: 'Buttons/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
}

export default meta;

type Story = StoryObj<ButtonComponent>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}

