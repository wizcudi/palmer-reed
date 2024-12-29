import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Helper function to determine if a link is active
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    // Navigation items - now including authentication state
    const navItems = [
        { path: '/', label: 'Home' },
        
        { path: '/about', label: 'About' },
        { path: '/music', label: 'Music' },
        // { path: '/credits', label: 'Credits' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="bg-color30">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Navbar Content */}
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <Link 
                        to="/" 
                        className="text-xl font-semibold text-color60 hover:text-color10a transition-colors"
                    >
                        Palmer Reed
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`${
                                    isActive(path)
                                        ? 'text-color60'
                                        : 'text-color10a hover:text-color60'
                                } transition-colors text-lg font-semibold`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-color60 hover:text-color10a p-2"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-color60/10">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`${
                                    isActive(path)
                                        ? 'text-color60'
                                        : 'text-color10a hover:text-color60'
                                } block px-3 py-2 text-lg font-semibold transition-colors`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>

        
    )
}