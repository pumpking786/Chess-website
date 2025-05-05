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
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-6 h-6 text-black cursor-pointer" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="w-6 h-6 text-black cursor-pointer" />
        </a>
        <a href="mailto:someone@example.com">
          <Mail className="w-6 h-6 text-black cursor-pointer" />
        </a>
        <a
          href="https://www.twitch.tv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitch className="w-6 h-6 text-black cursor-pointer" />
        </a>
      </div>

      {/* Link Cards */}
      <div className="w-full max-w-md space-y-3 pb-10">
        <Card>
          <CardContent className="p-3 flex items-center gap-3">
            <div className="relative w-[50px] h-[50px]">
              <Image
                src="/opening.jpg"
                alt="Opening Traps"
                fill
                className="rounded object-cover"
              />
            </div>
            <span className="text-sm font-medium">
              Opening Traps You Must Learn - Chessable
            </span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 flex items-center gap-3">
            <div className="relative w-[50px] h-[50px]">
              <Image
                src="/black.jpg"
                alt="Patreon"
                fill
                className="rounded object-cover"
              />
            </div>
            <span className="text-sm font-medium">
              Get more from ChesswithPramit
            </span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 flex items-center gap-3">
            <div className="relative w-[50px] h-[50px]">
              <Image
                src="/club.png"
                alt="Chess Club"
                fill
                className="rounded object-cover"
              />
            </div>
            <span className="text-sm font-medium">ChesswithPramit CLUB</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
