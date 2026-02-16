<?php
/**
 * Front page template — Landing page with product catalog.
 *
 * @package Flavor_Starter_Landing
 */

get_header();

$hero_bg       = fsl_get( 'fsl_hero_bg' );
$hero_title    = fsl_get( 'fsl_hero_title', __( 'Step Into Style', 'flavor-starter-landing' ) );
$hero_subtitle = fsl_get( 'fsl_hero_subtitle', __( 'Discover our handcrafted collection designed for comfort and elegance.', 'flavor-starter-landing' ) );
$hero_btn_text = fsl_get( 'fsl_hero_btn_text', __( 'View Collection', 'flavor-starter-landing' ) );
$hero_btn_url  = fsl_get( 'fsl_hero_btn_url', '#catalog' );
?>

<!-- Hero -->
<section class="hero-section" <?php if ( $hero_bg ) : ?>style="background-image: url(<?php echo esc_url( $hero_bg ); ?>);"<?php endif; ?>>
    <div class="hero-content">
        <h1><?php echo esc_html( $hero_title ); ?></h1>
        <p><?php echo esc_html( $hero_subtitle ); ?></p>
        <?php if ( $hero_btn_text ) : ?>
            <a href="<?php echo esc_url( $hero_btn_url ); ?>" class="btn btn-outline"><?php echo esc_html( $hero_btn_text ); ?></a>
        <?php endif; ?>
    </div>
</section>

<!-- Features -->
<section class="features-section">
    <div class="container">
        <div class="features-grid">
            <?php
            $feature_icons = array( 1 => '&#9997;', 2 => '&#10084;', 3 => '&#9752;' );
            $feature_defaults = array(
                1 => array( 'title' => __( 'Handcrafted', 'flavor-starter-landing' ), 'desc' => __( 'Each pair is meticulously crafted by skilled artisans using premium materials.', 'flavor-starter-landing' ) ),
                2 => array( 'title' => __( 'Comfortable', 'flavor-starter-landing' ), 'desc' => __( 'Ergonomic design ensures all-day comfort without compromising on style.', 'flavor-starter-landing' ) ),
                3 => array( 'title' => __( 'Sustainable', 'flavor-starter-landing' ), 'desc' => __( 'We use eco-friendly materials and ethical manufacturing processes.', 'flavor-starter-landing' ) ),
            );

            for ( $i = 1; $i <= 3; $i++ ) :
                $title = fsl_get( "fsl_feature_{$i}_title", $feature_defaults[ $i ]['title'] );
                $desc  = fsl_get( "fsl_feature_{$i}_desc", $feature_defaults[ $i ]['desc'] );
                if ( ! $title ) continue;
            ?>
                <div class="feature-item">
                    <div class="feature-icon"><?php echo $feature_icons[ $i ]; ?></div>
                    <h3><?php echo esc_html( $title ); ?></h3>
                    <p><?php echo esc_html( $desc ); ?></p>
                </div>
            <?php endfor; ?>
        </div>
    </div>
</section>

