import ServiceProvider from "varie/lib/support/ServiceProvider";

/*
|--------------------------------------------------------------------------
| App Service Provider
|--------------------------------------------------------------------------
| You can bind various items to the app here, or can create other
| custom providers that bind the container
|
*/
export default class LodashProvider extends ServiceProvider {
    public boot() {
        const _ = require('lodash')
        _.mixin(require("lodash-inflection"))
    }

    public register() {
    }
}
