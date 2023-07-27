import { styled } from "styled-components";


export const FieldDate = styled.span`
    display: block;
    width: 100%;
    padding: 0.5rem;
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
    padding: 0.5rem ;

    &:focus {
        color: #505863;
    }
    
`