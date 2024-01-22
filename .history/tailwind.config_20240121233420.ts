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
      'mobile': '414px',
      // => @media (min-width: 414px) { ... }

      'tablet': '820px',
      // => @media (min-width: 820px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  icons: {
    icon: [
      {
        url: '/images/Black/Logo Black@300x.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/White/Logo White@300x.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  plugins: [],
}

export default config
