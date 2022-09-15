# text-component

<!-- Auto Generated Below -->

## Properties

| Property     | Attribute    | Description                                     | Type                               | Default       |
| ------------ | ------------ | ----------------------------------------------- | ---------------------------------- | ------------- |
| `appearance` | `appearance` | Determines the appearance of the text           | `"link" \| "paragraph" \| "title"` | `'paragraph'` |
| `size`       | `size`       | Determines the font size                        | `"l" \| "m" \| "s"`                | `'m'`         |
| `tag`        | `tag`        | HTML tag to render as                           | `string`                           | `'p'`         |
| `theme`      | `theme`      | Whether the text will have dark or light colors | `"dark" \| "light"`                | `'dark'`      |

## Dependencies

### Used by

-   [driver-evaluation-page](../../pages/driver-evaluation-page)
-   [dropdown-component](../dropdown-component)
-   [table-row-component](../table-row-component)

### Graph

```mermaid
graph TD;
  driver-evaluation-page --> text-component
  dropdown-component --> text-component
  table-row-component --> text-component
  style text-component fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
