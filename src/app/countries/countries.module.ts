import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { WatchCountryComponent } from './pages/watch-country/watch-country.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    WatchCountryComponent,
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    WatchCountryComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class CountriesModule {}
