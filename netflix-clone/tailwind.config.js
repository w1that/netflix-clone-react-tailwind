module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        netflixred: {
          DEFAULT: '#F40612',
          hover:'#fa2d37'
        },
        gray: {
          darkest: '#232324',
          dark: '#222222',
          dark2: '#303030',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
