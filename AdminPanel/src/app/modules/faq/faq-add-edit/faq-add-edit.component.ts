import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { FaqService } from '../../../services/faq.service';

@Component({
  selector: 'app-faq-add-edit',
  templateUrl: './faq-add-edit.component.html',
  styleUrls: ['./faq-add-edit.component.scss']
})
export class FaqAddEditComponent implements OnInit {

  faqForm: FormGroup;
  faqId: String;
  faqs: any = {};
  submitted = false;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private faqService: FaqService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.faqId = params['Id'];
      if (!this.commonService.isUndefiendOrNull(this.faqId)) {
        this.getFaqById(this.faqId);
      }
    })
  }

  createForm() {
    this.faqForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    })
  }

  get frm() { return this.faqForm.controls; }

  // GET FAQ BY ID:
  getFaqById(id) {
    this.faqService.getFaqById(id)
      .subscribe(
        response => {
          console.log("select faq by Id: ", response);
          this.faqs = response;
          this.faqForm.patchValue({
            question: this.faqs['data'].question,
            answer: this.faqs['data'].answer
          });
        });
  }

  // SAVE FORM:
  saveFaq() {
    this.submitted = false;
    console.log("FAQ Form: ", this.faqForm.value);

    if (this.faqForm.invalid) {
      this.faqForm.get('question').markAsTouched();
      this.faqForm.get('answer').markAsTouched();
      return;
    }

    if (!this.commonService.isUndefiendOrNull(this.faqId)) {
      this.faqService.addEditFaq(this.faqForm.value, this.faqId)
        .subscribe(
          (async (data: any) => {
            console.log("faq updated successfully!!!", data);
            this.router.navigate(['/faq']);
          })
        );
    } else {
      this.faqService.addEditFaq(this.faqForm.value, '')
        .subscribe(
          (async (data: any) => {
            console.log("faq added successfully!!!", data);
            this.router.navigate(['/faq']);
          })
        );
    }
  }
}
