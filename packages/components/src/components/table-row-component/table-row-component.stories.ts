import { Story, Meta } from '@storybook/web-components';
import { Components } from '../../../loader';
import { html } from 'lit-html';

export default {
    title: 'table-row-component',
    decorators: [
        story =>
            html`<table>
                ${story()}
            </table>`,
    ],
} as Meta;

const Template: Story<Components.TableRowComponent> = ({ cells, isHeader }) =>
    html`<table-row-component
        .cells=${cells}
        .isHeader=${isHeader}
    /></table-row-component>`;

export const Standard = Template.bind({});
Standard.args = {
    cells: ['Foundations', 'Design Tokens', 'Components'],
};

export const Header = Template.bind({});
Header.args = {
    ...Standard.args,
    isHeader: true,
};
