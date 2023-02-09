module.exports = {
    presets: [
        [
            "next/babel",
            {
                "preset-env":{},
                "transform-runtime": {},
                "class-properties":{}
            }
        ],
        [
            require.resolve('@babel/preset-env'),
            {
                targets: {
                    node: "current"
                }
            }
        ]
    ],
    plugins: [
        require.resolve('babel-plugin-transform-export-extensions'),
        require.resolve('@babel/plugin-proposal-class-properties'),
        // require.resolve('@babel/plugin-proposal-private-layout-methods'),
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root:['.'],
                extensions: ['.js','.ts','.tsx','.d.ts'],
                alias: {
                    '@moonlay/*': './src/*',
                    '@moonlay/helpers': './src/lib/helpers/index',
                    '@moonlay/lib': './src/lib/index',
                    '@moonlay/*': './src/*',
                }
            }
        ]
    ]
}