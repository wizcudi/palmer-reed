import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({
    to,  // For internal routing with Link
    variant = 'primary',
    children,
    className = ''
}) {
    return (
        <Link 
            to={to}
            className={`
                flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all
                ${variant === 'primary' 
                    ? 'bg-color30 text-white hover:bg-opacity-90' 
                    : 'border-2 border-color30 text-color30 hover:bg-color30 hover:text-white'
                }
                ${className}
            `}
        >
            {children}
        </Link>
    )
}
