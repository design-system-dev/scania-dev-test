import { Component, Prop, State, Watch, h } from '@stencil/core';

/**
 * TODO:
 *
 * [x] basic component
 * [ ] styles
 * [ ] stories
 * [ ] tests
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

    @State() selectedLabel: string = '';

    @State() isOpen: boolean = false;

    @Watch('selectedValue')
    watchStateHandler(newValue: string) {
        this.selectedLabel = this.getOptionLabelByValue(newValue);
    }

    private toggleIsOpen = () => {
        this.isOpen = !this.isOpen;
    };

    private getOptionLabelByValue = value => {
        const option = this.options.find(option => option.value === value);
        if (option === undefined) {
            return '';
        }
        return option.label;
    };

    private handleOptionClick = e => {
        const targetValue = e.target.getAttribute('data-value');
        if (targetValue) {
            this.selectedValue = targetValue;
        }
        this.isOpen = false;
    };

    render() {
        const dropdownClasses = [
            'dropdown',
            this.isOpen ? 'open' : 'closed',
        ].join(' ');
        const headerText =
            this.selectedLabel.length > 0 ? this.selectedLabel : this.heading;

        return (
            <div class={dropdownClasses}>
                <button class="option header" onClick={this.toggleIsOpen}>
                    <text-component size="s">{headerText}</text-component>
                    <div class="caret">v</div>
                </button>

                {this.isOpen && (
                    <ul class="options-list">
                        <li>
                            {this.options.map(option => (
                                <button
                                    class="option"
                                    data-value={option.value}
                                    onClick={this.handleOptionClick}
                                >
                                    <text-component size="s">
                                        {option.label}
                                    </text-component>
                                </button>
                            ))}
                        </li>
                    </ul>
                )}
            </div>
        );
    }
}
