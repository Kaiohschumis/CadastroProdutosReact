const PRODUTOS = "_PRODUTOS";

export default class ProdutoService {

    validar = (produto) => {
        const errors = []

        if (!produto.nome) {
            errors.push("O campo nome é obrigatório")
        }

        if (!produto.sku) {
            errors.push("O campo sku é obrigatório")
        }

        if (!produto.preco || produto.preco <= 0) {
            errors.push("Valor")
        }

        if (errors.length > 0) {
        }
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        return JSON.parse(produtos)
    }

    deletar = (sku) => {
        // problemas ao utilizar router-dom-v6 com a propriedade withRouter
    }

    salvar = (produto) => {
        let produtos = localStorage.getItem(PRODUTOS)

        if (!produtos) {
            produtos = []
        } else {
            produtos = JSON.parse()
        }

        produtos.push(produto);

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }
}