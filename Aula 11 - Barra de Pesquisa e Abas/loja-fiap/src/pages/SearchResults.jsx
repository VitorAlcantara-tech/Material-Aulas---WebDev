import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard";

const SearchResults = () => {
    
    const {busca} = useParams();
    const [produtos, setProdutos] = useState([])

    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        fetch(`${API_URL}`)
        .then(response => response.json())
        .then(data => setProdutos(data))
    }, [])
    
    const produtosFiltrados = produtos.filter(pegaItem => pegaItem.title.toLowerCase()
    .includes(busca.toLowerCase()))

    return (
        <div>
            <h1 className="text-2xl font-bold">Resultados da Pesquisa para: {busca} </h1>
            {produtosFiltrados.map(pegaItem => (
                <div className="grid grid-cols-4" key={pegaItem.id}>
                    <ProductCard {...pegaItem}/>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;