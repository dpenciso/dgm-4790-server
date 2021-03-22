import axios from "axios"
import { Amiibo } from '../models/amiibo.js'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const seedMongo = async () => {
  await mongoose.connect(`${process.env.MONGO_CONNECTION}`,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
})

const options = {
  method: 'GET',
  url: 'https://www.amiiboapi.com/api/amiibo/',
}
  
  try {
    const response = await axios.request(options)
    await addAmiibos(response.data.amiibo.splice(0, 3))
    await mongoose.connection.close()
    // console.log(response.data)
  } catch (error) {
    console.error(error)
  }
  
}

const addAmiibo = async (oneAmiibo) => {
    const amiibo = new Amiibo({
        name: oneAmiibo.name,
        game: oneAmiibo.gameSeries,
        image: oneAmiibo.image,
        id: oneAmiibo.tail,
        release: oneAmiibo.release.na
    })
    // console.log(amiibo)
    await amiibo.save() // save method is provided by Mongoose
    console.log('Added successfuly')
}

const addAmiibos = async (amiiboList) => {
  for (let amiibo of amiiboList) {
    // console.log(amiiboList)
    await addAmiibo(amiibo)
  }
}

seedMongo()