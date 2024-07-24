- Agregamos la siguiente URL en el package.json para el deploy
  "scripts": {
  "dev": "vite",
  "dev:css": "postcss src/assets/css/Tailwind.css -o src/assets/css/App.css --watch",
  "build": "tsc -b && vite build",
  "lint": "eslint --fix . --ext .js,.jsx,.ts,.tsx",
  "preview": "vite preview"
  },
  "homepage": "https://dygdigitalsolutions.com/",
  "dependencies": {
  "@emailjs/browser": "^4.3.3",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
  },
