import { Component, Prop, State, h } from '@stencil/core';

/**
 * TODO:
 *
 * [ ] basic component
 * [ ] styles
 * [ ] stories
 * [ ] tests
 * [ ] data binding
 * [ ] reflect in real select
 *
 */

@Component({
    tag: 'dropdown-component',
    styleUrl: './dropdown-component.scss',
    scoped: true,
})
export class DropdownComponent {
    /** Title */
    @Prop() heading: string = 'Select...';

    /** List of dropdown options */
    @Prop() options!: {
        label: string;
        value: string;
    }[];

    @State() selectedValue: string;

    private handleOptionClick = e => {
        const targetValue = e.target.getAttribute('data-value');

        if (targetValue) {
            this.selectedValue = targetValue;
        }
    };

    render() {
        return (
            <div class="dropdown">
                <div class="option header">
                    <text-component size="s">{this.heading}</text-component>
                </div>

                {this.options.map(option => (
                    <button
                        class="option"
                        data-value={option.value}
                        onClick={this.handleOptionClick}
                    >
                        <text-component size="s">{option.label}</text-component>
                    </button>
                ))}

                <div>
                    <text-component size="m" appearance="link">
                        Selected: {this.selectedValue}
                    </text-component>
                </div>
            </div>
        );
    }
}
