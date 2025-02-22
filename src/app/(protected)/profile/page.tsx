import BasicInfo from "./_components/BasicInfo";
import SecurityInfo from "./_components/SecurityInfo";

const ProfilePage = () => {
    return (
        <div className="grid gap-6 lg:grid-cols-[5fr_7fr] lg:gap-10">
            <SecurityInfo />
            <BasicInfo />
        </div>
    );
};

export default ProfilePage;
