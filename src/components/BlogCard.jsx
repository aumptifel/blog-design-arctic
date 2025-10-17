// src/components/BlogCard.jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "phosphor-react";

export default function BlogCard({ blog, spanClass }) {
    return (
        <Link to={`/blog/${blog.id}`} className={`rounded-3xl bg-zinc-100 hover:bg-zinc-200/80 cursor-pointer transition ${spanClass}`}>
            <img src={blog.image} alt={blog.title} className="w-full  object-cover rounded-3xl" />
            <div className="p-6 flex flex-col gap-y-6">
                <h2 className="font-geist text-zinc-800 text-2xl font-medium">{blog.title}</h2>
                <div className="">
                    <p className="font-geist text-zinc-800">{blog.category}</p>
                    {/* <ArrowRight size={24} color="#27272a" /> */}
                </div>
            </div>
        </Link>
    );
}
