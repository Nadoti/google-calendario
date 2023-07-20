import * as S from './styles'
import { NewEvent } from '../newEvent';
import SmallCalendar from '../smallCalendar';

export function NavBar() {
  return (
    <S.Container>
      <NewEvent />
      <SmallCalendar />
    </S.Container>
  )
}