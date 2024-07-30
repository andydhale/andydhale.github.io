import Image from 'next/image';
import { Post } from "@/models/post";
import Link from 'next/link';

interface IBlogComicProps {
    post: Post;
}

export default function BlogComic({post}: IBlogComicProps) {
    return (
        <article className='mr-16 lg:w-4/12 max-md:flex-col max-md:w-full'>
            <Link href={`/blog/episode/${post.slug}`}>
                {/* <div className='absolute w-full h-full bg-gray-100 opacity-0 hover:opacity-100 hover:bg-opacity-90 transition-all text-gray-900 text-xl text-left p-12'>
                    <h4 className='text-2xl mb-8'>{ post.title }</h4>
                    { post.excerpt }...
                </div> */}
                {/* width={537} height={940} */}
                <Image src={post.cover} alt="Cover Image" width={537} height={940} layout='responsive' className='border-4 border-gray-300 border-b-0' />
                <div className="p-4 border-gray-300 border-4">
                    <h4 className='text-2xl'>{post.title}</h4>
                    <p className='text-md text-gray-400'>{post.date}</p>
                </div>
            </Link>
        </article>
    )
}