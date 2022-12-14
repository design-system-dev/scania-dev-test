/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DriverEvaluationPage {
    }
    interface DropdownComponent {
        /**
          * Title
         */
        "heading": string;
        /**
          * List of dropdown options
         */
        "options": {
        label: string;
        value: string;
    }[];
        /**
          * Resets dropdown
         */
        "reset": () => Promise<void>;
    }
    interface TableComponent {
        /**
          * Message to display if `rows` is empty
         */
        "emptyMessage": string;
        /**
          * Header cell contents
         */
        "headerRow": Array<string>;
        /**
          * Rows of cell contents
         */
        "rows": Array<Array<string | number>>;
        /**
          * 'shrink' will cause the table to shrink to the size of its children rows, while 'full' will fill up all available space.
         */
        "size": 'shrink' | 'full';
    }
    interface TableRowComponent {
        /**
          * Cell contents
         */
        "cells": Array<string | number>;
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
export interface DropdownComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDropdownComponentElement;
}
declare global {
    interface HTMLDriverEvaluationPageElement extends Components.DriverEvaluationPage, HTMLStencilElement {
    }
    var HTMLDriverEvaluationPageElement: {
        prototype: HTMLDriverEvaluationPageElement;
        new (): HTMLDriverEvaluationPageElement;
    };
    interface HTMLDropdownComponentElement extends Components.DropdownComponent, HTMLStencilElement {
    }
    var HTMLDropdownComponentElement: {
        prototype: HTMLDropdownComponentElement;
        new (): HTMLDropdownComponentElement;
    };
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
        "driver-evaluation-page": HTMLDriverEvaluationPageElement;
        "dropdown-component": HTMLDropdownComponentElement;
        "table-component": HTMLTableComponentElement;
        "table-row-component": HTMLTableRowComponentElement;
        "text-component": HTMLTextComponentElement;
    }
}
declare namespace LocalJSX {
    interface DriverEvaluationPage {
    }
    interface DropdownComponent {
        /**
          * Title
         */
        "heading"?: string;
        /**
          * Emitts new value whenever an option is selected
         */
        "onDropdownChanged"?: (event: DropdownComponentCustomEvent<any>) => void;
        /**
          * List of dropdown options
         */
        "options": {
        label: string;
        value: string;
    }[];
    }
    interface TableComponent {
        /**
          * Message to display if `rows` is empty
         */
        "emptyMessage"?: string;
        /**
          * Header cell contents
         */
        "headerRow": Array<string>;
        /**
          * Rows of cell contents
         */
        "rows"?: Array<Array<string | number>>;
        /**
          * 'shrink' will cause the table to shrink to the size of its children rows, while 'full' will fill up all available space.
         */
        "size"?: 'shrink' | 'full';
    }
    interface TableRowComponent {
        /**
          * Cell contents
         */
        "cells": Array<string | number>;
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
        "driver-evaluation-page": DriverEvaluationPage;
        "dropdown-component": DropdownComponent;
        "table-component": TableComponent;
        "table-row-component": TableRowComponent;
        "text-component": TextComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "driver-evaluation-page": LocalJSX.DriverEvaluationPage & JSXBase.HTMLAttributes<HTMLDriverEvaluationPageElement>;
            "dropdown-component": LocalJSX.DropdownComponent & JSXBase.HTMLAttributes<HTMLDropdownComponentElement>;
            "table-component": LocalJSX.TableComponent & JSXBase.HTMLAttributes<HTMLTableComponentElement>;
            "table-row-component": LocalJSX.TableRowComponent & JSXBase.HTMLAttributes<HTMLTableRowComponentElement>;
            "text-component": LocalJSX.TextComponent & JSXBase.HTMLAttributes<HTMLTextComponentElement>;
        }
    }
}
