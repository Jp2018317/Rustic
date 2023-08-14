import Image from "next/image";

const Almuerzos = () => {
  return (
    <div className="pt-[90px] w-full dark:bg-zinc-900">
      <div className="w-auto bg-cover h-[calc(100vh-40rem)] lg:h-[calc(100vh-15rem)] text-center whitespace-nowrap dark:text-white bg-[url('https://images.unsplash.com/photo-1644447381290-85358ae625cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')]">
        <div className="w-full bg-opacity-60 bg-black h-[calc(100vh-40rem)] lg:h-[calc(100vh-15rem)]">
          <div className="flex h-full w-full text-center items-center justify-center text-2xl lg:text-6xl">
            <span className="font-bold text-white pr-2 lg:pr-5">
              ALMUERZOS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Almuerzos;
