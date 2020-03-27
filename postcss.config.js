const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './pages/**/*.hbs'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const cssnano = require('cssnano')({
    preset: 'default'
});

module.exports = {
    plugins: [
        tailwindcss,
        autoprefixer,
        ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []
    ]
}
