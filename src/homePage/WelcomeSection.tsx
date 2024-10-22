import React from "react";
import Image from "next/image";
import { MdGroupAdd } from "react-icons/md";

interface WelcomeSectionProps {
  name: string;
  avatars: string[];
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ name, avatars }) => {
  return (
    <div className="flex justify-between items-center container p-6 text-black">
      <span className="font-semibold" style={{ fontSize: "41px" }}>
        Welcome back, {name}{" "}
        <span role="img" aria-label="wave" className="text-7xl">
          👋
        </span>
      </span>

      <div className="flex items-center m-10 relative  space-x-4">
        {avatars.slice(0, 5).map((avatar, index) => (
          <div key={index} className="overflow-hidden relative">
            <Image
              src={avatar}
              alt={`User avatar ${index}`}
              width={40}
              height={40}
              objectFit="fill"
              style={{
                height: "40px",
                borderRadius: "0.5rem",
                filter:
                  index === Math.min(avatars.length - 1, 4)
                    ? "brightness(0.5)"
                    : "none",
              }}
            />
          </div>
        ))}

        {avatars.length > 5 && (
          <div
            className="absolute flex items-center justify-center text-white font-medium space-x-4"
            style={{
              left: "220px",
            }}
          >
            +{avatars.length - 5}
          </div>
        )}

        <button className="flex items-center text-red-500 font-medium border border-main-red rounded-lg py-2 px-4">
          <MdGroupAdd className="mr-1" />
          Invite
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;
