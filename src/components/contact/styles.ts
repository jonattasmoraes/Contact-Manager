import styled from 'styled-components'
import variables from '../../styles/variables'

type TagProps = {
  type?: string
  status?: string
  phoneType?: string
}

function returnBackColor(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'Ativo') return variables.lawnGreen
    if (props.status === 'Bloqueado') return variables.red
  } else if ('type' in props) {
    if (props.type === 'Família') return variables.gold
    if (props.type === 'Amigos') return variables.rebeccaPurple
    if (props.type === 'Trabalho') return variables.sienna
    if (props.type === 'Emergência') return variables.orange
  } else if ('phoneType' in props) {
    if (props.phoneType === 'Fixo') return variables.navy
    if (props.phoneType === 'Celular') return variables.blue
  }
  return '#ccc'
}

export const ContactCard = styled.div`
  width: calc(100vw - 60px);
  display: block;
  margin: 0 auto;
  margin-bottom: 24px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 8px;

  @media screen and (min-width: 960px) {
    width: 95%;
  }
`

export const MobileTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 959.9px) {
    display: none;
  }
`

export const ContactTitle = styled.h3`
  width: 38%;
  padding-left: 6px;
  font-size: 18px;
  font-weight: bold;
`

export const ContactTitlePhone = styled.h3`
  width: 20%;
  padding-left: 6px;
  font-size: 18px;
  font-weight: bold;
`

export const ContactTitleMobile = styled.h3`
  padding-left: 6px;
  font-size: 18px;
  font-weight: bold;

  @media screen and (min-width: 960px) {
    display: none;
  }
`

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  @media screen and (max-width: 959.9px) {
    display: block;
  }
`

export const ContactData = styled.textarea`
  background-color: transparent;
  height: 40px;
  width: 100%;
  padding: 6px 16px 0 6px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  resize: none;

  @media screen and (min-width: 960px) {
    display: flex;
    width: 38%;
  }
`

export const ContactDataPhone = styled.textarea`
  background-color: transparent;
  height: 40px;
  width: 100%;
  padding: 6px 16px 0 6px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  resize: none;

  @media screen and (min-width: 960px) {
    display: flex;
    width: 20%;
  }
`

export const ContactTag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  background-color: ${(props) => returnBackColor(props)};
  border-radius: 8px;
  margin-right: 16px;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  margin-top: 16px;
`

export const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #2f3640;
  margin-right: 16px;
`
export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export const CancelAndRemoveButton = styled(Button)`
  background-color: ${variables.red};
`
