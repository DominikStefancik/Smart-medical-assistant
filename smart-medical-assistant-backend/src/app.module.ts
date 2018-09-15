import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CareProviderModule } from "care-provider/care-provider.module";

@Module({
  imports: [CareProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
