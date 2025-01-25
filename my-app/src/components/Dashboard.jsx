import Button from "../common/Button";

export default function Dashboard() {
  return (
    <div className="h-screen bg-gray-500">
      <nav>
        <div className="flex items-center justify-center h-10 text-gray-400 text-xs bg-black">
          <span className="px-2">
            Subscribe to our Newsletter For New & latest Blogs and Resources
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>

        <div
          className="flex items-center justify-between px-20 py-4 h-17"
          style={{ backgroundColor: "#1A1A1A" }}
        >
          <div className="flex items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 50 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.3333 50.5V42.1667C37.9444 42.1667 41.6666 38.4444 41.6666 33.8333H50C50 43.0556 42.5278 50.5 33.3333 50.5Z"
                fill="#FFD11A"
              />
              <path
                d="M33.3333 50.5V42.1667C28.7222 42.1667 25 38.4444 25 33.8333H16.6667C16.6667 43.0556 24.1389 50.5 33.3333 50.5Z"
                fill="#FFD11A"
              />
              <path
                d="M0 33.8333H8.33333C8.33333 38.4445 12.0556 42.1667 16.6667 42.1667V50.5C7.47222 50.5 0 43.0556 0 33.8333Z"
                fill="#FFD11A"
              />
              <path
                d="M0 33.8333H8.33333C8.33333 29.2222 12.0556 25.5 16.6667 25.5V17.1667C7.47222 17.1667 0 24.6389 0 33.8333Z"
                fill="#FFD11A"
              />
              <path
                d="M16.6667 0.5V8.83333C12.0556 8.83333 8.33333 12.5556 8.33333 17.1667H0C0 7.97222 7.47222 0.5 16.6667 0.5Z"
                fill="#FFD11A"
              />
              <path
                d="M16.6667 0.5V8.83333C21.2778 8.83333 25 12.5556 25 17.1667H33.3333C33.3333 7.97222 25.8611 0.5 16.6667 0.5Z"
                fill="#FFD11A"
              />
              <path
                d="M50 17.1667H41.6667C41.6667 12.5556 37.9445 8.83333 33.3333 8.83333V0.5C42.5278 0.5 50 7.97222 50 17.1667Z"
                fill="#FFD11A"
              />
              <path
                d="M50 17.1667H41.6667C41.6667 21.7778 37.9445 25.5 33.3334 25.5V33.8333C42.5278 33.8333 50 26.3889 50 17.1667Z"
                fill="#FFD11A"
              />
            </svg>
            <span className="text-white text-lg font-semibold mx-2">
              FutureTech
            </span>
          </div>

          <ul className="flex items-center">
            <li>
              <button className="px-4 py-2 rounded-lg mx-2 text-gray-400 hover:border border-white hover:bg-black  hover:text-white">
                Home
              </button>
            </li>

            <li>
              <button className="px-4 py-2 rounded-lg mx-2 text-gray-400 hover:border border-white hover:bg-black  hover:text-white">
                News
              </button>
            </li>
            <li>
              <button className="px-4 py-2 rounded-lg mx-2 text-gray-400 hover:border border-white hover:bg-black  hover:text-white">
                Podcast
              </button>
            </li>
            <li>
              <button className="px-4 py-2 rounded-lg mx-2 text-gray-400 hover:border border-white hover:bg-black  hover:text-white">
                Resources
              </button>
            </li>
          </ul>

          <a
            href="#"
            className="bg-yellow-300 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
          >
            Contact Us
          </a>
        </div>
      </nav>

      <div className="w-full flex h-100">
        <div className="w-3/5 bg-black flex flex-col border-b border-gray-600  border-r">
          <div className="h-2/3  flex flex-col text-white border-b border-gray-600 px-30 py-10 ">
            <span className="text-gray-400 font-semibold py-1">
              Your Journey to Tomorrow Begins Here
            </span>
            <span className="text-4xl font-semibold py-1">
              Explore the Frontiers of Artificial Intelligence
            </span>
            <span className="text-gray-400 font-semibold py-1">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </span>
          </div>

          <div className="h-1/3 flex flex-row text-white">
            <div className="w-1/3 text-white border-r border-gray-600 flex flex-col px-20 justify-center">
              <div className="flex items-center">
                <span className="text-4xl font-semibold">300</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 font-extrabold text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <span className="text-gray-400">Resources available</span>
            </div>

            <div className="w-1/3 text-white border-r border-gray-600 flex flex-col px-20 justify-center">
              <div className="flex items-center">
                <span className="text-4xl font-semibold">12K</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 font-extrabold text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <span className="text-gray-400">Resources available</span>
            </div>

            <div className="w-1/3 text-white border-r border-gray-600 flex flex-col px-20 justify-center">
              <div className="flex items-center">
                <span className="text-4xl font-semibold">10K</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 font-extrabold text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <span className="text-gray-400">Resources available</span>
            </div>
          </div>
        </div>
        <div className="w-2/5 bg-green-600">
          <div>
            <img src="../assets/sunimage.png"></img>
          </div>
        </div>
      </div>

      <div className="w-full flex h-47 bg-black">
        <div className="w-1/3 border-r border-gray-600 flex">
          <div className="w-3/5 flex flex-col justify-center align-center ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-yellow-300"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-white font-semibold pt-4">
              Latest news update
            </span>
            <span className="text-gray-500 mb-5 text-sm">Stay current</span>
            <span className="text-gray-500">
              Over 1000 articles published monthly
            </span>
          </div>
          <div className="w-2/5 flex justify-center items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-1/3 border-r border-gray-600 flex">
          <div className="w-3/5 flex flex-col justify-center align-center ml-10">
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3334 30C20.3334 35.5228 24.8105 40 30.3334 40C35.8562 40 40.3334 35.5228 40.3334 30C40.3334 24.4772 35.8562 20 30.3334 20H20.3334V30Z"
                fill="#FFD11A"
              />
              <path
                d="M20.3334 10C20.3334 4.47715 15.8562 0 10.3334 0C4.81053 0 0.333374 4.47715 0.333374 10C0.333374 15.5228 4.81053 20 10.3334 20H20.3334V10Z"
                fill="#FFD11A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.3334 0C24.8105 0 20.3334 4.47715 20.3334 10V20H30.3334C35.8562 20 40.3334 15.5228 40.3334 10C40.3334 4.47715 35.8562 0 30.3334 0ZM35.3334 10C35.3334 12.7614 33.0948 15 30.3334 15C27.5719 15 25.3334 12.7614 25.3334 10C25.3334 7.23858 27.572 5 30.3334 5C33.0948 5 35.3334 7.23858 35.3334 10Z"
                fill="#404040"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.3334 40C15.8562 40 20.3334 35.5228 20.3334 30V20H10.3334C4.81053 20 0.333374 24.4772 0.333374 30C0.333374 35.5228 4.81053 40 10.3334 40ZM15.3334 30C15.3334 32.7614 13.0948 35 10.3334 35C7.57195 35 5.33337 32.7614 5.33337 30C5.33337 27.2386 7.57195 25 10.3334 25C13.0948 25 15.3334 27.2386 15.3334 30Z"
                fill="#404040"
              />
            </svg>

            <span className="text-white font-semibold pt-4">
              Latest news update
            </span>
            <span className="text-gray-500 mb-5 text-sm">Stay current</span>
            <span className="text-gray-500">
              Over 1000 articles published monthly
            </span>
          </div>
          <div className="w-2/5 flex justify-center items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex">
          <div className="w-3/5 flex flex-col justify-center align-center ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-yellow-300"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-white font-semibold pt-4">
              Latest news update
            </span>
            <span className="text-gray-500 mb-5 text-sm">Stay current</span>
            <span className="text-gray-500">
              Over 1000 articles published monthly
            </span>
          </div>
          <div className="w-2/5 flex justify-center items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
