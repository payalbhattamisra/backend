import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':"http://localhost:3000", 
    },
    //proxy use when 2 you want to merge frontend and backend but they run in 2 diff ports so 1.convert to all url into standard path like /api/jokes then axios.get change it don't use entire url just path write then proxy write vite config.js otherwise package.json
   //npm run build---dist comes compact of everything in frontend ,if you add in backend in that file then it then in server.js app.use(express.static('dist')); use this result you get totally r8. if you change in backend also you get that result but if you change in frontend then it not show again you have to do npm run build then again drag to backend ...it is a prblm .
  },
  plugins: [react()],
})
