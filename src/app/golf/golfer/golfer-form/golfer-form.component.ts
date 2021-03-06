import { Component, OnInit } from '@angular/core';
import { Golfer } from '../../models/golfer';
import { GolfDataService } from '../../shared/services/golf-data.service';
import {Router} from '@angular/router';
import { v1 as uuid } from 'uuid';

@Component({
  selector: 'app-golfer-form',
  templateUrl: './golfer-form.component.html',
  styleUrls: ['./golfer-form.component.css']
})
export class GolferFormComponent implements OnInit {

  constructor( private golfDataService: GolfDataService,  private router: Router) {
    this.model = new Golfer(uuid(), '', '', null);
  }
  model;

  submitted = false;

  onSubmit() {
    const data: any = {};
    data.item = this.model;
    data.table_name = 'Golfers';
    this.golfDataService.putPlayer(data).then(res => { // Success
      this.submitted = true;
      this.router.navigate(['/golfers']);
    });
  }

  isEditGolfer() {
    return this.router.url.includes('editGolfer');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
