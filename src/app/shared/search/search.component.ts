import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  value = '';
  panelOpenState = false;
  mobileSearchFlag = false;
  matIcon = 'keyboard_arrow_down' || 'keyboard_arrow_up';
  form: FormGroup;
  @ViewChild('myPanel') myPanel: MatExpansionPanel;
  constructor() {
   }

  ngOnInit(): void {
  }

  showMobileSearch() {
    this.mobileSearchFlag === true ? this.mobileSearchFlag = false : this.mobileSearchFlag = true;
  }

  expandPannel() {
    this.myPanel.expanded = !this.myPanel.expanded;
  }

  closeAdvancedSearch(){
    if (this.myPanel.expanded) {
      this.myPanel.expanded = false;
    }
  }
}
