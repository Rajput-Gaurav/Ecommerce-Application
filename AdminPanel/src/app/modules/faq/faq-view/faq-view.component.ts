import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../../services/faq.service';

@Component({
  selector: 'app-faq-view',
  templateUrl: './faq-view.component.html',
  styleUrls: ['./faq-view.component.scss']
})
export class FaqViewComponent implements OnInit {

  Faqs: any = [];
  faqId: String;

  constructor(private faqService: FaqService) {
    this.getFaqs();
  }

  ngOnInit(): void {
  }

  // GET ALL FAQs
  getFaqs() {
    this.faqService.getAllFaq()
      .subscribe(
        (async (data: any) => {
          console.log("Get All Faqs: ", data);
          this.Faqs = (data && data.data) ? data.data : [];
        })
      );
  }

  // DELETE SELECTED FAQs
  deleteFaqs(faq) {
    if (faq._id) {
      this.faqId = faq._id;
      this.faqService.deleteFaqById(this.faqId)
        .subscribe(
          (async (data: any) => {
            console.log("selected faq deleted successfully!!!");
            this.getFaqs();
          })
        );
    }
  }
}
