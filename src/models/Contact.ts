import * as enums from '../utils/enums/Contact'

class Contact {
  name: string
  email: string
  phone: string
  type: enums.Type
  status: enums.Status
  phoneType: enums.PhoneType
  id: number

  constructor(
    name: string,
    email: string,
    phone: string,
    type: enums.Type,
    status: enums.Status,
    phoneType: enums.PhoneType,
    id: number
  ) {
    this.name = name
    this.email = email
    this.phone = phone
    this.type = type
    this.status = status
    this.phoneType = phoneType
    this.id = id
  }
}

export default Contact
