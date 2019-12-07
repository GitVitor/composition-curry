export const orderLines: IOrderLine[] = [
  {
    productCode: 'AAA',
    qty: 2,
    total: 19.98
  },
  {
    productCode: 'BBB',
    qty: 1,
    total: 1.99
  },
  {
    productCode: 'CCC',
    qty: 3,
    total: 3.99
  }
]

export interface IOrderLine {
  productCode: string
  qty: number
  total: number
}
