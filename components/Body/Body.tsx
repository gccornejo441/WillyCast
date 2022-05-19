import { Comment } from "../CommentBox/Comment";
import { Features } from "../Features/Features";
import { Sidebar } from "../SideBar/Sidebar";

export const Body = () => {
    return (
        <div className="grid grid-cols-4">
            <div>
                <Sidebar />
            </div>
            <div className="col-span-2 ">
                <Comment />
            </div>
            <div className="flex justify-end">
                <Features />
            </div>
        </div>
    );
}