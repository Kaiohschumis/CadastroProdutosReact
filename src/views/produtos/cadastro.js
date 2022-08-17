import React from "react";
import ProdutoService from "../../app/produtoService";

const init = {
    nome: "",
    sku: "",
    descricao: "",
    preco: 0,
    fornecedor: "",
    sucesso: false
}

export default class CadastroProduto extends React.Component {

    state = init;

    constructor() {
        super()
        this.service = new ProdutoService();
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeCampo = event.target.name
        this.setState({ [nomeCampo]: valor })
    }
    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        }
        this.service.salvar(produto)
        this.clean()
        this.setState({sucesso: true})
    }

    clean = () => {
        this.setState(init)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">
                    { this.state.sucesso &&
                        (
                            <div className="alert alert-dismissible alert-success">
                                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Êxito na operação!</strong> Cadastro salvo com sucesso.
                            </div>
                        )

                    }

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text" onChange={this.onChange} name="nome" value={this.state.nome} className="form-control"></input>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" onChange={this.onChange} name="sku" value={this.state.sku} className="form-control"></input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição: </label>
                                <textarea name="descricao" onChange={this.onChange} value={this.state.descricao} className="form-control"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input name="preco" value={this.state.preco} onChange={this.onChange} type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input name="fornecedor" value={this.state.fornecedor} onChange={this.onChange} type="text" className="form-control"></input>
                            </div>
                        </div>
                    </div>

                    <br></br>

                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success ">Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button onClick={this.clean} className="btn btn-primary ">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

