import React from "react";

export default function Resume() {

  function download() {
    const URL = 'http://dynamic-link.com/sample.xlsx'
    if (typeof window !== "undefined"){
      window.location.href = URL
    }
}
  return (
    <>
      <button onClick={download} className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>download</button>
    </>
  );
}