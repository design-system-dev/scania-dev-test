import { Story, Meta } from '@storybook/web-components';
import { Components } from '../../../loader';
import { html } from 'lit-html';

export default {
    title: 'Example/MyComponent',
} as Meta;

const Template: Story<Components.MyComponent> = args =>
    html`<my-component
        first=${args.first}
        middle=${args.middle}
        last=${args.last}
    /></my-component>`;

export const Primary = Template.bind({});
Primary.args = {
    first: 'Bob',
    middle: 'Simon',
    last: 'Mueller',
};
