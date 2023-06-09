const path = require('path');
const nextTranslate = require('next-translate');
const dev = require('./environments/shared/dev.json');
const prod = require('./environments/shared/prod.json');
const stage = require('./environments/shared/stage.json');
const local = require('./environments/shared/local.json');

module.exports = () =>
    nextTranslate({
        webpack: (config) => {
            /* Next JS path aliases */
            config.resolve.alias['root'] = path.join(__dirname);
            config.resolve.alias['src'] = path.join(__dirname, 'src');
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    },
                },
            });

            return config;
        },
        publicRuntimeConfig: {
            env: {local, dev, stage, prod},
        },
    });
