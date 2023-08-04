
import { styled } from "styled-components";


export const Container = styled.section`
  width: 100%;
`

export const HeaderSmallCalendar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding-left: 0.7rem;
  padding-right: 0.3rem;
  width: 100%;
  h2 {
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: normal;
    margin-top: 1rem;
  }
`

export const BtnRightLeft = styled.span`
    display: flex;
    align-items: center;
    gap: .5rem;

    button {
        background: none;
        border: none;
        font-size: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background: #FAFAFA;
        }
    }
`



export const SmallCalendar = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
`

export const Week = styled.span`
  width: 100%;
  font-size: 0.75rem;
  padding-top: 0.25rem;
  text-align: center;
`

export const Days = styled.button`
  background: none;
  border: none;
  width: 100%;
  padding: 0.6rem 0;
  font-size: 0.65rem;
`

export const Day = styled.span`
  padding: 0.5rem;
  
  background: ${ ({$formatCurrentDay}) => $formatCurrentDay  && 'rgb(37 99 235)'};
  width: ${ ({$formatCurrentDay}) => $formatCurrentDay   && '1.5rem'};
  height: ${ ({$formatCurrentDay}) => $formatCurrentDay   && '1.5rem'};
  border-radius: ${ ({$formatCurrentDay}) => $formatCurrentDay   && '100%'};
  color: ${ ({$formatCurrentDay}) => $formatCurrentDay   && 'white'};

  &:hover {
    /* background: rgb(191 219 254); */
    background: #F2F2F2;
    border-radius: 100%;
  }
`