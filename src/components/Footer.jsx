import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Youtube, Music, Mail, ArrowUpRight } from 'lucide-react'
import Anchor from './premade/Anchor'

export default function Footer() {
    // Navigation Links
    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Music', path: '/music' },
        { label: 'Credits', path: '/credits' },
        { label: 'Contact', path: '/contact' }
    ]

    // Social Media Links
    const socialLinks = [
        { 
            icon: <Instagram className="w-5 h-5" />, 
            label: 'Instagram',
            url: 'https://instagram.com/palmerreedmusic'
        },
        { 
            icon: <Twitter className="w-5 h-5" />, 
            label: 'Twitter',
            url: 'https://twitter.com/palmerreedmusic'
        },
        { 
            icon: <Youtube className="w-5 h-5" />, 
            label: 'YouTube',
            url: 'https://youtube.com/palmerreedmusic'
        },
        { 
            icon: <Music className="w-5 h-5" />, 
            label: 'SoundCloud',
            url: 'https://soundcloud.com/palmerreedmusic'
        }
    ]

    return (
        <footer className="bg-color10a text-color60">
            {/* Main Footer Content */}
            <div className="container  mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Palmer Reed</h2>
                        <p className="text-sm opacity-90">
                            Chart-topping songwriter and producer creating soul-stirring music 
                            across R&B, hip-hop, and pop.
                        </p>
                        {/* Quick Contact */}
                        <Anchor 
                            href="mailto:Frank@7keymedia.com"
                            variant="secondary"
                            className="mt-4 inline-flex"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Get in Touch</span>
                        </Anchor>
                    </div>

                    {/* Navigation Links */}
                    <div className='md:flex md:justify-center'>
                        <div >
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <nav className="space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="block hover:text-color30 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="space-y-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-color30 transition-colors group"
                                >
                                    {social.icon}
                                    <span>{social.label}</span>
                                    <ArrowUpRight className="w-4 h-4 opacity-0 -ml-1 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-color60/10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                        <p>
                            © {new Date().getFullYear()} Palmer Reed. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link to="/privacy" className="hover:text-color30 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="hover:text-color30 transition-colors">
                                Terms of Use
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}