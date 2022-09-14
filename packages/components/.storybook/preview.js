import { defineCustomElements } from '../dist/loader';
import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';

import '../../design-tokens/dist/tokens.css';

// load web components
defineCustomElements();

export const parameters = {
    theme: 'light',
    padding: '1rem',
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

const paddingDecorator = (story, context) =>
    html`<div style="padding: ${context?.parameters?.padding || 0} ;">
        ${story()}
    </div>`;

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
