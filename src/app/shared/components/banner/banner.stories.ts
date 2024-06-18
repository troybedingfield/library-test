import { Meta, applicationConfig, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { BannerComponentLocal } from './banner.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BannerComponentLocal> = {
    title: 'Local/Banner',
    component: BannerComponentLocal,
    tags: ['autodocs'],
    decorators: [
        // Apply application config to all stories
        applicationConfig({
            // List of providers and environment providers that should be available to the root component and all its children.
            providers: [

                // Import application-wide providers from a module
                importProvidersFrom(BrowserAnimationsModule),
                // Or use provide-style functions if available instead, e.g.
                provideAnimations(),
            ],
        }),
    ],
    argTypes: {
    },
    args: {
        primaryText: 'This is a banner'
    }
};





export default meta;
type Story = StoryObj<BannerComponentLocal>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary_Single_Message: Story = {
    args: {

    },
};

export const Primary_Detailed_Message: Story = {
    args: {
        detailedMessages: ['Item 1', 'Item 2', 'Item 3']
    },
};

export const Single_Message_No_Close_Button: Story = {
    args: {
        showClose: false
    },
};


export const Primary_Detailed_Message_No_Close_Button: Story = {
    args: {
        showClose: false,
        detailedMessages: ['Item 1', 'Item 2', 'Item 3']
    },
};


export const Single_Message_Color_Info: Story = {
    args: {
        color: 'info'
    },
};

export const Detailed_Message_Color_Info: Story = {
    args: {
        color: 'info',
        detailedMessages: ['Item 1', 'Item 2', 'Item 3']
    },
};


export const Single_Message_Color_Success: Story = {
    args: {
        color: 'success'
    },
};

export const Detailed_Message_Color_Success: Story = {
    args: {
        color: 'success',
        detailedMessages: ['Item 1', 'Item 2', 'Item 3']
    },
};

export const Single_Message_Color_Warning: Story = {
    args: {
        color: 'warning'
    },
};

export const Detailed_Message_Color_Warning: Story = {
    args: {
        color: 'warning',
        detailedMessages: ['Item 1', 'Item 2', 'Item 3']
    },
};

export const Single_Message_Color_Error: Story = {
    args: {
        color: 'error'
    },
};

export const Detailed_Message_Color_Error: Story = {
    args: {
        color: 'error',
        detailedMessages: ['Item 1', 'Item 2', 'Item 3']
    },
};

export const Detailed_Message_Collapsed: Story = {
    args: {
        isExpanded: false,
        detailedMessages: ['Item 1', 'Item 2', 'Item 3']
    },
};