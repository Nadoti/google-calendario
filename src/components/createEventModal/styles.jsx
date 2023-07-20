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
    padding-left: 4rem;
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
    padding: 1rem;
    display: flex;
    align-items: center;
`