import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Cadastro from "./cadastro";


export default class cadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor (produto: Array<Produto>){
        super()
        this.produtos = produto
        this.entrada = new Entrada()
    }

    public cadastrar(): void{
        console.log(`\nInício do Cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto`)
        let produto = new Produto()
        produto.nome = nome;
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`)
    }

}