"use client";

import React, { createContext, useContext, useState } from "react";

interface BookingContextType {
  isOpen: boolean;
  selectedRoom: string;
  openBooking: (roomType?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");

  const openBooking = (roomType = "") => {
    setSelectedRoom(roomType);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setSelectedRoom("");
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        selectedRoom,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
