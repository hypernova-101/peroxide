"use client";
import { firestore } from '@/db';
import { addDoc, collection  } from 'firebase/firestore';
import React from 'react'

export default function Page() {
  
  const listTodos = async () => {
    const ref = collection(firestore, `users/email/todos/`)
    await addDoc(ref, {
      task: 'sunday running',
      status: 'incomplete',
      createdAt: Date.now()
    })
  }
  
  return (
    <>  
    </>
  )
}