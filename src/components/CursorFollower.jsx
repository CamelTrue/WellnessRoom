import React, { useEffect, useRef, useState } from 'react';
import './styles/components/cursorfollower.scss';

function easeInOutCubic(t) {
    return t < 0.5 ? (4 * t * t * t) : (1 - Math.pow(-2 * t + 2, 3) / 2);
}

const CursorFollower = () => {
    const followerRef = useRef(null);
    const requestRef = useRef(null);
    const previousTimeRef = useRef(null);

    const [isActive, setIsActive] = useState(false);

    const target = useRef({ x: 0, y: 0 });
    const position = useRef({ x: 0, y: 0 });

    const scaleRef = useRef(1);

    useEffect(() => {
        const handleMouseMove = (e) => {
            target.current = { x: e.clientX, y: e.clientY };

            const el = document.elementFromPoint(e.clientX, e.clientY);
            if (el) {
                const style = window.getComputedStyle(el);
                setIsActive(style.cursor === 'pointer');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = (time) => {
            if (previousTimeRef.current !== undefined) {
                const speedBase = 0.05;

                const dx = target.current.x - position.current.x;
                const dy = target.current.y - position.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let distNorm = dist / 150;
                if (distNorm > 1) distNorm = 1;

                if (isActive) distNorm = 1;

                const factor = easeInOutCubic(distNorm);

                position.current.x += dx * factor * speedBase;
                position.current.y += dy * factor * speedBase;

                const targetScale = isActive ? 2 : 1;
                scaleRef.current += (targetScale - scaleRef.current) * 0.5;

                if (followerRef.current) {
                    followerRef.current.style.transform = `
                        translate3d(${position.current.x}px, ${position.current.y}px, 0)
                        translate(-50%, -50%)
                        scale(${scaleRef.current})
                    `;
                }
            }
            
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, [isActive]);

    return <div ref={followerRef} className="cursor-follower" />;
};

export default CursorFollower;
