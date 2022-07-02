import { configureStore } from '@reduxjs/toolkit'
import Auth_reducer from '../Slice/AuthSlice'
import Modal_reducer from '../Slice/ModalSlice'
import Shop_reducer from'../Slice/ShopSlice'

const Store = configureStore({ 
  reducer: {
    auth: Auth_reducer,
    modal: Modal_reducer,
    shop: Shop_reducer,
  }, 
})

export default Store
