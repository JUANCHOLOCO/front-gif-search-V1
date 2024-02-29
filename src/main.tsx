import React from 'react'
import ReactDOM from 'react-dom/client'

import { FrontGifSearchApp } from './FrontGifSearchApp.tsx'

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FrontGifSearchApp id={''} 
    title={'One Punch'}
    url={''}/>
  </React.StrictMode>,
)
