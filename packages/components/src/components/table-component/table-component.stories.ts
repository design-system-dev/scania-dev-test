import { Story, Meta } from '@storybook/web-components';
import { Components } from '../../../dist/loader';
import { html } from 'lit-html';

export default {
    title: 'components/table-component',
} as Meta;

const Template: Story<Components.TableComponent> = ({
    headerRow,
    rows,
    size,
    emptyMessage,
}) =>
    html`<table-component
        .headerRow=${headerRow}
        .rows=${rows}
        .size=${size}
        .emptyMessage=${emptyMessage}
    /></table-component>`;

export const Standard = Template.bind({});
Standard.args = {
    headerRow: ['Name', 'Position', 'Age'],
    rows: [
        ['Jenny', 'Frontend Developer', '27'],
        ['Max', 'Designer', '31'],
        ['Rasmus', 'Product Owner', '29'],
    ],
};

export const SizeFull = Template.bind({});
SizeFull.args = {
    ...Standard.args,
    size: 'full',
};

export const SizeShrink = Template.bind({});
SizeShrink.args = {
    ...Standard.args,
    size: 'shrink',
};

export const Mobile = Template.bind({});
Mobile.args = Standard.args;
Mobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};

export const Empty = Template.bind({});
Empty.args = {
    ...Standard.args,
    rows: undefined,
};

export const EmptyWithCustomMessage = Template.bind({});
EmptyWithCustomMessage.args = {
    ...Empty.args,
    emptyMessage: 'Failed to load data.',
};
