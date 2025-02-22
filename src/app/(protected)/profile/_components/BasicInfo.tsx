"use client";

import InfoCardLayout from "./InfoLayout";
import { useReducer } from "react";
import BasicInfoForm from "../_forms/BasicInfoForm";
const BasicInfo = () => {
    const [isEditing, onEditing] = useReducer((state) => !state, false);

    if (isEditing) {
        return <BasicInfoForm onReset={onEditing} />;
    }

    return (
        <InfoCardLayout title="基本資料" className="space-y-6">
            <div className="space-y-2 text-sm odd:*:font-medium odd:*:text-neutral-80 lg:text-base">
                <p>姓名</p>
                <p>Jessica Wang</p>
                <p>手機號碼</p>
                <p>+886 912 345 678</p>
                <p>地址</p>
                <p>高雄市新興區六角路 123 號</p>
            </div>

            <button
                type="button"
                className="rounded-lg border border-primary-100 px-8 py-4 text-primary-100"
                onClick={onEditing}
            >
                編輯
            </button>
        </InfoCardLayout>
    );
};

export default BasicInfo;
