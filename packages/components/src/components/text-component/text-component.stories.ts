import { Story, Meta } from '@storybook/web-components';
import { Components } from '../../../loader';
import { html } from 'lit-html';

export default {
    title: 'text-component',
    argTypes: {
        size: {
            control: { type: 'select', options: ['s', 'm', 'l'] },
        },
        theme: {
            control: { type: 'select', options: ['dark', 'light'] },
        },
        appearance: {
            control: {
                type: 'select',
                options: ['title', 'paragraph', 'link'],
            },
        },
    },
} as Meta;

interface Args extends Components.TextComponent {
    message: string;
}

const Template: Story<Args> = ({ theme, size, appearance, tag, message }) =>
    html`<text-component
        .size=${size}
        .theme=${theme}
        .appearance=${appearance}
        .tag=${tag}
    />
        ${message}
    </text-component>`;

export const Standard = Template.bind({});
Standard.args = {
    message: 'Tegel Design System',
};

export const SizeS = Template.bind({});
SizeS.args = {
    ...Standard.args,
    size: 's',
};

export const SizeM = Template.bind({});
SizeM.args = {
    ...Standard.args,
    size: 'm',
};

export const SizeL = Template.bind({});
SizeL.args = {
    ...Standard.args,
    size: 'l',
};

export const AppearanceTitle = Template.bind({});
AppearanceTitle.args = {
    ...Standard.args,
    appearance: 'title',
};

export const AppearanceParagraph = Template.bind({});
AppearanceParagraph.args = {
    ...Standard.args,
    appearance: 'paragraph',
};

export const AppearanceLink = Template.bind({});
AppearanceLink.args = {
    ...Standard.args,
    appearance: 'link',
};

export const LightAppearanceTitle = Template.bind({});
LightAppearanceTitle.args = {
    ...AppearanceTitle.args,
    theme: 'light',
};
LightAppearanceTitle.parameters = {
    theme: 'dark',
};

export const LightAppearanceParagraph = Template.bind({});
LightAppearanceParagraph.args = {
    ...AppearanceParagraph.args,
    theme: 'light',
};
LightAppearanceParagraph.parameters = LightAppearanceTitle.parameters;

export const LightAppearanceLink = Template.bind({});
LightAppearanceLink.args = {
    ...AppearanceLink.args,
    theme: 'light',
};
LightAppearanceLink.parameters = LightAppearanceTitle.parameters;
