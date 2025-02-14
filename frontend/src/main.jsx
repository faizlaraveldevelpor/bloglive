import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './Redux/Store.js'
import {  Flip, ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  
     <Provider store={store}>
    <BrowserRouter>
    <ToastContainer position="top-right"
autoClose={2000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Flip}
/>
    <App />
    
   
    </BrowserRouter>
     </Provider>
  
)
