import dayjs from "dayjs";
import React, { useState } from "react";


export const ContextCalendar = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    isModalSchedule: false, 
    setIsModalSchedule: (index) => {},
    valueDateSelected: '', 
    setValueDateSelected: (index) => {},
    eventDay: [],
    setEventDay: (index) => {}
})

export function ContextAllCalendar({ children }) {

    const [monthIndex, setMonthIndex] = React.useState(dayjs().month())
    const [isModalSchedule, setIsModalSchedule] = useState(false)
    const [valueDateSelected, setValueDateSelected] = useState('')
    const [eventDay, setEventDay] = useState([])
    const [modalEventDay, setModalEventDay] = useState('')

    return (
        <ContextCalendar.Provider value={{
            monthIndex,
            setMonthIndex,
            isModalSchedule, 
            setIsModalSchedule,
            valueDateSelected,
            setValueDateSelected,
            eventDay, 
            setEventDay,
            modalEventDay,
            setModalEventDay
        }}>
            {children}
        </ContextCalendar.Provider>
    )
}