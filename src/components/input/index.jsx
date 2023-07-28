import { useEffect, useRef, useState } from 'react';
import * as S from './styles'

export function Input({ placeholder }) {
    
    const [isModal, setIsModal] = useState(false)
    const modalRef = useRef(null);

    function handleClickOutside(event) {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsModal(false)
        }
    };

    function handleFocusOpenCalendarModal(element) {
        if(isModal) return
        setIsModal(true)
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside]);

    return (
        <S.FieldDate $isFocus={isModal} ref={modalRef}>
            <S.InputStyle 
                // name={name} 
                // id={name}
                type="text" 
                // value={fraseFinal}
                // onChange={handleHandleChange} 
                onFocus={handleFocusOpenCalendarModal}
                $isFocus={isModal}
                placeholder={placeholder}
            />
        </S.FieldDate>
    )
}