import { Module } from "@nestjs/common";
import { DirectoryController } from "./directory.controller";
import { DirectoryService } from "./directory.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Directory, DirectorySchema } from "./directory.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Directory.name, schema: DirectorySchema }])],
    controllers: [DirectoryController],
    providers: [DirectoryService],
})
export class DirectoryModule {}
