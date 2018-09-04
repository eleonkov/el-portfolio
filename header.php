<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Eugene Leonkov: Front-End Developer</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Eugene Leonkov">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jua">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.2/fullpage.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/dist/css/libs.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/dist/css/style.min.css">
    <?php wp_head(); ?>
</head>

<body class="scroll-hidden">

<div class="loader-wrapper">
    <div class="loader"></div>
</div>
<header class="header">
    <div class="header__wrapper">
        <div class="logo">
            <span class="logo__text">EL</span>
        </div>

        <div class="main-menu">
            <div class="main-menu__collapse">
                <nav class="menu">
                    <ul id="menu">
                        <li data-menuanchor="main" class="menu__item active"><a href="#main">Main</a></li>
                        <li data-menuanchor="portfolio" class="menu__item"><a href="#portfolio">Portfolio</a></li>
                        <li data-menuanchor="skills" class="menu__item"><a href="#skills">Skills</a></li>
                        <li data-menuanchor="contacts" class="menu__item"><a href="#contacts">Contacts</a></li>
                    </ul>
                </nav>
            </div>

            <div class="main-menu__toggle">
                <span></span>
            </div>
        </div>

        <div class="social">
            <ul class="social-links">
                <li class="social-links__item">
                    <a href="http://t.me/eleonkov" target="_blank"><span class="telegram-plane"></span></a>
                </li>
                <li class="social-links__item">
                    <a href="https://wa.me/375447879517" target="_blank"><span class="whatsapp"></span></a>
                </li>
                <li class="social-links__item">
                    <a href="https://www.linkedin.com/in/eugene-leonkov-85691a127/" target="_blank"><span
                                class="linkedin-in"></span></a>
                </li>

            </ul>
        </div>
    </div>
</header>
