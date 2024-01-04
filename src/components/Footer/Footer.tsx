import {
    Repeat,
    Shuffle,
    SkipBack,
    SkipForward,
    Play,
    Mic2,
    LayoutList,
    Laptop2,
    Volume,
    Maximize2,
} from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-zinc-700 p-6 flex items-center justify-between rounded-lg">
            <div className="flex items-center gap-3 justify-between w-full">
                <div className="flex gap-4">
                    <img src="/lastMusic.png" alt="" width={45} height={45} />
                    <strong className="font-normal">
                        Flow Natalino (feat. Aklipe44, LinoMC & TcheloBeats)
                        <br />
                        <span className="text-xs text-zinc-600">
                            Lil Chainz, Lil Fuub, MHRAP, Aklipe44 & LinoMC
                        </span>
                    </strong>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-6">
                        <Shuffle size={20} className="text-zinc-200" />
                        <SkipBack size={20} className="text-zinc-200" />
                        <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                            <Play />
                        </button>

                        <SkipForward size={20} className="text-zinc-200" />
                        <Repeat
                            size={20}
                            className=" text-green-500 cursor-pointer"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-400">2:03</span>
                        <div className="h-1 rounded-full w-96 bg-zinc-600">
                            <div className="w-40 rounded-full h-1 bg-zinc-200"></div>
                        </div>
                        <span className="text-xs text-zinc-400">5:11</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Mic2 size={20} />
                    <LayoutList size={20} />
                    <Laptop2 size={20} />
                    <div className="flex items-center gap-2">
                        <Volume size={20} />
                        <div className="h-1 rounded-full w-24 bg-zinc-600">
                            <div className="w-10 rounded-full h-1 bg-zinc-200"></div>
                        </div>
                    </div>
                    <Maximize2 size={20} />
                </div>
            </div>
        </footer>
    );
};
