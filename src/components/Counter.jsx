import React, { useState, useEffect, useRef } from "react";

const Counter = ({ targetNumber, duration }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        let observer;

        const animateCount = () => {
            let start = 0;
            const end = parseFloat(targetNumber.replace(/[^0-9.]/g, "")); // Extract the number
            const increment = end / (duration / 10); // Calculate the increment based on duration

            const step = () => {
                start += increment;
                if (start < end) {
                    setCount(Math.ceil(start * 10) / 10); // Handle decimal places
                    requestAnimationFrame(step);
                } else {
                    setCount(end);
                }
            };

            step();
        };

        if (IntersectionObserver) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        animateCount();
                        observer.unobserve(elementRef.current); // Stop observing after animation starts
                    }
                },
                { threshold: 0.1 } // Adjust the threshold as needed
            );

            observer.observe(elementRef.current);
        } else {
            // Fallback for browsers without IntersectionObserver support
            animateCount();
        }

        return () => observer && observer.disconnect();
    }, [targetNumber, duration]);

    // Handling different formats
    const formatCount = () => {
        if (targetNumber.includes("k")) {
            return `${count.toFixed(1)}k`;
        } else if (targetNumber.includes("Repos")) {
            return `${count.toFixed(0)} Repos`;
        } else {
            return count.toFixed(0); // Default to integer for simple numbers
        }
    };

    return (
        <div ref={elementRef}>
            {formatCount()}
        </div>
    );
};

export default Counter;
