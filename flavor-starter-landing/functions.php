<?php
/**
 * Flavor Starter Landing - Theme Functions
 *
 * @package Flavor_Starter_Landing
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'FSL_VERSION', '1.0.0' );

/**
 * Theme setup.
 */
function fsl_setup() {
    load_theme_textdomain( 'flavor-starter-landing', get_template_directory() . '/languages' );

    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo', array(
        'height'      => 90,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );
    add_theme_support( 'customize-selective-refresh-widgets' );

    register_nav_menus( array(
        'primary' => esc_html__( 'Primary Menu', 'flavor-starter-landing' ),
        'footer'  => esc_html__( 'Footer Menu', 'flavor-starter-landing' ),
    ) );

    add_image_size( 'fsl-product', 600, 750, true );
    add_image_size( 'fsl-hero', 1920, 1080, true );
}
add_action( 'after_setup_theme', 'fsl_setup' );

/**
 * Enqueue styles and scripts.
 */
function fsl_scripts() {
    wp_enqueue_style(
        'fsl-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700&display=swap',
        array(),
        null
    );

    wp_enqueue_style(
        'fsl-style',
        get_stylesheet_uri(),
        array(),
        FSL_VERSION
    );

    wp_enqueue_script(
        'fsl-navigation',
        get_template_directory_uri() . '/assets/js/navigation.js',
        array(),
        FSL_VERSION,
        true
    );
}
add_action( 'wp_enqueue_scripts', 'fsl_scripts' );

/**
 * Customizer settings.
 */
