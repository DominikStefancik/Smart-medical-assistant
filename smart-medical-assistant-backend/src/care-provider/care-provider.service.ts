import { Injectable, HttpService } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";
import { map } from "rxjs/operators";

import { AXA_API } from "common/axa-api";
import { PHYSICIAN_CATEGORY_ID } from "common/physician-types";
import { PHARMACY_CATEGORY_ID } from "common/pharmacy-types";
import { UrlBuilder } from "net/url-builder";

const CARE_PROVIDERS_ENDPOINT = `${AXA_API.baseUrl}/care-providers`;

@Injectable()
export class CareProviderService {
  constructor(private readonly httpService: HttpService) {}

  getAllPhysicians(): Observable<AxiosResponse<any>> {
    const url = UrlBuilder.builder()
        .base(CARE_PROVIDERS_ENDPOINT)
        .queryParam({ name: "category", value: PHYSICIAN_CATEGORY_ID})
        .build();

    const request = this.httpService.get(url.toString());
    return this.mapResponseData(request);
  }

  getPhysiciansNearCurrentPlace(nearPlaceId: string,
                                distance: string,
                                limit: string): Observable<AxiosResponse<any>> {
    const url = UrlBuilder.builder()
        .base(CARE_PROVIDERS_ENDPOINT)
        .queryParam({ name: "category", value: PHYSICIAN_CATEGORY_ID})
        .queryParam({ name: "nearPlace", value: nearPlaceId })
        .queryParam({ name: "nearMaxDistance", value: distance })
        .queryParam({ name: "nearLimit", value: limit })
        .build();

    const request = this.httpService.get(url.toString());
    return this.mapResponseData(request);
  }

  getPhysiciansNearLocation(latitude: string,
                            longitude: string,
                            distance: string,
                            limit: string): Observable<AxiosResponse<any>> {
    const url = UrlBuilder.builder()
        .base(CARE_PROVIDERS_ENDPOINT)
        .queryParam({ name: "category", value: PHYSICIAN_CATEGORY_ID})
        .queryParam({ name: "nearLat", value: latitude })
        .queryParam({ name: "nearLng", value: longitude })
        .queryParam({ name: "nearMaxDistance", value: distance })
        .queryParam({ name: "nearLimit", value: limit })
        .build();

    const request = this.httpService.get(url.toString());
    return this.mapResponseData(request);
  }

  getAllPharmacies(): Observable<AxiosResponse<any>> {
    const url = UrlBuilder.builder()
        .base(CARE_PROVIDERS_ENDPOINT)
        .queryParam({ name: "category", value: PHARMACY_CATEGORY_ID})
        .build();

    const request = this.httpService.get(url.toString());
    return this.mapResponseData(request);
  }

  getPharmaciesNearCurrentPlace(nearPlaceId: string,
                                distance: string,
                                limit: string): Observable<AxiosResponse<any>> {
    const url = UrlBuilder.builder()
        .base(CARE_PROVIDERS_ENDPOINT)
        .queryParam({ name: "category", value: PHARMACY_CATEGORY_ID})
        .queryParam({ name: "nearPlace", value: nearPlaceId })
        .queryParam({ name: "nearMaxDistance", value: distance })
        .queryParam({ name: "nearLimit", value: limit })
        .build();

    const request = this.httpService.get(url.toString());
    return this.mapResponseData(request);
  }

  getPharmaciesNearLocation(latitude: string,
                            longitude: string,
                            distance: string,
                            limit: string): Observable<AxiosResponse<any>> {
      const url = UrlBuilder.builder()
          .base(CARE_PROVIDERS_ENDPOINT)
          .queryParam({ name: "category", value: PHARMACY_CATEGORY_ID})
          .queryParam({ name: "nearLat", value: latitude })
          .queryParam({ name: "nearLng", value: longitude })
          .queryParam({ name: "nearMaxDistance", value: distance })
          .queryParam({ name: "nearLimit", value: limit })
          .build();

      const request = this.httpService.get(url.toString());
      return this.mapResponseData(request);
  }

  private mapResponseData(request: Observable<AxiosResponse<any>> ): Observable<AxiosResponse<any>> {
    return request
            .pipe(
              map(response => response.data),
            );
  }
}