/* import all html files as stings */
declare module "*.html" {
	var __html__: string;
	export default __html__;
}
declare module '*!text' {
    var _: string;
    export default  _;
}
//https://github.com/angular/material2/blob/master/src/demo-app/typings.d.ts
declare var module: { id: string };
