import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Product from "../components/Product"
function CategoryDetail(props) {
    const param = useParams()
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        // @ts-ignore
        fetch(`http://localhost:3000/categories/${param.id}`)
            .then(resp => resp.json())
            .then(selected => setSelected(selected))
    }, [])

    if (selected === null) {
        return <h1>Please wait, it is Loading</h1>
    }
    if (selected.id === undefined) {
        return <h1 style={{ color: 'red', display: 'grid', placeItems: 'center', height: '100vh' }}>Not Found</h1>
    }


    function displayProducts() {
        let products = props.items
        if (selected !== null)
            products = products.filter(item => {
                return item.categoryId === selected.id
            })
        return products
    }


    return (
        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {
                        displayProducts().map(item => (
                            <Product item={item} />
                        ))
                    }


                </ul>
            </section>
        </main>
    )
}
export default CategoryDetail