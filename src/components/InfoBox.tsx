import { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    text: string;
}

const InfoBox = ({ icon, text }: Props) => {
    return (
        <div className="size-24 content-center space-y-2 rounded-lg bg-white px-4 py-5">
            <div className="size-6 text-primary-100">{icon}</div>
            <p className="text-neutral-80">{text}</p>
        </div>
    );
};

export default InfoBox;
