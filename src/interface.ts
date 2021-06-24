export interface IItem {
	type: string
	id: string
	title: string
	value: number
	description: string
	quantity: number
}

export interface ICartState {
  items: IItem[]
  total: number
}

export interface IRootState {
  cart: ICartState
}