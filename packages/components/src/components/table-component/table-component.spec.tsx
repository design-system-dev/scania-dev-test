import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { TableComponent } from './table-component';

describe('table-component', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TableComponent],
            template: () => (
                <table-component
                    headerRow={['a', 'b']}
                    rows={[
                        ['1', '2'],
                        ['3', '4'],
                    ]}
                ></table-component>
            ),
        });

        expect(root.outerHTML).toMatch(
            /<table-component><table class="table shrink"><table-row-component isheader="" size="shrink"><\/table-row-component><table-row-component size="shrink"><\/table-row-component><table-row-component size="shrink"><\/table-row-component>/
        );
    });

    it('can render full size', async () => {
        const { root } = await newSpecPage({
            components: [TableComponent],
            template: () => (
                <table-component
                    headerRow={['a', 'b']}
                    rows={[
                        ['1', '2'],
                        ['3', '4'],
                    ]}
                    size="full"
                ></table-component>
            ),
        });

        expect(root.outerHTML).toMatch(
            /<table-component><table class="table full"><table-row-component isheader="" size="full"><\/table-row-component><table-row-component size="full"><\/table-row-component><table-row-component size="full"><\/table-row-component>/
        );
    });
});
