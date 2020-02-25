import React from "react"

import '../styling/footer.css';

const Footer = () => (
    <footer class="h6 bg-dark text-light footer-style">
        © {new Date().getFullYear()}, Justin Hynes
    </footer>
)

export default Footer