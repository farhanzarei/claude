<?php
/**
 * Single page template.
 *
 * @package Flavor_Starter_Landing
 */

get_header();
?>

<div class="page-content">
    <div class="container">
        <?php while ( have_posts() ) : the_post(); ?>
            <article id="page-<?php the_ID(); ?>" <?php post_class(); ?>>
                <h1><?php the_title(); ?></h1>
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</div>

<?php get_footer(); ?>
