import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'translateWeather',
  standalone: true
})
export class TranslateWeatherPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    switch (value){
      case 'Thunderstorm':return value = 'Гром';
      case 'Drizzle': return value = 'Морось';
      case 'Rain':return value = 'Дождь';
      case 'Snow': return value = 'Снег';
      case 'Mist': return value = 'Туман';
      case 'Smoke': return value = 'Дым';
      case 'Haze': return value = 'Дымка';
      case 'Dust': return value = 'Пылевая буря';
      case 'Fog': return value = 'Сильный туман';
      case 'Sand': return value = 'Песочная буря';
      case 'Ash': return value = 'Пепельная буря';
      case 'Squall': return value = 'Шквал';
      case 'Tornado': return value = 'Торнадо';
      case 'Clouds': return value = 'Облачно';
      case 'Clear': return value = 'Ясно'
      default: return 'Не определена погода';
    }
  }

}
