import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { LunaPasswordInputComponent } from "./password-input.component";
import { FormatterDirective, OnlyNumbersDirective, ToLowercaseDirective, ToUppercaseDirective } from "../../directives/public-api";

interface Props extends LunaPasswordInputComponent {
  mode: 'light' | 'dark'
}

const meta: Meta<Props> = {
  title: 'Components/Forms/Password Input',
  component: LunaPasswordInputComponent,
  decorators: [
    moduleMetadata({
      imports: [FormatterDirective, ToUppercaseDirective, ToLowercaseDirective, OnlyNumbersDirective]
    })
  ],
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
The LunaUI Password Input Component provides a secure and user-friendly way for users to enter and manage password data. Designed with accessibility and customization in mind, this component supports features like password visibility toggling, strength indicators, and validation messages. The component is adaptable to various styles and can seamlessly integrate with Angular forms, ensuring flexibility for both simple and complex form requirements.
        
        
#### Installation

\`\`\`bash
npm i @lunaui/angular
\`\`\`

#### Usage


\`\`\`typescript
import { LunaPasswordInputComponent } from '@lunaui/angular';

@component({
  selector: 'app-root',
  standalone: true,
  imports: [LunaPasswordInputComponent],
})

\`\`\`


\`\`\`html
<luna-password-input>
</luna-password-input>
\`\`\`
        `
      }
    }
  },
  args: {
    mode: 'light',
    label: 'Password*',
    size: 'medium',
    variant: 'outlined',
    error: false,
    disabled: false,
    placeholder: '',
    helperText: '',
    helperTextType: 'info',
    readonly: false,
    defaultValue: '',
    attrSize: 20,
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
    label: {
      name: 'label',
      control: 'text',
      description: 'The label of the input',
      table: {
        defaultValue: { summary: 'Try me !!' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    size: {
      name: 'size',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'The size of the input',
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
      options: ['filled', 'outlined', 'underlined'],
      control: { type: 'select' },
      description: 'The variant of the input',
      table: {
        defaultValue: { summary: 'filled' },
        category: 'Inputs',
        type: {
          summary: 'filled | outlined | underlined'
        }
      }
    },
    error: {
      name: 'error',
      control: 'boolean',
      description: 'The error state of the input',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs',
        type: {
          summary: 'boolean'
        }
      }
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
      description: 'The disabled attribute makes an input field or interactive element non-interactive. It prevents users from interacting with the element, submitting its data, or focusing on it. Disabled elements appear dimmed in most browsers to indicate they are inactive.',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs',
        type: {
          summary: 'boolean'
        }
      }
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: "The aria-label attribute provides an accessible name for an element, making it readable to screen readers. It’s useful for elements that don’t have visible labels, such as icons or buttons with only an icon, ensuring all users understand the element's purpose.",
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    ariaDescribedBy: {
      name: 'ariaDescribedBy',
      description: 'The aria-describedby attribute specifies the id of one or more elements that describe the input, enhancing accessibility by providing additional context for screen readers. It’s commonly used to link an input field to helper text or error messages, helping users understand the input’s purpose or requirements.',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    id: {
      name: 'id',
      description: 'The id attribute assigns a unique identifier to an HTML element. It’s used to target the element with CSS or JavaScript and to link labels to form elements, improving accessibility',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    placeholder: {
      name: 'placeholder',
      control: 'text',
      description: "The placeholder attribute provides hint text displayed inside the input field when it's empty, giving users an example or suggestion for what to enter.This text disappears when the user starts typing.",
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    helperText: {
      name: 'helperText',
      control: 'text',
      description: 'The helper text of the input',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    helperTextType: {
      name: 'helperTextType',
      options: ['info', 'error', 'success', 'warning'],
      control: { type: 'select' },
      description: 'The helper text type of the input',
      table: {
        defaultValue: { summary: 'info' },
        category: 'Inputs',
        type: {
          summary: 'info | error | success | warning'
        }
      }
    },
    name: {
      name: 'name',
      description: "The name attribute specifies a unique identifier for the form field when submitting form data. It acts as the key in the form data payload sent to the server, helping identify each input's value on the backend.",
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    minlength: {
      name: 'minlength',
      description: 'The minlength attribute sets the minimum number of characters required for a valid input in a text field. This helps ensure users enter enough characters before submitting the form.',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'number'
        }
      }
    },
    maxlength: {
      name: 'maxlength',
      description: 'The maxlength attribute sets the maximum number of characters that a user can enter in an input field. It is commonly used with text inputs to limit the length of the input.',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'number'
        }
      }
    },
    pattern: {
      name: 'pattern',
      description: 'The pattern attribute specifies a regular expression that the input value must match for it to be considered valid. This is commonly used for text inputs to enforce specific formats, like phone numbers or postal codes.',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    readonly: {
      name: 'readonly',
      description: 'The readonly attribute makes an input field non-editable while allowing the user to focus on it and select the text. Unlike disabled, a readonly input can still be submitted with form data.',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs',
        type: {
          summary: 'boolean'
        }
      }
    },
    defaultValue: {
      name: 'value',
      control: 'text',
      description: 'The value attribute sets the initial or default value of an input field. For input types like text, number, range, etc., it defines the pre-filled value displayed to the user. It can also dynamically update based on user input or scripts.',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    attrSize: {
      name: 'attrSize',
      control: 'number',
      description: 'The size of the input',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'number'
        }
      }
    },
    step: {
      name: 'step',
      description: 'The step attribute defines the incremental value for input types like number, range, date, or time. It controls the intervals allowed when adjusting the input value',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'number'
        }
      }
    },
    list: {
      name: 'list',
      description: 'The list attribute links an input to a <datalist> element, offering predefined options that users can select from or type to match, enhancing autocomplete functionality.',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    inputStyles: {
      name: 'inputStyles',
      description: 'The custom input styles of the input',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'Record<string, string>'
        }
      }
    },
    focus: {
      name: 'Focus',
      description: 'Emitted when the input is focused',
      table: {
        category: 'Events',
        type: {
          summary: 'EventEmitter<FocusEvent>'
        }
      }
    },
    blur: {
      name: 'Blur',
      description: 'Emitted when the input loses focus',
      table: {
        category: 'Events',
        type: {
          summary: 'EventEmitter<FocusEvent>'
        }
      }
    },
    input: {
      name: 'Input',
      description: 'Emitted when the input value changes',
      table: {
        category: 'Events',
        type: {
          summary: 'EventEmitter<Event>'
        }
      }
    },
    change: {
      name: 'Change',
      description: 'Emitted when the input value changes and the input loses focus',
      table: {
        category: 'Events',
        type: {
          summary: 'EventEmitter<Event>'
        }
      }
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <div 
        [class.dark]="mode === 'dark'"  
        [class.light]="mode === 'light'"
      >
        <luna-password-input
          [label]="label"
          [size]="size"
          [variant]="variant"
          [error]="error"
          [disabled]="disabled"
          [placeholder]="placeholder"
          [helperText]="helperText"
          [helperTextType]="helperTextType"
          [readonly]="readonly"
          [defaultValue]="defaultValue"
        ></luna-password-input>
      </div>
    `
  })
}

export default meta;

type Story = StoryObj<LunaPasswordInputComponent>;

export const Default: Story = {
  name: 'Default',
}

export const InputNoLable: Story = {
  name: 'Input without label',
  args: {
    label: '',
    placeholder: 'Enter your name'
  }
}
export const InputError: Story = {
  name: 'Input with error',
  args: {
    error: true,
  }
}
export const InputFilled: Story = {
  name: 'Input filled',
  args: {
    variant: 'filled',
  }
}
export const InputUnderline: Story = {
  name: 'Input outlined',
  args: {
    variant: 'underlined',
  }
}