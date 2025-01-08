import React, { useEffect, useRef } from 'react';

const CursorFollower = () => {
    const followerRef = useRef(null);
    const requestRef = useRef(null);
    const previousTimeRef = useRef(null);

    // Riferimenti per le posizioni
    const target = useRef({ x: 0, y: 0 });
    const position = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            target.current = { x: event.clientX, y: event.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = (time) => {
            if (previousTimeRef.current !== undefined) {
                const delta = time - previousTimeRef.current;
                const speed = 0.2; // Regola la velocità del delay (0 < speed < 1)

                // Interpolazione lineare per creare il delay
                position.current.x += (target.current.x - position.current.x) * speed;
                position.current.y += (target.current.y - position.current.y) * speed;

                // Aggiorna la posizione del quadrato
                if (followerRef.current) {
                    followerRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
                }
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        // Pulizia al dismount del componente
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return <div ref={followerRef} className="cursor-follower"></div>;
};

export default CursorFollower;
