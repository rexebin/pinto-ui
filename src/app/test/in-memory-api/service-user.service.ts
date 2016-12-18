import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class ServiceUserService implements InMemoryDbService {
  _serviceUsers = [
    {
      id: 1,
      firstName: 'Julia',
      surname: 'Davies'
    },
    {
      id: 1,
      firstName: 'July',
      surname: 'May'
    },
    {
      id: 1,
      firstName: 'April',
      surname: 'Blacksmith'
    },
    {
      id: 1,
      firstName: 'Dawn',
      surname: 'Hammer'
    },
    {
      id: 1,
      firstName: 'May',
      surname: 'Shoemaker'
    },
    {
      id: 1,
      firstName: 'Naomi',
      surname: 'Jones'
    },
  ];
  
  createDb(): {} {
    return this._serviceUsers;
  }
  
  constructor() {
  }
  
}
