declare function presetExtensionCreate(opts: any): {
    presets: (string | {
        development: boolean;
    })[][];
    plugins: (string | (string | {
        absoluteRuntime: boolean;
        corejs: boolean;
        helpers: boolean;
        regenerator: boolean;
    })[])[];
    overrides: {
        test?: undefined;
        plugins?: undefined;
    } | {
        test: RegExp;
        plugins: (string | {
            legacy: boolean;
        })[][];
    };
};

export { presetExtensionCreate as default };
