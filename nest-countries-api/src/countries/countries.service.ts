import { HttpService, Injectable } from '@nestjs/common';
import { map } from "rxjs/operators";

@Injectable()
export class CountriesService {
    constructor(private httpService: HttpService) { }

    /**
     * return the mapped json of all countries from https://restcountries.eu/rest/v2/all
     */
    getCountries() {
        return this.httpService.get('https://restcountries.eu/rest/v2/all')
            .pipe(
                map(response => response.data.map(function(item) {
                    return {
                        'name': item['name'],
                        'alpha2Code': item['alpha2Code'],
                        'languagues': item['languages'].map(lang => lang['iso639_1']),
                        'flag': item['flag']
                    }
                }))
            );
    }

    /**
     * return the mapped json of the country with the alpha 2 code from https://restcountries.eu/rest/v2/all
     * @param code the alpha 2 code
     */
    getCountryBy2Code(code: String) {
        return this.httpService.get('https://restcountries.eu/rest/v2/all')
            .pipe(
                map(response => response.data.
                    filter(country => country['alpha2Code'].toLowerCase() === code.toLowerCase())
                    .map(function(item) {
                        return {
                            'name': item['name'],
                            'alpha2Code': item['alpha2Code'],
                            'languagues': item['languages'].map(lang => lang['iso639_1']),
                            'flag': item['flag']
                        }
                    }))  
            );

    }
}
