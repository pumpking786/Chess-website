"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Instagram, Youtube, Mail, Twitch } from "lucide-react";
import Image from "next/image";

// Share Modal Component with TypeScript typing
const ShareModal = ({
  isOpen,
  onClose,
  linktreeUrl,
}: {
  isOpen: boolean;
  onClose: () => void;
  linktreeUrl: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);
  if (!isOpen) return null;
  const shareOptions = [
    {
      name: "X",
      icon: "/x.jpg",
      url: `https://x.com/intent/tweet?url=${linktreeUrl}`,
    },
    {
      name: "Facebook",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      url: `https://www.facebook.com/sharer/sharer.php?u=${linktreeUrl}`,
    },
    {
      name: "WhatsApp",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
      url: `https://api.whatsapp.com/send?text=${linktreeUrl}`,
    },
    {
      name: "LinkedIn",
      icon: "/linkedin.png",
      url: `https://www.linkedin.com/shareArticle?url=${linktreeUrl}`,
    },
    {
      name: "Messenger",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg",
      url: `fb-messenger://share?link=${encodeURIComponent(linktreeUrl)}`,
    },
    {
      name: "Snapchat",
      icon: "/snap.jpg",
      url: `snapchat://send?text=${encodeURIComponent(linktreeUrl)}`,
    },
    {
      name: "Viber",
      icon: "/viber.png", // Use a valid icon path or URL
      url: `viber://forward?text=${encodeURIComponent(linktreeUrl)}`,
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linktreeUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000); // Hide after 3 seconds
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg p-6 w-full max-w-sm relative"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-lg font-semibold mb-4 text-center">
            Share with your friends
          </h2>

          {/* Linktree Profile Card */}
          <div className="bg-gray-800 text-white rounded-lg p-4 mb-4 flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-2">
              <Image
                src="/profile.png" // Replace with the actual profile image path
                alt="ChesswithPramit"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">ChesswithPramit</h3>
            <p className="text-sm">*/#ChesswithPramit</p>
          </div>

          {/* Share Options */}
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {shareOptions.map((option) => (
              <a
                key={option.name}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={option.icon}
                    alt={option.name}
                    width={30}
                    height={30}
                  />
                </div>
                <span className="text-sm mt-1">{option.name}</span>
              </a>
            ))}
          </div>

          {/* Copy Linktree Button */}
          <div className="relative">
            <button
              onClick={copyToClipboard}
              className="cursor-pointer w-full py-2 mb-4 border border-gray-300 rounded-full flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy link
            </button>
            {isCopied && (
              <span className="absolute bottom-14 left-1/2 -translate-x-1/2 text-lm bg-black text-white py-1 px-2 rounded opacity-100 transition duration-300">
                Link copied!
              </span>
            )}
          </div>

          {/* Promotional Text */}
          <div className="text-center">
            <p className="text-sm font-semibold">Join ChesswithPramit</p>
            {/* <p className="text-xs text-gray-600">
            Get your own free Linktree. The only link in bio trusted by 70M+
            people.
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function H1ChessProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const linktreeUrl: string = "https://chess-website-two.vercel.app/"; // Updated to the new URL

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200 flex flex-col items-center px-4 relative overflow-x-hidden">
      {/* Top Icons - Centered Container */}
      <div className="w-full max-w-md flex justify-between items-center pt-4 z-50">
        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>

        <div
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="5" cy="12" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <circle cx="19" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Profile Sections*/}
      <div className="pt-0 flex flex-col items-center text-center">
        <div className="relative w-30 h-30 rounded-full overflow-hidden mb-4">
          <Image
            src="/profile.png"
            alt="ChesswithPramit"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">ChesswithPramit</h1>
        <p className="text-gray-600 mb-4 text-lm italic">
          I Teach Chess Online and On The Internet.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mb-6">
        {/* Instagram */}
        <div className="relative group inline-block">
          <a
            href="https://www.instagram.com/pramit252"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-8 h-8 text-black cursor-pointer transform transition-transform duration-200 group-hover:-translate-y-1" />
          </a>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs bg-black text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            Instagram
          </span>
        </div>

        {/* YouTube */}
        <div className="relative group inline-block">
          <a
            href="https://www.youtube.com/@ChesswithPramit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-8 h-8 text-black cursor-pointer transition-transform duration-200 hover:-translate-y-1" />
          </a>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs bg-black text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            YouTube
          </span>
        </div>

        {/* Email */}
        <div className="relative group inline-block">
          <a
            href="mailto:pramitamatya786@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-8 h-8 text-black cursor-pointer transition-transform duration-200 hover:-translate-y-1" />
          </a>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs bg-black text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            Email
          </span>
        </div>

        {/* Twitch */}
        <div className="relative group inline-block">
          <a
            href="https://www.twitch.tv/chesswithpramit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitch className="w-8 h-8 text-black cursor-pointer transition-transform duration-200 hover:-translate-y-1" />
          </a>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs bg-black text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            Twitch
          </span>
        </div>
        {/* X (Twitter) */}
        <div className="relative group inline-block">
          <a
            href="https://x.com/AmatyaPramit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-8 h-8 text-black fill-current cursor-pointer transition-transform duration-200 hover:-translate-y-1"
              viewBox="0 -2 24 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.753 10.408L23.25 0h-2.115l-7.547 8.93L7.6 0H0l9.024 13.03L0 24h2.115l8.029-9.497L16.4 24H24l-9.247-13.592z" />
            </svg>
          </a>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs bg-black text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            X
          </span>
        </div>

        {/* TikTok */}
        <div className="relative group inline-block">
          <a
            href="https://www.tiktok.com/@pramit252"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-8 h-8 text-black cursor-pointer transition-transform duration-200 hover:-translate-y-1 fill-current"
              viewBox="0 0 24 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.75 0h4.5a6.75 6.75 0 0 0 6.75 6.75v4.5a11.25 11.25 0 0 1-6.75-2.25v9.75a7.5 7.5 0 1 1-7.5-7.5v4.5a3 3 0 1 0 3 3V0z" />
            </svg>
          </a>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs bg-black text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            TikTok
          </span>
        </div>
      </div>

      {/* Link Cards */}
      <div className="w-full max-w-md space-y-3 pb-10">
        <div className="block transition-transform duration-200 hover:-translate-y-1">
          <Card>
            <a
              href="https://www.pramitamatya.com.np/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent className="p-3 flex items-center gap-3">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src="/official.jpg"
                    alt="Patreon"
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <span className="text-lg italic font-medium">
                  <b>Pramit Amatya Official Website</b>
                </span>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="block transition-transform duration-200 hover:-translate-y-1">
          <Card>
            <a
              href="https://himalayanchess.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent className="p-3 flex items-center gap-3">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src="/hca.jpg"
                    alt="Opening Traps"
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <span className="text-lg italic font-medium">
                  Chess Coach at Himalayan Chess Academy (HCA) &ensp;{" "}
                  <strong>20% OFF</strong>
                </span>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="block transition-transform duration-200 hover:-translate-y-1">
          <Card>
            <a
              href="https://www.youtube.com/@ChesswithPramit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent className="p-3 flex items-center gap-3">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src="/yt.jpg"
                    alt="Patreon"
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <span className="text-lg italic font-medium">
                  Content Creator at ChesswithPramit
                </span>
              </CardContent>
            </a>
          </Card>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        linktreeUrl={linktreeUrl}
      />
    </div>
  );
}
