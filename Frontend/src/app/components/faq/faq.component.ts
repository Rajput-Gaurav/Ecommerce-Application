import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs: any = [];
  constructor(private faqService: FaqService) {
    this.getAllFaq();
  }

  ngOnInit(): void {
  }

  // GET ALL FAQ
  getAllFaq() {
    this.faqService.getAllFaq()
      .subscribe(
        (async (data: any) => {
          console.log("get all faq: ", data);
          this.faqs = (data && data.data) ? data.data : [];
        })
      );
  }
}
