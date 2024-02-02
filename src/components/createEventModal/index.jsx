import * as S from './styles'
import { AiOutlineClose } from "react-icons/ai";
import { FaGripLines } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsClock } from "react-icons/bs";
import { RiDoorOpenLine } from "react-icons/ri";
import { PiMapPin } from "react-icons/pi";
import { SelectCalendar } from '../selectCalendar';
import { Input } from '../input';
import { ContextCalendar } from '../../context/ContextCalendar';
import { useContext, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

export function CreateEventModal() {
    const {  setIsModalSchedule, setEventDay, modalEventDay } = useContext(ContextCalendar)
    const [title,setTitle] = useState('')
    const [startDate,setStartDate] = useState(modalEventDay)
    const [endDate,setEndDate] = useState(`${dayjs().format('dddd')}, ${dayjs().format('D')} de ${dayjs().format('MMMM')}`)
    const modalRef = useRef(null);

    function handleClickOutside(event) {
        if(event.target.nodeName === 'INPUT' && event.target.name === name) return
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsModalSchedule(false)
        }
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside]);

    // function handleNewEventDay() {
    //     console.log(title)
    //     console.log(startDate)
    //     console.log(endDate)
    // }

    function handleSaveEvent() {
        const getEventLocalStorage = JSON.parse(localStorage.getItem('event')) || [];
    
        const event = {
            title,
            startDate
        };
    
        const arrayEvent = [...getEventLocalStorage, event];
    
        localStorage.setItem("event", JSON.stringify(arrayEvent));
        window.location.reload()
    }
    

    return (
        <S.FullScreen ref={modalRef}>
            <S.ScreenModal>
                <S.Header>
                    <FaGripLines />
                    <button onClick={() => setIsModalSchedule(false)}>
                        <AiOutlineClose />
                    </button>
                </S.Header>
                <S.ContentModal>
                    <S.TitleInput>
                        <input type="text" placeholder='Add title' value={title} onChange={({ target }) => setTitle(target.value)} />
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
                            <SelectCalendar name='startDate' value={startDate} setValue={setStartDate}/>
                            {/* <S.Separator>-</S.Separator> */}
                            {/* <SelectCalendar name='endDate' value={endDate} setValue={setEndDate}/> */}
                            {/* <S.AddTime>Adicionar horário</S.AddTime> */}
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
                        <button onClick={handleSaveEvent}>Salvar</button>
                    </S.SaveNewScheduleContainer>
                </S.ContentModal>
            </S.ScreenModal>
        </S.FullScreen>
    )
}