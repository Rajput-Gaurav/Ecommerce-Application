import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { SupportService } from '../../../services/support.service';

@Component({
  selector: 'app-support-view',
  templateUrl: './support-view.component.html',
  styleUrls: ['./support-view.component.scss']
})
export class SupportViewComponent implements OnInit {

  supports: any = [];

  constructor(private commonService: CommonService,
    private supportService: SupportService) {
    this.getAllSupport();
  }

  ngOnInit(): void {

  }

  getAllSupport() {
    this.supportService.getAllSupport()
      .subscribe(
        (async (data: any) => {
          console.log("All Support: ", data);
          this.supports = (data && data.data) ? data.data : [];
        })
      );
  }

}
