
import { Fragment } from 'react'
import * as S from './styles'
import { Day } from '../days'

export function Month({ month }) {

    return (
        <S.ContainerMonth>
            {month.map((row, i) => (
                <Fragment key={i}>
                    {row.map((day, idx) => (
                        <Day day={day} key={idx} rowIdx={i} />
                    ))}
                </Fragment>
            ))}
        </S.ContainerMonth>
    )
}