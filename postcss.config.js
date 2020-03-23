module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
            content: [
                './index.html',
                './projects/index.html'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
    ]
}
