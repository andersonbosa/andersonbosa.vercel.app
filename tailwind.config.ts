import type { Config } from 'tailwindcss'
import appConfiguration from './config'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/daisyui/dist/**/*.js',
    './node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 700ms ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // https://tailwindcss.com/docs/typography-plugin
    require('daisyui')
  ],

  darkMode: 'class',

  // daisyUI config (optional - here are the default values)
  daisyui: {
    // false: only light + dark
    // true: all themes
    // array: specific themes like this ["light", "dark", "cupcake"]
    themes: [
      appConfiguration.themes.options.light,
      appConfiguration.themes.options.dark
    ],
    // darkTheme: appConfiguration.themes.options.dark, // 'dark', // name of one of the included themes for dark mode
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
}
export default config
