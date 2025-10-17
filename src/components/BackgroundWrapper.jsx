// src/components/BackgroundWrapper.jsx
import bgImage from '../assets/bgimg.jpg';

export default function BackgroundWrapper({ children }) {
    return (
        <div
            className="min-h-screen md:p-4 md:bg-cover md:bg-center md:bg-no-repeat md:bg-fixed"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="bg-white min-h-[calc(100vh-32px)] md:rounded-3xl px-4 2xl:px-0 pb-16 md:pb-24">
                {children}
            </div>
        </div>
    );
}
