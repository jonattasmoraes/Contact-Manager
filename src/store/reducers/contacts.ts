import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/Contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      name: 'Ana Beatriz',
      email: 'anaB@hotmail.com',
      phone: '(11) 11111-1111',
      type: enums.Type.TRABALHO,
      status: enums.Status.ATIVO,
      phoneType: enums.PhoneType.CELULAR,
      id: 1
    },
    {
      name: 'Ruan Carlos',
      email: 'ruan166@gmail.com',
      phone: '(55) 99999-9999',
      type: enums.Type.TRABALHO,
      status: enums.Status.ATIVO,
      phoneType: enums.PhoneType.CELULAR,
      id: 4
    },
    {
      name: 'Policia Militar',
      email: 'policia@gov.br',
      phone: '190',
      type: enums.Type.EMERGENCIA,
      status: enums.Status.ATIVO,
      phoneType: enums.PhoneType.FIXO,
      id: 5
    },
    {
      name: 'Marcos Paulo',
      email: 'marcospaulo@hotmail.com',
      phone: '(41) 99999-9999',
      type: enums.Type.AMIGOS,
      status: enums.Status.ATIVO,
      phoneType: enums.PhoneType.CELULAR,
      id: 6
    },
    {
      name: 'Jônattas Moraes',
      email: 'jonatas.moraes.09@hotmail.com',
      phone: '(41) 99999-9999',
      type: enums.Type.FAMILIA,
      status: enums.Status.ATIVO,
      phoneType: enums.PhoneType.CELULAR,
      id: 7
    },
    {
      name: 'Ana Julia',
      email: 'anajulia@hotmail.com',
      phone: '(41) 99999-9999',
      type: enums.Type.AMIGOS,
      status: enums.Status.BLOQUEADO,
      phoneType: enums.PhoneType.CELULAR,
      id: 8
    },
    {
      name: 'Tiago Teixeira',
      email: 'tiago100@hotmail.com',
      phone: '(41) 3999-9999',
      type: enums.Type.FAMILIA,
      status: enums.Status.ATIVO,
      phoneType: enums.PhoneType.FIXO,
      id: 9
    },
    {
      name: 'Silvana teles',
      email: 'silvateles@hotmail.com',
      phone: '(41) 3699-9999',
      type: enums.Type.TRABALHO,
      status: enums.Status.BLOQUEADO,
      phoneType: enums.PhoneType.FIXO,
      id: 10
    }
  ]
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((contact) => contact.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    }
  }
})

export const { remove, edit } = contactSlice.actions

export default contactSlice.reducer
