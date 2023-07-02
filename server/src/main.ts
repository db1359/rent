import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import "dotenv/config";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(parseInt(process.env.PORT) || 8000);
}

bootstrap()
    .then(() => {
        console.log(`SERVER IS STARTING AT ${process.env.PORT || 8000}...`);
    })
    .catch((e) => {
        console.log(e);
    });
