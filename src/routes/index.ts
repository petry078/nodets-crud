import {Router} from 'express'
import {Request, Response} from 'express'
import * as produtoController from '../controllers/produtoController'

const router = Router()

router.get('/', (req:Request, res:Response) => {
    res.send('/')
}) 

router.get('/produtos', produtoController.index)

router.get('/cadastro', produtoController.visualizaPaginaCadastro)
router.post('/cadastrar', produtoController.cadastroProduto)

router.get('/editar/:id', produtoController.editarProduto)
router.post('/editar/:id', produtoController.editadoProduto)

router.get('/deletar/:id', produtoController.deletarProduto)

export default router