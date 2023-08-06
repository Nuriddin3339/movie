/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          tmdb: 'rgb(3,37,65)',
          tmdbinputblue: 'rgb(1,180,228)',
          tmdbinputgreen: 'rgb(30,213,169)'
        },
       backgroundImage:{
        'banner': 'url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yF1eOkaYvwiORauRCPWznV9xVvi.jpg")'
       }
     
      },
    },
    plugins: [],
}

