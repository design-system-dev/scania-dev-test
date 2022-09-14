import { Component, h, getAssetPath } from '@stencil/core';

@Component({
    tag: 'driver-evaluation-page',
    styleUrl: './driver-evaluation-page.scss',
    scoped: true,
})
export class DriverEvaluationPage {
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
                            <p>table</p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
