
// Import the functions you need from the SDKs you need
import { toast } from './toast';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase";
import firestore from 'firebase/firestore'
import { db } from './firebaseConfig';
import { auth } from './auth';

// create user to auth
export async function registerUser(email, password) {
  // const email = `${username}`
  // VERIFY EMAIL AFTER REGISTERATION / LOG IN
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    if (res.user.uid) {
      let id = res.user.uid;
      // console.log( id )
      return id
    }

  } catch (error) {
    // console.error( error.message )
    toast(error.message, 3000)
    return false
  }
}


// add user data to firestore
export const addUserData = async (fname, lname, email, pwd, usertype, uid) => {
  // console.log("aljkdbkkjb")
  try {
    // console.log("aljkdbkkjb")
    const resDoc = await db.collection("users")
      .add({
        firstname: fname,
        lastname: lname,
        email: email,
        isAdmin: usertype,
        password: pwd,
        userid: uid,
        
      })
    // console.log( resDoc )
    if (resDoc.id) return true;
    else return false;
  }
  catch (err) {
    console.log(err)
    return false;
  }
}

// reset pasword
export async function passwordRes(email) {
  try {
    const res = await firebase.auth().sendPasswordResetEmail(email)
    console.log(res)
    toast('Password reset email has been sent with instructions', 4000)
  }
  catch (error) {
    toast(error.message, 3000)
    return false
  }
}





// login user
export const loginUser = async (email, pwd) => {

  try {
    var q = db.collection("users")
     . where("password", "==", pwd)
      .where("email", "==", email)
      .limit(1)

    const docRef = await q.get()
    console.log(docRef.docs)
    var data = []
    docRef.docs.map(doc => {
      var d = doc.data();
      d["id"] = doc.id;
      data.push(d);
      // console.log( data )
    })

    if (data.length > 0) return data[0];
    else return false;
  }
  catch (err) {
    console.error(err)
    return false;
  }

}

