import { configureStore } from '@reduxjs/toolkit'
import Auth_reducer from '../Slice/AuthSlice'
import Modal_reducer from '../Slice/ModalSlice'



const Store = configureStore({ 
  reducer: {
    auth: Auth_reducer,
    modal: Modal_reducer,
  }, 
})

export default Store
