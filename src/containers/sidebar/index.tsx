import * as S from './styles'
import FilterCard from '../../components/filterCard/index'

const Sidebar = () => (
  <S.Aside>
    <FilterCard legend="todos" counter={5} />
    <FilterCard legend="Família" counter={7} />
    <FilterCard legend="Trabalho" counter={8} />
    <FilterCard legend="Emergencia" counter={2} />
    <FilterCard legend="Bloqueado(s)" counter={9} active />
  </S.Aside>
)

export default Sidebar
