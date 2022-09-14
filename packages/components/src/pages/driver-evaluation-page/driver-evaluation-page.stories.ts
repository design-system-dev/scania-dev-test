import { Story, Meta } from '@storybook/web-components';
import { Components } from '../../../dist/loader';
import { html } from 'lit-html';

export default {
    title: 'pages/driver-evaluation-page',
    parameters: {
        padding: '0rem',
    },
} as Meta;

const Template: Story<Components.DriverEvaluationPage> = () =>
    html`<driver-evaluation-page></driver-evaluation-page>`;

export const Standard = Template.bind({});
Standard.storyName = 'driver-evaluation-page';
