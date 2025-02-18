import BreakpointsWrapper from "./_components/BreakpointsWrapper";
import MobilePreviewCarousel from "./_components/MobilePreviewCarousel";
import RoomMeta from "./_components/RoomMeta";
import RoomPreviewImages from "./_components/RoomPreviewImages";

const SingleRoomPage = () => {
    return (
        <div className="bg-primary-10">
            <div className="lg:container lg:py-20">
                <BreakpointsWrapper mobile={<MobilePreviewCarousel />} desktop={<RoomPreviewImages />} />
            </div>
            <RoomMeta />
        </div>
    );
};

export default SingleRoomPage;
