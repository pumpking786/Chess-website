"use client";

import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Instagram, Youtube, Mail, Twitch } from "lucide-react";
import Image from "next/image";

export default function H1ChessProfilePage() {
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

        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
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

      {/* Profile Section */}
      <div className="pt-0 flex flex-col items-center text-center">
        <div className="relative w-30 h-30 rounded-full overflow-hidden mb-4">
          <Image
            src="/profile.png"
            alt="H1Chess"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold">ChesswithPramit</h1>
        <p className="text-gray-600 mb-4 text-sm">
          I Teach Chess On The Internet.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mb-6">
        <a
          href="https://www.instagram.com/pramit252"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:-translate-y-1"
        >
          <Instagram className="w-8 h-8 text-black cursor-pointer" />
        </a>
        <a
          href="https://www.youtube.com/@ChesswithPramit"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:-translate-y-1"
        >
          <Youtube className="w-8 h-8 text-black cursor-pointer" />
        </a>
        <a
          href="mailto:pramitamatya786@gmail.com"
          className="transition-transform duration-200 hover:-translate-y-1"
        >
          <Mail className="w-8 h-8 text-black cursor-pointer" />
        </a>
        <a
          href="https://www.twitch.tv/chesswithpramit"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:-translate-y-1"
        >
          <Twitch className="w-8 h-8 text-black cursor-pointer" />
        </a>
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
                  Chess Coach at Himalayan Chess Academy (HCA)
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
    </div>
  );
}
