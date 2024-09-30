import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class listagemProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }

    public listar(): void{
        console.log(`\nlista de todos os produtos\n`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome)
            console.log(`--------------------------------------------`)
        })
        console.log(`\n`)
    }
}