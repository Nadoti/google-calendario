import * as S from './styles'
import createImg from '../../assets/plus.svg'

export function NewEvent() {
  return (
    <S.BtnCreate>
      <img src={createImg} alt="createEvent" />
      <span>Criar</span> 
    </S.BtnCreate>
  )
}