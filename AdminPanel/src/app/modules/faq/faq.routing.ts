import { RouterModule, Routes } from '@angular/router';
import { FaqAddEditComponent } from './faq-add-edit/faq-add-edit.component';
import { FaqViewComponent } from './faq-view/faq-view.component';

const FAQ_ROUTING: Routes = [

    { path: '', component: FaqViewComponent },
    { path: 'addFaq', component: FaqAddEditComponent },
    { path: 'editFaq/:Id', component: FaqAddEditComponent }
];

export const FAQ_ROUTING_MODULE = RouterModule.forChild(FAQ_ROUTING);