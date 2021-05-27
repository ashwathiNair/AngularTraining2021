import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-component',
    template: `<h1>The Angular NGRX Application</h1>
    <div class="container">
    <table class="table table-bordered table-striped">
        <tbody>
            <tr>
                <td>
                    <a [routerLink]="['']">List of Products</a>
                </td>
                <td>
                    <a [routerLink]="['create']">Create Product</a>
                </td>
            </tr>
        </tbody>
    </table>
    <hr>
    <router-outlet></router-outlet>
</div>
 `
})

export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}