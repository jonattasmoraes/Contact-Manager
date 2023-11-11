import * as S from './styles'

export type Props = {
  active?: boolean
  counter: number
  legend: string
}

const FilterCard = ({ active, counter, legend }: Props) => (
  <S.Card>
    <S.Label active={active}>{legend}</S.Label>
    <S.Counter active={active}>{counter}</S.Counter>
  </S.Card>
)

export default FilterCard
