import InfoBox from "@/components/InfoBox";
import PageSection from "@/components/PageSection";
import TitleDivider from "@/components/TitleDivider";
import WhiteCard from "@/components/WhiteCard";
import { BedIcon, CheckIcon, MinusIcon, PlusIcon } from "lucide-react";
import { hotelRules, roomAmenities, roomLayout, roomSupplies } from "../_constants";

const RoomMeta = () => {
    return (
        <PageSection>
            <div className="grid lg:grid-cols-[8fr_4fr] lg:gap-[72px]">
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

                <div className="sticky top-0">
                    <div className="space-y-10 rounded-3xl bg-white p-10">
                        <p className="border-b border-neutral-40 pb-4 text-2xl">預訂房型</p>
                        <div className="space-y-2 text-neutral-80">
                            <p className="text-4xl">尊爵雙人房</p>
                            <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-x-2">
                                <div className="rounded-lg border border-black p-4 font-medium">
                                    <p className="text-xs text-neutral-80">入住</p>
                                    <p>2023 / 12 / 03</p>
                                </div>
                                <div className="rounded-lg border border-black p-4 font-medium">
                                    <p className="text-xs text-neutral-80">退房</p>
                                    <p>2023 / 12 / 04</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4">
                            <p>人數</p>
                            <button
                                type="button"
                                className="grid size-14 place-items-center rounded-full border border-neutral-40"
                            >
                                <MinusIcon className="size-6 text-black" />
                            </button>
                            <strong className="text-xl/6">2</strong>
                            <button
                                type="button"
                                className="grid size-14 place-items-center rounded-full border border-neutral-40"
                            >
                                <PlusIcon className="size-6 text-black" />
                            </button>
                        </div>

                        <p className="text-2xl/7 text-primary-100">NT$ 10,000</p>

                        <button type="button" className="w-full rounded-lg bg-primary-100 py-4 text-white">
                            立即預訂
                        </button>
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default RoomMeta;
