import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js'
import { getFirestore, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyCluB5nhyjiSG-uDkUiH_xIhvapnUwXgUw",
    authDomain: "becomeshakespeare-51d08.firebaseapp.com",
    databaseURL: "https://becomeshakespeare-51d08-default-rtdb.firebaseio.com",
    projectId: "becomeshakespeare-51d08",
    storageBucket: "becomeshakespeare-51d08.appspot.com",
    messagingSenderId: "889324711482",
    appId: "1:889324711482:web:d4723e8034a20ca3fe0f03",
    measurementId: "G-33GFFS7JXE"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)


export const getdata = async (docname, docLoc) => {
    // alert('thik hai')

    const docRef = doc(db, docname, docLoc)
    const firebasedata = await getDoc(docRef);
    const data = await firebasedata.data()
    // console.log(data);
    return data
}

export const setdata = async (docname, docloc, data) => {


    const docRef = doc(db, docname, docloc)
    await setDoc(docRef, data)
    alert('Your packege data insert successfully...')

}
export const getdata2 = async (docname, docLoc) => {
    // alert('thik hai')
    const docRef = doc(db, docname, docLoc)
    getDoc(docRef).then(data => {
        console.log(data)
    })
}
export const setdata2 = async (docname, docloc, data) => {


    const docRef = doc(db, docname, docloc)
    await setDoc(docRef, data)


}