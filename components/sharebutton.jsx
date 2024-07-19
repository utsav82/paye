"use client"
import React from 'react';

const ShareButton = () => {
  const copyLinkToClipboard = () => {
    const shareLink = "https://paye-peach.vercel.app/";
    navigator.clipboard.writeText(shareLink)
  };

  return (
    <button className="absolute mt-10 right-0 mr-6 lg:mr-10" onClick={copyLinkToClipboard} >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-blue-500 trasition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path className='' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
      </svg>
    </button>
  );
};

export default ShareButton;
