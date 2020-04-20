import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

// const routes: Routes = [
//     { path: "", redirectTo: "home", pathMatch: "full" },
//     { path: "home", loadChildren: "./home/home.module#HomeModule" },
//     { path: "quiz", loadChildren: "./quiz/quiz.module#QuizModule" },
//     { path: "score", loadChildren: "./score/score.module#ScoreModule" }
// ];

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "quiz", loadChildren: () => import("~/app/quiz/quiz.module").then((m) => m.QuizModule) },
    { path: "score", loadChildren: () => import("~/app/score/score.module").then((m) => m.ScoreModule) },
];

// const routes: Routes = [
//     { path: "", redirectTo: "/home", pathMatch: "full" },
//     { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
//     { path: "browse", loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule) },
//     { path: "search", loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule) },
//     { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then((m) => m.FeaturedModule) },
//     { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) }
// ];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
