module.exports = {
  mode: 'jit',
  content: ['./.hbs', './**/.hbs', './**/**/*.hbs'],
  darkMode: 'media',
  corePlugins: {
    container: true
  },





  plugins: [
    
    function ({ addComponents }) {
      addComponents({

        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px', 
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1360px',
          },


        }

      })
    }
  ],

  theme: {

    extend: {
      container: {
        center: true,
        padding: '1rem',
      },

      colors: {
        

        

      },
      

     


     
     
    },
  },
  // Other stuff
};