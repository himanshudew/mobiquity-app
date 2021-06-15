import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfCities: string[] = ['London', 'Paris', 'Madrid', 'Berlin', 'Vienna'];//hardcoded list of cities
  cityDataWeather:any[]=[];
  constructor(private weatherService: WeatherService, private router: Router) { }

  ngOnInit(): void {
    this.listOfCities.forEach(city => {
      this.weatherService.getCityWeather(city).subscribe(
        (respData: any) => {//data received
          this.cityDataWeather.push(respData)
        },
        (error: any) => console.log('oops', error),//some error occured
        //() => { console.log('sequence completed!') }//finally
      );
    });
  }

  navigateToCity(cityData): void {
    this.router.navigate(['/city/'+cityData.name]);
  }
}


