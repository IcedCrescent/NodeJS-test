import { Controller, Get, HttpStatus, NotFoundException, Param, Res } from '@nestjs/common';
import { CountriesService } from "./countries.service";

@Controller('countries')
export class CountriesController {
    constructor(private countriesService: CountriesService) {}

    /**
     * Retrieve all countries and return a JSON response containing 'name', 'alpha2Code', 'languagues', 'flag' of each country
     */
    @Get()
    getCountries() {
        return this.countriesService.getCountries() ;
    }

    /**
     * Return the json response JSON response containing 'name', 'alpha2Code', 'languagues', 'flag' 
     * of the country with the corresponding Alpha 2 Code
     * @param param the Alpha 2 Code of the country, case-insensitive
     */
    @Get('/:2code')
    getCountry( @Param('2code') param) {
        
        return  this.countriesService.getCountryBy2Code(param);
    }
}
