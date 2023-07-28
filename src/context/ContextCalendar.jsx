import dayjs from "dayjs";
import React, { useState } from "react";


export const ContextCalendar = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    isModalSchedule: false, 
    setIsModalSchedule: (index) => {},
})

export function ContextAllCalendar({ children }) {

    const [monthIndex, setMonthIndex] = React.useState(dayjs().month())
    const [isModalSchedule, setIsModalSchedule] = useState(false)

    return (
        <ContextCalendar.Provider value={{
            monthIndex,
            setMonthIndex,
            isModalSchedule, 
            setIsModalSchedule
        }}>
            {children}
        </ContextCalendar.Provider>
    )
}