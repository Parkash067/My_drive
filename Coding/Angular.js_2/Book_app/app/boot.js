//step#1
/*import { bootstrap } from "angular2/platform/browser";
import {HelloWorld} from './app.component'

 bootstrap(HelloWorld)*/
System.register(["angular2/platform/browser", "./app.component"], function(exports_1) {
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            //import {ArticleComponent} from "./app.component";
            browser_1.bootstrap(app_component_1.RedditApp);
        }
    }
});
//bootstrap(ArticleComponent);
//# sourceMappingURL=boot.js.map