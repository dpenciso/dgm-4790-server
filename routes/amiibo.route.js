import { Router } from 'express'

export const amiiboRouter = Router()

import { addAmiibo, amiibos, deleteAmiibo, updateAmiibo} from '../controllers/amiibo.controller.js'

amiiboRouter.post('/', addAmiibo)

amiiboRouter.get('/', amiibos)

amiiboRouter.delete('/delete', deleteAmiibo)

amiiboRouter.put('/update', updateAmiibo)

