import React from 'react'

const ConnectButton = () => {
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
      <div className="rounded-md shadow">
      <button
          className="w-full flex items-center justify-center
          px-8 py-3 border border-transparent text-base font-medium
          rounded-md text-white bg-indigo-600 hover:bg-indigo-700
          md:py-4 md:text-lg md:px-10">
          Connect to MetaMask
        </button>
        {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
        <button
          className="w-full flex items-center justify-center
          px-8 py-3 border border-transparent text-base font-medium
          rounded-md text-white bg-indigo-600 hover:bg-indigo-700
          md:py-4 md:text-lg md:px-10">
          Connect to MetaMask
        </button>
      </div>
    </div>
  )
}

export default ConnectButton
