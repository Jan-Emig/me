import { RefObject, useEffect, useState } from "react";

const useFollowMouse = (ref: RefObject<HTMLElement>) => {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

    useEffect(() => {
        if (!ref.current) return;

        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => setMousePos({ x: clientX - 10, y: clientY - 10 });

        // const handleBlur = () => {console.log(mousePos); setMousePos({ ...mousePos, opacity: 0 })};

        window.addEventListener('mousemove', handleMouseMove);
        // window.addEventListener('blur', handleBlur);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            // window.removeEventListener('blur', handleBlur);
        }
    }, [])

    return mousePos;
};

export default useFollowMouse;