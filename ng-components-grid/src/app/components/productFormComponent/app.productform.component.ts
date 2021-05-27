import {Product} from './../../models/app.product.model';
import {ProductLogic} from './../../models/app.product.logic';
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import {HttpService} from './../../services/app.http.service';

@Component({
    selector : 'app-productform-component',
    templateUrl : './app.productform.view.html'
})

export class ProductFormComponent implements OnInit{
    product:Product;
    products:Array<Product>;
    private logic:ProductLogic;
    columnHeaders:Array<string>;
    formProduct:FormGroup;
    constructor(private serv:HttpService){
        this.product = new Product();
        this.products = new Array<Product>();
        this.logic = new ProductLogic();
        this.columnHeaders = new Array<string>();
        this.formProduct = new FormGroup({
            'Id': new FormControl(this.product.Id, 
                Validators.compose([
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(8),
                    Validators.pattern('[0-9]+')
                ])),
            'Name':new FormControl(this.product.Name,
                Validators.compose([Validators.required])),
            'Category':new FormControl(this.product.Category,
                Validators.compose([Validators.required])),
            'Description':new FormControl(this.product.Description,
                Validators.compose([Validators.required])),
            'Price':new FormControl(this.product.Price,
                Validators.compose([Validators.required,
                Validators.min(0),
                Validators.pattern('^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$')]))

        });
    }

    ngOnInit():void{
        this.columnHeaders = Object.keys(this.product);
        //this.products = this.logic.getProducts();
        this.getProducts();
    }

    getProducts():void{
        this.serv.getData().subscribe((response)=>{
            this.products = this.translateProduct(response);
        }, (error)=>{ console.log("something went wrong")});
    }

    translateProduct(response:Array<any>):Array<Product>{
        let result = new Array<Product>();
        response.map(element => {
            let prod = new Product();
            prod.Id = element.ProductRowId;
            prod.Name = element.ProductName;
            prod.Category = element.CategoryName;
            prod.Description = element.Manufacturer;
            prod.Price = element.BasePrice;
            result.push(prod);
        });
        return result;
    }

    clear():void {
        this.product = new Product();
        this.formProduct.setValue(this.product);
    }

    save():void{
        this.product = this.formProduct.value;
        //this.logic.saveProducts(this.product)
        let postData:any;
        postData = {
            ProductRowId:this.product.Id,
            ProductId:'Prd-'+ this.product.Id,
            CategoryName:this.product.Category,
            Manufacturer:this.product.Description,
            BasePrice:this.product.Price,
            ProductName:this.product.Name
        };
        this.serv.postData(postData).subscribe((response)=>{
            // data will be streamed from Observable and will be delivered to the component
            this.products.push(response);
            console.log('data added successfully');
        },(error)=>{
            console.log('Error Occured while adding data ${error}');    
        });
    }

    getSelectedProduct(p:Product):void {
        this.product = Object.assign({},p);
        this.formProduct.setValue({Id:this.product.Id, Name:this.product.Name});
    }

    delete(p:Product):void{
        this.serv.deleteData(+p.Id).subscribe((response)=>{
            console.log(response);
        },(error)=>
        { 
            console.log("Deletion failed");
            console.log(error);
        });
        //this.logic.delete(p);
        this.getProducts();
    }

}