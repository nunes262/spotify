import { Library, Plus, MoveRight } from "lucide-react";
import React from "react";
import { Links, Types } from "./data";

export const SideBar = () => {
    return (
        <aside className="w-96 bg-zinc-950 p-4 space-y-2">
            <div className="space-y-5 bg-zinc-900 p-3 rounded-lg">
                {Links.map((item, index) => (
                    <p
                        key={item.id}
                        className="flex items-center gap-2 text-base font-semibold text-zinc-200 cursor-pointer hover:text-green-500"
                    >
                        {React.createElement(item.icon)}
                        {item.text}
                    </p>
                ))}
            </div>

            <div className="space-y-5 bg-zinc-900 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2 text-base font-semibold text-zinc-500 cursor-pointer hover:text-zinc-300">
                        <Library />
                        Your Library
                    </p>
                    <div className="flex items-center gap-4">
                        <p className="flex items-center gap-2 text-base font-semibold p-1 text-zinc-500 cursor-pointer transition duration-300 ease-in-out hover:bg-zinc-800 hover:bg-opacity-75 hover:text-zinc-200 rounded-full">
                            <Plus />
                        </p>
                        <p className="flex items-center gap-2 text-base font-semibold p-1 text-zinc-500 cursor-pointer transition duration-300 ease-in-out hover:bg-zinc-800 hover:bg-opacity-75 hover:text-zinc-200 rounded-full">
                            <MoveRight />
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    {Types.map((item, index) => (
                        <p
                            key={item.id}
                            className=" text-xs font-semibold bg-zinc-800 bg-opacity-75 py-1 px-2 text-zinc-200 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-zinc-700"
                        >
                            {item.text}
                        </p>
                    ))}
                </div>
            </div>
        </aside>
    );
};