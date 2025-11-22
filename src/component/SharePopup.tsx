import React from "react";
import { toast } from "react-toastify";
import { MdContentCopy } from "react-icons/md";
import {
  FaWhatsapp,
  FaMicrosoft,
  FaEnvelope,
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const SharePopup: React.FC<{ url: string; onClose: () => void }> = ({
  url,
  onClose,
}) => {
  const encodedURL = encodeURIComponent(url);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("URL copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  const links = {
    copy: url,
    whatsapp: `https://wa.me/?text=${encodedURL}`,
    teams: `https://teams.microsoft.com/l/chat/0/0?users=&message=${encodedURL}`,
    email: `mailto:?subject=Check this link&body=${encodedURL}`,
    telegram: `https://t.me/share/url?url=${encodedURL}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
    instagram: `https://www.instagram.com/?url=${encodedURL}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`,
  };

  const shareOptions = [
    {
      label: "Copy",
      icon: <MdContentCopy size={28} />,
      onClick: handleCopy,
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp size={28} className="text-green-600" />,
      href: links.whatsapp,
    },
    {
      label: "Telegram",
      icon: <FaTelegram size={28} className="text-sky-600" />,
      href: links.telegram,
    },
    {
      label: "Facebook",
      icon: <FaFacebook size={28} className="text-blue-600" />,
      href: links.facebook,
    },
    {
      label: "Instagram",
      icon: <FaInstagram size={28} className="text-pink-500" />,
      href: links.instagram,
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin size={28} className="text-blue-700" />,
      href: links.linkedin,
    },
    {
      label: "Teams",
      icon: <FaMicrosoft size={28} className="text-blue-600" />,
      href: links.teams,
    },
    {
      label: "Email",
      icon: <FaEnvelope size={28} className="text-red-600" />,
      href: links.email,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-xl w-80 md:w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-center">Share</h2>

        <div className="grid grid-cols-4 gap-4 text-center">
          {shareOptions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
            >
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <div className="bg-gray-200 p-3 rounded-full hover:bg-gray-300">
                    {item.icon}
                  </div>
                </a>
              ) : (
                <div
                  onClick={item.onClick}
                  className="bg-gray-200 p-3 rounded-full hover:bg-gray-300"
                >
                  {item.icon}
                </div>
              )}
              <p className="text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full p-2 bg-red-500 cursor-pointer text-white rounded-2xl mt-5"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SharePopup;
