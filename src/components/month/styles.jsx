import styled from 'styled-components'

export const ContainerMonth = styled.div`
  background: white;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
  border: 1px solid rgb(229 231 235);
`

export const ContentMain = styled.div`
  display: flex;
`