// src/pages/BlogDetail.jsx
import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../data/blogData";
import bgImage from '../assets/bgimg.jpg';
import { ArrowLeft, ArrowSquareOut } from "phosphor-react";

export default function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loadedBlogs, setLoadedBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [endOfArticles, setEndOfArticles] = useState(false);

    const currentIndex = blogs.findIndex(b => b.id === parseInt(id));

    // โหลดบทความแรก
    useEffect(() => {
        if (currentIndex >= 0) {
            setLoadedBlogs([blogs[currentIndex]]);
        }
    }, [currentIndex]);

    const loadNextArticle = useCallback(() => {
        const nextIndex = loadedBlogs.length + currentIndex;
        if (nextIndex >= blogs.length) {
            setEndOfArticles(true);
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setLoadedBlogs(prev => [...prev, blogs[nextIndex]]);
            setIsLoading(false);
        }, 500); // delay เพื่อ UX
    }, [loadedBlogs.length, currentIndex]);

    const handleScroll = useCallback(() => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const bottomOffset = document.body.offsetHeight - 200;

        if (scrollPosition >= bottomOffset && !isLoading && !endOfArticles) {
            loadNextArticle();
        }
    }, [isLoading, endOfArticles, loadNextArticle]);

    // Scroll listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <div
            className="min-h-screen sm:p-4 md:bg-cover md:bg-center md:bg-no-repeat md:bg-fixed"
                        style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="">
                {/* Sticky Back Button */}
                <div className="h-12 hidden sm:block">
                    <button
                        onClick={() => navigate("/")}
                        className="fixed top-4 left-4 z-50 hover:cursor-pointer h-12 w-12 rounded-3xl bg-white hover:bg-zinc-200 flex justify-center items-center"
                    >
                        <ArrowLeft size={24} color="#27272a" />
                    </button>
                </div>

                {/* Render Loaded Articles */}
                {loadedBlogs.map((blog, index) => (
                    <div key={blog.id} className="mt-4 flex justify-center">
                        <div className="bg-white sm:rounded-3xl px-4 2xl:px-0 pb-16 md:pb-24 flex flex-col items-center w-full">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                    className="w-5xl object-cover mt-10"
                            />
                            <div className="flex w-full sm:max-w-3xl mt-10">
                                <h1 className="font-geist text-zinc-800 text-2xl font-medium">{blog.title}</h1>
                            </div>
                            <div className="flex w-full sm:max-w-3xl mt-8">
                                <p className="font-geist text-zinc-800">{blog.category}</p>
                            </div>
                            <div className="flex w-full sm:max-w-3xl mt-8">
                                <p className="md: text-lg">
                                    {blog.content.split('\n').map((line, i) => (
                                        <p key={i} className="whitespace-pre-wrap">
                                            {line}
                                        </p>
                                    ))}
                                </p>
                            </div>
                            {/* Embed Figma Preview */}
                            {blog.figmaEmbedUrl && (
                                <div className="w-full sm:max-w-5xl mt-10 aspect-[9/16] md:aspect-video">
                                    <iframe
                                        src={blog.figmaEmbedUrl}
                                        className="w-full h-full"
                                        allowFullScreen
                                    />
                                </div>
                            )}
                            {blog.figmaUrl && (
                                <div className="flex w-full justify-center sm:max-w-3xl mt-8">
                                    <a
                                        href={blog.figmaUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-6 py-3 bg-zinc-100 font-geist text-zinc-800 text-lg font-medium rounded-3xl hover:bg-zinc-200 transition gap-4 hover:cursor-pointer"
                                    >
                                        Open in Figma
                                        <ArrowSquareOut className="inline" size={24} color="#27272a" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}


                {/* Loading Indicator */}
                {isLoading && (
                    <div className="flex items-center justify-center py-10">
                        <svg
                            className="animate-spin h-6 w-6 text-zinc-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 
          0 0 5.373 0 12h4zm2 
          5.291A7.962 7.962 0 014 
          12H0c0 3.042 1.135 5.824 
          3 7.938l3-2.647z"
                            />
                        </svg>
                        <span className="ml-3 text-zinc-500">กำลังโหลดบทความถัดไป...</span>
                    </div>
                )}


                {/* End Message */}
                {endOfArticles && (
                    <div className="flex flex-col items-center pt-8 pb-24 mt-12 bg-white rounded-3xl">
                        <p className="md: text-lg">คุณได้อ่านครบทุกบทความแล้ว</p>
                        <button
                            onClick={() => navigate("/")}
                            className="mt-8 flex items-center px-6 py-3 bg-zinc-100 font-geist text-zinc-800 text-lg font-medium rounded-3xl hover:bg-zinc-200 transition gap-4 hover:cursor-pointer"
                        >
                            <ArrowLeft className="inline" size={24} color="#27272a" />
                            Back to home
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
