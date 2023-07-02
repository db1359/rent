import { Module } from "@nestjs/common";
import { RecallController } from "./recall.controller";
import { RecallService } from "./recall.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Recall, RecallSchema } from "./recall.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Recall.name, schema: RecallSchema }])],
    controllers: [RecallController],
    providers: [RecallService],
})
export class RecallModule {}
