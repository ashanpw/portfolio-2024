import React, { useRef, useState, useCallback, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
    useScroll,
    useTransform,
    useSpring,
    SpringOptions,
} from "framer-motion";
import { S } from "./ScrollableContainer.styles";

interface MomentumScrollProps {
    children: React.ReactNode;
}

export const ScrollableContainer = ({
    children,
}: MomentumScrollProps): JSX.Element => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const [scrollableHeight, setScrollableHeight] = useState<number>(0);

    const resizeScrollableHeight = useCallback(
        (entries: ResizeObserverEntry[]) => {
            for (let entry of entries) {
                setScrollableHeight(entry.contentRect.height);
            }
        },
        []
    );

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            resizeScrollableHeight(entries)
        );
        scrollRef.current && resizeObserver.observe(scrollRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const { scrollY } = useScroll();

    const negativeScrollY = useTransform(
        scrollY,
        [0, scrollableHeight],
        [0, -scrollableHeight]
    );

    const springPhysics: SpringOptions = {
        damping: 22,
        mass: 0.1,
        stiffness: 100,
        bounce: 0.5,
    };

    const springNegativeScrollY = useSpring(negativeScrollY, springPhysics);

    return (
        <>
            <S.Container
                ref={scrollRef}
                style={{ y: springNegativeScrollY }}
                className="scroll-container"
            >
                {children}
            </S.Container>

            <div style={{ height: scrollableHeight }} />
        </>
    );
};
