import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list: User[] = [
    {
      'id': 0,
      'name': 'Superman',
      'image': 'https://www.dccomics.com/sites/default/files/files/character-pops/superman_459Wx300H_589104907a0b05.70849485.png',
      'jobTitle': 'Sauveur du monde'
    },
    {
      'id': 1,
      'name': 'Cat Woman',
      'image': 'https://ae01.alicdn.com/kf/HTB1nphMQXXXXXX2XXXXq6xXFXXXy/Noir-Catwoman-Body-Faux-Cuir-Salopette-Sexy-Chat-Costume-PVC-Justaucorps-Vinyle-Latex-Catsuit-Teddy-Lingerie.jpg_640x640.jpg',
      'jobTitle': 'Eleveuse de souris'
    },
    {
      'id': 2,
      'name': 'Hulk',
      'image': 'http://www.marvel-world.com/contents/encyclopedie/biographies/h/hulk/hulk_0.jpg',
      'jobTitle': 'Père de Crédito'
    }
  ];
    selectedUser: User;
    

  constructor() { this.selectedUser = this.list[0];
  }
  
}
