import PageSection from "@/components/PageSection";
import RoomCardCarousel from "./RoomCardCarousel";
import RoomCardInfo from "./RoomCardInfo";

const fakeData = [
    [
        "https://i.imgur.com/1nMSuFj.jpg",
        "https://i.imgur.com/KwCb2Wq.jpg",
        "https://i.imgur.com/Uv0VG9M.jpg",
        "https://i.imgur.com/z8ZqhMH.jpg",
    ],
    [
        "https://i.imgur.com/EW6H6hj.jpg",
        "https://i.imgur.com/mNSzY23.jpg",
        "https://i.imgur.com/nuRZD01.jpg",
        "https://i.imgur.com/AeNExsf.jpg",
    ],
    [
        "https://i.imgur.com/lTlW5Qb.jpg",
        "https://i.imgur.com/wfkNsRM.jpg",
        "https://i.imgur.com/UA7mYHh.jpg",
        "https://i.imgur.com/6mMZPkg.jpg",
    ],
    [
        "https://i.imgur.com/nochrC2.jpg",
        "https://i.imgur.com/cPgYpDg.jpg",
        "https://i.imgur.com/vubgKcV.jpg",
        "https://i.imgur.com/WsT2MMB.jpg",
    ],
];

const RoomPreviewSection = () => {
    return (
        <PageSection className="space-y-10">
            <div className="mb-10 space-y-2">
                <p className="text-sm">房型選擇</p>
                <h2 className="text-4xl font-bold text-primary-100">各種房型，任您挑選</h2>
            </div>
            <div className="space-y-6 lg:space-y-12">
                {fakeData.map((m, index) => (
                    <div
                        className="grid overflow-hidden rounded-lg bg-white lg:grid-cols-[7fr_5fr] lg:gap-10"
                        key={index}
                    >
                        <RoomCardCarousel images={m} />
                        <RoomCardInfo />
                    </div>
                ))}
            </div>
        </PageSection>
    );
};

export default RoomPreviewSection;
