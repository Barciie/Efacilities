import { toast } from './toast';
import firebase from "firebase";
import firestore from 'firebase/firestore'
import { db } from './firebaseConfig';
import { auth } from './auth';
import { setCookie } from './setCookie';
import getCookie from './getCookie';

export async function loginUser(email: string, password: string) {
  // const email = `${username}`
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)
    setCookie("email",email,1)
    console.log(res)
    return true
  } catch (error: any) {
    toast(error.message, 3000)
    return false

  }
}

export async function login_Admin(email: string, password: string) {
  // const email = `${username}`
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)
    setCookie("email",email,1)
    alert(getCookie("email"))
    console.log(res)
    return true
  } catch (error: any) {
    toast(error.message, 3000)
    return false

  }
}

export async function registerUser(email: string, password: string) {
  // const email = `${username}`
  //VERIFY EMAIL AFTER REGISTERATION / LOG IN


  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
    console.log(res)
    setCookie("email",email,1)

    
    return true
  } catch (error: any) {
    toast(error.message, 3000)
    return false
  }
}

export async function passwordRes(email: string) {
  
  try {
    const res = await firebase.auth().sendPasswordResetEmail(email)
    console.log(res)
    console.log("email",100)
    toast('Password reset email has been sent with instructions', 4000)
  }
  catch (error: any) {
    toast(error.message, 3000)
    return false
  }
}
export const logout = () => {
  const signOut = firebase.auth().signOut;

  console.log(signOut)
}

export const userProfile = async (fname: string, lname: string, email: string, pwd: string) => {

  const ref = await
    db
      .collection("users")
      .add({
        firstname: fname,
        lastname: lname,
        email: email,
        password: pwd,
      })

  if (ref.id) {
    return true

  }
  else {
    return null
  }
}
//UPDATED SELECTED FIELDS ONLY

//DELETE THE WHOLE PROFILE 

//LOGIN THE PROFILE USING DATA STORED IN FIRESTORE

export const loginProfile = async (email: string, pwd: string) => {
  // make a query
  const q = db.collection("users")
            .where('email','==',email)
            .where("password", "==", pwd)
            .limit(1)
  
  //const ref = await getDocs( q ); 
  // 

  //var data = []; 
  // var to return user data

  // map is like a for loop.// to loop over data.// works for arrays.
  //ref.docs.map( doc => {
  // var d = doc.data(); 
  // this is an object
  // d['id'] = doc.id; 
  // add doc id to data object
  // data.push( d );
  //})
  //if( data.length > 0 ) { 
  //    return data[0] 
  //}
  //else { 
  //    return null }
}