import React from 'react';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import  {configureStore} from './app/store';
import {selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import Post from './Post';
import {logout , login} from './features/userSlice';
import Widgets from './Widgets';
import HeaderOption from './HeaderOption';
function App() {
   const user = useSelector(selectUser);
   const dispatch = useDispatch();


   useEffect(() => {
     auth.onAuthStateChanged(userAuth => {
       if(userAuth){
          //userlosgein 
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,

          }))
            
       }else{
       
             dispatch(logout());
       }
     })
   } , [])

  return (
    <div className="app">
       

      {/*Header*/}
      <Header />


      {!user ? (
        <Login />):
        (

      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets/>
      </div>
      )}
    </div>
  );
}

export default App;
