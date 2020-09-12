import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        SharedModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
    providers: [

    ],
})
export class LayoutModule { }