'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Download } from 'lucide-react';

export default function SideButton() {
  const [isHovered, setIsHovered] = useState({
    call: false,
    whatsapp: false,
    download: false,
  });

  const handleCall = () => {
    window.location.href = 'tel:+919606260928';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+919606260928', '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/sample.pdf';
    link.download = 'download.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseEnter = (button) => {
    setIsHovered((prev) => ({ ...prev, [button]: true }));
  };

  const handleMouseLeave = (button) => {
    setIsHovered((prev) => ({ ...prev, [button]: false }));
  };

  return (
    <div className="container">
      {/* <p className="text">Start prompting (or editing) to see magic happen :)</p> */}

      <div className="button-wrapper">
        <button
          type="button"
          onClick={handleCall}
          onMouseEnter={() => handleMouseEnter('call')}
          onMouseLeave={() => handleMouseLeave('call')}
          className={`btn call ${isHovered.call ? 'hovered' : ''}`}
          aria-label="Call"
        >
          <Phone size={24} />
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          onMouseEnter={() => handleMouseEnter('whatsapp')}
          onMouseLeave={() => handleMouseLeave('whatsapp')}
          className={`btn whatsapp ${isHovered.whatsapp ? 'hovered' : ''}`}
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </button>

        <button
          type="button"
          onClick={handleDownload}
          onMouseEnter={() => handleMouseEnter('download')}
          onMouseLeave={() => handleMouseLeave('download')}
          className={`btn download ${isHovered.download ? 'hovered' : ''}`}
          aria-label="Download"
        >
          <Download size={24} />
        </button>
      </div>

      <style jsx>{`
        // .container {
        //   min-height: 100vh;
        //   background: #f3f4f6;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   position: relative;
        // }

        .text {
          font-size: 16px;
          color: #1f2937;
        }

        .button-wrapper {
          position: fixed;
          right: -3px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 100;
        }
          @media (max-width: 768px) {
.button-wrapper {
z-index: 50;
}
}

        .btn {
          border: none;
          padding: 16px;
          border-radius: 5px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease-in-out;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transform: scale(1);
        }

        .btn.hovered {
          transform: scale(1.1);
        }

        .call {
          background: #E6C714;
        }

        .call:hover {
          background: #E6C714;
        }

        .whatsapp {
          background: #E6C714;
        }

        .whatsapp:hover {
          background: #E6C714;
        }

        .download {
          background: #E6C714;
        }

        .download:hover {
          background: #E6C714;
        }
      `}</style>
    </div>
  );
}
