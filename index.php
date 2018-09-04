<?php get_header(); ?>
    <div class="page__wrapper" id="particleground">
        <div role="main" class="wrapper" id="fullpage">
            <section class="section main">
                <div class="main__wrapper">
                    <h1 class="headline">Hi,<br/> I'm <span>Eugene</span>,<br/> Front-end developer.</h1>
                    <p class="subheadline">HTML5 & CSS3 / VueJS / WordPress</p>
                    <div class="bg-decorative">
                    <span class="rocket">
                        <img src="<?php echo get_template_directory_uri(); ?>/dist/img/rocket.png" alt="Rocket">
                    </span>
                        <span class="earth">
                        <img src="<?php echo get_template_directory_uri(); ?>/dist/img/earth.png" alt="Earth">
                    </span>
                    </div>
                    <div class="progress-bar">
                        <span class="progress-bar__name">Main</span>
                    </div>
                </div>
            </section>
            <section class="section portfolio">
                <div class="portfolio__wrapper">
                    <h1 class="headline">My projects</h1>
                    <div class="portfolio-items">
                        <div class="portfolio-items__item">
                            <h2>10+</h2>
                            <p>Full websites</p>
                        </div>
                        <div class="portfolio-items__item">
                            <h2>2</h2>
                            <p>SPA & APPs</p>
                        </div>
                        <div class="portfolio-items__item">
                            <h2>8</h2>
                            <p>Landing pages</p>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <span class="progress-bar__name">Portfolio</span>
                    </div>
                </div>
            </section>
            <section class="skils section">
                <div class="skils__wrapper">
                    <h1 class="headline">Skills &<br/>Expereanse</h1>
                    <p class="subheadline">HTML5 & CSS3 <br>JQuery / WordPress</p>
                    <div class="skils-items">
                        <div class="skils-items__item">Bootstrap 3/4, Materialize,<br/>Sass(ScssScript), LESS, Stylus,
                            Bourbon, Gulp;
                        </div>
                        <div class="skils-items__item">Basic knowledge of Vue JS, JavaScript, SQL, PHP;</div>
                        <div class="skils-items__item">Other Technologies: GSAP, BEM, GIT, SVG, AJAX,<br/>
                            Ps(InVision), fullPage.js, Google charts and other.
                        </div>
                    </div>
                    <div class="progress-bar">
                        <span class="progress-bar__name">Skils</span>
                    </div>
                </div>
            </section>
            <section class="section contacts">
                <div class="contacts__wrapper">
                    <div class="progress-bar">
                        <span class="progress-bar__name">Contacts</span>
                    </div>
                </div>
            </section>
        </div>
    </div>

<?php get_footer(); ?>