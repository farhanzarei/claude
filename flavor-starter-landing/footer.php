<?php
/**
 * Footer template.
 *
 * @package Flavor_Starter_Landing
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
</main><!-- .site-content -->

<footer class="site-footer" role="contentinfo">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <div class="site-title"><?php bloginfo( 'name' ); ?></div>
                <p><?php echo esc_html( fsl_get( 'fsl_footer_text', __( 'Premium footwear crafted with passion and precision.', 'flavor-starter-landing' ) ) ); ?></p>
            </div>

            <?php if ( has_nav_menu( 'footer' ) ) : ?>
                <div class="footer-links">
                    <h4><?php esc_html_e( 'Quick Links', 'flavor-starter-landing' ); ?></h4>
                    <?php
                    wp_nav_menu( array(
                        'theme_location' => 'footer',
                        'container'      => false,
                        'fallback_cb'    => false,
                        'depth'          => 1,
                    ) );
                    ?>
                </div>
            <?php endif; ?>

            <div class="footer-links">
                <h4><?php esc_html_e( 'Contact', 'flavor-starter-landing' ); ?></h4>
                <ul>
                    <li><?php echo esc_html( get_bloginfo( 'admin_email' ) ); ?></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>
                &copy; <?php echo esc_html( date_i18n( 'Y' ) ); ?>
                <?php bloginfo( 'name' ); ?>.
                <?php esc_html_e( 'All rights reserved.', 'flavor-starter-landing' ); ?>
            </p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
