
import { useCallback, useEffect, useRef, useState } from 'react'
import SmallCalendar from '../smallCalendar'
import * as S from './styles'
import dayjs from 'dayjs'



export function SelectCalendar({ name }) {
    const dateFormat = dayjs()
    const [dateValue, setDateValue] = useState(`${dateFormat.format('dddd')}, ${dateFormat.format('MMMM')} ${dateFormat.format('D')}`)
    const [isModal, setIsModal] = useState(false)
    const modalRef = useRef(null);

    function handleClickOutside(event) {
        if(event.target.nodeName === 'INPUT' && event.target.name === name) return
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsModal(false)
        }
    };

    function handleHandleChange({ target }) {
        // setDateValue
    }

    function handleFocusOpenCalendarModal(element) {
        if(isModal) return
        setIsModal(true)
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside]);
    




    const fraseFinal = dateValue.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    return (
        <S.ContainerInput>
            <S.FieldDate $isFocus={isModal}>
                <S.InputStyle 
                    name={name} 
                    id={name}
                    type="text" 
                    value={fraseFinal}
                    onChange={handleHandleChange} 
                    onFocus={handleFocusOpenCalendarModal}
                    $isFocus={isModal}
                />
            </S.FieldDate>
            {isModal && (
                <S.ModalSmallCalendar ref={modalRef}>
                    <SmallCalendar />
                </S.ModalSmallCalendar>
            )}
        </S.ContainerInput>
    )
}