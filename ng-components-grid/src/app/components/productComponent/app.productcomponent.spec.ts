import { TestBed,ComponentFixture,async } from "@angular/core/testing";
import {Product} from './../../models/app.product.model';
import {ProductComponent} from './app.product.component';
import {FormsModule} from '@angular/forms';

describe('Product Component Test',()=>{
    let component:ProductComponent;
    let fixture:ComponentFixture<ProductComponent>;
    let button:HTMLElement;

    beforeEach(async()=>{
        TestBed.configureTestingModule({
            declarations:[ProductComponent],
            imports:[FormsModule],
        }).compileComponents() // validate the component with its HTML and code
    }); 


});
