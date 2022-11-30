const NavbarDashboard = () => {
  return (
    <>
      <div className="flex items-center justify-end p-5 text-lg h-[70px] w-[100%] bg-white relative">
        <div className="flex items-center">
          <div className=" flex items-center mr-5 relative">
            <div>Monkey D. Luffy</div>
          </div>
          <div className="flex items-center mr-5 relative">
            <img
              src="https://yt3.ggpht.com/a/AATXAJx92-kho8NnIChcdBk63x82cVUrPDpmRvvTwQ=s900-c-k-c0xffffffff-no-rj-mo"
              alt=""
              className="w-[55px] h-[55px] rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarDashboard;
