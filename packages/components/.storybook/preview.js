import { defineCustomElements } from '../dist/loader';
import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';

import '../../design-tokens/dist/tokens.css';

// load web components
defineCustomElements();

export const parameters = {
    theme: 'light',
    options: {
        storySort: {
            order: [
                'pages',
                'components',
                [
                    'text-component',
                    'dropdown-component',
                    'table-row-component',
                    'table-component',
                ],
            ],
        },
    },
};

const paddingDecorator = story =>
    html`<div style="padding: 1rem;">${story()}</div>`;

const themeDecorator = (story, context) => html` <div
    style=${styleMap({
        background:
            context?.parameters?.theme === 'dark' ? 'black' : 'transparent',
        minHeight: '100vh',
    })}
>
    ${story()}
</div>`;

export const decorators = [paddingDecorator, themeDecorator];
