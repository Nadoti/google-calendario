import * as S from './styles'
import { AiOutlineClose } from "react-icons/ai";
import { FaGripLines } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { SelectCalendar } from '../selectCalendar';

export function CreateEventModal() {


    return (
        <S.FullScreen>
            <S.ScreenModal>
                <S.Header>
                    <FaGripLines />
                    <AiOutlineClose />
                </S.Header>
                <S.ContentModal>
                    <S.TitleInput>
                        <input type="text" placeholder='Add title' />
                    </S.TitleInput>
                    <S.TypesOfEvent>
                        <button aria-selected='off'>
                            Event
                        </button>
                        <button aria-selected='off'>
                            Out of office
                        </button>
                        <button aria-selected='off'>
                            Task
                        </button>
                        <button aria-selected='off'>
                            Appointment slots
                        </button>
                    </S.TypesOfEvent>
                    <S.DateContainer>
                        <BsClock />
                        <div>
                            <SelectCalendar />
                        </div>
                    </S.DateContainer>
                </S.ContentModal>
            </S.ScreenModal>
        </S.FullScreen>
    )
}