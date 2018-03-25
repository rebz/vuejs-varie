let $router = $app.make<RouterInterface>("$router");
import RouterInterface from "varie/lib/routing/RouterInterface";


/**
 * Core Layout
 *
 * ...
 */
$router.layout("layouts/core").group(() => {

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
    $router.prefix("/events").layout( "events/layout").group(() => {
        $router.route("/", "events/index").setName("events");

    });

    /**
     * People
     *
     * ...
     */
    $router.prefix("/people").layout( "people/layout").group(() => {

        $router.route("/", {
            default: "people/index",
            sidebar: "people/sidebar"
        }).setName("people");

        $router.route("/:person", {
            default: "people/view",
            sidebar: "people/view-sidebar"
        }).setName("people-view");

        // $router.route("/:person", "people/view").setName("people-view");

    });


    /**
     * Places
     *
     * ...
     */
    $router.prefix("/places").layout( "places/layout").group(() => {

        $router.route("/", "places/index").setName("places");

    });


    /**
     * 404 - Catch All
     *
     * ...
     */
    $router.route("*", "404");
});

