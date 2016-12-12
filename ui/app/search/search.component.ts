import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ToastService, SpinnerService, ModalService } from '../../app/core';

@Component({
  moduleId: module.id,
  selector: 'site-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  private isReady = true;
  private results: any;
  private searchText: string;

  constructor(
      private spinnerService: SpinnerService,
      private modalService: ModalService,
      private toastService: ToastService,
      private searchService: SearchService) { }

  ngOnInit() {
    this.toastService.activate('Loaded search');
  }

  private resetSearch() {
    this.spinnerService.hide();
    this.isReady = true;
  }

  search(page) {
    if(this.isReady && this.searchText) {
      this.isReady = false;
      this.spinnerService.show();
      return this.searchService.getInfluencers(this.searchText, page).then((data: any) => {
        this.resetSearch();
        this.results = data;
        this.results.page_info.previous_page =
            this.results.page_info.current_page !== 0 ? (this.results.page_info.current_page - 1) : undefined;
      }, (err: any) => {
        this.resetSearch();
        this.modalService.activate(err.message, err.statusCode + ' - ' + err.error);
        console.error(err);
      });
    }
  }
}
