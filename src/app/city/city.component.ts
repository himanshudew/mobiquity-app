import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  cityName: any;
  filteredCityData: any;

  ngOnInit(): void {
    let cityName = this.route.snapshot.paramMap.get('cityName');
    this.weatherService.getCityForecast(cityName).subscribe(
      (respData: any) => {//data received
        this.cityName = respData.city.name;         // 12 - utc gives us correct time
        this.filteredCityData = respData.list.filter(el => (12 - new Date(el.dt_txt).getUTCHours()) == 9);
        console.log(this.filteredCityData);
      },
      (error: any) => console.log('oops', error),//some error occured
      //() => { console.log('sequence completed!') }//finally
    );
  }

}
