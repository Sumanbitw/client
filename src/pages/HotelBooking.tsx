import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocation } from "react-router-dom";

const HotelBooking = () => {
  // State for check-in and check-out dates
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
  const [adults, setAdults] = useState("1"); // Default to 1 adult
  const [children, setChildren] = useState("0"); // Default to 0 children
  const { state: room } = useLocation();

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Room Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Room Details and Booking Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg font-poppins">
            <h1 className="text-3xl font-bold mb-4">{room.title}</h1>
            <p className="text-gray-600 mb-4">{room.description}</p>

            {/* Big Description */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Room Details</h2>
              <p className="text-gray-700">{room.bigDescription}</p>
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Amenities</h2>
              <ul className="list-disc list-inside text-gray-700">
                {room.amenities.map((amenity: string, index: number) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Price</h2>
              <p className="text-2xl font-bold text-sky-700">
                ₹{room.price.toLocaleString()} / night
              </p>
            </div>

            {/* Booking Form */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Book Your Stay</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Check-in Date Picker */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                    Check-in Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal font-poppins"
                      >
                        {checkInDate ? (
                          format(checkInDate, "PPP")
                        ) : (
                          <span>Select check-in date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkInDate}
                        onSelect={setCheckInDate}
                        disabled={(date) => date < new Date()} // Disable past dates
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Check-out Date Picker */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                    Check-out Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal font-poppins"
                      >
                        {checkOutDate ? (
                          format(checkOutDate, "PPP")
                        ) : (
                          <span>Select check-out date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkOutDate}
                        onSelect={setCheckOutDate}
                        disabled={(date) =>
                          checkInDate ? date <= checkInDate : date < new Date()
                        } // Ensure checkout is after check-in
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Guest Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {/* Adults Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                    Adults
                  </label>
                  <Select value={adults} onValueChange={setAdults}>
                    <SelectTrigger className="w-full font-poppins">
                      <SelectValue placeholder="Select adults" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-300 rounded-md shadow-md font-poppins">
                      {[...Array(5).keys()].map((num) => (
                        <SelectItem key={num + 1} value={`${num + 1}`}>
                          {num + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Children Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                    Children
                  </label>
                  <Select value={children} onValueChange={setChildren}>
                    <SelectTrigger className="w-full font-poppins">
                      <SelectValue placeholder="Select children" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-300 rounded-md shadow-md font-poppins">
                      {[...Array(5).keys()].map((num) => (
                        <SelectItem key={num} value={`${num}`}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <Button
              className="w-full bg-sky-700 text-white py-3 px-4 rounded-lg hover:bg-sky-800 transition-colors font-poppins"
              onClick={() => {
                if (!checkInDate || !checkOutDate) {
                  alert("Please select check-in and check-out dates.");
                } else if (parseInt(adults) === 0) {
                  alert("At least one adult must be selected.");
                } else {
                  alert(
                    `Booking confirmed from ${format(
                      checkInDate,
                      "PPP"
                    )} to ${format(
                      checkOutDate,
                      "PPP"
                    )} for ${adults} adults and ${children} children!`
                  );
                }
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
