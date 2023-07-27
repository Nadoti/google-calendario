import { styled } from "styled-components";



export const FullScreen = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ScreenModal = styled.div`
    display: block;
    width: 100%;
    max-width: 550px;
    background: white;
    box-shadow: 0 24px 38px 3px rgba(0,0,0,.14), 
                0 9px 46px 8px rgba(0,0,0,.12), 
                0 11px 15px -7px rgba(0,0,0,.2);
    border-radius: 8px;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background: rgb(241,243,244);
`

export const ContentModal = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-right: 1rem;
`

export const TitleInput = styled.span`
    width: 100%;
    padding-left: 4.5rem;
    padding-top: 1rem;
    margin-bottom: 1rem;

    input {
        width: 100%;
        border: none;
        border-bottom: 2px solid rgb(241,243,244);
        font-size: 1.5rem;
        font-family: sans-serif;
        font-weight: normal;
        outline: none;
    }
`

export const TypesOfEvent = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 4rem;

    button {
        background: none;
        border: none;
        font-size: .875rem;
        color: #808080;
        padding: .5rem;
        border-radius: 4px;

        &:hover {
            background: #F5F5F5;
            /* background: rgb(191 219 254);
            color: rgb(37 99 235); */
        }
    }
`

export const DateContainer = styled.div`
    display: grid;
    grid-template-columns: 1rem 1fr;
    align-items: center;
`

export const SvgStylesContainer = styled.span`
    padding-left: 1rem;
`

export const Date = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding-left: 2.5rem;
    min-width: 300px;
`

export const Separator = styled.span`
    font-size: 2rem; 
    margin: 0 1rem;
`

export const AddTime = styled.button`
    width: 100%;
    display: block;
    font-size: 0.75rem;
    padding: 0.25rem 0;
    background: none;
    border: 1px solid #BCBFC2;
    border-radius: 4px;
    color: rgb(95,99,104);

    &:hover {
        background: #F9F9FA;
    }
`

export const AllDayLong = styled.div`
    width: 100%;
    padding-left: 4.5rem;
    margin-bottom: 2rem;
    label {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: 0.785rem;
        font-family: sans-serif;
    }
`

export const Checkbox = styled.input`
    width: 1rem;
    height: 1rem;
`

export const AddGuestContainer = styled.div`
    display: flex;
`

export const AddGuest = styled.div`
    margin-left: 2.5rem;

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

    &:hover, &:focus {
        background: #F2F2F2;
    }

    input {
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
    }
`