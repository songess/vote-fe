import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        themeColor: '#3E4CF7',
        backgroundColor: '#F9F9F9',
        orColor: '#d9d9d9',
      },
      boxShadow: {
        teamBoxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.25);',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [],
};
export default config;
