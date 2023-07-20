import SmallCalendar from '../smallCalendar'
import * as S from './styles'



export function SelectCalendar() {


    return (
        <S.ContainerInput>
            <S.InputStyle type="text" />
            <S.ModalSmallCalendar>
                <SmallCalendar />
            </S.ModalSmallCalendar>
        </S.ContainerInput>
    )
}