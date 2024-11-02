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
<luna-button>
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
      description: 'The disabled attribute makes an element (like a button, input, or select) inactive, preventing user interaction and excluding it from form submission.',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs',
        type: {
          summary: 'boolean'
        }
      },
    },
    value: {
      name: 'value',
      control: 'text',
      description: 'The value attribute specifies the initial data or content of an element, commonly used in form elements like <button>.',
      table: {
        defaultValue: { summary: 'Try me !!' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
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
      description: 'The aria-label attribute provides an accessible name for an element, allowing screen readers to describe it when there’s no visible label.',
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
      description: 'The aria-live attribute announces dynamic content changes to screen readers, specifying the priority level (off, polite, or assertive) to control how updates are conveyed to users.',
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
      description: 'The aria-describedby attribute links an element to another element that provides additional descriptive information, helping screen readers announce supplementary context or guidance.',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    type: {
      name: 'Type',
      description: 'The type attribute specifies the type of an element, commonly used in <button> (e.g., submit, reset) to define its behavior and format.',
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
      description: 'The form attribute associates an element (like <input>, <button>) with a specific <form> by its id, allowing the element to be part of the form even if it’s located outside of it.',
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
      description: 'The name attribute assigns an identifier to form elements (like <input>, <select>, <textarea>) for server-side data submission, allowing data to be referenced by this name when the form is submitted.',
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
      description: 'The popovertarget attribute specifies the id of an element that should be displayed as a popover, linking the triggering element to the popover content for display on interaction.',
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
      description: 'The popovertargetaction attribute defines the action that triggers the popover linked by popovertarget (e.g., show, hide, toggle), controlling how and when the popover appears.',
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
      description: 'The class name for the button',
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
