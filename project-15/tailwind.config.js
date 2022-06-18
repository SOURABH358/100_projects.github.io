/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontSize: {
      base: '18px'
    },
    colors:{
      'Grayish-Blue': 'hsl(229, 8%, 60%)',
      'Very-Dark-Blue': 'hsl(229, 31%, 21%)',
      'Soft-Blue': 'hsl(231, 69%, 60%)',
      'Soft-Red': 'hsl(0, 94%, 66%)',
      'white':'#fff'
    }
  },
  variants:{
    fill:['hover','focus']
  }
}
