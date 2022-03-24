import sendgrid from '@sendgrid/mail';
const dotenv = require('dotenv');
dotenv.config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'a.sametalan56@gmail.com',
      from: 'a.sametalan56@gmail.com',
      subject: 'From contact!',
      html: `
      <div>
        <h1>You have got an Email from ${req.body.name} with email of ${req.body.email}</h1>
        <p>${req.body.text}</p>
      </div>`,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ error: err.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
