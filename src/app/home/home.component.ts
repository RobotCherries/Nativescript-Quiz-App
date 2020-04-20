import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { RouterExtensions } from "nativescript-angular/router";
import { Page, LinearGradient } from "tns-core-modules/ui/page";
import { getNumber } from "tns-core-modules/application-settings";
import { FileReaderService } from "../core/fileReader.service";
import questions from "../core/questions.json";
import { of } from "rxjs";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    categories: any[] = [];

    constructor(
        private routerExtensions: RouterExtensions,
        private fileReader: FileReaderService,
        private page: Page,
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.getCategories();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    getCategories() {
        console.log('Starting...');
        let data = of(questions);

        data.subscribe(
            res => {
                console.log('Questions List: ' + JSON.stringify(res));
                this.categories = res["categories"];
                this.initializeScore();
            },
            err => {
                console.log('Error reading json: ' + JSON.stringify(err));
            }
        )
    }

    initializeScore() {
        for (let i = 0; i < this.categories.length; i++) {
            this.categories[i].lastScore = getNumber(this.categories[i].title) || '0';
        }
    }

    navigateToQuiz(index: number) {
        let navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'questions': JSON.stringify(this.categories[index].questions),
                'gradient': JSON.stringify(this.categories[index].backgroundGradient)
            }
        };
        console.log("navigationExtras: " + JSON.stringify(navigationExtras));
        this.routerExtensions.navigate(["/quiz"], navigationExtras);
    }
}
