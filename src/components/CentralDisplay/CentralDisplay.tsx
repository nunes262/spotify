import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { PrimaryPlalists, iconsPerfil } from "./Data";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const CentralDisplay = () => {
    return (
        <main className="flex-1 py-4 bg-zinc-950">
            <div className="flex p-6 flex-col items-start justify-center bg-zinc-900 rounded-lg gap-4 ">
                <div className="flex items-start justify-between w-full">
                    <div className="flex items-center gap-4">
                        <button className="rounded-full bg-black/40 p-1 hover:bg-black/30">
                            <ChevronLeft />
                        </button>
                        <button className="rounded-full bg-black/40 p-1 hover:bg-black/30">
                            <ChevronRight />
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="rounded-full bg-zinc-50 text-black font-bold text-sm p-3 ">
                            Explore Premium
                        </button>
                        {iconsPerfil.map((item, index) => (
                            <button
                                className="rounded-full bg-black/40 p-2 text-xs text-zinc-500 hover:bg-black/30"
                                key={item.id}
                            >
                                {item.icon}
                            </button>
                        ))}
                    </div>
                </div>

                <h1 className="font-semibold text-2xl">Good Evening</h1>

                <div className="w-full flex items-center justify-center gap-4">
                    {PrimaryPlalists.map((item, index) => (
                        <div
                            className="bg-zinc-800 rounded-lg h-16 flex items-center w-64 justify-between pr-2"
                            key={item.id}
                        >
                            <div className="flex items-center gap-2 justify-center">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="rounded-s-lg"
                                    height={63}
                                    width={63}
                                />
                                <p className="text-sm font-semibold">
                                    {item.text}
                                </p>
                            </div>
                            <button className="flex items-center justify-center bg-green-500 rounded-full p-2 text-black transition duration-300 ease-in-out hover:bg-green-700">
                                <Play />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};
