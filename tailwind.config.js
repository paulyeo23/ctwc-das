/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      'shadow-team-sm': '0 1px 2px 0 rgba(50, 50, 50, 0.4)',
      colors: {
        'custom-gray': '#292929',
        'custom-bg': '#f6f6f9',
        'lineups-compare-container' : "#293139"
      },    
      fontSize: {
        '9xl': '36px'
      },
      height: {
        '46': '46px',
      },
      width: {
        '46': '46px',
      },
      textOverflow: {
        ellipsis: 'ellipsis',
      },
      spacing: {
        '46px': '46px',
        '8px': '8px',
        '70px': '70px',
        '638px': '638px',
      },
      gridTemplateColumns: {
        'custom-grid': '1fr 70px 1fr',
      },
      boxShadow: {
        'custom': '0 1px 2px 0 rgba(50, 50, 50, 0.4)',
      },
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.teamsBoxDropdown': {
          '@apply fixed top-[46px] max-w-[638px] w-full z-[9999] pt-[8px] bg-[#f6f6f9] grid grid-cols-[1fr_70px_1fr] gap-y-[8px] transition-all duration-500 ease-in-out': {},
          'left': '-100%',
          'opacity': '0',
          'transform': 'translateY(-100%)',
        },
        '.teamsBoxDropdown.active': {
          '@apply translate-y-0 opacity-100': {},
        },
        '@screen sm': {
          '.teamsBoxDropdown': {
            'left': '0',
          },
        },
        '.standard-box': {
          '@apply shadow-custom': {},
        },
      });
    },
  ],
};

