import { Module, HttpModule } from "@nestjs/common";
import { CareProviderService } from "./care-provider.service";
import { CareProviderController } from "./care-provider.controller";
import { AXA_API } from "common/axa-api";

@Module({
  imports: [HttpModule.register({
    headers: {
      Authorization: AXA_API.authorisation_key,
    },
  })],
  providers: [CareProviderService],
  controllers: [CareProviderController],
})
export class CareProviderModule {}