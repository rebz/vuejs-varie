let $router = $app.make<RouterInterface>("$router");
import RouterInterface from "varie/lib/routing/RouterInterface";

/**
 * Core Layout
 *
 * ...
 */
$router.template("", "layouts/core/Core").group(() => {


    /**
     * Dashboard
     *
     * ...
     */
    $router.route("", "dashboard/index").setName("dashboard");

    /**
     * People
     *
     * ...
     */
    $router.template("people", "people/layout").group(() => {

        $router.route("people", "people/index").setName("people");

    });

    /**
     * Events
     *
     * ...
     */
    $router.template("events", "events/layout").group(() => {

        $router.route("", "events/index").setName("events");

    });

    /**
     * 404 - Catch All
     *
     * ...
     */
    // $router.route("*", "404");

});