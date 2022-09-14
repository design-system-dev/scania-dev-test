import { Story, Meta } from '@storybook/web-components';
import { Components } from '../../../dist/loader';
import { html } from 'lit-html';

export default {
    title: 'components/dropdown-component',
} as Meta;

const Template: Story<Components.DropdownComponent> = ({ options, heading }) =>
    html`<dropdown-component
        .options=${options}
        .heading=${heading}
    /></table-component>`;

export const Standard = Template.bind({});
Standard.args = {
    options: [
        { label: 'Tegel', value: 'scania' },
        { label: 'Lightning', value: 'salesforce' },
        { label: 'Carbon', value: 'ibm' },
    ],
};

export const CustomHeading = Template.bind({});
CustomHeading.args = {
    ...Standard.args,
    heading: 'Best Design System',
};
