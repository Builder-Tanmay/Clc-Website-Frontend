import React, { useEffect } from 'react';
import { useModal } from '../../context/ModalContext';

export default function VideoModal() {
  const { isVideoOpen, closeVideo, currentVideoId } = useModal();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isVideoOpen) {
        closeVideo();
      }
    };
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVideoOpen, closeVideo]);

  if (!isVideoOpen) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        id="videoModal"
        tabIndex="-1"
        role="dialog"
        aria-label="Video player"
        aria-modal="true"
        onClick={(e) => {
          if (e.target.classList.contains('modal')) {
            closeVideo();
          }
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark overflow-hidden">
            <div className="modal-header border-0 pb-0">
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close video"
                onClick={closeVideo}
              ></button>
            </div>
            <div className="modal-body p-0">
              <div className="ratio ratio-16x9">
                <iframe
                  id="videoIframe"
                  src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=1&rel=0`}
                  title="CLC therapy video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={closeVideo}></div>
    </>
  );
}

