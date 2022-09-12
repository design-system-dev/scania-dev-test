# table-row-component



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute       | Description                                                                                                              | Type                 | Default               |
| ------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------- | --------------------- |
| `emptyMessage`           | `empty-message` | Rows of cell contents                                                                                                    | `string`             | `'No entries found.'` |
| `headerRow` _(required)_ | --              | Header cell contents                                                                                                     | `string[]`           | `undefined`           |
| `rows`                   | --              | Rows of cell contents                                                                                                    | `string[][]`         | `undefined`           |
| `size`                   | `size`          | 'shrink' will cause the table to shrink to the size of its children rows, while 'full' will fill up all available space. | `"full" \| "shrink"` | `'shrink'`            |


## Dependencies

### Depends on

- [table-row-component](../table-row-component)

### Graph
```mermaid
graph TD;
  table-component --> table-row-component
  table-row-component --> text-component
  style table-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
