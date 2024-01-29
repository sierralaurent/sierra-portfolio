import React from "react";

export default function Resume() {

  function download() {
    const URL = 'https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:9b9a4ffd-7b77-3d42-bf23-71f6861f6a71'
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