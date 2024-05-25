import { useEffect, useState } from "react";

export function useMobile() {
    const [ isMobile, setIsmobile ] = useState(false);
    useEffect(() => {
        const resize = window.addEventListener('resize', () => {
            const windowWidth = window.innerWidth;
            if(windowWidth <= 600) {
                setIsmobile(true)
            } else {
                setIsmobile(false)
            }
        });
        return () => window.removeEventListener('resize', resize);
    }, [])
    return isMobile
}