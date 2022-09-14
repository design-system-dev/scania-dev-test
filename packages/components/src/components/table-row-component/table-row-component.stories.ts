import { Story, Meta } from '@storybook/web-components';
import { Components } from '../../../dist/loader';
import { html } from 'lit-html';

export default {
    title: 'components/table-row-component',
    argTypes: {
        size: { control: { type: 'select', options: ['shrink', 'full'] } },
    },
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

export const SizeShrink = Template.bind({});
SizeShrink.args = {
    ...Standard.args,
    size: 'shrink',
};

export const SizeFull = Template.bind({});
SizeFull.args = {
    ...Standard.args,
    size: 'full',
};
