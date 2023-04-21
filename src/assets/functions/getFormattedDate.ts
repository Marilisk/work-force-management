export const getFormattedDate = (date: Date) => {

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        /* hour: "numeric",
        minute: "numeric" */
    }
    const timeformat = new Intl.DateTimeFormat('ru-RU', options)
    const dateAndTime = timeformat.format(date)

    return dateAndTime
}

/* export const brieflyformatDate = (date: Date) => {

    const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }
    const timeformat = new Intl.DateTimeFormat('ru-RU', options)
    const dateAndTime = timeformat.format(date)

    return dateAndTime
} */