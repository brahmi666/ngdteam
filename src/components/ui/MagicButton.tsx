import React from "react";
const MagicButton = ({
  title,
  position,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <a
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none "
      href="#portfolio"
    >
     <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#565656_0%,#565656_0%,#000000_50%,#ffd000_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
         bg-black px-5 text-[14px] syncopate-regular text-neutral-300 backdrop-blur-3xl gap-2 hover:text-white ${otherClasses}`}>

        {position === "left"}
        {title}
        {position === "right"}
      </span>
    </a>
  );
};

export default MagicButton;
