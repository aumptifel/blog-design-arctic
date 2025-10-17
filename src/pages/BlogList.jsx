// src/pages/BlogList.jsx
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogData";
import BackgroundWrapper from "../components/BackgroundWrapper";

export default function BlogList() {
    return (
        <BackgroundWrapper>
            <div className="pt-24 2xl:pt-40 flex flex-row">
                <div className="basis-full xl:basis-1/2 flex justify-center">
                    <div className="flex flex-col sm:flex-none gap-y-2.5">
                        <h1 className="font-geist text-5xl font-medium bg-linear-45 from-violet-900 via-pink-600
                            via-rose-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
                            Amrine W.
                        </h1>
                        <p className="font-geist text-xl text-zinc-500 text-balance">I currently build social listening tools.<br></br>
                        Previously, I designed a learning management system.</p>
                    </div>
                </div>
            </div>
            <div className="mt-24 flex justify-center">
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-2">
                    {blogs.map(blog => {
                        // เพิ่ม logic สำหรับกำหนด column span
                        let spanClass = "md:col-span-2"; // default
                        if (blog.id === 1 || blog.id === 2) {
                            spanClass = "md:col-span-3";
                        } else if (blog.id === 3 || blog.id === 4 || blog.id === 5) {
                            spanClass = "md:col-span-2";
                        }

                        return (
                            <BlogCard key={blog.id} blog={blog} spanClass={spanClass} />
                        );
                    })}
                </div>
            </div>
        </BackgroundWrapper>
    );
}
