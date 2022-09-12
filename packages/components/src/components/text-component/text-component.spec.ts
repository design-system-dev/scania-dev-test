import { newSpecPage } from '@stencil/core/testing';
import { TextComponent } from './text-component';

describe('text-component', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TextComponent],
            html: '<text-component>Hello, World!</text-component>',
        });

        expect(root).toEqualHtml(`
          <text-component>
            <p class="theme-dark style-paragraph size-m">
              Hello, World!
            </p>
          </text-component>
        `);
    });

    it('can render different tags', async () => {
        const { root } = await newSpecPage({
            components: [TextComponent],
            html: '<text-component tag="h1">Hello, World!</text-component>',
        });

        expect(root).toEqualHtml(`
          <text-component tag="h1">
            <h1 class="theme-dark style-paragraph size-m">
            Hello, World!
            </h1>
          </text-component>
        `);
    });

    it('can render different sizes', async () => {
        const { root } = await newSpecPage({
            components: [TextComponent],
            html: '<text-component size="s">Hello, World!</text-component>',
        });

        expect(root).toEqualHtml(`
          <text-component size="s">
            <p class="theme-dark style-paragraph size-s">
            Hello, World!
            </p>
          </text-component>
        `);
    });

    it('can render different themes', async () => {
        const { root } = await newSpecPage({
            components: [TextComponent],
            html: '<text-component theme="light">Hello, World!</text-component>',
        });

        expect(root).toEqualHtml(`
          <text-component theme="light">
            <p class="theme-light style-paragraph size-m">
            Hello, World!
            </p>
          </text-component>
        `);
    });

    it('can render different appearances', async () => {
        const { root } = await newSpecPage({
            components: [TextComponent],
            html: '<text-component appearance="title">Hello, World!</text-component>',
        });

        expect(root).toEqualHtml(`
          <text-component appearance="title">
            <p class="theme-dark style-title size-m">
            Hello, World!
            </p>
          </text-component>
        `);
    });
});
