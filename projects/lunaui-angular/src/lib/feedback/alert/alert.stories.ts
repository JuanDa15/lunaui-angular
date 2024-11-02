import { Meta, StoryObj } from "@storybook/angular";
import { LunaAlertComponent } from "./alert.component";
import { fn } from "@storybook/test";

interface Props extends LunaAlertComponent {
  content: string;
}

const meta: Meta<Props> = {
  title: 'Components/Feedback/Alert',
  component: LunaAlertComponent,
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'dark', value: 'var(--background-dark)' },
        { name: 'light', value: 'var(--background-light)' },
      ]
    },
    docs: {
      description: {
        component: `
The LunaUI Alert Component is designed to provide users with critical notifications and messages in an accessible and customizable way. Alerts are used to communicate important information, such as success, error, warnings, or informational messages. The component supports multiple styles, making it versatile and adaptable to different use cases.


#### Installation

\`\`\`bash
npm i @lunaui/angular
\`\`\`

#### Usage

\`\`\`typescript
import { LunaIconButtonComponent } from '@lunaui/angular';

@component({
  selector: 'app-root',
  standalone: true,
  imports: [LunaAlertComponent],
})

\`\`\`

\`\`\`html
<luna-alert>
  This is an alert
</luna-alert>
\`\`\`
        `
      }
    }
  },
  args: {
    content: 'This is an alert',
    alertStyle: 'box',
    dismissible: false,
    show: true,
    showIcon: false,
    size: 'medium',
    variant: 'info',
    dismissed: fn(),
    styles: {}
  },
  argTypes: {
    content: {
      name: 'Content',
      control: { type: 'text' },
      description: 'The content of the alert',
      table: {
        defaultValue: { summary: 'This is an alert' },
        category: 'Inputs'
      }
    },
    alertStyle: {
      name: 'Alert Style',
      control: { type: 'select' },
      description: 'The style of the alert, text or box',
      options: ['text', 'box'],
      table: {
        defaultValue: { summary: 'box' },
        category: 'Inputs'
      }
    },
    dismissible: {
      name: 'Dismissible',
      control: { type: 'boolean' },
      description: 'Whether the alert allows to be dismissible',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs'
      }
    },
    show: {
      name: 'Show alert',
      control: { type: 'boolean' },
      description: 'Whether the alert is visible',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs'
      }
    },
    showIcon: {
      name: 'Show Icon',
      control: { type: 'boolean' },
      description: 'Whether the alert shows an icon',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs'
      }
    },
    size: {
      name: 'Size',
      control: { type: 'select' },
      description: 'The size of the alert',
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'medium' },
        category: 'Inputs'
      }
    },
    variant: {
      name: 'Variant',
      control: { type: 'select' },
      description: 'The variant of the alert',
      options: ['info', 'success', 'warning', 'error'],
      table: {
        defaultValue: { summary: 'info' },
        category: 'Inputs'
      }
    },
    role: {
      name: 'Role',
      description: 'The role attribute defines the purpose of an element, helping assistive technologies understand its function (e.g., button, navigation).',
      defaultValue: 'alert',
      table: {
        defaultValue: { summary: 'alert' },
        category: 'Inputs'
      }
    },
    className: {
      name: 'Class Name',
      description: 'Additional CSS classes to add to the alert',
      table: {
        category: 'Inputs'
      }
    },
    styles: {
      name: 'Styles',
      control: { type: 'object' },
      description: 'Additional inline styles to add to the alert',
      table: {
        category: 'Inputs'
      }
    },
    dismissed: {
      name: 'Dismissed',
      description: 'Event emitted when the alert is dismissed',
      table: {
        category: 'Outputs'
      }
    }
  },
  render: (args) => ({
    props: args,
    template: `
      <luna-alert
        [alertStyle]="alertStyle"
        [dismissible]="dismissible"
        [show]="show"
        [showIcon]="showIcon"
        [size]="size"
        [variant]="variant"
        [styles]="styles"
        (dismissed)="dismissed()"
      >
        {{ content }}
      </luna-alert>
    `,
  })
}

export default meta;

type Story = StoryObj<LunaAlertComponent>;

export const Default: Story = {
  name: 'Default Alert',
}

export const Dismissible: Story = {
  name: 'Dismissible Alert',
  args: {
    dismissible: true
  }
}

export const WithIcon: Story = {
  name: 'Alert with icon',
  args: {
    showIcon: true
  }
}

export const Warning: Story = {
  name: 'Warning Alert',
  args: {
    variant: 'warning'
  }
}
export const Error: Story = {
  name: 'Error Alert',
  args: {
    variant: 'error'
  }
}
export const Success: Story = {
  name: 'Success Alert',
  args: {
    variant: 'success'
  }
}
