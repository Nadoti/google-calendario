import * as S from './styles'
import createImg from '../../assets/plus.svg'
import { useContext } from 'react'
import { ContextCalendar } from '../../context/ContextCalendar'

export function NewEvent() {
  const {  setIsModalSchedule } = useContext(ContextCalendar)
  return (
    <S.BtnCreate onClick={() => setIsModalSchedule(true)}>
      <img src={createImg} alt="createEvent" />
      <span>Criar</span> 
    </S.BtnCreate>
  )
}