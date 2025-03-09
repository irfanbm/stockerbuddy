<?php
/*
Plugin Name: Stockerbuddy App Integration
Plugin URI: https://sb.grafisify.com
Description: Integrates Stockerbuddy React App into WordPress
Version: 1.0
Author: Grafisfy
*/

// Tambahkan ini di bagian atas untuk mengizinkan iframe
function stockerbuddy_add_headers() {
    header('X-Frame-Options: SAMEORIGIN');
    header('Content-Security-Policy: frame-ancestors \'self\' https://sb.grafisify.com');
}
add_action('send_headers', 'stockerbuddy_add_headers');

// Tambahkan script di header
function stockerbuddy_add_header_scripts() {
    ?>
    <script>
        if (window.location !== window.parent.location) {
            document.domain = window.location.hostname;
        }
    </script>
    <?php
}
add_action('wp_head', 'stockerbuddy_add_header_scripts');

function stockerbuddy_shortcode() {
    ob_start();
    ?>
    <div id="stockerbuddy-container">
        <iframe 
            id="stockerbuddy-app" 
            src="https://sb.grafisify.com"
            style="width: 100%; min-height: 800px; border: none; margin: 0; padding: 0;"
            scrolling="no"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
        ></iframe>

        <script>
        window.addEventListener('message', function(event) {
            // Verifikasi origin untuk keamanan
            if (event.origin !== 'https://sb.grafisify.com') return;
            
            if (event.data && event.data.type === 'setHeight') {
                const iframe = document.getElementById('stockerbuddy-app');
                if (iframe) {
                    iframe.style.height = Math.max(800, event.data.height) + 'px';
                }
            }
        }, false);

        // Tambahkan fallback untuk memastikan iframe terlihat
        window.addEventListener('load', function() {
            const iframe = document.getElementById('stockerbuddy-app');
            if (iframe) {
                iframe.style.minHeight = '800px';
            }
        });
        </script>

        <style>
        #stockerbuddy-container {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        
        /* WordPress specific styles */
        .entry-content,
        .wp-block-post-content,
        .elementor-section,
        .elementor-container,
        .elementor-column-wrap,
        .elementor-widget-wrap,
        .elementor {
            max-width: 100% !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        /* Fix untuk tema tertentu */
        .site-content,
        .content-area,
        .main-content,
        article {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
        }
        
        /* Pastikan iframe responsive */
        #stockerbuddy-app {
            aspect-ratio: 16/9;
            min-height: 800px;
        }
        </style>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('stockerbuddy', 'stockerbuddy_shortcode');

// Add settings page
function stockerbuddy_menu() {
    add_options_page(
        'Stockerbuddy Settings',
        'Stockerbuddy',
        'manage_options',
        'stockerbuddy',
        'stockerbuddy_settings_page'
    );
}
add_action('admin_menu', 'stockerbuddy_menu');

function stockerbuddy_settings_page() {
    ?>
    <div class="wrap">
        <h2>Stockerbuddy Integration</h2>
        <p>Gunakan shortcode berikut untuk menampilkan aplikasi Stockerbuddy:</p>
        <code>[stockerbuddy]</code>
        
        <h3>Cara Penggunaan:</h3>
        <ol>
            <li>Copy shortcode <code>[stockerbuddy]</code></li>
            <li>Paste ke halaman atau post yang diinginkan</li>
            <li>Update/Publish halaman</li>
        </ol>
        
        <h3>Troubleshooting:</h3>
        <ul>
            <li>Pastikan halaman menggunakan template "Full Width" atau template tanpa sidebar</li>
            <li>Nonaktifkan plugin caching sementara saat testing</li>
            <li>Pastikan tidak ada CSS tema yang membatasi lebar konten</li>
            <li>Jika menggunakan Elementor, gunakan section full width</li>
        </ul>
        
        <h3>Informasi:</h3>
        <p>Aplikasi akan dimuat dari: <code>https://sb.grafisify.com</code></p>
    </div>
    <?php
}

// Tambahkan ini untuk membersihkan cache saat plugin diaktifkan
function stockerbuddy_activate() {
    // Clear cache jika menggunakan WP Super Cache
    if (function_exists('wp_cache_clear_cache')) {
        wp_cache_clear_cache();
    }
    
    // Clear cache jika menggunakan W3 Total Cache
    if (function_exists('w3tc_flush_all')) {
        w3tc_flush_all();
    }
}
register_activation_hook(__FILE__, 'stockerbuddy_activate');