import * as S from './styles'
import dayjs from 'dayjs'
import "dayjs/locale/pt"
import { ContextCalendar } from '../../context/ContextCalendar'
import { useContext } from 'react'

export function Day({ day, rowIdx }) {
  const {  setIsModalSchedule } = useContext(ContextCalendar)
  return (
    <S.ContainerDay onClick={() => setIsModalSchedule(true)}>
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
      
    </S.ContainerDay>
  )
}