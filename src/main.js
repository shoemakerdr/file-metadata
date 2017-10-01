import path from 'path'
import express from 'express'
import multer from 'multer'

const app = express()
const upload = multer()

const publicPath = path.join(__dirname, '../', 'public')

app.use('/', express.static(path.normalize(publicPath)))

app.post('/get-file-size', upload.single('file'), (req, res) => {
    res.json({size: req.file.size})
})

app.listen(process.env.PORT || 8000)

export default app
