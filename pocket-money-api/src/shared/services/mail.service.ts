import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendConfirmationEmail(email: string, token: string): Promise<void> {
    const confirmationLink = `${process.env.DOMAIN_URL}/confirm?token=${token}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirma tu correo electrónico',
      html: `<p>Haz clic en el siguiente enlace para confirmar tu correo electrónico:</p>
             <a href="${confirmationLink}">${confirmationLink}</a>`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
