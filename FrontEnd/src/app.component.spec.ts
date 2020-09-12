/* tslint:disable:no-unused-variable */

import { TestBed, async} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app/app.routing.module';
import { SharedModule } from './app/shared/shared.module';
import { LayoutModule } from './app/layout/layout.module';

describe('App: My Contacts', () => {
    beforeEach(() => {

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                LayoutModule,
                SharedModule,
                AppRoutingModule
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        });
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});
