import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import FilterCard from '../../components/filterCard'
import { RootReducer } from '../../store'

import * as enums from '../../utils/enums/Contact'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <FilterCard value={enums.Type.FAMILIA} critery="type" legend="Família" />
      <FilterCard value={enums.Type.AMIGOS} critery="type" legend="Amigos" />
      <FilterCard
        value={enums.Type.TRABALHO}
        critery="type"
        legend="Trabalho"
      />
      <FilterCard
        value={enums.Type.EMERGENCIA}
        critery="type"
        legend="Emergência"
      />
      <FilterCard
        value={enums.PhoneType.CELULAR}
        critery="phoneType"
        legend="Celular"
      />
      <FilterCard
        value={enums.PhoneType.FIXO}
        critery="phoneType"
        legend="Fixo"
      />
      <FilterCard
        value={enums.Status.ATIVO}
        critery="status"
        legend="Ativo(s)"
      />
      <FilterCard
        value={enums.Status.BLOQUEADO}
        critery="status"
        legend="Bloqueado(s)"
      />
      <FilterCard critery="all" legend="Todos" />
    </S.Aside>
  )
}
export default Sidebar
