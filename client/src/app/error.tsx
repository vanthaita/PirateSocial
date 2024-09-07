"use client";

import Link from "next/link";
import ButtonSupport from "@/components/ButtonSupport";
// A simple error boundary to show a nice error page if something goes wrong (Error Boundary)
// Users can contanct support, go to the main page or try to reset/refresh to fix the error
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center text-center gap-6 p-6">
        <div className="p-6 bg-white rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            className="w-36 h-36 md:w-64 md:h-64"
            viewBox="0 0 509.04617 507.58297"
          >
            <path
              fill="#f2f2f2"
              d="M504.17 454.213c-6.3 13.08-17.91 22.81-30.08 30.72a189.914 189.914 0 0 1-42.66 20.65c-2.06.71-4.14 1.37-6.23 2h-84.51c-.59-.64-1.15-1.31-1.68-2-5.66-7.25-8.72-16.54-7.61-25.64 1.43-11.69 10.31-22.43 21.81-24.91 11.51-2.49 24.63 4.38 28.13 15.63 1.92-21.68 4.14-44.26 15.66-62.72 10.44-16.71 28.51-28.67 48.09-30.81a60.558 60.558 0 0 1 33.48 6.13c.95.48 1.89.98 2.81 1.5a56.015 56.015 0 0 1 16.14 13.77c12.21 15.46 15.2 37.93 6.65 55.68Z"
            />
            <path
              fill="#fff"
              d="M480.76 386.133a317.08 317.08 0 0 0-90.56 119.45c-.29.66-.58 1.33-.86 2h-3.98c.28-.67.56-1.34.85-2 3.85-9 8.1-17.84 12.77-26.45a321.861 321.861 0 0 1 34.91-51.66 316.97 316.97 0 0 1 44.26-43.95 1.93 1.93 0 0 1 .42-.26 2.032 2.032 0 0 1 2.81 1.5 1.478 1.478 0 0 1-.62 1.37Z"
            />
            <path
              fill="#ffb8b8"
              d="M167.214 293.587a9.497 9.497 0 0 0-1.203-14.513l-4.796-31.62-19.702 6.201 10.793 28.21a9.549 9.549 0 0 0 14.908 11.722Z"
            />
            <path
              className="fill-primary"
              d="m146.919 278.711-12.153-56.756a32.5 32.5 0 0 1 9.281-30.393c15.556-14.99 35.55-33.885 42.455-38.772a35.606 35.606 0 0 1 22.277-6.576l.166.018 10.454 9.88-22.773 37.489-34.571 21.66 3.847 55.63Z"
            />
            <rect
              width={59}
              height={8}
              x={134.48}
              y={201.583}
              fill="#ccc"
              rx={4}
            />
            <rect
              width={59}
              height={8}
              x={134.48}
              y={288.583}
              fill="#ccc"
              rx={4}
            />
            <path
              fill="#ccc"
              d="M164.48 506.583a2 2 0 0 1-1.992-1.823l-25.496-299a2 2 0 1 1 3.984-.354l23.475 276.252L187.26 205.41a2 2 0 1 1 3.985.344l-24.771 299a2 2 0 0 1-1.99 1.828Z"
            />
            <circle cx={221.715} cy={108.007} r={26.239} fill="#ffb8b8" />
            <path
              fill="#ffb8b8"
              d="m143.516 494.591-12.478-3.977 9.402-50.025 18.418 5.87-15.342 48.132z"
            />
            <path
              fill="#2f2e41"
              d="m142.822 505.66-40.172-12.805.332-1.043a15.829 15.829 0 0 1 19.864-10.262l25.109 8.004Z"
            />
            <path
              fill="#ffb8b8"
              d="M234.305 494.332h-13.097l-6.233-50.518h19.33v50.518z"
            />
            <path
              fill="#2f2e41"
              d="M196.45 505.994h40.162V491.09h-25.354a14.826 14.826 0 0 0-14.809 14.81ZM233.922 477.938l-4.42-.66c-13.407-1.997-14.21-2.117-16.339-3.051-1.087-.478-1.163-7.693-.51-48.256.478-29.774 1.075-66.83-.083-86.723a3.5 3.5 0 0 0-6.703-1.18c-9.976 23.037-26.712 74.59-37.787 108.704-3.852 11.866-6.895 21.239-8.82 26.857a4.524 4.524 0 0 1-5.354 2.898c-9.114-2.278-8.504-3.247-21.485-6.604a4.489 4.489 0 0 1-3.282-5.282c2.348-11.072 45.314-190.6 48.603-207.666a4.502 4.502 0 0 1 5.305-3.571c9.674 1.949 15.56 4.017 25.12 6.016 10.315 2.158 20.982 4.39 31.386 6.472a4.463 4.463 0 0 1 2.619 1.605c2.574 3.252 6.392 5.077 10.434 7.01 2.724 1.302-3.45 1.185-1.077 3.063 9.61 7.608-4.21 162.088-12.56 196.978a4.515 4.515 0 0 1-5.047 3.39ZM232.898 130.967c-1.532-6.5 6.212-20.487 4.68-26.987-1.037-4.402-11.388-1.41-13.804-5.233s-6.461-6.921-10.984-6.972c-5.198-.058-10.313 3.798-15.237 2.131-4.978-1.685-6.57-8.503-4.368-13.276s6.942-7.814 11.627-10.197c7.978-4.059 17.266-7.023 25.805-4.337 5.161 1.623 9.477 5.14 13.653 8.58 3.807 3.136 7.678 6.342 10.339 10.495 5.213 8.135 4.899 19.095.444 27.669s-12.574 14.865-21.519 18.517"
            />
            <path
              className="fill-primary"
              d="M168.47 282.233c2.832-4.73 7.132-26.897 12.434-64.103 3.61-25.4 6.755-51.206 8.316-64.389a6.339 6.339 0 0 1 3.56-5.001q1.518-.734 3.02-1.388c12.922-5.621 26.019-7.484 38.923-5.536a70.619 70.619 0 0 1 34.92 15.91l.117.112.03.158c.056.293 5.476 29.498-5.625 49.23-10.948 19.468-11.076 71.026-11.076 71.544v.663l-.637-.182c-17.032-4.866-82.825 3.648-83.488 3.735l-1.025.133Z"
            />
            <rect
              width={59}
              height={8}
              x={212.48}
              y={214.583}
              fill="#ccc"
              rx={4}
            />
            <rect
              width={59}
              height={8}
              x={212.48}
              y={301.583}
              fill="#ccc"
              rx={4}
            />
            <path
              fill="#ccc"
              d="M242.48 507.583a2 2 0 0 1-1.992-1.823l-25.496-287a2 2 0 1 1 3.984-.354l23.475 264.252L265.26 218.41a2 2 0 0 1 3.985.344l-24.771 287a2 2 0 0 1-1.99 1.828Z"
            />
            <path
              fill="#ffb8b8"
              d="M226.013 302.85a9.497 9.497 0 0 1 8.896-11.53l21.208-23.938 13.17 15.91-24.39 17.818a9.549 9.549 0 0 1-18.884 1.74Z"
            />
            <path
              className="fill-primary"
              d="m238.36 286.189 33.458-44.61-17.253-36.97 1.253-43.845 14.144-2.613.15.075a35.606 35.606 0 0 1 15.128 17.624c3.142 7.856 9.659 34.581 14.573 55.619a32.5 32.5 0 0 1-8.723 30.557l-41.043 41.043Z"
            />
            <path
              fill="#ccc"
              d="m98.11 495.178 45.773 11.02a3.922 3.922 0 0 0 4.555-2.125l39.32-104.542a3.221 3.221 0 0 0 .003-2.546 3.644 3.644 0 0 0-2.094-1.961l-34.415-13.143a4.139 4.139 0 0 0-3.374.187 3.511 3.511 0 0 0-1.84 2.252l-.002.005-24.29 92.138-.36.023c-.14.009-14.065.956-20.327 8.472a13.291 13.291 0 0 0-2.949 10.22Z"
            />
            <path
              fill="#3f3d56"
              d="M496 506.583a.997.997 0 0 1-1 1H1a1 1 0 0 1 0-2h494a.997.997 0 0 1 1 1Z"
            />
            <path
              fill="#b3b3b3"
              d="m131.05 438.563.21-1.989 41.733 4.42-.211 1.989zM126.801 454.875l.82-1.824 33.583 15.11-.82 1.824zM177.384 426.985l-39.583-13.11.821-1.824 39.583 13.11-.821 1.824zM181.384 417.985l-39.583-19.11.821-1.824 39.583 19.11-.821 1.824zM122.832 470.232l1.299-1.521 28.54 24.38-1.3 1.52zM114.207 477.62l1.821-.827 11.46 25.27-1.822.825z"
            />
            <path
              fill="#f2f2f2"
              d="M384.34 477.987V22.183c0-6.155.117-12.323 0-18.477-.005-.27 0-.539 0-.808 0-3.86-6-3.867-6 0v455.804c0 6.155-.117 12.323 0 18.477.005.27 0 .539 0 .808 0 3.86 6 3.867 6 0Z"
            />
            <path
              fill="#f2f2f2"
              d="M417.523 130.291h-72a6.508 6.508 0 0 1-6.5-6.5v-87.5a6.508 6.508 0 0 1 6.5-6.5h72a6.508 6.508 0 0 1 6.5 6.5v87.5a6.508 6.508 0 0 1-6.5 6.5Z"
            />
          </svg>
        </div>

        <p className="font-medium md:text-xl md:font-semibold">
          Something went wrong 🥲
        </p>

        <p className="text-red-500">{error?.message}</p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn btn-sm" onClick={reset}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                clipRule="evenodd"
              />
            </svg>
            Refresh
          </button>
          <ButtonSupport />
          <Link href="/" className="btn btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                clipRule="evenodd"
              />
            </svg>
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
