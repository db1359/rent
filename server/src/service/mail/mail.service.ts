import { BadRequestException, Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import * as sgMail from "@sendgrid/mail";
import "dotenv/config";

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendMail() {
        console.log(process.env.SENDGRID_API_KEY || "");
        sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
        const msg = {
            to: "dbaran@gmail.com",
            from: "noreply@freearianna.org",
            subject: "Testing",
            text: "and easy to do anywhere, even with Node.js",
            html: "<strong>and easy to do anywhere, even with Node.js</strong>",
        };
        return sgMail
            .send(msg)
            .then(() => {
                console.log("Email sent");
            })
            .catch((e) => {
                throw new BadRequestException(e);
            });
    }

    async emailVerifyEmail(email: string, firstname: string, token: string) {
        const link = `${process.env.FRONTEND_URL}/email-verification/?token=${token}`;

        try {
            return this.mailerService.sendMail({
                from: `"Freearianna" <${process.env.MAIL_FROM}>`,
                to: email,
                subject: "Email verification",
                template: "email-verification",
                context: {
                    firstname: firstname,
                    link: link,
                },
            });
        } catch (e) {
            return e;
        }
    }
}
