import { Amiibo } from '../models/amiibo.js'

export const addAmiibo = ((req, res) => {
    const amiibo = new Amiibo({
        name: req.body.name,
        game: req.body.gameSeries,
        image: req.body.image,
        id: req.body.tail,
        release: req.body.release.na
    })
    console.log(amiibo)
    amiibo.save()
    res.json(amiibo)
})

export const amiibos = async (req, res) => {
    const amiibos = await Amiibo.find()
    if (!amiibos) {
        return res.status(400).json({Message: `No amiibos found`})
    }
    res.json(amiibos)
}

export const deleteAmiibo = async (req, res) => {
    console.log(req.body)
    const amiiboId = req.body.amiiboId
    try {
        const deletedAmiibo= await Amiibo.findByIdAndRemove(amiiboId)
        if (!deletedAmiibo) {
            return res.status(400).json({Message: `Amiibo to delete not found.`})
        }
        console.log(`Deleted the movie: ${deletedAmiibo}`)
        res.sendStatus(200)
    } catch (err) {
        res.status(400).json({Message: `Invalid ID: ${err}`})
    }
}