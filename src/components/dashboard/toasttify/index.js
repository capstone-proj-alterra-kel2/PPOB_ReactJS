import { ToastContainer } from "react-toastify";

const ToastifyComponent = () => {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        newestOnTop={false}
        style={{
          width: "95%",
          marginLeft: "40px",

          position: "absolute",
          top: 0,
          right: 0,
        }}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
    </>
  );
};

export default ToastifyComponent;
