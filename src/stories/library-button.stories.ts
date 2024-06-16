import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from 'ngx-troy-ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
    title: 'Library/Button',
    component: ButtonComponent,
    tags: ['autodocs'],
    render: (args) => {
        return {
            props: args,
            template: `
      <troy-button
      ${args.upperCase === true ? '[upperCase]=' + args.upperCase : ''}
      ${args.color !== 'default' && args.color !== undefined ? '[color]="\'' + args.color + '\'"' : ''}
      ${args.size !== 'medium' && args.size !== undefined ? '[size]="\'' + args.size + '\'"' : ''}
      ${args.fill !== 'solid' && args.fill !== undefined ? '[fill]="\'' + args.fill + '\'"' : ''}
      ${args.disabled === true ? '[disabled]=' + args.disabled : ''}
      ${args.maxWidth !== undefined ? '[maxWidth]=' + args.maxWidth : ''}
      ${args.minWidth !== undefined ? '[maxWidth]=' + args.minWidth : ''}
      ${args.customBGColor === undefined ? '' : '[customBGColor]="\'' + args.customBGColor + '\'"'}
      ${args.customColor === undefined ? '' : '[customColor]="\'' + args.customColor + '\'"'}
      ${args.customBorderColor === undefined ? '' : '[customBorderColor]="\'' + args.customBorderColor + '\'"'}
      (click)="onClick($event)">
      ${args.label}
      </troy-button>
    `,
        };
    },
    argTypes: {
        color: {
            options: ['default', 'success', 'warning', 'error', 'disabled'],
            control: { type: 'select' },
        },
        fill: {
            options: ['solid', 'outline', 'clear'],
            control: { type: 'select' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        upperCase: {
            control: { type: 'boolean' },
        },
        minWidth: {
            control: { type: 'number' },
        },
        maxWidth: {
            control: { type: 'number' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        customBGColor: {
            control: { type: 'color' },
        },
        customColor: {
            control: { type: 'color' },
        },
        customBorderColor: {
            control: { type: 'color' },
        },
        // label: {
        //   control: 'Button'
        // }
    },
    args: {
        label: 'Button',
        // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
        onClick: fn(),
    }
};





export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {

    },
};


export const Color_Default: Story = {
    args: {
        color: 'default',
    },
};
export const Color_Success: Story = {
    args: {
        color: 'success',
    },
};
export const Color_Warning: Story = {
    args: {
        color: 'warning',
    },
};
export const Color_Error: Story = {
    args: {
        color: 'error',
    },
};

export const Outline_Default: Story = {
    args: {
        color: 'default',
        fill: 'outline',
    },
};
export const Outline_Success: Story = {
    args: {
        color: 'success',
        fill: 'outline',
    },
};
export const Outline_Warning: Story = {
    args: {
        color: 'warning',
        fill: 'outline',
    },
};
export const Outline_Error: Story = {
    args: {
        color: 'error',
        fill: 'outline',
    },
};
export const Clear_Default: Story = {
    args: {
        color: 'default',
        fill: 'clear',
    },
};
export const Clear_Success: Story = {
    args: {
        color: 'success',
        fill: 'clear',
    },
};
export const Clear_Warning: Story = {
    args: {
        color: 'warning',
        fill: 'clear',
    },
};
export const Clear_Error: Story = {
    args: {
        color: 'error',
        fill: 'clear',
    },
};




export const Small: Story = {
    args: {
        size: 'small',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
    },
};

export const uppercase: Story = {
    args: {
        upperCase: true,
    },
};

export const disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Color_Text_Custom: Story = {
    args: {
        fill: 'outline',
        customColor: '#7cd6d1',
    },
};

export const Color_Background_Custom: Story = {
    args: {
        customBGColor: '#ca42e6',
    },
};

export const Color_Border_Custom: Story = {
    args: {
        fill: 'outline',
        customBorderColor: '#00e677',
    },
};