const SidebarMenu = ({ title, icon, isOpen, index }) => {
  return (
    <div
      className="group  flex mt-[10px] mb-[10px] list-none
    text-white h-[48px] items-center content-center 
    px-[10px] hover:bg-white hover:text-midblue"
      activeclassname="active"
    >
      <div className="font-menu p-1">{icon}</div>
      <div
        style={{
          display: isOpen ? "block" : "none",
          transitionDelay: `${index + 3}00ms`,
        }}
        className="font-menu p-1 text-base font-semibold not-italic whitespace-pre duration-500"
      >
        {title}
      </div>
      <h2
        style={{ display: isOpen ? "none" : "block" }}
        className={`z-50 absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
      >
        {title}
      </h2>
    </div>
  );
};

export default SidebarMenu;
