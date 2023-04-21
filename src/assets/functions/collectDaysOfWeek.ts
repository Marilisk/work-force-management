


export function getLastDayOfMonth(year: number, month: number) {
    const result = new Date(year, month + 1, 0).getDate()
    return result
}

export function collectDaysOfWeek(init: number) {
    const days:number[] = []
    
    const today = new Date(init)
    const todayMidnightTS = new Date(new Date(new Date(today.setHours(0)).setMinutes(0))).setSeconds(0)
    const todayDayOfWeek = new Date(todayMidnightTS).getDay()  
    
    const dayTS = 86400000

    for (let i = todayDayOfWeek-1; i > 0; i--) {
        days.push(todayMidnightTS - i * dayTS)
    }

    for (let i = 0; i < (8 - todayDayOfWeek); i++) {
        days.push(todayMidnightTS + i * dayTS)
    }

    return days
}