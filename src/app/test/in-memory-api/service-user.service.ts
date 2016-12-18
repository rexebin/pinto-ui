import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ServiceUser } from '../../service-user/model/service-user';

@Injectable()
export class ServiceUserService implements InMemoryDbService {
  _serviceUsers: ServiceUser[] = [
    {
      id: 1,
      firstName: 'Julia',
      surname: 'Davies',
      dateOfBirth: '01/01/1940'
    },
    {
      id: 1,
      firstName: 'July',
      surname: 'May',
      dateOfBirth: '01/01/1941'
    },
    {
      id: 1,
      firstName: 'April',
      surname: 'Blacksmith',
      dateOfBirth: '01/01/1929'
      
    },
    {
      id: 1,
      firstName: 'Dawn',
      surname: 'Hammer',
      dateOfBirth: '01/01/1939'
    },
    {
      id: 1,
      firstName: 'May',
      surname: 'Shoemaker',
      dateOfBirth: '01/01/1950'
    },
    {
      id: 1,
      firstName: 'Naomi',
      surname: 'Jones',
      dateOfBirth: '01/01/1943'
    },
  ];
  
  createDb(): {} {
    return this._serviceUsers;
  }
  
  constructor() {
  }
  
}
