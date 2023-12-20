const { simpleParser } = require('mailparser')
const express = require('express')
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const router = express.Router()

router.post('/upload/:headers', upload.single('email'), async (req, res) => {
    const { headers } = req.body
    const emailData = req.file.buffer
    const jsonData = {}

    try {
        const mailObject = await simpleParser(emailData)
        if (!headers) {
            delete mailObject.headerLines
            delete mailObject.headers
        }
        Object.assign(jsonData, mailObject)
        if (mailObject.attachments && mailObject.attachments.length > 0) {
            jsonData.attachments = mailObject.attachments.map(attachment => ({
                fileName: attachment.filename,
                contentType: attachment.contentType,
                content: attachment.content.toString('base64')
            }))
        }
        jsonData.to = jsonData.to.value
        jsonData.from = jsonData.from.value
        res.status(200).json(jsonData)
    } catch (error) {
        console.error('Error:', error)
        res.status(400).send(error.message)
    }
})

module.exports = router
