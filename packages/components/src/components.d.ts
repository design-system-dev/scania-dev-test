/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TableComponent {
        /**
          * Rows of cell contents
         */
        "emptyMessage": string;
        /**
          * Header cell contents
         */
        "headerRow": Array<string>;
        /**
          * Rows of cell contents
         */
        "rows": Array<Array<string>>;
        /**
          * 'shrink' will cause the table to shrink to the size of its children rows, while 'full' will fill up all available space.
         */
        "size": 'shrink' | 'full';
    }
    interface TableRowComponent {
        /**
          * Cell contents
         */
        "cells": Array<string>;
        /**
          * Whether to render a header row or standard row
         */
        "isHeader": boolean;
        /**
          * 'shrink' will cause each cell to take a fixed value, while 'full' will cause the row to fill up all available space, distributing it evenly among cells.
         */
        "size": 'shrink' | 'full';
    }
    interface TextComponent {
        /**
          * Determines the appearance of the text
         */
        "appearance": 'title' | 'paragraph' | 'link';
        /**
          * Determines the font size
         */
        "size": 's' | 'm' | 'l';
        /**
          * HTML tag to render as
         */
        "tag": string;
        /**
          * Whether the text will have dark or light colors
         */
        "theme": 'dark' | 'light';
    }
}
declare global {
    interface HTMLTableComponentElement extends Components.TableComponent, HTMLStencilElement {
    }
    var HTMLTableComponentElement: {
        prototype: HTMLTableComponentElement;
        new (): HTMLTableComponentElement;
    };
    interface HTMLTableRowComponentElement extends Components.TableRowComponent, HTMLStencilElement {
    }
    var HTMLTableRowComponentElement: {
        prototype: HTMLTableRowComponentElement;
        new (): HTMLTableRowComponentElement;
    };
    interface HTMLTextComponentElement extends Components.TextComponent, HTMLStencilElement {
    }
    var HTMLTextComponentElement: {
        prototype: HTMLTextComponentElement;
        new (): HTMLTextComponentElement;
    };
    interface HTMLElementTagNameMap {
        "table-component": HTMLTableComponentElement;
        "table-row-component": HTMLTableRowComponentElement;
        "text-component": HTMLTextComponentElement;
    }
}
declare namespace LocalJSX {
    interface TableComponent {
        /**
          * Rows of cell contents
         */
        "emptyMessage"?: string;
        /**
          * Header cell contents
         */
        "headerRow": Array<string>;
        /**
          * Rows of cell contents
         */
        "rows"?: Array<Array<string>>;
        /**
          * 'shrink' will cause the table to shrink to the size of its children rows, while 'full' will fill up all available space.
         */
        "size"?: 'shrink' | 'full';
    }
    interface TableRowComponent {
        /**
          * Cell contents
         */
        "cells": Array<string>;
        /**
          * Whether to render a header row or standard row
         */
        "isHeader"?: boolean;
        /**
          * 'shrink' will cause each cell to take a fixed value, while 'full' will cause the row to fill up all available space, distributing it evenly among cells.
         */
        "size"?: 'shrink' | 'full';
    }
    interface TextComponent {
        /**
          * Determines the appearance of the text
         */
        "appearance"?: 'title' | 'paragraph' | 'link';
        /**
          * Determines the font size
         */
        "size"?: 's' | 'm' | 'l';
        /**
          * HTML tag to render as
         */
        "tag"?: string;
        /**
          * Whether the text will have dark or light colors
         */
        "theme"?: 'dark' | 'light';
    }
    interface IntrinsicElements {
        "table-component": TableComponent;
        "table-row-component": TableRowComponent;
        "text-component": TextComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "table-component": LocalJSX.TableComponent & JSXBase.HTMLAttributes<HTMLTableComponentElement>;
            "table-row-component": LocalJSX.TableRowComponent & JSXBase.HTMLAttributes<HTMLTableRowComponentElement>;
            "text-component": LocalJSX.TextComponent & JSXBase.HTMLAttributes<HTMLTextComponentElement>;
        }
    }
}
