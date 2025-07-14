import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
//      server: {
//     host: 'localhost',
//     port: 5173,
//     strictPort: true,
//   }
//   ,
    plugins: [
        
        laravel({
            input: ['resources/css/app.css', 'resources/js/main.jsx'],
            refresh: true, 
        }),tailwindcss(),
        react(),
    ],
}); 