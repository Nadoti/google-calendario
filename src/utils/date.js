import dayjs from "dayjs";



export function getMonth(month = dayjs().month()) {
    const year = dayjs().year()

    const firstDay = dayjs(new Date(year,month, 1)).day()
    let currentMonthCount = 0 - firstDay

    const daysMatriz = new Array(6).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++
            return dayjs(new Date(year, month, currentMonthCount))
        })
    })

    return daysMatriz
}