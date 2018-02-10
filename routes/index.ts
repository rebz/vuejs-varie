let $router = $app.make<RouterInterface>("$router");
import RouterInterface from "varie/lib/routing/RouterInterface";

/**
 * Core Layout
 *
 * Sentence goes here...
 */
$router.template("", "layouts/core/Core").group(() => {


    /**
     * Dashboard
     *
     * Sentence goes here...
     */
    $router.route("", "dashboard/index").setName("dashboard");

    /**
     * People
     *
     * Sentence goes here...
     */
    $router.template("people", "people/layout").group(() => {

        $router.route("people", "people/index").setName("people");

    });

    /**
     * Events
     *
     * Sentence goes here...
     */
    $router.template("events", "events/layout").group(() => {

        $router.route("", "events/index").setName("events");

    });

    /**
     * 404 - Catch All
     *
     * Sentence goes here...
     */
    // $router.route("*", "404");

});