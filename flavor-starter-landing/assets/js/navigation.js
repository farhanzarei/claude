/**
 * Mobile navigation toggle.
 *
 * @package Flavor_Starter_Landing
 */
( function () {
    'use strict';

    var toggle = document.querySelector( '.menu-toggle' );
    var nav    = document.querySelector( '.main-navigation' );

    if ( ! toggle || ! nav ) {
        return;
    }

    toggle.addEventListener( 'click', function () {
        var expanded = toggle.getAttribute( 'aria-expanded' ) === 'true';
        toggle.setAttribute( 'aria-expanded', String( ! expanded ) );
        nav.classList.toggle( 'is-open' );
    } );

    // Close menu when clicking a link (smooth scroll friendly).
    nav.querySelectorAll( 'a' ).forEach( function ( link ) {
        link.addEventListener( 'click', function () {
            nav.classList.remove( 'is-open' );
            toggle.setAttribute( 'aria-expanded', 'false' );
        } );
    } );
} )();
