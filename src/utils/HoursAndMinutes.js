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
                authorName = docSnap?.data()?.displayName
            }
        })
    }
    return authorName
}

export {padTo2Digits, toHoursAndMinutes, writeTheDate, readTheAuthor}