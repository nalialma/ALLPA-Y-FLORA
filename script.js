* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-red: #D94A5C;
    --primary-orange: #F7A755;
    --primary-green: #6B9B47;
    --secondary-yellow: #FFF4B8;
    --secondary-peach: #F9C892;
    --secondary-olive: #8B9D5C;
    --primary-purple: #8B5A9E;
    --warm-cream: #FFF8E7;
}

body {
    font-family: 'Quicksand', sans-serif;
    overflow-x: hidden;
    background: linear-gradient(135deg, var(--warm-cream) 0%, var(--secondary-yellow) 100%);
    min-height: 100vh;
    position: relative;
}

/* Splash Screen */
#splash {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.95);
    z-index: 1000;
    transition: opacity 1s ease-out;
}

#splash-logo {
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#logo-image {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    border: 6px solid #649532;
    box-shadow: 0 15px 50px rgba(100, 149, 50, 0.4);
    animation: logoPulse 2s ease-in-out infinite alternate;
}

#logo-text {
    position: absolute;
    text-align: center;
    font-family: 'Georgia', serif;
    font-weight: bold;
    color: #649532;
    font-size: 1.2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0;
    animation: textFadeIn 1s ease-out 1.5s forwards;
}

.vine-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.vine-circle {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
    box-sizing: border-box;
    opacity: 0;
}

.vine-circle:nth-child(1) {
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: vineExpand 3s ease-out 0.5s forwards;
    border-color: #649532;
}

.vine-circle:nth-child(2) {
    width: 450px;
    height: 450px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: vineExpand 3s ease-out 1s forwards;
    border-color: #77853c;
}

.vine-circle:nth-child(3) {
    width: 600px;
    height: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: vineExpand 3s ease-out 1.5s forwards;
    border-color: #649532;
}

.vine-circle:nth-child(4) {
    width: 750px;
    height: 750px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: vineExpand 3s ease-out 2s forwards;
    border-color: #77853c;
}

.leaf-element {
    position: absolute;
    font-size: 2rem;
    opacity: 0;
    animation: leafFloat 4s ease-out forwards;
}

.leaf-1 { top: 20%; left: 15%; animation-delay: 0.8s; }
.leaf-2 { top: 15%; right: 20%; animation-delay: 1.2s; }
.leaf-3 { bottom: 25%; left: 25%; animation-delay: 1.6s; }
.leaf-4 { bottom: 20%; right: 15%; animation-delay: 2s; }
.leaf-5 { top: 40%; left: 5%; animation-delay: 2.4s; }
.leaf-6 { top: 60%; right: 5%; animation-delay: 2.8s; }
.leaf-7 { bottom: 10%; left: 40%; animation-delay: 3.2s; }
.leaf-8 { top: 10%; left: 50%; animation-delay: 3.6s; }

@keyframes logoPulse {
    0% { transform: scale(1); }
    100% { transform: scale(1.05); }
}

@keyframes textFadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes vineExpand {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.1);
    }
    50% {
        opacity: 0.7;
    }
    100% {
        opacity: 0.4;
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes leafFloat {
    0% {
        opacity: 0;
        transform: translate(0, 0) rotate(0deg);
    }
    30% {
        opacity: 0.8;
    }
    100% {
        opacity: 0.6;
        transform: translate(var(--tx, 0), var(--ty, 0)) rotate(var(--rotate, 0deg));
    }
}

/* Hide splash after animation */
.hide-splash {
    opacity: 0;
}

/* Botanical Background */
.botanical-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
}

.botanical-leaf {
    position: absolute;
    opacity: 0.1;
    animation: botanicalFloat 20s ease-in-out infinite;
}

@keyframes botanicalFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
}

/* Header */
header {
    background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-orange) 50%, var(--secondary-yellow) 100%);
    padding: 3rem 2rem;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

header::before {
    content: '🌿';
    position: absolute;
    font-size: 12rem;
    opacity: 0.15;
    left: -50px;
    top: -30px;
    animation: rotate 20s linear infinite;
}

