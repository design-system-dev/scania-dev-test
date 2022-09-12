import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { TableRowComponent } from './table-row-component';

describe('table-row-component', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TableRowComponent],
            template: () => (
                <table-row-component cells={['a', 'b']}></table-row-component>
            ),
        });

        expect(root.outerHTML).toMatch(
            /<table-row-component><tr class="row standard shrink"><td class="cell"><text-component appearance="paragraph" size="s">a<\/text-component>/
        );
    });

    it('can render header', async () => {
        const { root } = await newSpecPage({
            components: [TableRowComponent],
            template: () => (
                <table-row-component
                    cells={['a', 'b']}
                    isHeader={true}
                ></table-row-component>
            ),
        });

        expect(root.outerHTML).toMatch(
            /<table-row-component><tr class="row header shrink"><th class="cell"><text-component appearance="title" size="s">a<\/text-component>/
        );
    });

    it('can render full size', async () => {
        const { root } = await newSpecPage({
            components: [TableRowComponent],
            template: () => (
                <table-row-component
                    cells={['a', 'b']}
                    isHeader={true}
                    size="full"
                ></table-row-component>
            ),
        });

        expect(root.outerHTML).toMatch(
            /<table-row-component><tr class="row header full"><th class="cell"><text-component appearance="title" size="s">a<\/text-component>/
        );
    });
});
