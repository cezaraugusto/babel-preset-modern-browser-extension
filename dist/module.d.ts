declare function presetExtensionCreate(opts: any): {
    presets: (string | (string | {
        targets: any;
        debug: any;
        modules: string | boolean;
        useBuiltIns: boolean;
        shippedProposals: boolean;
    })[] | (string | {
        development: boolean;
    })[])[];
    plugins: (string | (string | {
        version: string;
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
