const toHoursAndMinutes = (totalMinutes) => {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60)
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`
}

const padTo2Digits = (num) => num.toString().padStart(2, '0')

export {padTo2Digits, toHoursAndMinutes}