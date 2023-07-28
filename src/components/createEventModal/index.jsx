import * as S from './styles'
import { AiOutlineClose } from "react-icons/ai";
import { FaGripLines } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsClock } from "react-icons/bs";
import { RiDoorOpenLine } from "react-icons/ri";
import { PiMapPin } from "react-icons/pi";
import { SelectCalendar } from '../selectCalendar';
import { Input } from '../input';

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
                        <S.SvgStylesContainer>
                            <BsClock />
                        </S.SvgStylesContainer>
                        <S.Date>
                            <SelectCalendar name='startDate'/>
                            <S.Separator>-</S.Separator>
                            <SelectCalendar name='endDate'/>
                            <S.AddTime>Adicionar horário</S.AddTime>
                        </S.Date>
                    </S.DateContainer>
                    <S.AllDayLong>
                        <label>
                            <S.Checkbox type="checkbox" />
                            Dia inteiro
                        </label>
                    </S.AllDayLong>
                    <S.AddGuestContainer>
                        <S.SvgStylesContainer>
                            <FiUsers />
                        </S.SvgStylesContainer>
                        <S.AddGuest>
                            <Input placeholder="Adicionar convidados"/>
                        </S.AddGuest>
                    </S.AddGuestContainer>
                    <S.AddRoomContainer>
                        <S.SvgStylesContainer>
                            <RiDoorOpenLine />
                        </S.SvgStylesContainer>
                        <S.AddGuest>
                            <Input placeholder="Adicionar Salas"/>
                        </S.AddGuest>
                    </S.AddRoomContainer>
                    <S.AddLocalContainer>
                        <S.SvgStylesContainer>
                            <PiMapPin />
                        </S.SvgStylesContainer>
                        <S.AddGuest>
                            <Input placeholder="Adicionar Local"/>
                        </S.AddGuest>
                    </S.AddLocalContainer>
                    <S.SaveNewScheduleContainer>
                        <button>Salvar</button>
                    </S.SaveNewScheduleContainer>
                </S.ContentModal>
            </S.ScreenModal>
        </S.FullScreen>
    )
}