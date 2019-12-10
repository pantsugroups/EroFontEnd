const is_production = process.env.NODE_ENV === 'production'
module.exports = api => {
    api.cache(is_production);
    const presets = [
        ["@babel/preset-env", {
            "targets": {
                "node": true
            },
            "useBulitIms": "entry"
        }]
    ];
    const plugins = [
        //https://github.com/babel/babel/blob/master/packages/babel-preset-stage-2/README.md
        require("@babel/plugin-transform-async-to-generator"),
        require("@babel/plugin-transform-runtime"),
        require("@babel/plugin-syntax-dynamic-import"),
        [require("@babel/plugin-proposal-decorators"), {
            "legacy": true
        }],
        [require("@babel/plugin-proposal-class-properties"), {
            "loose": false
        }]
    ];
    return {
        presets,
        plugins
    };
}