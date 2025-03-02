import { Response, Social } from "@/lib/modals"
import { firestore } from ".."
import { addDoc, collection, getDocs } from "firebase/firestore"

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

export async function getSocialChannels() {
    const ref = collection(firestore, `users/email/social`)
    const socials: Social[] = []

    try {
        const res = await getDocs(ref)
    
        res.docs.forEach((doc)=> {
            const data = doc.data()
            socials.push({
                name: data.name,
                platform: data.platform,
                createdAt: data.createdAt
            })
        })

        return socials;
    } catch {
        return null
    }
}