header::after {
    content: '🌱';
    position: absolute;
    font-size: 10rem;
    opacity: 0.15;
    right: -30px;
    bottom: -20px;
    animation: rotate 15s linear infinite reverse;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

h1 {
    font-family: 'Righteous', cursive;
    font-size: 5rem;
    color: white;
    margin-bottom: 1.5rem;
    text-shadow: 4px 4px 0px var(--primary-purple), 6px 6px 8px rgba(0,0,0,0.3);
    animation: slideDown 1s ease-out;
    letter-spacing: 2px;
    position: relative;
    transform: rotate(-2deg);
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-50px) rotate(-2deg);
    }
    to {
        opacity: 1;
        transform: translateY(0) rotate(-2deg);
    }
}

.slogan {
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
    color: white;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Rotating Messages */
.message-container {
    background: rgba(255,255,255,0.95);
    padding: 2rem;
    margin: 3rem auto;
    max-width: 900px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(217, 74, 92, 0.2);
    position: relative;
    overflow: hidden;
    border: 3px solid var(--primary-orange);
}

.message-container::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(247, 167, 85, 0.1), transparent);
    animation: shimmer 3s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.rotating-message {
    font-family: 'Quicksand', sans-serif;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
    text-align: center;
    position: relative;
    z-index: 1;
    transition: opacity 1s ease-in-out;
}

.message-tagline {
    font-family: 'Righteous', cursive;
    font-size: 1.3rem;
    color: var(--primary-orange);
    margin-top: 1rem;
    font-weight: 600;
    text-shadow: 1px 1px 0px var(--primary-purple);
}

/* Main Content */
main {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

section {
    background: white;
    padding: 3.5rem;
    margin: 3rem 0;
    border-radius: 25px;
    box-shadow: 0 15px 50px rgba(0,0,0,0.12);
    animation: slideUp 0.8s ease-out;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid transparent;
}

section:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(217, 74, 92, 0.25);
    border-color: var(--primary-orange);
}

section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-red), var(--primary-orange), var(--secondary-yellow), var(--primary-green));
    transition: width 0.3s ease;
}

section:hover::before {
    width: 12px;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

h2 {
    font-family: 'Righteous', cursive;
    font-size: 2.8rem;
    color: var(--primary-orange);
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    text-shadow: 2px 2px 0px var(--primary-purple);
}

h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary-red), var(--primary-orange), var(--primary-green));
    border-radius: 2px;
}

p {
    line-height: 1.8;
    color: #555;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

/* Map */
#map {
    height: 500px;
    width: 100%;
    border-radius: 15px;
    margin-top: 2rem;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* Contact */
.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.contact-item {
    background: linear-gradient(135deg, var(--secondary-yellow), var(--primary-orange));
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    transition: transform 0.3s ease;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.contact-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

.contact-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.contact-item h3 {
    font-family: 'Righteous', cursive;
    font-size: 1.5rem;
    color: var(--primary-purple);
    margin-bottom: 0.5rem;
}

/* Footer */
footer {
    background: linear-gradient(135deg, var(--primary-green), var(--secondary-olive));
    color: white;
    text-align: center;
    padding: 3rem 2rem;
    margin-top: 4rem;
    position: relative;
    overflow: hidden;
}

footer::before {
    content: '🍃';
    position: absolute;
    font-size: 15rem;
    opacity: 0.05;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: rotate 30s linear infinite;
}

.footer-vine {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 20px,
        rgba(255,255,255,0.2) 20px,
        rgba(255,255,255,0.2) 40px
    );
    animation: vineScroll 10s linear infinite;
}

@keyframes vineScroll {
    from { background-position: 0 0; }
    to { background-position: 40px 0; }
}

footer p {
    font-family: 'Quicksand', sans-serif;
    color: white;
    position: relative;
    z-index: 1;
}

.footer-credit {
    font-size: 0.9rem;
    margin-top: 1rem;
    opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }

    .slogan {
        font-size: 1rem;
    }

    h2 {
        font-size: 2rem;
    }

    section {
        padding: 2rem;
    }

    #map {
        height: 350px;
    }

    .message-container {
        padding: 1.5rem;
        margin: 2rem 1rem;
    }

    .rotating-message {
        font-size: 1rem;
    }

    #splash-logo {
        width: 300px;
        height: 300px;
    }

    #logo-image {
        width: 250px;
        height: 250px;
        border: 5px solid #649532;
    }
}
