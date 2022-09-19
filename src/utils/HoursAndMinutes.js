import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const toHoursAndMinutes = (totalMinutes) => {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60)
    return `${padTo2Digits(hours)} h ${padTo2Digits(minutes)}`
}

const padTo2Digits = (num) => num.toString().padStart(2, '0')

const writeTheDate = (num) => {
    const indicator = num
    const indicatorToDate = indicator.toDate()
    const options = { year: 'numeric', month: '2-digit', day: 'numeric' }
    const dateToFormat = indicatorToDate.toLocaleDateString(undefined, options)
    const dateToString = ''+dateToFormat
    return dateToString
}

const readTheAuthor = (numUser) => {
    let authorName = ''
    if(numUser !== ""){
        const docRef = doc(db, "users", numUser)
        getDoc(docRef).then(docSnap => {
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                console.log("Author :", docSnap.data().displayName);
                authorName = docSnap.data().displayName
                console.log(typeof(authorName))
                console.log('authorName variable :', authorName)
            } else {
                console.log("No such document!");
            }
        })
    }
    return authorName
}

export {padTo2Digits, toHoursAndMinutes, writeTheDate, readTheAuthor}