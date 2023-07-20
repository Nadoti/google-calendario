import * as S from './styles'
import dayjs from 'dayjs'
import "dayjs/locale/pt"

export function Day({ day, rowIdx }) {
    // console.log(day)
  return (
    <S.ContainerDay >
      <S.DayHeader>
        {rowIdx === 0 && (
          <S.Week>
            {day.locale("pt-br").format("ddd").toUpperCase()}
          </S.Week>
        )}
        <S.Day $currentDay={day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY')}>
          {day.format('DD')}
        </S.Day>
      </S.DayHeader>
      
    </S.ContainerDay>
  )
}