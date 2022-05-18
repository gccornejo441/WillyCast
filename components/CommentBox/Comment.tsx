import * as React from 'react';
import { ChatAlt2Icon, EyeIcon, PencilAltIcon } from '@heroicons/react/solid'

export const Comment = () => {
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
                            className="border-2 border-black flex justify-evenly bg-yellow-400 shadow-black comment-box"
                        >
                            <div className="pl-4 py-1"><PencilAltIcon className="h-5 w-5" /></div>
                            <div className="px-4 py-1">Leave A Comment</div>
                            <div className="pr-4 py-1">{'5k'}</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}