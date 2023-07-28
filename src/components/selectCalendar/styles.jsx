import { styled } from "styled-components";



export const ContainerInput = styled.section`
    width: 100%;
    position: relative;
    .inputFocus {
        background: red;
    }
`

export const FieldDate = styled.span`
    display: block;
    width: 100%;
    padding:  0.5rem;
    position: relative;
    background: ${ ({$isFocus}) => $isFocus  && '#F2F2F2'};
    border-radius: 4px;
    &:hover, &:focus {
        background: #F2F2F2;
    }

    
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        left: 0;
        bottom: 0;
        background: rgb(37 99 235);
        transform: scale(0, 1);
        transition: transform .4s ease;
    }

    &::after {
        transform: ${ ({$isFocus}) => $isFocus  && 'scale(1,1)'};
    }
        
    
   
`

export const InputStyle = styled.input`
    width: 100%;
    max-width: 100%;
    outline: none;
    border: none;
    background: transparent;
    position: relative;
    padding: 0.25rem 0 ;

    &:focus {
        background: #afd2fa;
        color: #505863;
    }
    
`

export const ModalSmallCalendar = styled.div`
    width: 100%;
    max-width: 300px;
    display: block;
    position: fixed;
    background: #fff;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-top: .5rem;
    box-shadow: 0 24px 38px 3px rgba(0,0,0,.14), 
                0 9px 46px 8px rgba(0,0,0,.12), 
                0 11px 15px -7px rgba(0,0,0,.2);
    border-radius: 8px;
    margin-top: .5rem;
    z-index: 10;
`