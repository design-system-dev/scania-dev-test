/**
 * After having struggled with this for really long, I eventually stole this from here:
 * https://github.com/ionic-team/stencil/issues/1090#issuecomment-501124883
 */

import { defineCustomElements, JSX as LocalJSX } from 'components/dist/loader';
import { HTMLAttributes } from 'react';

type StencilToReact<T> = {
    [P in keyof T]?: T[P] &
        Omit<HTMLAttributes<Element>, 'className'> & {
            class?: string;
        };
};

declare global {
    export namespace JSX {
        interface IntrinsicElements
            extends StencilToReact<LocalJSX.IntrinsicElements> {}
    }
}

defineCustomElements(window);
