import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;

  constructor(private countryService: CountryService) {}

  buscar() {
    console.log(this.termino);
    this.countryService.searchCountry(this.termino).subscribe(
      (countries) => {
        console.log('countries', countries);
      },
      (err) => {
        this.hayError = true;
      }
    );
  }

  ngOnInit(): void {}
}
