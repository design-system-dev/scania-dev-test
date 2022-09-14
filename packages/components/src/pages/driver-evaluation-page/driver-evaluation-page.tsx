import {
    Component,
    State,
    Watch,
    Listen,
    h,
    getAssetPath,
} from '@stencil/core';
import driversData from './drivers.json';

@Component({
    tag: 'driver-evaluation-page',
    styleUrl: './driver-evaluation-page.scss',
    scoped: true,
})
export class DriverEvaluationPage {
    @State() filteredDrivers = driversData;

    @State() formattedDrivers = this.formateDrivers(this.filteredDrivers);

    @State() selectedFilter: string;

    @Listen('dropdownChanged')
    dropdownChangedHandler({ detail: selectedFilter }) {
        this.selectedFilter = selectedFilter;
    }

    @Watch('selectedFilter')
    watchselectedFilterHandler() {
        this.filterDriversByDistance();
    }

    @Watch('filteredDrivers')
    watchFilteredDriversHandler(newValue) {
        this.formattedDrivers = this.formateDrivers(newValue);
    }

    private filterDriversByDistance = () => {
        const longDrivers = driversData.filter(item => item.distance > 200000);
        this.filteredDrivers =
            this.selectedFilter === 'long'
                ? longDrivers
                : driversData.filter(item => !longDrivers.includes(item));
    };

    private formateDrivers(drivers) {
        return drivers.map(item => [
            item.driver,
            item.company,
            this.formateDistance(item.distance),
            item.score,
        ]);
    }

    private formateDistance(distance) {
        return `${Number(distance).toLocaleString()} km`;
    }

    render() {
        return (
            <main class="page">
                <nav class="nav">
                    <a href="#" class="nav-link-ctn">
                        <text-component
                            tag="div"
                            theme="light"
                            appearance="title"
                            size="s"
                        >
                            Fleet Portal
                        </text-component>
                    </a>
                    <div class="logo-ctn">
                        <img
                            src={getAssetPath('./scania-logo.svg')}
                            alt="scania logo"
                            class="logo"
                        />
                    </div>
                </nav>

                <header class="header">
                    <div class="container">
                        <text-component tag="h1" appearance="title" size="l">
                            Driver evaluation
                        </text-component>
                    </div>
                </header>

                <section class="body grow-section">
                    <div class="container">
                        <div class="stack">
                            <div>
                                <dropdown-component
                                    options={[
                                        {
                                            label: '<= 200.000 km',
                                            value: 'short',
                                        },
                                        {
                                            label: '> 200.000 km',
                                            value: 'long',
                                        },
                                    ]}
                                ></dropdown-component>
                            </div>

                            <table-component
                                headerRow={[
                                    'Driver',
                                    'Company',
                                    'Distance',
                                    'Score',
                                ]}
                                rows={this.formattedDrivers}
                                emptyMessage="No drivers found."
                            ></table-component>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
