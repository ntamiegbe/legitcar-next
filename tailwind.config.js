/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'main': '0px 1px 4px rgba(29, 41, 57, 0.1)',
        // 'button': '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'brand': '#8E44AD',
      'secondary': '#491A5D',
      'primary': '#1D2939',
      'secondaryText': '#475467',
      'stroke': '#D0D5DD',
      'placeholderText': '#A3A3A3',
      'icons': '#8593AF',
      'success': '#039855',
      'overlay': '#FCF4FF',
      'successOverlay': '#EEFFF7',
      'error': '#D92D20',
      'orange': '#FF8640',
      'dashboardBorders': '#E5E9F0',
      'grayTable': '#667085',
      'grayPagination': '#647691',
      'blue': '#4172C6',
      'blueOverlay': '#EEF4FF',
      'grayBg': '#F2F4F7',
      'inputFocused': '#F9FAFB',
    },
  },
  plugins: [],
}