import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import * as enums from '../../utils/enums/Contact'
import { changeFilter } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

export type Props = {
  legend: string
  critery: 'type' | 'status' | 'phoneType' | 'all'
  value?: enums.Type | enums.Status | enums.PhoneType
}

const FilterCard = ({ legend, critery, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, contacts } = useSelector((state: RootReducer) => state)

  const ItsActive = () => {
    const sameCritery = filter.critery === critery
    const sameValue = filter.value === value

    return sameCritery && sameValue
  }

  const countContacts = () => {
    if (critery === 'all') {
      return contacts.items.length
    }
    if (critery === 'type') {
      return contacts.items.filter((contact) => contact.type === value).length
    }
    if (critery === 'status') {
      return contacts.items.filter((contact) => contact.status === value).length
    }
    if (critery === 'phoneType') {
      return contacts.items.filter((contact) => contact.phoneType === value)
        .length
    }

    return 0
  }

  const toFilter = () => {
    dispatch(
      changeFilter({
        critery,
        value
      })
    )
  }

  const counter = countContacts()
  const active = ItsActive()

  return (
    <S.Card onClick={toFilter}>
      <S.Label active={active}>{legend}</S.Label>
      <S.Counter active={active}>{counter}</S.Counter>
    </S.Card>
  )
}

export default FilterCard
