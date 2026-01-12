import React from 'react';
import './LogoLoop.css';

export interface LogoItem {
    name?: string;
    src: string;
    alt: string;
}

interface LogoLoopProps {
    logos: LogoItem[];
    // Using simple CSS props, many old props are no longer needed but kept optional to prevent breakage if passed
    speed?: number;
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
}

const LogoLoop: React.FC<LogoLoopProps> = ({ logos }) => {
    return (
        <div className="logo-loop-container bg-background">
            <div className="logo-loop-slide">
                {logos.map((logo, index) => (
                    <img
                        key={`a-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                        title={logo.name || logo.alt}
                    />
                ))}
            </div>
            <div className="logo-loop-slide">
                {logos.map((logo, index) => (
                    <img
                        key={`b-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                        title={logo.name || logo.alt}
                    />
                ))}
            </div>
        </div>
    );
};

export default LogoLoop;
