import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DropdownComponent } from './dropdown-component';

describe('table-component', () => {
    let page;
    let root;

    beforeEach(async () => {
        const options = [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
        ];
        page = await newSpecPage({
            components: [DropdownComponent],
            template: () => (
                <dropdown-component options={options}></dropdown-component>
            ),
        });
        root = page.root;
    });

    it('renders', async () => {
        expect(root.outerHTML).toMatch(
            /<dropdown-component><div class="dropdown closed">/
        );
    });

    it('does not render options while closed', async () => {
        expect(root.outerHTML).not.toMatch(/<ul class="options-list">/);
    });

    it('renders options while open', async () => {
        root.querySelector('button.header').click();
        await page.waitForChanges();
        expect(root.outerHTML).toMatch(/<ul class="options-list">/);
    });
});
