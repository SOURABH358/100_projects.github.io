/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'Dark-cyan': 'hsl(158, 36%, 37%)',
        'Cream': 'hsl(30, 38%, 92%)',
        'Very-dark-blue': 'hsl(212, 21%, 14%)',
        'Dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'White': 'hsl(0, 0%, 100%)'
      },
      fontSize: {
        'base': '14px'
      }
      , fontFamily: {
        'Fraunces': ['Fraunces', 'serif'],
        'Montserrat': ['Montserrat', 'sans- serif'],
      },
      backgroundImage: {
        'hero-mobile': "url('./images/image-product-mobile.jpg')",
        'hero-desktop': "url('./images/image-product-desktop.jpg')",
        'icon-cart':"url('./images/icon-cart.svg')"
      }
    }

  },
  plugins: [],
}
