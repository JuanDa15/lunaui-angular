import { Meta, StoryObj } from "@storybook/angular";
import { LunaButtonComponent } from "./button.component";
import { within, expect, userEvent, fn, waitFor } from "@storybook/test";

interface Props extends LunaButtonComponent {
  mode: 'light' | 'dark'
}

const meta: Meta<Props> = {
  title: 'Components/Buttons/Button',
  component: LunaButtonComponent,
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: 'var(--background-dark)' },
        { name: 'light', value: 'var(--background-light)' },
      ]
    },
    docs: {
      description: {
        component: `
The LunaUI Button component is a versatile and highly customizable element designed to enhance the interactivity and accessibility of your user interfaces. Built with a focus on modern aesthetics and usability.

#### Installation

\`\`\`bash
npm i @lunaui/angular
\`\`\`

#### Usage

\`\`\`typescript
import { LunaButtonComponent } from '@lunaui/angular';

@component({
  selector: 'app-root',
  standalone: true,
  imports: [LunaButtonComponent],
})

\`\`\`

\`\`\`html
<luna-button
  [size]="'medium'"
  [disabled]="false"
  [variant]="'filled'"
  (onClick)="onClick($event)">
  Click Me
</luna-button>
\`\`\`

        `
      }
    }
  },
  argTypes: {
    mode: {
      name: 'Mode',
      options: ['light', 'dark'],
      control: { type: 'select' },
      description: 'The mode of the button',
      table: {
        defaultValue: { summary: 'dark' },
        category: 'Inputs'
      }
    },
    size: {
      name: 'Size',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'medium' },
        category: 'Inputs',
        type: {
          summary: 'small | medium | large'
        }
      }
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs',
        type: {
          summary: 'boolean'
        }
      },
    },
    variant: {
      name: 'Variant',
      options: ['filled', 'tonal', 'outlined', 'text', 'elevated'],
      control: "select",
      description: 'The variant of the button',
      table: {
        defaultValue: { summary: 'filled' },
        category: 'Inputs',
        type: {
          summary: 'filled | tonal | outlined | text | elevated'
        }
      }
    },
    value: {
      name: 'Value',
      control: 'text',
      description: 'The text to display in the button',
      table: {
        defaultValue: { summary: 'Try me !!' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    styles: {
      name: 'Styles',
      control: 'object',
      description: 'The styles to apply to the button',
      table: {
        defaultValue: { summary: '{}' },
        category: 'Inputs',
        type: {
          summary: 'Record<string, string>'
        }
      }
    },
    focus: {
      name: 'Focus',
      description: 'Emitted when the button is focused',
      table: {
        category: 'Events',
        type: {
          summary: 'EventEmitter<FocusEvent>'
        }
      }
    },
    blur: {
      name: 'Blur',
      description: 'Emitted when the button loses focus',
      table: {
        category: 'Events',
        type: {
          summary: 'EventEmitter<FocusEvent>'
        }
      }
    },
    onClick: {
      name: 'onClick',
      description: 'Emitted when the button is clicked',
      table: {
        category: 'Events',
        type: {
          summary: 'EventEmitter<Event>'
        }
      }
    }
  },
  args: {
    mode: 'dark',
    size: 'medium',
    disabled: false,
    variant: 'filled',
    value: 'Try me !!',
    styles: {},
    onClick: fn(),
    focus: fn(),
    blur: fn()
  },
  render: (args) => ({
    props: args,
    template: `
    <div
      [class.dark]="mode === 'dark'"
      [class.light]="mode === 'light'"
    >
      <luna-button
        [size]="size"
        [disabled]="disabled"
        [variant]="variant"
        [styles]="styles"
        (onClick)="onClick($event)"
        (focus)="focus($event)"
        (blur)="blur($event)"
      >
        {{value}}
      </luna-button>
    </div>
    `
  })

}

export default meta;

type Story = StoryObj<LunaButtonComponent>

export const Default: Story = {
  name: 'Default Button',
  args: {
    variant: 'filled',
    size: 'medium'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId('luna-button')
    const onClickFn = fn()
    button.onclick = onClickFn();

    await step('Click button', async () => {
      await userEvent.click(button);
    })
    await waitFor(() => {
      expect(button).toHaveFocus();
      expect(onClickFn).toHaveBeenCalled();
    });

    await step('Blur button', async () => {
      await userEvent.click(document.body);
    })
    await waitFor(() => expect(button).not.toHaveFocus());
  }
}
