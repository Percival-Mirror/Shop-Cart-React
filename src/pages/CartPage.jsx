import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartPage = () => {

  const { shopList, increase, decrease, deletePurchase, buy } = useContext(CartContext)

  const calcularTotal = () => {
    return shopList.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  const buyClick = () => {
    alert('Compra Realizada con éxito')
    buy()
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Eliminate</th>
          </tr>
        </thead>
        <tbody>
          {
            shopList.map(item => {
              return (
                <tr key={item.id}>
                  <th>{item.title}</th>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-ouline-primary"
                      onClick={() => decrease(item.id)}
                    >-</button>
                    <button className="btn btn-primary">{item.quantity}</button>
                    <button
                      className="btn btn-ouline-primary"
                      onClick={() => increase(item.id)}
                    >+</button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deletePurchase(item.id)}>
                      🗑️
                    </button>
                  </td>
                </tr>)
            })
          }
          <th><b>TOTAL: </b></th>
          <td></td>
          <td></td>
          <td>${calcularTotal()}</td>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
        className="btn btn-primary"
        onClick={buyClick}
        disabled={shopList.length < 1}>Comprar</button>
      </div>
    </>
  )
}
