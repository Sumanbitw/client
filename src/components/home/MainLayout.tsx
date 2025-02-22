import { rooms } from "@/lib/data";
import Entrance from "../icons/Entrance.jpg";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const roomsRef = useRef<HTMLDivElement | null>(null); // Explicitly typing the ref

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNavigate = (roomId: number, room: any) => {
    // If already on `/hotel/...`, replace the last segment with the new room ID
    if (location.pathname.startsWith("/hotel")) {
      navigate(`/hotel/${roomId}`, { state: room });
    } else {
      navigate(`/hotel/${roomId}`, { state: room });
    }
  };

  useEffect(() => {
    if (location.pathname === "/hotel" && roomsRef.current) {
      roomsRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <main className="p-2">
        {/* Existing Section */}
        <section className="flex flex-col md:flex-row w-full py-6 px-4 gap-4 cursor-pointer">
          {/* Image first on mobile */}
          <div className="w-full md:w-[70%] h-[300px] md:h-[500px] rounded-xl overflow-hidden">
            <img
              src={Entrance}
              alt="Hotel image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Text and Button */}
          <div className="w-full md:w-[30%] rounded-xl flex flex-col gap-4 justify-center items-center text-center">
            <p className="font-poppins font-bold text-2xl md:text-4xl italic">
              Your perfect stay is waiting. Reserve it today!
            </p>
            <p className="font-poppins font-normal text-sm md:text-base text-gray-500">
              Discover the ideal getaway tailored just for you. Whether you're
              seeking a cozy retreat, a luxurious escape, or an adventure-filled
              destination, we’ve got you covered. With a wide range of
              handpicked accommodations, unbeatable prices, and seamless
              booking, your dream stay is just a few clicks away. Don’t
              wait—your next unforgettable experience is ready and waiting. Book
              now and make your travel dreams a reality!
            </p>
            <div className="flex items-center">
              <Button className="bg-sky-700 text-white font-poppins py-3 px-6">
                Book your stay
              </Button>
            </div>
          </div>
        </section>

        {/* New Section with Icons */}
        <section className="w-full py-12 px-4 bg-gray-50 rounded-xl cursor-pointer">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl text-center mb-8">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Flexibility Card */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 bg-sky-700 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-xl">
                  Flexible Booking Options
                </h3>
                <p className="font-poppins font-normal text-base text-gray-500">
                  Enjoy the freedom to modify or cancel your booking with ease.
                  We offer flexible plans to suit your changing needs.
                </p>
              </div>

              {/* Listings Card */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 bg-sky-700 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-xl">
                  Good Reach, Local Charm
                </h3>
                <p className="font-poppins font-normal text-base text-gray-500">
                  Explore unique stays across Purulia, from cozy cottages to
                  luxurious villas.
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 bg-sky-700 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-xl">
                  Tailored Stays for You
                </h3>
                <p className="font-poppins font-normal text-base text-gray-500">
                  Use our advanced filters to find the perfect stay—choose by
                  price, amenities, location, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full py-12 px-4 bg-white cursor-pointer"
          ref={roomsRef}
        >
          <div className="max-w-screen-xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl text-center mb-8">
              Explore Our Rooms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                  onClick={() => handleNavigate(room.id, room)}
                >
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-poppins font-bold text-xl mb-2">
                        {room.title}
                      </h3>
                      <p className="font-poppins font-normal text-base text-gray-500">
                        {room.description}
                      </p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-sky-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainLayout;
