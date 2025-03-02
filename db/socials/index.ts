import { Response, Social } from "@/lib/modals"
import { firestore } from ".."
import { addDoc, collection } from "firebase/firestore"

export async function addSocialChannels({name, platform, createdAt}: Social) {
    const ref = collection(firestore, `users/email/social`)

    try {
        await addDoc(ref, { 
            name: name, 
            platform: platform,
            createdAt: createdAt ? createdAt : Date.now()
        })
        
        return Response.SUCCESS

    } catch {
        return Response.FAIL
    }
}