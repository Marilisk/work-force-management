

export function getDayOfWeekText(timestamp: number) {
    let text = ''

    switch (new Date(timestamp).getDay()) {
        case 1:
            text = 'Понедельник'
            break;
        case 2:
            text = 'Вторник'
            break;
        case 3:
            text = 'Среда'
            break;
        case 4:
            text = 'Четверг'
            break;
        case 5:
            text = 'Пятница'
            break;
        case 6:
            text = 'Суббота'
            break;
        case 0:
            text = 'Воскресенье'
            break;
    }

    return text
}