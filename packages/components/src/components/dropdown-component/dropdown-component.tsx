import {
    Component,
    Prop,
    State,
    Watch,
    Method,
    Event,
    EventEmitter,
    h,
    getAssetPath,
} from '@stencil/core';

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

    /** Emitts new value whenever an option is selected */
    @Event() dropdownChanged: EventEmitter;

    @State() selectedValue: string | undefined;

    @State() selectedLabel: string = '';

    @State() isOpen: boolean = false;

    @Watch('selectedValue')
    watchStateHandler(newValue: string) {
        this.selectedLabel = this.getOptionLabelByValue(newValue);
        this.dropdownChanged.emit(this.selectedValue);
    }

    /** Resets dropdown */
    @Method()
    async reset() {
        this.selectedValue = undefined;
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
                <button class="header" onClick={this.toggleIsOpen}>
                    <text-component size="s">{headerText}</text-component>
                    <img
                        class="caret"
                        src={getAssetPath('./chevron-down.svg')}
                        alt="chevron"
                    />
                </button>

                {this.isOpen && (
                    <ul class="options-list">
                        {this.options.map(option => {
                            const isActive =
                                this.selectedValue === option.value;
                            const optionClasses = [
                                'option',
                                isActive ? 'active' : '',
                            ].join(' ');
                            return (
                                <li>
                                    <button
                                        class={optionClasses}
                                        data-value={option.value}
                                        onClick={this.handleOptionClick}
                                    >
                                        <text-component size="s">
                                            {option.label}
                                        </text-component>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                )}

                {/**
                 * hidden select field reflecting the selected option,
                 * to make dropdown usable in forms
                 */}
                <select class="hidden-select" name={headerText} disabled>
                    <option value="">Select...</option>
                    {this.options.map(option => (
                        <option
                            value={option.value}
                            selected={option.value === this.selectedValue}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}
