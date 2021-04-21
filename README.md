## App Features

### Hosted on Netlify

This app is hosted on Netlify and can be found at [https://dazzling-tereshkova-66bc33.netlify.app/](https://dazzling-tereshkova-66bc33.netlify.app/)

### Server hosted on Heroku

The API is hosted on Heroku at [https://dgm-4790-server.herokuapp.com/](https://dgm-4790-server.herokuapp.com/)

### GET endpoint ' / '

```
export const amiibos = async (req, res) => {
    const amiibos = await Amiibo.find()
    if (!amiibos) {
        return res.status(400).json({Message: `No amiibos found`})
    }
    res.json(amiibos)
}
```

On the frontend:

```
const fetchData = async () => {
    const response = await axios.get(apiURL);
    setAmiibos(response.data);
};
```

### PUT endpoint ' /update '

```
export const updateAmiibo = async (req, res) => {
    const amiiboId = req.body.data.amiiboId
    const updatedObj = {
        name: req.body.data.name,
        game: req.body.data.game,
        release: req.body.data.release,
        id: req.body.data._id
    }
    try {
        const amiibo = await Amiibo.findByIdAndUpdate(amiiboId, updatedObj, { new: true})
        res.status(200).json(amiibo)
    } catch (err) {
        res.status(400).json({Message: `Could not update: ${err}`})
    }
}
```

### POST endpoint ' / '

```
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
```

### DELETE endpoint ' /delete '

```
export const deleteAmiibo = async (req, res) => {
    console.log(req.body)
    const amiiboId = req.body.amiiboId
    try {
        const deletedAmiibo= await Amiibo.findByIdAndRemove(amiiboId)
        if (!deletedAmiibo) {
            return res.status(400).json({Message: `Amiibo to delete not found.`})
        }
        console.log(`Deleted the Amiibo: ${deletedAmiibo}`)
        res.sendStatus(200)
    } catch (err) {
        res.status(400).json({Message: `Invalid ID: ${err}`})
    }
}
```
