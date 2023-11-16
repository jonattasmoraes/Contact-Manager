import * as S from './styles'

import FilterCard from '../../components/filterCard'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <FilterCard legend="Todos" counter={5} />
      <FilterCard legend="Família" counter={7} />
      <FilterCard legend="Trabalho" counter={8} />
      <FilterCard legend="Emergencia" counter={2} />
      <FilterCard legend="Bloqueado(s)" counter={9} active />
    </S.Aside>
  )
}
export default Sidebar
