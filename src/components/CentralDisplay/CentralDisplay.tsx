import {
    ChevronLeft,
    ChevronRight,
    Play,
    X,
    CheckCircle2,
    MoreHorizontal,
    AudioLines,
} from "lucide-react";
import { DailyPlalists, PrimaryPlalists, iconsPerfil } from "./Data";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const CentralDisplay = () => {
    return (
        <main className="flex-1 flex py-4 bg-zinc-950 items-start gap-2">
            <div className="flex-1 p-6 flex-col items-start justify-center bg-zinc-900 rounded-lg space-y-6">
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

                <h1 className="font-semibold text-3xl">Good Evening</h1>

                <div className="w-full flex items-center justify-center gap-4">
                    {PrimaryPlalists.map((item, index) => (
                        <div
                            className="bg-zinc-800 rounded-lg h-16 flex items-center w-64 justify-between pr-2 group cursor-pointer transition-all hover:bg-zinc-700"
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
                            <button className="flex items-center justify-center bg-green-500 rounded-full p-2 invisible text-black transition duration-300 ease-in-out hover:bg-green-700  group-hover:visible">
                                <Play />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-between items-center">
                    <h1 className="text-xl font-bold cursor-pointer hover:underline">
                        Made For You
                    </h1>
                    <p className="text-sm font-semibold cursor-pointer text-zinc-700 hover:underline">
                        Show all
                    </p>
                </div>

                <div className="grid grid-cols-5 gap-4">
                    {DailyPlalists.map((item, index) => (
                        <div className="flex flex-col gap-3 bg-white/5 p-3 cursor-pointer rounded-lg transition-all hover:bg-white/10">
                            <img
                                src={item.image}
                                className="self-center w-full"
                                height={100}
                                width={100}
                                alt=""
                            />
                            <b className="text-base">{item.title}</b>
                            <span className="text-sm text-zinc-600 font-semibold">
                                {item.subtitle}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-1/3 bg-zinc-900 p-4 space-y-2 flex rounded-lg flex-col gap-4 h-[calc(100vh-42px)]">
                <div className="w-full flex items-center justify-between">
                    <p className="font-semibold text-sm cursor-pointer hover:underline">
                        Liked Songs
                    </p>
                    <button className="rounded-full p-1 text-sm text-zinc-500 hover:bg-black/20 transition-all hover:text-zinc-50">
                        <X />
                    </button>
                </div>
                <img
                    src="/LikedSongs.png"
                    alt=""
                    className="rounded-lg cursor-pointer"
                />
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-xl font-bold">
                        Flow Natalino <br />
                        <span className="text-base text-zinc-600 font-semibold">
                            Lil Chainz, MHRAP, Lil Fuub, Aklipe44 ...
                        </span>
                    </h1>
                    <div className="flex items-center gap-1 justify-center">
                        <button className="text-green-500">
                            <CheckCircle2 />
                        </button>
                        <button className="text-zinc-500 text-sm p-2 hover:text-zinc-100">
                            <MoreHorizontal />
                        </button>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4 flex flex-col gap-4 cursor-pointer transition group hover:bg-zinc-700">
                    <div className="flex items-center justify-between">
                        <b className="text-sm font-extrabold">
                            Next in playlist
                        </b>
                        <p className="text-sm font-semibold text-zinc-600 transition hover:underline hover:text-zinc-300">
                            Open playlist
                        </p>
                    </div>

                    <div className="w-full flex items-center justify-between gap-2">
                        <AudioLines className="group-hover:text-green-500" />
                        <img
                            src="/nextMusic.png"
                            className="rounded-lg"
                            alt=""
                        />
                        <b>
                            Mtg Encostando a Cabecinha <br />{" "}
                            <span className="text-xs text-zinc-600">
                                DJ BETIN ALT, MC MÃE, MC SASI ...
                            </span>
                        </b>
                    </div>
                </div>
            </div>
        </main>
    );
};
