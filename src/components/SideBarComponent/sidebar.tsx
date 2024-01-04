import { Library, Plus, MoveRight, Pin, Search, Text } from "lucide-react";
import React from "react";
import { Links, Playlists, Types } from "./data";

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

                <div className="flex justify-between items-center">
                    <button className="flex items-center justify-center rounded-full p-2 opacity-55 hover:bg-zinc-600">
                        <Search />
                    </button>

                    <div className="flex items-center justify-center gap-1 font-semibold text-zinc-700 text-xs cursor-pointer transition hover:text-zinc-300">
                        <p>Recents</p>
                        <Text />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    {Playlists.map((item, index) => (
                        <div className="w-full h-16 p-4 flex justify-start gap-2 items-center cursor-pointer transition duration-300 ease-in-out hover:bg-zinc-800 rounded-lg">
                            <img
                                src={item.image}
                                height={50}
                                width={50}
                                className="rounded-md"
                            />
                            <p className="flex items-center gap-2 text-xs font-semibold text-zinc-600 ">
                                {item.pin === true ? (
                                    <Pin className="text-green-500 text-xs" />
                                ) : null}
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};
