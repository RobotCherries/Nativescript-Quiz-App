import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { AndroidData, ShapeEnum } from "nativescript-ng-shadow";

@Component({
	selector: "Score",
	moduleId: module.id,
	templateUrl: "./score.component.html",
	styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

	score: number;

	gradient: string;
	buttonShadow: AndroidData = {
		elevation: 6,
		cornerRadius: 30,
		bgcolor: '#30ce91',
		// shape: ShapeEnum.OVAL,
	};

	constructor(
		private route: ActivatedRoute,
		private routerExtensions: RouterExtensions,
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.score = params['score'];
			this.gradient = params['gradient'];
		})
	}

	navigateToHome() {
		this.routerExtensions.navigate(["/home"], { clearHistory: true });
	}
}