import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app/app.routing.module';
import { SharedModule } from './app/shared/shared.module';
import { LayoutComponent } from './app/layout/layout.component';


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule, // required for ng2-tag-input
        SharedModule.forRoot(),
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
