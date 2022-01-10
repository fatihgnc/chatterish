module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '300px',
            md: '492px',
            lg: '768px',
            xl: '1024px',
            '2xl': '1280px',
        },
        extend: {
            backgroundImage: {
                home: 'url(https://i.pinimg.com/originals/7d/98/84/7d98840fdff1b2e7cd508cc7f3a17403.jpg)',
            },
        },
    },
    plugins: [],
};
