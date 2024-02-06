import React from "react";
import Button from '@/components/button'

export default function Resume() {

  function download() {
    const URL = 'https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:9b9a4ffd-7b77-3d42-bf23-71f6861f6a71'
    if (typeof window !== "undefined"){
      window.open(URL, '_blank');
    }
  }

  return (
    <>
      <div onClick={download}>
        <Button backgroundColor="Sage">Download Resume</Button>
      </div>
    </>
  );
}