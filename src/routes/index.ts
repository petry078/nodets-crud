import {Router} from 'express'
import {Request, Response} from 'express'
import * as produtoController from '../controllers/produtoController'

const router = Router()

router.get('/', (req:Request, res:Response) => {
    res.send('/')
}) 

router.get('/produtos', produtoController.index)
router.get('/cadastro')

export default router