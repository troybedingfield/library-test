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
export const Primary: Story = {
    args: {

    },
};

export const Detailed_Msssage: Story = {
    args: {
        detailMessages: ['Item 1', 'Item 2', 'Item 3']
    },
};

export const Color_Info: Story = {

};