function fsl_customize_register( $wp_customize ) {

    // ── Hero Section ──
    $wp_customize->add_section( 'fsl_hero', array(
        'title'    => esc_html__( 'Hero Section', 'flavor-starter-landing' ),
        'priority' => 30,
    ) );

    $wp_customize->add_setting( 'fsl_hero_bg', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'fsl_hero_bg', array(
        'label'   => esc_html__( 'Hero Background Image', 'flavor-starter-landing' ),
        'section' => 'fsl_hero',
    ) ) );

    $wp_customize->add_setting( 'fsl_hero_title', array(
        'default'           => esc_html__( 'Step Into Style', 'flavor-starter-landing' ),
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'fsl_hero_title', array(
        'label'   => esc_html__( 'Hero Title', 'flavor-starter-landing' ),
        'section' => 'fsl_hero',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'fsl_hero_subtitle', array(
        'default'           => esc_html__( 'Discover our handcrafted collection designed for comfort and elegance.', 'flavor-starter-landing' ),
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'fsl_hero_subtitle', array(
        'label'   => esc_html__( 'Hero Subtitle', 'flavor-starter-landing' ),
        'section' => 'fsl_hero',
        'type'    => 'textarea',
    ) );

    $wp_customize->add_setting( 'fsl_hero_btn_text', array(
        'default'           => esc_html__( 'View Collection', 'flavor-starter-landing' ),
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'fsl_hero_btn_text', array(
        'label'   => esc_html__( 'Hero Button Text', 'flavor-starter-landing' ),
        'section' => 'fsl_hero',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'fsl_hero_btn_url', array(
        'default'           => '#catalog',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'fsl_hero_btn_url', array(
        'label'   => esc_html__( 'Hero Button URL', 'flavor-starter-landing' ),
        'section' => 'fsl_hero',
        'type'    => 'url',
    ) );

    // ── Products Section ──
    $wp_customize->add_section( 'fsl_products', array(
        'title'    => esc_html__( 'Products Section', 'flavor-starter-landing' ),
        'priority' => 35,
    ) );

    $wp_customize->add_setting( 'fsl_products_title', array(
        'default'           => esc_html__( 'Our Collection', 'flavor-starter-landing' ),
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'fsl_products_title', array(
        'label'   => esc_html__( 'Section Title', 'flavor-starter-landing' ),
        'section' => 'fsl_products',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'fsl_products_subtitle', array(
        'default'           => esc_html__( 'Each pair tells a story of craftsmanship and style.', 'flavor-starter-landing' ),
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'fsl_products_subtitle', array(
        'label'   => esc_html__( 'Section Subtitle', 'flavor-starter-landing' ),
        'section' => 'fsl_products',
        'type'    => 'textarea',
    ) );

    for ( $i = 1; $i <= 6; $i++ ) {
        $wp_customize->add_setting( "fsl_product_{$i}_image", array(
            'default'           => '',
            'sanitize_callback' => 'esc_url_raw',
        ) );
        $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, "fsl_product_{$i}_image", array(
            'label'   => sprintf( esc_html__( 'Product %d Image', 'flavor-starter-landing' ), $i ),
            'section' => 'fsl_products',
        ) ) );

        $wp_customize->add_setting( "fsl_product_{$i}_name", array(
            'default'           => '',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
        $wp_customize->add_control( "fsl_product_{$i}_name", array(
            'label'   => sprintf( esc_html__( 'Product %d Name', 'flavor-starter-landing' ), $i ),
            'section' => 'fsl_products',
            'type'    => 'text',
        ) );

        $wp_customize->add_setting( "fsl_product_{$i}_desc", array(
            'default'           => '',
            'sanitize_callback' => 'sanitize_textarea_field',
        ) );
        $wp_customize->add_control( "fsl_product_{$i}_desc", array(
            'label'   => sprintf( esc_html__( 'Product %d Description', 'flavor-starter-landing' ), $i ),
            'section' => 'fsl_products',
            'type'    => 'textarea',
        ) );

        $wp_customize->add_setting( "fsl_product_{$i}_price", array(
            'default'           => '',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
        $wp_customize->add_control( "fsl_product_{$i}_price", array(
            'label'   => sprintf( esc_html__( 'Product %d Price', 'flavor-starter-landing' ), $i ),
            'section' => 'fsl_products',
            'type'    => 'text',
        ) );

        $wp_customize->add_setting( "fsl_product_{$i}_badge", array(
            'default'           => '',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
        $wp_customize->add_control( "fsl_product_{$i}_badge", array(
            'label'   => sprintf( esc_html__( 'Product %d Badge (e.g. New, Sale)', 'flavor-starter-landing' ), $i ),
            'section' => 'fsl_products',
            'type'    => 'text',
        ) );
    }

    // ── About / Brand Story ──
    $wp_customize->add_section( 'fsl_about', array(
        'title'    => esc_html__( 'Brand Story Section', 'flavor-starter-landing' ),
        'priority' => 40,
    ) );

    $wp_customize->add_setting( 'fsl_about_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'fsl_about_image', array(
        'label'   => esc_html__( 'Brand Image', 'flavor-starter-landing' ),
        'section' => 'fsl_about',
    ) ) );

    $wp_customize->add_setting( 'fsl_about_title', array(
        'default'           => esc_html__( 'Our Story', 'flavor-starter-landing' ),
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'fsl_about_title', array(
        'label'   => esc_html__( 'Section Title', 'flavor-starter-landing' ),
        'section' => 'fsl_about',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'fsl_about_text', array(
        'default'           => esc_html__( 'We believe that every step should feel extraordinary. Founded with a passion for quality and design, our brand brings together the finest materials with timeless aesthetics.', 'flavor-starter-landing' ),
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'fsl_about_text', array(
        'label'   => esc_html__( 'Brand Story Text', 'flavor-starter-landing' ),
        'section' => 'fsl_about',
        'type'    => 'textarea',
    ) );

    // ── Features Section ──
    $wp_customize->add_section( 'fsl_features', array(
        'title'    => esc_html__( 'Features Section', 'flavor-starter-landing' ),
        'priority' => 45,
    ) );

    $features_defaults = array(
        1 => array( 'title' => 'Handcrafted', 'desc' => 'Each pair is meticulously crafted by skilled artisans using premium materials.' ),
        2 => array( 'title' => 'Comfortable', 'desc' => 'Ergonomic design ensures all-day comfort without compromising on style.' ),
        3 => array( 'title' => 'Sustainable', 'desc' => 'We use eco-friendly materials and ethical manufacturing processes.' ),
    );

    for ( $i = 1; $i <= 3; $i++ ) {
        $wp_customize->add_setting( "fsl_feature_{$i}_title", array(
            'default'           => $features_defaults[ $i ]['title'],
            'sanitize_callback' => 'sanitize_text_field',
        ) );
        $wp_customize->add_control( "fsl_feature_{$i}_title", array(
            'label'   => sprintf( esc_html__( 'Feature %d Title', 'flavor-starter-landing' ), $i ),
            'section' => 'fsl_features',
            'type'    => 'text',
        ) );

        $wp_customize->add_setting( "fsl_feature_{$i}_desc", array(
            'default'           => $features_defaults[ $i ]['desc'],
            'sanitize_callback' => 'sanitize_textarea_field',
        ) );
        $wp_customize->add_control( "fsl_feature_{$i}_desc", array(
            'label'   => sprintf( esc_html__( 'Feature %d Description', 'flavor-starter-landing' ), $i ),
            'section' => 'fsl_features',
            'type'    => 'textarea',
        ) );
    }

    // ── CTA Section ──
    $wp_customize->add_section( 'fsl_cta', array(
        'title'    => esc_html__( 'Call to Action Section', 'flavor-starter-landing' ),
        'priority' => 50,
    ) );

    $wp_customize->add_setting( 'fsl_cta_title', array(
        'default'           => esc_html__( 'Find Your Perfect Pair', 'flavor-starter-landing' ),
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'fsl_cta_title', array(
        'label'   => esc_html__( 'CTA Title', 'flavor-starter-landing' ),
        'section' => 'fsl_cta',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'fsl_cta_text', array(
        'default'           => esc_html__( 'Visit our store or contact us for a personalized experience.', 'flavor-starter-landing' ),
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'fsl_cta_text', array(
        'label'   => esc_html__( 'CTA Text', 'flavor-starter-landing' ),
        'section' => 'fsl_cta',
        'type'    => 'textarea',
    ) );

    $wp_customize->add_setting( 'fsl_cta_btn_text', array(
        'default'           => esc_html__( 'Contact Us', 'flavor-starter-landing' ),
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'fsl_cta_btn_text', array(
        'label'   => esc_html__( 'CTA Button Text', 'flavor-starter-landing' ),
        'section' => 'fsl_cta',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'fsl_cta_btn_url', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'fsl_cta_btn_url', array(
        'label'   => esc_html__( 'CTA Button URL', 'flavor-starter-landing' ),
        'section' => 'fsl_cta',
        'type'    => 'url',
    ) );

    // ── Footer ──
    $wp_customize->add_section( 'fsl_footer', array(
        'title'    => esc_html__( 'Footer', 'flavor-starter-landing' ),
        'priority' => 55,
    ) );

    $wp_customize->add_setting( 'fsl_footer_text', array(
        'default'           => esc_html__( 'Premium footwear crafted with passion and precision.', 'flavor-starter-landing' ),
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'fsl_footer_text', array(
        'label'   => esc_html__( 'Footer Description', 'flavor-starter-landing' ),
        'section' => 'fsl_footer',
        'type'    => 'textarea',
    ) );
}
add_action( 'customize_register', 'fsl_customize_register' );

/**
 * Helper: get customizer value with default.
 */
function fsl_get( $key, $default = '' ) {
    return get_theme_mod( $key, $default );
}
