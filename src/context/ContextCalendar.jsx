import dayjs from "dayjs";
import React from "react";


export const ContextCalendar = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
})

export function ContextAllCalendar({ children }) {

    const [monthIndex, setMonthIndex] = React.useState(dayjs().month())

    return (
        <ContextCalendar.Provider value={{
            monthIndex,
            setMonthIndex
        }}>
            {children}
        </ContextCalendar.Provider>
    )
}