export interface customer {
  id: number,
  firstname: string,
  lastname: string,
  dateofbirth: Date,
  isPremiumCustomer: boolean,
  addresses: Address[],
  addressEdited: string,
  premiumEdited:string
}



export interface Address {
  street: string,
  postCode: number,
  city: string,

}
