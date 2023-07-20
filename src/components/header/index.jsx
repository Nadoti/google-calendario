import React, { useContext } from 'react'
import * as S from './styles'
import logoCalendar from '../../assets/logoCalendar.png'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import dayjs from 'dayjs';
import "dayjs/locale/pt";
import { ContextCalendar } from '../../context/ContextCalendar';


export function Header() {

    const { monthIndex, setMonthIndex} = useContext(ContextCalendar)

    function handlePrevMonth() {
        setMonthIndex(monthIndex -1)
    }

    function handleNextMonth() {
        setMonthIndex(monthIndex +1)
    }

    function handleCurrentMonth() {
        setMonthIndex(dayjs().month())
    }

    return (
        <S.Container>
            <S.TitleCalendar>
                <img src={logoCalendar}/>
                <h1>Calendário</h1>
            </S.TitleCalendar>
            <S.BtnToday>
                <button onClick={handleCurrentMonth}>Hoje</button>
            </S.BtnToday>
            <S.BtnRightLeft>
                <button onClick={handlePrevMonth}>
                <BiChevronLeft />
                </button>
                <button onClick={handleNextMonth}>
                <BiChevronRight />
                </button>
            </S.BtnRightLeft>
            <S.DayYear>
                {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
            </S.DayYear>
        </S.Container>
    )
}