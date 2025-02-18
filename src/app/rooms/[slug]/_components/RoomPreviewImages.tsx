import Image from "next/image";

const images = [
    "https://i.imgur.com/1nMSuFj.jpg",
    "https://i.imgur.com/KwCb2Wq.jpg",
    "https://i.imgur.com/Uv0VG9M.jpg",
    "https://i.imgur.com/z8ZqhMH.jpg",
];

const RoomPreviewImages = () => {
    return (
        <div className="grid h-[600px] grid-cols-[repeat(4,1fr)] gap-2 overflow-hidden rounded-3xl">
            <div className="relative col-span-2 row-span-2">
                <Image src={images[0]} alt="Room Preview" fill className="object-cover" />
            </div>
            <div className="relative col-span-full col-start-3 h-[300px]">
                <Image src={images[1]} alt="Room Preview" fill className="object-cover" />
            </div>
            <div className="relative h-[300px]">
                <Image src={images[2]} alt="Room Preview" fill className="object-cover" />
            </div>
            <div className="col-start-4">
                <div className="relative h-[300px]">
                    <Image src={images[3]} alt="Room Preview" fill className="object-cover" />
                </div>
            </div>
        </div>
    );
};

export default RoomPreviewImages;
