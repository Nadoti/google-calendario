import { Fragment, useContext, useEffect, useState } from 'react'
import * as S from './styles'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import dayjs from 'dayjs';
import { getMonth } from '../../utils/date';
import { ContextCalendar } from '../../context/ContextCalendar';

export default function SmallCalendar({ setValue }) {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  const { monthIndex } = useContext(ContextCalendar)

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx))
  }, [currentMonthIdx])

  useEffect(() => {
    setCurrentMonthIdx(monthIndex)
  }, [monthIndex])

  
  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1)
  }

  function handleNextMonth(){
    setCurrentMonthIdx(currentMonthIdx + 1)
  }

  return (
    <S.Container>
      <div>
        <S.HeaderSmallCalendar>
          <h2>{dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}</h2>
          <span>
            <S.BtnRightLeft>
              <button onClick={handlePrevMonth}>
                <BiChevronLeft />
              </button>
              <button onClick={handleNextMonth}>
                <BiChevronRight />
              </button>
            </S.BtnRightLeft>
          </span>
        </S.HeaderSmallCalendar>
        <S.SmallCalendar>
          {currentMonth[0].map((day, i) => (
            <S.Week key={i}>
              {day.locale("pt-br").format("ddd").charAt(0).toUpperCase()}
            </S.Week>
          ))}
          {currentMonth.map((row, i) => (
            <Fragment key={i}>
              {row.map((day, idx) => (
                <S.Days key={idx}>
                  <S.Day
                    $formatCurrentDay={day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY')}
                    onClick={() => {setValue(`${day.format('dddd')}, ${day.format('D')} de ${day.format('MMMM')}`)}}
                  >
                    {day.format('D')}
                  </S.Day>
                </S.Days>
              ))}
            </Fragment>
          ))}
        </S.SmallCalendar>
      </div>
    </S.Container>
  )
}
//`${day.format('dddd')}, ${day.format('D')} de ${day.format('MMMM')}`