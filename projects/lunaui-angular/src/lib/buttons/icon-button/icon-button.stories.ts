import { Meta, StoryObj } from "@storybook/angular";
import { LunaIconButtonComponent } from "./icon-button.component";
import { within, expect, userEvent, fn, waitFor } from "@storybook/test";

interface Props extends LunaIconButtonComponent {
  mode: 'light' | 'dark'
}

const meta: Meta<Props> = {
  title: 'Components/Buttons/Icon Button',
  component: LunaIconButtonComponent,
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
The LunaUI Button Icon component is designed to provide a streamlined, icon-only button for enhanced UI interactions. Whether used for compact actions, toolbars, or key visual elements, this component brings flexibility and modern design to your interfaces.

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
  imports: [LunaIconButtonComponent],
})

\`\`\`

\`\`\`html
<luna-icon-button>
    <svg
      #icon fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="currentColor"
    >
      <path
        stroke-linecap="round" stroke-linejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
</luna-icon-button>
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
      name: 'size',
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
    variant: {
      name: 'variant',
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
    disabled: {
      name: 'disabled',
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
    styles: {
      name: 'styles',
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
    ariaLabel: {
      name: 'ariaLabel',
      description: 'The aria label of the button',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    ariaLive: {
      name: 'ariaLive',
      description: 'The aria live of the button',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'off | polite | assertive | '
        }
      }
    },
    ariaDescribedBy: {
      name: 'ariaDescribedBy',
      description: 'The aria described by of the button',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    type: {
      name: 'type',
      description: 'The type of the button',
      table: {
        defaultValue: { summary: 'button' },
        category: 'Inputs',
        type: {
          summary: 'button | submit | reset'
        }
      }
    },
    form: {
      name: 'form',
      description: 'The form id linked with this button',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    name: {
      name: 'name',
      description: 'The name of the button',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    popovertarget: {
      name: 'popovertarget',
      description: 'The popover target of the button',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    popovertargetaction: {
      name: 'popovertargetaction',
      description: 'The popover target action of the button',
      table: {
        defaultValue: { summary: 'null' },
        category: 'Inputs',
        type: {
          summary: 'hide | show | toggle | null'
        }
      }
    },
    className: {
      name: 'className',
      description: 'The class name of the button',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
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
        <luna-icon-button
          [size]="size"
          [disabled]="disabled"
          [variant]="variant"
          [styles]="styles"
          (onClick)="onClick($event)"
          (focus)="focus($event)"
          (blur)="blur($event)"
        >
          <svg
            #icon
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </luna-icon-button>
      </div>
    `
  })
}

export default meta;

type Story = StoryObj<LunaIconButtonComponent>;

export const Default: Story = {
  name: 'Default Button',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId('luna-icon-button')
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
