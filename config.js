// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "LP",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "To my favourite LP💓",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        cats: ['🐱', '🐈']                       // Cute cat emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "gusto mo ba ng gift ko?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "mas gusto ko ikaw ❤️"           // Secret hover message
        },
        second: {
            text: "Weh? Talaga ba, gaano mo ko kagusto?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "What slithers and wiggles, comes in a rainbow of colors, and is so sour it might make you pucker?", // The big question!
            yesBtn: "😖🍬🪱",                                             // Text for "Yes" button
            noBtn: "sirit na🥹"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW talaga baaaaaa?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "more more more more! 🚀💝",              // Shows when they go past 1000%
        normal: "mas pa sa moooooooooooore! 🥰"        // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "sure ka na talaga ba? chat me the answer muna🎉💝💖💝💓",
        message: "come to me to get your gift🫣",
        emojis: "💖🤗😘😘😘💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#FFEDFA",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#E195AB",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#CCDF92",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#DE3163"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dgi542ya3/video/upload/v1739502026/Adie_Janine_Berdin_-_Mahika_Lyrics_q7j9cc.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
