module.exports = {
  purge: {
    enabled: true,
    content: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html'],
    options: {
      safelist: [
        /.*^(border|bg|text|ring).*/,
        /.*^(focus:border|hover:bg|focus:bg|hover:text|focus:ring).*/,
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(50%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-up': 'slide-up .5s cubic-bezier(0, 1, 0, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
