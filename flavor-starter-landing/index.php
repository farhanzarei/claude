<?php
/**
 * Main index template — fallback for blog/archive pages.
 *
 * @package Flavor_Starter_Landing
 */

get_header();
?>

<div class="page-content">
    <div class="container">
        <?php if ( have_posts() ) : ?>
            <?php while ( have_posts() ) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div class="entry-summary">
                        <?php the_excerpt(); ?>
                    </div>
                </article>
            <?php endwhile; ?>

            <?php the_posts_navigation(); ?>
        <?php else : ?>
            <p><?php esc_html_e( 'No content found.', 'flavor-starter-landing' ); ?></p>
        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>
