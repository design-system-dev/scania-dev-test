import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
    namespace: 'scania-dev-test',
    plugins: [sass()],
    outputTargets: [
        reactOutputTarget({
            componentCorePackage: 'components',
            proxiesFile: '../ui-components-react/dist/index.ts',
            includeDefineCustomElements: true,
        }),
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
};
