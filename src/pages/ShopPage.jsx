import { Card } from "../components/Card"
import { useContext} from "react"
import { ProductsContext } from "../context/ProductsContext"
import { CartContext } from "../context/CartContext"

export const ShopPage = () => {

    const { products } = useContext(ProductsContext)

    const { addPurchase, deletePurchase } = useContext(CartContext)

    const handleAdd = (purchase) => {
        addPurchase(purchase)
    }

    const handleDelete = (id) => {
        deletePurchase(id)
    }

    return (
        <>
            <h1>Shoppy Cart</h1>
            <hr></hr>

            {products.map(product => (
                <Card
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    key={product.id}
                    handleAdd={() => handleAdd(product)}
                    handleDelete={() => handleDelete(product.id)}></Card>
            ))}
        </>
    )
}
