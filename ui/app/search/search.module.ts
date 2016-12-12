import { NgModule } from '@angular/core';

import { SearchRoutingModule, routedComponents }   from './search-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SearchRoutingModule, SharedModule],
  declarations: [routedComponents],
})
export class SearchModule { }
