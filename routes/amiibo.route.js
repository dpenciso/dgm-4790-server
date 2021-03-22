import { Router } from 'express'

export const amiiboRouter = Router()

import { addAmiibo, amiibos, deleteAmiibo} from '../controllers/amiibo.controller.js'

amiiboRouter.post('/', addAmiibo)

amiiboRouter.get('/', amiibos)

amiiboRouter.delete('/delete', deleteAmiibo)

/* movieRouter.get('/id', getMovieById)

movieRouter.put('/update', updateMovie)

 */