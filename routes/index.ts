let $router = $app.make<RouterInterface>("$router");
import RouterInterface from "varie/lib/routing/RouterInterface";


/**
 * Core Layout
 *
 * ...
 */
$router.template("/", "layouts/core").group(() => {


    /**
     * Dashboard
     *
     * ...
     */
    $router.route("/", "dashboard/index").setName("dashboard");


    /**
     * Events
     *
     * ...
     */
    $router.template("/events", "events/layout").group(() => {

        $router.route("/", "events/index").setName("events");

    });


    /**
     * People
     *
     * ...
     */
    $router.template("/people", "people/layout").group(() => {

        $router.route("/", "people/index").setName("people");

    });


    /**
     * Places
     *
     * ...
     */
    $router.template("/places", "places/layout").group(() => {

        $router.route("/", "places/index").setName("places");

    });

});


/**
 * 404 - Catch All
 *
 * ...
 */
$router.route("*", "404");