import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'story-404',
  template: `
    <article class="template animated slideInRight">
      <h4>Page not found!</h4>
      <div>Check the address bar to see if you mistyped something.</div>
    </article>
  `
})
export class PageNotFoundComponent { }