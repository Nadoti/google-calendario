import * as S from './styles'
import dayjs from 'dayjs'
import "dayjs/locale/pt"
import { ContextCalendar } from '../../context/ContextCalendar'
import { useContext, useEffect, useState, Fragment } from 'react'

export function Day({ day, rowIdx }) {
  const {  setIsModalSchedule, setModalEventDay } = useContext(ContextCalendar)
  const [eventDay, setEventDay] = useState([])

  useEffect(() => {
    const event = JSON.parse(localStorage.getItem('event'))
    setEventDay(event)
    // setEventDay(event)
  },[])
  return (
    <S.ContainerDay onClick={() => {
      setModalEventDay(`${day.format('dddd')}, ${day.format('D')} de ${day.format('MMMM')}`)
      setIsModalSchedule(true)
    }}>
      <S.DayHeader>
        {rowIdx === 0 && (
          <S.Week>
            {day.locale("pt-br").format("ddd").toUpperCase()}
          </S.Week>
        )}
        <S.Day $currentDay={day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY')}>
          {day.format('D')}
        </S.Day>
      </S.DayHeader>
      {eventDay ? (
        eventDay.map((event, i) => (
          <Fragment key={i}>
            {event.startDate === `${day.format('dddd')}, ${day.format('D')} de ${day.format('MMMM')}` && (
              <S.EventDay>{event.title}</S.EventDay>
            )}
          </Fragment>
        ))
      ) : null}
    </S.ContainerDay>
  )
}