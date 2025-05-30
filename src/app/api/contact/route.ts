import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emmanueloghene72@gmail.com',
    // Create an app password in your Google Account settings
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const mailOptions = {
      from: 'emmanueloghene72@gmail.com',
      to: 'emmanueloghene72@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
