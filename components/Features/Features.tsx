import Link from "next/link";
import { nanoid } from 'nanoid'

interface ISideNavs {
    "_id": string;
    "name": string;
    "href": string;
}

const links: ISideNavs[] = [
    {
        "_id": nanoid(3),
        "name": 'Home',
        "href": "/"
    },
    {
        "_id": nanoid(3),
        "name": 'User',
        "href": "/"
    },
    {
        "_id": nanoid(3),
        "name": 'Podcasts',
        "href": "/"
    },
    {
        "_id": nanoid(3),
        "name": 'Library',
        "href": "/"
    }
]

export const Features = () => {
    return (
        <div className="border-2 border-black bg-blue-400 comment-box w-1/2">
            <h2 className="font-bold text-center text-xl py-3">Features</h2>
        </div>
    );
}