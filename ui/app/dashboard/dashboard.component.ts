import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../app/core';

@Component({
  moduleId: module.id,
  selector: 'site-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private toastService: ToastService) { }

  ngOnInit() {
    this.toastService.activate('Loaded dashboard');
  }
}
