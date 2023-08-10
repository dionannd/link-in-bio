export default function Loading() {
  return (
    <div className="shadow rounded-md p-4 max-w-lg w-full mx-auto h-screen">
      <div className="animate-pulse flex space-y-4 items-center flex-col pt-20">
        <div className="rounded-full bg-gray-700 h-[100px] w-[100px]"></div>
        <div className="rounded-full bg-gray-700 h-2 w-[80px] mb-10"></div>
        <div className="rounded-full bg-gray-700 h-2 w-[50px]"></div>
        <div className="pt-10 space-y-6">
          <div className="rounded-full bg-gray-700 h-6 w-[300px]"></div>
          <div className="rounded-full bg-gray-700 h-6 w-[300px]"></div>
          <div className="rounded-full bg-gray-700 h-6 w-[300px]"></div>
        </div>
        <div className="py-10 flex space-x-6">
          <div className="rounded-full bg-gray-700 h-[30px] w-[30px]"></div>
          <div className="rounded-full bg-gray-700 h-[30px] w-[30px]"></div>
          <div className="rounded-full bg-gray-700 h-[30px] w-[30px]"></div>
          <div className="rounded-full bg-gray-700 h-[30px] w-[30px]"></div>
        </div>
        <div className="rounded-full bg-gray-700 h-2 w-[100px]"></div>
      </div>
    </div>
  );
}
