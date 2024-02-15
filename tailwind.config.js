/** @type {import('tailwindcss').Config} */
export default {
  //En content le indicamos que archivos queremos que contengan codigo de tailwindcss
  //De esta manera le indicamos que entre a la carpeta src y revise todas las carpetas donde haya un archivo con extension .jsx
  //para deployar se borra el ./ de index.hmtl
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}

