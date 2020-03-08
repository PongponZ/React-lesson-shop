import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

const config = {
    apiKey: "AIzaSyBSzSzBb38D4hEGaYFHU9JWlWObZ5Mgn-s",
    authDomain: "react-lesson-db.firebaseapp.com",
    databaseURL: "https://react-lesson-db.firebaseio.com",
    projectId: "react-lesson-db",
    storageBucket: "react-lesson-db.appspot.com",
    messagingSenderId: "294268164683",
    appId: "1:294268164683:web:4d35ef2d8625a78bba4bce",
    measurementId: "G-EXHS2FLK2N"
}

export const createUserProfileDocument = async(userAuth,additional) =>{
    //ฟังชั่นนี้ใช้ในการสร้างข้อมูล user ที่ firebase
    //เช็คว่าล็อคอินหรือถ้าไม่ได้ล็อกอินไม่ต้องทำฟังชั่นนี้่
    if(!userAuth) return;

    //ดึงข้อมูลจาก firebase document users ด้วย userAuth.uid
    //ทำการ get ข้อมูลมา
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    //เช็คว่ามีข้อมูลอยู่ในฐานข้อมูลหรือไม่
    if(!snapShot.exists){
        const {displayName ,email} = userAuth
        const createAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additional
            })
        } catch (error) {
            console.log('error create user ', error.message)
        }
    }
    return userRef
}




firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

export const addCollectionAndDocument = async (collectionKey, collectionObject) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch();

    collectionObject.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const converCollectionToMap = (collection) => {
    const tranformedCollection = collection.docs.map( doc => {
        const {title, items} = doc.data()
        return{
            rounteName: encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    })

    return tranformedCollection.reduce((accumulator, collection ) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    },{})
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase