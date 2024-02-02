import { useContext, useEffect, useState } from "react"
import { getMonth } from "./utils/date"
import * as S from './styles/styles.app'
import { Header } from "./components/header"
import { Month } from "./components/month"
import { ContextCalendar } from "./context/ContextCalendar"
import { NavBar } from "./components/navbar"
import { CreateEventModal } from "./components/createEventModal"

function App() {

  const { monthIndex, isModalSchedule } = useContext(ContextCalendar)
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])
  
  return (
    <S.Container>
      <div>
        <Header />
      </div>
      <S.ContentMain>
        <NavBar />
        <Month month={currentMonth} />
      </S.ContentMain>
      {isModalSchedule && <CreateEventModal />}
    </S.Container>
  )
}

export default App
