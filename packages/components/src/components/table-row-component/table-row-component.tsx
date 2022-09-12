import { Component, Prop, h } from '@stencil/core';

@Component({
    /**
     * using 'table-row' as tag name gives a strange error.
     * It seems to automatically assign the HTMLTableRowElement interface:
     * `
     * Interface 'HTMLTableRowElement' incorrectly
     * <extends interface 'TableRow'.Types of property
     * '"cells"' are incompatible.Type
     * 'HTMLCollectionOf<HTMLTableCellElement>' is
     * missing the following properties from type
     * 'string[]': pop, push, concat, join, and 28
     * more.>
     * `
     */
    tag: 'table-row-component',
    styleUrl: './table-row-component.scss',
    scoped: true,
})
export class TableRowComponent {
    /** Cell contents */
    @Prop() cells!: Array<string>;

    /** Whether to render a header row or standard row */
    @Prop() isHeader: boolean = false;

    render() {
        const rowClasses = ['row', this.isHeader ? 'header' : 'standard'].join(
            ' '
        );
        const CellTag = this.isHeader ? 'th' : 'td';
        const textAppearance = this.isHeader ? 'title' : 'paragraph';

        return (
            <tr class={rowClasses}>
                {this.cells.map(cell => (
                    <CellTag key={cell} class="cell">
                        <text-component appearance={textAppearance} size="s">
                            {cell}
                        </text-component>
                    </CellTag>
                ))}
            </tr>
        );
    }
}
