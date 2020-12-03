const { jsPDF } = require('jspdf')
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const options = {
  auth: {
    api_user: 'ben@bencodezen.io',
    api_key: process.env.SENDGRID_API_KEY
  }
}

const client = nodemailer.createTransport(sgTransport(options))

exports.handler = async function(event) {
  console.log(event)

  const { content, destination } = JSON.parse(event.body)
  console.log(`Sending PDF report to ${destination}`)

  const report = Buffer.from(
    new jsPDF().text(content, 10, 10).output('arraybuffer')
  )
  const info = await client.sendMail({
    from: 'ben@bencodezen.io',
    to: destination,
    subject: 'Your report is ready!',
    text: 'See attached report PDF',
    attachments: [
      {
        filename: `report-${new Date().toDateString()}.pdf`,
        content: report,
        contentType: 'application/pdf'
      }
    ]
  })

  console.log(`PDF report sent: ${info.messageId}`)
}
