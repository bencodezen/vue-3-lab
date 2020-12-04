const { jsPDF } = require('jspdf')
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const util = require('util')

const options = {
  auth: {
    api_key: process.env.SENDGRID_API_TOKEN
  }
}

const client = nodemailer.createTransport(sgTransport(options))

exports.handler = async function(event) {
  const { content, destination } = JSON.parse(event.body)

  const attachment = Buffer.from(
    new jsPDF().text(content, 10, 10).output('arraybuffer')
  )

  const email = {
    from: 'ben@bencodezen.io',
    to: 'ben@bencodezen.io',
    subject: 'Hello',
    text: 'Hello world',
    html: '<b>Hello world</b>',
    attachments: [
      {
        content: attachment,
        filename: 'attachment.pdf',
        type: 'application/pdf',
        disposition: 'attachment'
      }
    ]
  }

  const info = await client.sendMail(email, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Message sent')
    }
  })

  console.log(util.inspect(info, false, null, true /* enable colors */))

  console.log(`PDF report sent: ${info}`)
}
