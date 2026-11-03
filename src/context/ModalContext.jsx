import React, { createContext, useContext, useState, useCallback } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingConcern, setBookingConcern] = useState('');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('D1gxGckdo4c');

  const openBooking = useCallback((concern = '') => {
    setBookingConcern(concern);
    setIsBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsBookingOpen(false);
  }, []);

  const openVideo = useCallback((videoId = 'D1gxGckdo4c') => {
    setCurrentVideoId(videoId);
    setIsVideoOpen(true);
  }, []);

  const closeVideo = useCallback(() => {
    setIsVideoOpen(false);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isBookingOpen,
        bookingConcern,
        openBooking,
        closeBooking,
        isVideoOpen,
        currentVideoId,
        openVideo,
        closeVideo
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}

