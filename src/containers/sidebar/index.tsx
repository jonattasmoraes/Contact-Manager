import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import FilterCard from '../../components/filterCard'

import * as enums from '../../utils/enums/Contact'
import { Button } from '../../styles'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const navigate = useNavigate()

  return (
    <S.Aside>
      {showFilters ? (
        <>
          <FilterCard
            value={enums.Type.FAMILIA}
            critery="type"
            legend="Família"
          />
          <FilterCard
            value={enums.Type.AMIGOS}
            critery="type"
            legend="Amigos"
          />
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
        </>
      ) : (
        <Button onClick={() => navigate('/')}>Voltar aos contatos</Button>
      )}
    </S.Aside>
  )
}
export default Sidebar