<!-- Catalog -->
<section id="catalog" class="catalog-section">
    <div class="container">
        <div class="section-header">
            <h2><?php echo esc_html( fsl_get( 'fsl_products_title', __( 'Our Collection', 'flavor-starter-landing' ) ) ); ?></h2>
            <p><?php echo esc_html( fsl_get( 'fsl_products_subtitle', __( 'Each pair tells a story of craftsmanship and style.', 'flavor-starter-landing' ) ) ); ?></p>
            <div class="section-divider"></div>
        </div>

        <div class="products-grid">
            <?php
            $sample_products = array(
                1 => array( 'name' => __( 'Classic Oxford', 'flavor-starter-landing' ), 'desc' => __( 'Timeless elegance meets modern comfort.', 'flavor-starter-landing' ), 'price' => '$189' ),
                2 => array( 'name' => __( 'Urban Runner', 'flavor-starter-landing' ), 'desc' => __( 'Lightweight performance for the city explorer.', 'flavor-starter-landing' ), 'price' => '$145' ),
                3 => array( 'name' => __( 'Heritage Boot', 'flavor-starter-landing' ), 'desc' => __( 'Rugged craftsmanship built to last a lifetime.', 'flavor-starter-landing' ), 'price' => '$225' ),
                4 => array( 'name' => __( 'Minimal Sneaker', 'flavor-starter-landing' ), 'desc' => __( 'Clean lines and premium leather for everyday style.', 'flavor-starter-landing' ), 'price' => '$165' ),
                5 => array( 'name' => __( 'Loafer Elite', 'flavor-starter-landing' ), 'desc' => __( 'Effortless sophistication for any occasion.', 'flavor-starter-landing' ), 'price' => '$175' ),
                6 => array( 'name' => __( 'Sport Flex', 'flavor-starter-landing' ), 'desc' => __( 'Engineered for peak performance and comfort.', 'flavor-starter-landing' ), 'price' => '$155' ),
            );

            for ( $i = 1; $i <= 6; $i++ ) :
                $name  = fsl_get( "fsl_product_{$i}_name", $sample_products[ $i ]['name'] ?? '' );
                $desc  = fsl_get( "fsl_product_{$i}_desc", $sample_products[ $i ]['desc'] ?? '' );
                $price = fsl_get( "fsl_product_{$i}_price", $sample_products[ $i ]['price'] ?? '' );
                $image = fsl_get( "fsl_product_{$i}_image" );
                $badge = fsl_get( "fsl_product_{$i}_badge" );

                if ( ! $name ) continue;
            ?>
                <div class="product-card">
                    <div class="product-image">
                        <?php if ( $image ) : ?>
                            <img src="<?php echo esc_url( $image ); ?>" alt="<?php echo esc_attr( $name ); ?>">
                        <?php endif; ?>
                        <?php if ( $badge ) : ?>
                            <span class="product-badge"><?php echo esc_html( $badge ); ?></span>
                        <?php endif; ?>
                    </div>
                    <div class="product-info">
                        <h3><?php echo esc_html( $name ); ?></h3>
                        <p class="product-description"><?php echo esc_html( $desc ); ?></p>
                        <?php if ( $price ) : ?>
                            <span class="product-price"><?php echo esc_html( $price ); ?></span>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endfor; ?>
        </div>
    </div>
</section>

<!-- Brand Story -->
<?php
$about_title = fsl_get( 'fsl_about_title', __( 'Our Story', 'flavor-starter-landing' ) );
$about_text  = fsl_get( 'fsl_about_text', __( 'We believe that every step should feel extraordinary. Founded with a passion for quality and design, our brand brings together the finest materials with timeless aesthetics.', 'flavor-starter-landing' ) );
$about_image = fsl_get( 'fsl_about_image' );
?>
<section class="about-section">
    <div class="container">
        <div class="about-grid">
            <div class="about-image">
                <?php if ( $about_image ) : ?>
                    <img src="<?php echo esc_url( $about_image ); ?>" alt="<?php echo esc_attr( $about_title ); ?>">
                <?php endif; ?>
            </div>
            <div class="about-content">
                <h2><?php echo esc_html( $about_title ); ?></h2>
                <p><?php echo esc_html( $about_text ); ?></p>
            </div>
        </div>
    </div>
</section>

<!-- CTA -->
<?php
$cta_title    = fsl_get( 'fsl_cta_title', __( 'Find Your Perfect Pair', 'flavor-starter-landing' ) );
$cta_text     = fsl_get( 'fsl_cta_text', __( 'Visit our store or contact us for a personalized experience.', 'flavor-starter-landing' ) );
$cta_btn_text = fsl_get( 'fsl_cta_btn_text', __( 'Contact Us', 'flavor-starter-landing' ) );
$cta_btn_url  = fsl_get( 'fsl_cta_btn_url', '#' );
?>
<section class="cta-section">
    <div class="container">
        <h2><?php echo esc_html( $cta_title ); ?></h2>
        <p><?php echo esc_html( $cta_text ); ?></p>
        <?php if ( $cta_btn_text ) : ?>
            <a href="<?php echo esc_url( $cta_btn_url ); ?>" class="btn btn-primary"><?php echo esc_html( $cta_btn_text ); ?></a>
        <?php endif; ?>
    </div>
</section>

<?php get_footer(); ?>
