import styled from "styled-components";


export const ContainerDay = styled.div`
  border: 1px solid rgb(229 231 235);
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const DayHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Week = styled.p`
  font-size: 0.75rem;
  margin-top: 0.25rem;
`


export const Day = styled.p`
  font-size: 0.75rem;
  text-align: center;
  padding: 0.25rem;
  margin: 0.25rem 0;

  background: ${ ({$currentDay}) => $currentDay  && 'rgb(37 99 235)'};
  width: ${ ({$currentDay}) => $currentDay  && '1.5rem'};
  height: ${ ({$currentDay}) => $currentDay  && '1.5rem'};
  border-radius: ${ ({$currentDay}) => $currentDay  && '100%'};
  color: ${ ({$currentDay}) => $currentDay  && 'white'};

`



export const EventDay = styled.p`
  background: #D9D9D9;
  color: #858585;
  text-align: center;
  margin-bottom: 10px;
`