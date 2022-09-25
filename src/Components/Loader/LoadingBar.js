import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const LoadingBar = () => {
    const [loading, setLoading] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (loading === 100) {
                clearInterval(interval);
                setLoading(100);
            } else {
                setLoading((loading) => loading < 100 && loading + 1);
            }
        }, 40);

        return () => {
            clearInterval(interval);
        };
    }, [loading]);

    return (
        <div className="loading__container">
            <div className="loading">
                <div className="loading__bar"></div>
                <div className="loading__percent">
                    <p> {loading + "%"}</p>
                </div>
            </div>
        </div>
    );
};

export default LoadingBar;
