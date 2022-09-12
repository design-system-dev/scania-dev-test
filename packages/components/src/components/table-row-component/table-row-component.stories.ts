import { Story, Meta } from '@storybook/web-components';
import { Components } from '../../../loader';
import { html } from 'lit-html';

export default {
    title: 'table-row-component',
    decorators: [
        story =>
            html`<table style="width: 100%;">
                ${story()}
            </table>`,
    ],
} as Meta;

const Template: Story<Components.TableRowComponent> = ({
    cells,
    isHeader,
    size,
}) =>
    html`<table-row-component
        .cells=${cells}
        .isHeader=${isHeader}
        .size=${size}
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

export const SizeFixedCells = Template.bind({});
SizeFixedCells.args = {
    ...Standard.args,
    size: 'fixed-cells',
};

export const SizeFull = Template.bind({});
SizeFull.args = {
    ...Standard.args,
    size: 'full',
};