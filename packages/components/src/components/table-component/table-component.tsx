import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'table-component',
    styleUrl: './table-component.scss',
    scoped: true,
})
export class TableComponent {
    /** Header cell contents */
    @Prop() headerRow!: Array<string>;

    /** Rows of cell contents */
    @Prop() rows: Array<Array<string>>;

    /**
     * 'shrink' will cause the table to shrink to the size of its
     * children rows, while 'full' will fill up all available space.
     */
    @Prop() size: 'shrink' | 'full' = 'shrink';

    /** Rows of cell contents */
    @Prop() emptyMessage: string = 'No entries found.';

    render() {
        const tableClasses = ['table', this.size].join(' ');
        const hasEntries = this.rows && this.rows.length > 0;

        return (
            <table class={tableClasses}>
                <table-row-component
                    cells={this.headerRow}
                    isHeader={true}
                    size={this.size}
                ></table-row-component>

                {hasEntries &&
                    this.rows.map(row => (
                        <table-row-component
                            cells={row}
                            size={this.size}
                        ></table-row-component>
                    ))}

                {!hasEntries && (
                    <table-row-component
                        cells={[this.emptyMessage]}
                        size="full"
                    ></table-row-component>
                )}
            </table>
        );
    }
}
