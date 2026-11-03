import React, { useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import BookingForm from '../forms/BookingForm';

export default function BookingModal() {
  const { isBookingOpen, closeBooking, bookingConcern } = useModal();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isBookingOpen) {
        closeBooking();
      }
    };
    if (isBookingOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isBookingOpen, closeBooking]);

  if (!isBookingOpen) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        id="bookingModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="bookingModalLabel"
        aria-modal="true"
        onClick={(e) => {
          if (e.target.classList.contains('modal')) {
            closeBooking();
          }
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-booking">
          <div className="modal-content shadow">
            <div className="modal-header border-0 pb-0">
              <h2 className="modal-title h5" id="bookingModalLabel">Book a child evaluation</h2>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeBooking}
              ></button>
            </div>
            <div className="modal-body px-3 px-sm-4 pb-4 pt-2">
              <BookingForm
                idPrefix="modal"
                withHeading={false}
                initialConcern={bookingConcern}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={closeBooking}></div>
    </>
  );
}

