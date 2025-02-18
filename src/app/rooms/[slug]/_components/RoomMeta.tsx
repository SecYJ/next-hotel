import InfoBox from "@/components/InfoBox";
import PageSection from "@/components/PageSection";
import TitleDivider from "@/components/TitleDivider";
import WhiteCard from "@/components/WhiteCard";
import { BedIcon, CheckIcon } from "lucide-react";
import { hotelRules, roomAmenities, roomLayout, roomSupplies } from "../_constants";

const RoomMeta = () => {
    return (
        <PageSection>
            <div className="space-y-6">
                <div className="space-y-4">
                    <h1 className="text-3xl">尊爵雙人房</h1>
                    <p className="font-sm font-medium text-neutral-80">
                        享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                    </p>
                </div>

                <div className="space-y-4">
                    <TitleDivider>房型基本資訊</TitleDivider>
                    <div className="flex gap-4">
                        <InfoBox icon={<BedIcon />} text="24坪" />
                        <InfoBox icon={<BedIcon />} text="1 張大床" />
                        <InfoBox icon={<BedIcon />} text="2-4 人" />
                    </div>
                </div>

                <div className="space-y-4">
                    <TitleDivider>房間格局</TitleDivider>
                    <WhiteCard>
                        <div className="flex flex-wrap gap-6">
                            {roomLayout.map((layout) => (
                                <div key={layout} className="flex items-center gap-2">
                                    <CheckIcon className="size-6 text-primary-100" />
                                    <p>{layout}</p>
                                </div>
                            ))}
                        </div>
                    </WhiteCard>
                </div>

                <div className="space-y-4">
                    <TitleDivider>房內設備</TitleDivider>
                    <WhiteCard>
                        <div className="flex flex-wrap gap-6">
                            {roomAmenities.map((amenity) => (
                                <div key={amenity} className="flex items-center gap-2">
                                    <CheckIcon className="size-6 text-primary-100" />
                                    <p>{amenity}</p>
                                </div>
                            ))}
                        </div>
                    </WhiteCard>
                </div>

                <div className="space-y-4">
                    <TitleDivider>備品提供</TitleDivider>
                    <WhiteCard>
                        <div className="flex flex-wrap gap-6">
                            {roomSupplies.map((supply) => (
                                <div key={supply} className="flex items-center gap-2">
                                    <CheckIcon className="size-6 text-primary-100" />
                                    <p>{supply}</p>
                                </div>
                            ))}
                        </div>
                    </WhiteCard>
                </div>

                <div className="space-y-4">
                    <TitleDivider>訂房須知</TitleDivider>
                    <div className="space-y-2">
                        {hotelRules.map((rule, index) => (
                            <div key={rule} className="flex items-center gap-1 text-sm font-medium text-neutral-80">
                                <span>{index + 1}.</span>
                                <span>{rule}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default RoomMeta;
