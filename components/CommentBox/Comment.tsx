import * as React from 'react';
import { ChatAlt2Icon, EyeIcon, PencilAltIcon } from '@heroicons/react/solid'

const CommentInput = () => {
    const [comment, setComment] = React.useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }
    return (
        <>
        <div className="border-black border-2">
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                    <input 
                    value={comment}
                    name="comment"
                    type="text" 
                    id="comment-input" 
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
        </div>  
        </>
    );
}

export const Comment = () => {
    const [commentBox, setCommentBox] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setCommentBox(true);
    }
    return (
        <div className="bg-amber-100 comment-box">
            <div className="p-6 border-2 border-black">
                <div className="grid grid-rows-6">
                    <h1 className="font-bold text-4xl">Radiolab</h1>
                    <h2 className="font-bold text-xl">Debatable</h2>
                    <span className="text-sm">May 4th, 2022</span>
                    <h2 className="font-bold text-mg">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus egestas bibendum accumsan cras amet mi consequat. Eu cras ut adipiscing habitasse arcu accumsan, sagittis massa. Sagittis feugiat amet...</p>
                </div>
                <div className="border-2 border-black flex justify-between p-5 bg-white h-fit">
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            className="border-2 border-black flex justify-evenly bg-blue-400 shadow-black"
                        >
                            <div className="pl-4 py-1"><ChatAlt2Icon className="h-5 w-5" /></div>
                            <div className="px-4 py-1">Comment</div>
                            <div className="pr-4 py-1">{'3k'}</div>
                        </button>
                        <button
                            className="border-2 border-black flex justify-evenly bg-blue-400 shadow-black"
                        >
                            <div className="pl-4 py-1"><EyeIcon className="h-5 w-5" /></div>
                            <div className="px-4 py-1">Views</div>
                            <div className="pr-4 py-1">{'50k'}</div>
                        </button>

                    </div>
                    <div>
                        <button
                            onClick={handleClick}
                            className="border-2 border-black flex justify-evenly bg-yellow-400 shadow-black comment-box"
                        >
                            <div className="pl-4 py-1"><PencilAltIcon className="h-5 w-5" /></div>
                            <div className="px-4 py-1">Leave A Comment</div>
                            <div className="pr-4 py-1">{'5k'}</div>
                        </button>
                    </div>
                </div>
                {commentBox ? (
                    <>
                        <CommentInput />
                    </>
                ) : (<>
                </>)}

                <button
                className="border-2 border-black flex justify-evenly bg-blue-400 shadow-black"
                        >
                <div className="px-4 py-1">Submit</div>
            </button>
            </div>

            <div className="p-6 border-2 border-red-500">
                <div>
                    <div id="header-author" className="flex ">
                        <h3 className="style-scope ytd-comment-renderer">
                            <a id="author-text" className="mr-2 mb-1 block overflow-hidden text-ellipsis whitespace-nowrap text-xl font-medium leading-7" href="/channel/UCtsfPwxBSpRTgbptxDygAtw">
                                <span className=" style-scope ytd-comment-renderer">
                                    User Name
                                </span>
                            </a>
                        </h3>
                            <a className="yt-simple-endpoint style-scope yt-formatted-string" href="/watch?v=QkjIP0fQOL4&amp;lc=Ugz4AQbNKbwQVOg6LgF4AaABAg" dir="auto">7 months ago</a>
                    </div>

                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at, distinctio beatae eum amet adipisci provident illo a, nobis, porro illum possimus recusandae perspiciatis placeat sed officiis ex omnis facilis.</div>
                    
            </div>
        </div>
    );
}