"use client";

import { getSocialChannels } from '@/db/socials';
import { Social } from '@/lib/modals';
import React, { useEffect } from 'react'

export default function Page() {
  
  const [socials, setSocials] = React.useState<Social[]>([])


  const init = async () => {
    const res = await getSocialChannels()
    
    setSocials(res ? res : [])
  }

  useEffect(() => {
    init()
  })
  
  return (
    <>
    <h1>Youtube</h1>
    { socials.map((soc) => {
      if (soc.platform === "youtube") {
        return(
          <h1 key={soc.createdAt!.toString()}>{soc.name}</h1>
        )
      }
    })}

<h1>Instagram</h1>
    { socials.map((soc) => {
      if (soc.platform === "instagram") {
        return(
          <h1 key={soc.createdAt!.toString()}>{soc.name}</h1>
        )
      }
    })}
    </>
  )
}