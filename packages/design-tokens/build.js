const StyleDictionary = require('style-dictionary');
const { join } = require('node:path');

/** Classify all "space" and "size" tokens as "size", to ensure that they are being picked up by size transformations: */
StyleDictionary.registerTransform({
    name: 'custom/attribute/size',
    type: 'attribute',
    matcher: token =>
        ['size', 'space'].some(category => token.path.includes(category)),
    transformer(token) {
        return { ...token.attributes, category: 'size' };
    },
});

const config = {
    source: [join(__dirname, 'tokens.json')],
    platforms: {
        styles: {
            transforms: [
                'attribute/cti',
                'custom/attribute/size',
                'name/cti/kebab',
                'color/hex',
                'size/pxToRem',
            ],
            files: [
                {
                    destination: join(__dirname, 'dist/tokens.css'),
                    format: 'css/variables',
                    options: {
                        outputReferences: true,
                        showFileHeader: false,
                        selector: ':root, ::before, ::after, ::marker',
                    },
                },
                {
                    destination: join(__dirname, 'dist/tokens.scss'),
                    format: 'scss/variables',
                    options: {
                        outputReferences: true,
                        showFileHeader: false,
                    },
                },
            ],
        },
    },
};

const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();
