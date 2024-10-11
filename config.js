tailwind.config = {
    theme: {
        extend: {
            colors: {
                my_custom_color:'rgba(185,76,76,0.98)',
                orange_pale: '#FFD9A6',
                orange: '#FBB03B',
                orange_light: '#F7931E',
            },
            fontFamily: {
            //     override the default sans
                sans: ['Josefin Sans', 'sans-serif'],
                title: ['Playfair Display SC', 'serif']
            },
            backgroundImage: {
                mobile: "url('card-background-mobile.png')",
                desktop: "url('card-background.png')"
            }
        }
    }
}