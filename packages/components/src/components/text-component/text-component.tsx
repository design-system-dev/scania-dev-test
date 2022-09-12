import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'text-component',
    styleUrl: './text-component.scss',
})
export class TextComponent {
    /** Whether the text will have dark or light colors */
    @Prop() theme: 'dark' | 'light' = 'dark';

    /** Determines the appearance of the text */
    @Prop() appearance: 'title' | 'paragraph' | 'link' = 'paragraph';

    /** Determines the font size */
    @Prop() size: 's' | 'm' | 'l' = 'm';

    /** HTML tag to render as */
    @Prop() tag: string = 'p';

    render() {
        const classNames = [
            `theme-${this.theme}`,
            `style-${this.appearance}`,
            `size-${this.size}`,
        ].join(' ');
        const Component = this.tag;

        return (
            <Component class={classNames}>
                <slot></slot>
            </Component>
        );
    }
}
