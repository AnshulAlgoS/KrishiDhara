import React from "react";
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin,
    Info,
    FileText,
    ShieldCheck,
    Link as LinkIcon,
} from "lucide-react";
import "./footer.css";
import logo from "../assets/krishiLogo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand + About */}
                <div className="footer-col">
                    <div className="footer-brand">
                        <img src={logo} alt="Krishi Dhara Logo" className="footer-logo" />
                        <h2 className="brand-name">KrishiDhara</h2>
                    </div>
                    <p>
                        Empowering farmers with AI-powered insights, market access, and
                        community support to transform agricultural land into sustainable
                        livelihood opportunities.
                    </p>

                    {/* Social Media Icons */}
                    <div className="social-icons">
                        <a href="#" target="_blank" rel="noopener noreferrer"><Facebook size={18} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><Twitter size={18} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-col1">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/"><LinkIcon size={16} /> Home</a></li>
                        <li><a href="/mentoshi"><LinkIcon size={16} /> Mentorship</a></li>
                        <li><a href="/stories"><LinkIcon size={16} /> Stories</a></li>
                        <li><a href="/cropfinder"><LinkIcon size={16} /> CropFinder</a></li>
                        <li><a href="/marketplace"><LinkIcon size={16} /> Marketplace</a></li>
                    </ul>
                </div>


                {/* Company */}
                <div className="footer-col2">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/contact"><Phone size={16} /> Contact</a></li>
                        <li><a href="/about"><Info size={16} /> About Us</a></li>
                        <li><a href="mailto:info@krishidhara.com"><Mail size={16} /> info@krishidhara.com</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="footer-col3">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="/privacy-policy"><ShieldCheck size={16} /> Privacy Policy</a></li>
                        <li><a href="/terms"><FileText size={16} /> Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Krishi Dhara — From Land to Livelihood</p>
            </div>
        </footer>
    );
};

export default Footer;
