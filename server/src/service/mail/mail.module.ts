import { Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { join } from "path";
import { MailController } from "./mail.controller";
import { MailService } from "./mail.service";

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: process.env.SMTP_HOST || "",
                port: parseInt(process.env.SMTP_PORT || ""),
                auth: {
                    user: process.env.SMTP_USER || "",
                    pass: process.env.SMTP_PASS || "",
                },
            },
            defaults: {
                from: `"No Reply" <${process.env.MAIL_FROM}>`,
            },
            template: {
                dir: join(__dirname, "templates"),
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
    ],
    controllers: [MailController],
    providers: [MailService],
    exports: [MailService],
})
export class MailModule {}
