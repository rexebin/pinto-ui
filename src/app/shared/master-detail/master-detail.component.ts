import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pt-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.router.navigate(['/service-user/service-user/master-detail', { outlets: { detail:null, list:['list'] }}]);
  }

}
