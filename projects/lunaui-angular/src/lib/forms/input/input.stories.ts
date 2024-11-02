import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { LunaInputComponent } from "./input.component";
import { FormatterDirective, OnlyNumbersDirective, ToLowercaseDirective, ToUppercaseDirective } from "../../directives/public-api";

interface Props extends LunaInputComponent {
  mode: 'light' | 'dark'
}

const meta: Meta<Props> = {
  title: 'Components/Forms/Input',
  component: LunaInputComponent,
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
The LunaUI Input Component provides a highly customizable, accessible, and responsive input field designed for various user interactions. Built with flexibility in mind, this component offers support for multiple input styles—such as filled, outlined, and underlined—to suit different design needs. The component accommodates essential form states, including default, focused, hover, active, disabled, and error, allowing developers to create polished and user-friendly interfaces.

The LunaUI Input Component is fully compatible with Angular Reactive Forms, making integration seamless for complex form handling. It includes a robust set of accessibility features, including ARIA support, clear focus indicators, and compatibility with screen readers, ensuring an inclusive experience for all users. With customizable helper texts, error messages, placeholder support, and optional icons, this component provides an efficient, comprehensive solution for input needs across a wide range of applications.

#### Installation

\`\`\`bash
npm i @lunaui/angular
\`\`\`

#### Usage


\`\`\`typescript
import { LunaInputComponent } from '@lunaui/angular';

@component({
  selector: 'app-root',
  standalone: true,
  imports: [LunaInputComponent],
})

\`\`\`

\`\`\`html
<luna-input>
</luna-input>
\`\`\`
        `
      }
    }
  },
  args: {
    mode: 'light',
    label: 'Test label',
    size: 'medium',
    variant: 'outlined',
    error: false,
    disabled: false,
    placeholder: '',
    helperText: '',
    helperTextType: 'info',
    defaultValue: '',
    attrSize: 20,
    allowWhiteSpaces: true,
    transformToUppercase: false,
    transformToLowercase: false,
    numbersOnly: false,
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
    type: {
      name: 'type',
      description: "The type attribute specifies the input field's data type and behavior, such as text, number, email, password, date, etc. Each type controls how the input displays and restricts the data format it accepts.",
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
    min: {
      name: 'min',
      description: 'The min attribute sets the minimum allowable value for input types like number, date, or range. It prevents users from entering a value lower than the specified minimum.',
      table: {
        defaultValue: { summary: '' },
        category: 'Inputs',
        type: {
          summary: 'number'
        }
      }
    },
    max: {
      name: 'max',
      description: 'The max attribute sets the maximum allowable value for input types like number, date, or range. It prevents users from entering a value higher than the specified maximum.',
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
    allowWhiteSpaces: {
      name: 'allowWhiteSpaces',
      control: 'boolean',
      description: 'The allowWhiteSpaces attribute allows or disallows whitespace characters in the input value.',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs',
        type: {
          summary: 'boolean'
        }
      }
    },
    transformToUppercase: {
      name: 'transformToUppercase',
      control: 'boolean',
      description: 'The transformToUppercase attribute transforms the input value to uppercase characters.',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs',
        type: {
          summary: 'boolean'
        }
      }
    },
    transformToLowercase: {
      name: 'transformToLowercase',
      control: 'boolean',
      description: 'The transformToLowercase attribute transforms the input value to lowercase characters.',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs',
        type: {
          summary: 'boolean'
        }
      }
    },
    numbersOnly: {
      name: 'numbersOnly',
      control: 'boolean',
      description: 'The numbersOnly attribute restricts the input to numeric values only.',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Inputs',
        type: {
          summary: 'boolean'
        }
      }
    },
    format: {
      name: 'format',
      description: 'The format attribute formats the input value according to a specified pattern or mask',
      table: {
        defaultValue: { summary: 'null' },
        category: 'Inputs',
        type: {
          summary: 'phone | currency | creditCard | null'
        }
      }
    },
    formatEventHandler: {
      name: 'formatEventHandler',
      description: 'The formatEventHandler attribute is a function that handles the formatting of the input value based on the specified format.',
      table: {
        defaultValue: { summary: 'input' },
        category: 'Inputs',
        type: {
          summary: 'input | change'
        }
      }
    },
    formatCurrency: {
      name: 'formatCurrency',
      description: 'The formatCurrency attribute specifies the currency code for currency formatting.',
      table: {
        defaultValue: { summary: 'USD' },
        category: 'Inputs',
        type: {
          summary: 'string'
        }
      }
    },
    formatDecimals: {
      name: 'formatDecimals',
      description: 'The formatDecimals attribute specifies the number of decimal places for currency formatting.',
      table: {
        defaultValue: { summary: '2' },
        category: 'Inputs',
        type: {
          summary: 'number'
        }
      }
    },
    formatCurrencyDisplay: {
      name: 'formatCurrencyDisplay',
      description: 'The formatCurrencyDisplay attribute specifies how the currency should be displayed (symbol, code, or name).',
      table: {
        defaultValue: { summary: 'symbol' },
        category: 'Inputs',
        type: {
          summary: 'symbol | code | name | narrowSymbol'
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
        <luna-input
          [label]="label"
          [size]="size"
          [variant]="variant"
          [error]="error"
          [disabled]="disabled"
          [placeholder]="placeholder"
          [helperText]="helperText"
          [defaultValue]="defaultValue"
          [attrSize]="attrSize"
          [allowWhiteSpaces]="allowWhiteSpaces"
          [transformToUppercase]="transformToUppercase"
          [transformToLowercase]="transformToLowercase"
          [numbersOnly]="numbersOnly"
        />
      </div>
    `
  })
}

export default meta;

type Story = StoryObj<LunaInputComponent>;

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
