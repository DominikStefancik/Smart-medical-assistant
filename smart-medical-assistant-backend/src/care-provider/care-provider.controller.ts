import { Controller, Get, Query } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";

import { CareProviderService } from "./care-provider.service";

const LATITUDE_QUERY_PARAM = "lat";
const LONGITUDE_QUERY_PARAM = "long";
const DISTANCE_QUERY_PARAM = "distance";
const LIMIT_QUERY_PARAM = "limit";

@Controller("care-provider")
export class CareProviderController {
  constructor(private readonly careProviderService: CareProviderService) {}

  @Get("/physician")
  getPhysicians(@Query() query): Observable<AxiosResponse<any>> {
    if (query[LATITUDE_QUERY_PARAM] && query[LONGITUDE_QUERY_PARAM]) {
      return this.careProviderService.getPhysiciansNearLocation(
        query[LATITUDE_QUERY_PARAM],
        query[LONGITUDE_QUERY_PARAM],
        query[DISTANCE_QUERY_PARAM],
        query[LIMIT_QUERY_PARAM],
      );
    } else {
      return this.careProviderService.getAllPhysicians();
    }
  }

  @Get("/pharmacy")
  getPharmacies(@Query() query): Observable<AxiosResponse<any>> {
    if (query[LATITUDE_QUERY_PARAM] && query[LONGITUDE_QUERY_PARAM]) {
      return this.careProviderService.getPharmaciesNearLocation(
        query[LATITUDE_QUERY_PARAM],
        query[LONGITUDE_QUERY_PARAM],
        query[DISTANCE_QUERY_PARAM],
        query[LIMIT_QUERY_PARAM],
      );
    } else {
      return this.careProviderService.getAllPharmacies();
    }
  }
}