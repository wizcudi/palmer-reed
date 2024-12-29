import React from 'react'

export default function Anchor({
    href,
    variant = 'primary',
    children
}) {

    // Determine if this is an email link
    const isEmail = href.startsWith('mailto:')

    return (
        <a 
            href={href}
            // Only use target="_blank" for external links, not for email
            target={isEmail ? undefined : "_blank"}
            // Only need rel="noopener noreferrer" for external links
            rel={isEmail ? undefined : "noopener noreferrer"}
            className={`
                flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all
                ${variant === 'primary' 
                    ? 'bg-color30 text-white hover:bg-opacity-90' 
                    : 'border-2 border-color30 text-color30 hover:bg-color30 hover:text-white'
                }
            `}
        >
            {children}
        </a>
    )
}
