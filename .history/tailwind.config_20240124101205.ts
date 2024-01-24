import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['montserrat']
    },
    extend: {
      colors: {
        'Emerald':'#244B5A',
        'Sage': '#85AF9A',
        'Cool-Gray': '#D0CFCD'
      }
    },
    screens: {

      'mobile': {'min': '350px', 'max': '767px'},
      // => @media (min-width: 350px and max-width: 767px) { ... }

      'tablet': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'desktop': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xldesktop': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

    }
  },
  
  plugins: [],
}

export default config
