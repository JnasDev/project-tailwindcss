/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        Bruno: ["Bruno Ace SC", "cursive"],
        poppin: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "tree": "url('/img/tree.jpg')",
        "react": "url('/img/react.png')",
        "react2": "url('/img/react2.jpg')",
        "bg-header":"url('/img/bg_header.jpg')",
      },

      height: {
        'header': '600px',
        '400': '400px',
        'snow':'190px',
        'html':'100%',
        'item1':'100%',
        '300px':'400px',
        '120px':'120px',
      },

      width: {
        '400': '400px',
        '360': '360px',
        'container':'1140px',
        'snow':'300px',
        'html':'100px',
        'item1':'100%',
        '300px':'320px',
        'auto':'auto',
        'coffee':'315px',
        '400px':'400px',
        '200px':'200px',
        '100%':'100%',
      },

      margin: {
        'one': '0px 0px 0px 0px',
        'top': '100px 0px 0px 0px',
        'container': '0 auto',
        'snow':'0px 0px 0px 90px',
        'created':'50px 0px 50px 0px',
      },

      borderWidth: {
        DEFAULT: '1px',
        'DE2': '16px',
      },

      maxWidth: {
        'snow-react': '50%',
      },

      padding: {
        'created': '0px 0px 100px 0px',
        '16px':'16px',
        'header':'50px 0px 20px 0px',
        'order':'0px 0px 0px 10px',
      },

      borderRadius: {
        'custom':'0px 6px 0px 6px',
        '100%':'100%',
      },

      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        'header':'24px',
        'created':'36px',
        'footer1':'20px',
      },

      inset: {
        'header':'200px',
      },

      textUnderlineOffset: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
