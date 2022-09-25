import React, { useEffect } from "react";
import { useState } from "react";
import LoadingBar from "./LoadingBar";

const Loader = ({ size }) => {
    const [loadingComplete, isLoadingComplete] = useState(false);

    useEffect(() => {
        const loader = setTimeout(() => {
            isLoadingComplete(true);
        }, 4000);
        return () => clearTimeout(loader);
    }, []);
    return (
        <div
            className={
                loadingComplete ? `loader complete ${size}` : `loader ${size}`
            }
            data-size={size}
        >
            <div className="frame frame__1">
                <div className="runner__frame1"></div>
                <div className="runner__frame1--shadow"></div>
            </div>
            <div className="frame frame__2">
                <div className="runner__frame2"></div>
                <div className="runner__frame2--shadow"></div>
            </div>
            <div className="frame frame__3">
                <div className="runner__frame3"></div>
                <div className="runner__frame3--shadow"></div>
            </div>
            <div className="frame frame__4">
                <div className="runner__frame4"></div>
                <div className="runner__frame4--shadow"></div>
            </div>
            <div className="frame frame__5">
                <div className="runner__frame5"></div>
                <div className="runner__frame5--shadow"></div>
            </div>
            <div className="frame frame__6">
                <div className="runner__frame6"></div>
                <div className="runner__frame6--shadow"></div>
            </div>
            <div className="frame frame__7">
                <div className="runner__frame7"></div>
                <div className="runner__frame7--shadow"></div>
            </div>
            <div className="frame frame__8">
                <div className="runner__frame8"></div>
                <div className="runner__frame8--shadow"></div>
            </div>
            {size === "" && <LoadingBar />}
        </div>
    );
};

export default Loader;
