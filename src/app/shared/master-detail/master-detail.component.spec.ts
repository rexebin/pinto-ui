/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailComponent } from './master-detail.component';
import {
  RouterLinkStubDirective, RouterOutletStubComponent, RouterStub,
  ActivatedRouteStub
} from '../../test/mocks/router-stubs';
import { Router, ActivatedRoute } from '@angular/router';

fdescribe('MasterDetailComponent', () => {
  let component: MasterDetailComponent;
  let fixture: ComponentFixture<MasterDetailComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MasterDetailComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
