import { styled } from "styled-components";



export const ContainerInput = styled.section`
    width: 100%;
    position: relative;
`

export const InputStyle = styled.input`
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid rgb(241,243,244);
`

export const ModalSmallCalendar = styled.div`
    width: 100%;
    max-width: 300px;
    display: block;
    position: fixed;
    background: #fff;
    padding-left: 1rem;
    padding-bottom: 1rem;
    box-shadow: 0 24px 38px 3px rgba(0,0,0,.14), 
                0 9px 46px 8px rgba(0,0,0,.12), 
                0 11px 15px -7px rgba(0,0,0,.2);
    border-radius: 8px;
    margin-top: .5rem;
`