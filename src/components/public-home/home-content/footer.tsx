export default function HomeFooter() {
  return (
    <div className="flex flex-col h-full bg-[#131313] w-full">
      <div className="flex h-auto text-white w-full p-8 justify-around items-start">
        <div className="flex flex-col">
          <h1 className="font-bold  text-2xl">Logo</h1>
          <p className="text-xl">sologan</p>
        </div>
        <div className="flex flex-col items-start">
          <button className="hover:text-gray-500">ABOUT US</button>
          <button className="hover:text-gray-500">CONTACT US</button>
          <button className="hover:text-gray-500">CONTACT US</button>
        </div>
        <div className="flex flex-col items-start">
          <button className="hover:text-gray-500">ABOUT US</button>
          <button className="hover:text-gray-500">CONTACT US</button>
          <button className="hover:text-gray-500">CONTACT US</button>
        </div>
        <div className="flex flex-col items-start">
          <button className="hover:text-gray-500">ABOUT US</button>
          <button className="hover:text-gray-500">CONTACT US</button>
          <button className="hover:text-gray-500">ABOUT US</button>
          <button className="hover:text-gray-500">CONTACT US</button>
        </div>
      </div>
      <div className="border-b border-white mx-10"></div>
      <div className="flex flex-col space-y-5 p-8 justify-center items-center">
        <div className="flex text-5xl">
          <button>🐵</button>
          <button>🙈</button>
          <button>🙉</button>
          <button>🙊</button>
        </div>
        <h1 className="text-white">Copyright @ 2025</h1>
      </div>
    </div>
  );
}
