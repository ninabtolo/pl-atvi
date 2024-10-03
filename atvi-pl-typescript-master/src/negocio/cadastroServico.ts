import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class cadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }

    public cadastrar(): void {
        console.log(`\nInício do Cadastro do Serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `);
        let servico = new Servico(nome, preco);
        this.servicos.push(servico);
        console.log(`\nCadastro concluído :)\n`);
    }
    

}