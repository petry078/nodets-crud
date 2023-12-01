import { Request, Response } from 'express'
import { Produto } from '../models/Produto'

export const index = async (req:Request, res:Response) => {
    let products = await Produto.findAll()
    res.render('pages/produto', {products})
}

export const visualizaPaginaCadastro  = (req:Request, res:Response) => {
    res.render('pages/cadastro')
}

export const cadastroProduto = async (req:Request, res:Response) => {
    let nome = req.body.nome
    let preco = req.body.preco

        await Produto.create({
            nome,
            preco
        })

    res.redirect('/produtos')
}

export const editarProduto = async (req:Request, res:Response) => {
    let {id} = req.params
    let produto = await Produto.findByPk(id)

    res.render('pages/editar', {produto, id})
}

export const editadoProduto = async (req:Request, res:Response) => {
   
    let {id} = req.params
    let {nome, preco} =  req.body

    await Produto.update({
        nome, preco
    }, {
        where: {
            id: id
        }
    })

    res.redirect('/produtos')
}

export const deletarProduto = async (req:Request, res:Response) => {
    let {id} = req.params
    
    await Produto.destroy({
        where:{
            id:id
        }
    })

    res.redirect('/produtos')
}