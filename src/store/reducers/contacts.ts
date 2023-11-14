import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/Contact'

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [
    new Contact(
      'Ana Beatriz',
      'anaB@hotmail.com',
      '(11) 11111-1111',
      enums.Type.TRABALHO,
      enums.Status.ATIVO,
      enums.PhoneType.CELULAR,
      1
    ),
    new Contact(
      'Ruan Carlos',
      'ruan166@gmail.com',
      '(55) 99999-9999',
      enums.Type.TRABALHO,
      enums.Status.ATIVO,
      enums.PhoneType.CELULAR,
      4
    ),
    new Contact(
      'Policia Militar',
      'policia@gov.br',
      '190',
      enums.Type.EMERGENCIA,
      enums.Status.ATIVO,
      enums.PhoneType.FIXO,
      5
    ),
    new Contact(
      'Marcos Paulo',
      'marcospaulo@hotmail.com',
      '(41) 99999-9999',
      enums.Type.AMIGOS,
      enums.Status.ATIVO,
      enums.PhoneType.CELULAR,
      6
    ),
    new Contact(
      'Jônattas Moraes',
      'jonatas.moraes.09@hotmail.com',
      '(41) 99999-9999',
      enums.Type.FAMILIA,
      enums.Status.ATIVO,
      enums.PhoneType.CELULAR,
      7
    ),
    new Contact(
      'Ana Julia',
      'anajulia@hotmail.com',
      '(41) 99999-9999',
      enums.Type.AMIGOS,
      enums.Status.BLOQUEADO,
      enums.PhoneType.CELULAR,
      8
    ),
    new Contact(
      'Tiago Teixeira',
      'tiago100@hotmail.com',
      '(41) 3999-9999',
      enums.Type.FAMILIA,
      enums.Status.ATIVO,
      enums.PhoneType.FIXO,
      9
    ),
    new Contact(
      'Silvana teles',
      'silvateles@hotmail.com',
      '(41) 3699-9999',
      enums.Type.TRABALHO,
      enums.Status.BLOQUEADO,
      enums.PhoneType.FIXO,
      10
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      return state.filter((contact) => contact.id !== action.payload)
    }
  }
})

export const { remove } = contactSlice.actions

export default contactSlice.reducer
