import { styled } from "styled-components";


export const Container = styled.header`
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    gap: 3rem;
`

export const TitleCalendar = styled.span`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        width: 3rem;
    }

    h1 {
        font-size: 1.5rem;
        font-family: sans-serif;
        font-weight: normal;
    }
`

export const BtnToday = styled.span`

    button {
        border: 1px solid rgb(229 231 235);
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        margin-right: 1.25rem;
        background: none;
        color: rgb(107 114 128);
    }
`

export const BtnRightLeft = styled.span`
    display: flex;
    align-items: center;
    gap: 1rem;
    button {
        background: none;
        border: none;
        font-size: 1.5rem;
    }
`

export const DayYear = styled.p`
    font-size: 1.25rem;
    color: rgb(107 114 128);
`