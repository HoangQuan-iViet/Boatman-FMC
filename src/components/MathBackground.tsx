import React from 'react';

type PatternType = 'equations' | 'numbers' | 'geometry' | 'grid' | 'symbols';

interface MathBackgroundProps {
    pattern: PatternType;
    opacity?: number;
}

export const MathBackground: React.FC<MathBackgroundProps> = ({ pattern, opacity = 0.25 }) => {
    // Generate patterns as specific floating elements in the background, positioned in empty spaces.
    // They are intentionally placed near edges (left/right whitespace) to avoid hiding behind the central content block.
    // Colored predominantly in fmc-orange as requested.
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden text-fmc-orange" style={{ opacity }}>
            {pattern === 'equations' && (
                <>
                    <div className="absolute top-20 left-[-2%] md:left-[5%] rotate-12 flex flex-col items-start gap-4">
                        <span className="text-7xl md:text-9xl font-serif">∫f(x)dx</span>
                        <span className="text-5xl md:text-7xl font-serif ml-12">={'{'}F(x){'}'}</span>
                    </div>
                    <div className="absolute bottom-20 right-[-2%] md:right-[5%] -rotate-12 flex flex-col items-end gap-2 text-right">
                        <span className="text-8xl md:text-[10rem] font-serif">E=mc²</span>
                        <span className="text-5xl md:text-6xl font-serif mr-16">∑</span>
                    </div>
                </>
            )}

            {pattern === 'numbers' && (
                <>
                    <div className="absolute top-1/4 left-[-2%] md:left-[8%] -rotate-6 flex flex-col items-start gap-2">
                        <span className="text-8xl md:text-[12rem] font-mono font-black italic">3.14</span>
                    </div>
                    <div className="absolute bottom-1/4 right-[-2%] md:right-[8%] rotate-12 flex flex-col items-end gap-2 text-right">
                        <span className="text-7xl md:text-[10rem] font-mono font-bold">42</span>
                        <span className="text-6xl md:text-8xl font-mono font-bold mr-10 italic">8</span>
                    </div>
                </>
            )}

            {pattern === 'geometry' && (
                <>
                    <div className="absolute top-32 left-[-2%] md:left-[10%] rotate-45">
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="8">
                            <path d="M100 20 L180 180 L20 180 Z" />
                        </svg>
                    </div>
                    <div className="absolute bottom-32 right-[-2%] md:right-[10%] -rotate-12">
                        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" stroke="currentColor" strokeWidth="8">
                            <rect x="20" y="20" width="180" height="180" />
                            <circle cx="110" cy="110" r="90" strokeDasharray="20 10" />
                        </svg>
                    </div>
                </>
            )}

            {pattern === 'symbols' && (
                <>
                    <div className="absolute top-40 left-[-2%] md:left-[12%] -rotate-12">
                        <span className="text-9xl md:text-[14rem] font-sans">∞</span>
                    </div>
                    <div className="absolute bottom-40 right-[-2%] md:right-[12%] rotate-12">
                        <span className="text-8xl md:text-[12rem] font-serif">±</span>
                        <span className="text-7xl md:text-[9rem] font-serif block ml-10">≠</span>
                    </div>
                </>
            )}

            {pattern === 'grid' && (
                <>
                    <div className="absolute top-20 left-[-2%] md:left-[5%]">
                        <svg width="250" height="300" viewBox="0 0 250 300" fill="none" stroke="currentColor" strokeWidth="6">
                            <path d="M0 50 H250 M0 150 H250 M0 250 H250 M50 0 V300 M150 0 V300 M250 0 V300" />
                        </svg>
                    </div>
                    <div className="absolute bottom-20 right-[-2%] md:right-[5%] rotate-12">
                        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" stroke="currentColor" strokeWidth="6">
                            <path d="M0 50 H300 M0 150 H300 M50 0 V200 M150 0 V200 M250 0 V200" />
                            <path d="M0 200 L300 0" strokeDasharray="15 15" strokeWidth="8" />
                        </svg>
                    </div>
                </>
            )}
        </div>
    );
};
