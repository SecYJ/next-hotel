import WhiteCard from "@/components/WhiteCard";

type Props = Parameters<typeof WhiteCard>[0] & {
    title: string;
};

const InfoCardLayout = ({ children, title, ...props }: Props) => {
    return (
        <WhiteCard {...props}>
            <p className="text-xl/6 lg:text-2xl/7">{title}</p>
            {children}
        </WhiteCard>
    );
};

export default InfoCardLayout;
