import Link from "next/link";
import { nanoid } from 'nanoid'
import { RectBrute } from '../rectBrute'

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

export const Sidebar = () => {
    return (
        <div className=" border-2 border-black bg-blue-400 comment-box grid grid-cols-1 h-fit w-1/2 mr-10">
            {links.map((item) => {
                return (
                    <Link key={item._id} href={item.href}>
                        <a className="p-4 flex">
                            <RectBrute />
                            <div className="ml-5 text-xl hover:underline">{item.name}</div>
                        </a>
                    </Link>
                );
            })}
        </div>
    );
}