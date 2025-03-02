'use client'

import React from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Loader } from "lucide-react";
import { addSocialChannels } from "@/db/socials";
import { Response } from "@/lib/modals";
import { toast } from "sonner";

const socials = ["youtube", "facebook", "instagram", "snapchat"]

export function Fab() {

    const [social, setSocial] = React.useState(socials[0])
    const [socialName, setSocialName] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const click = async () => {
        setLoading(true)

       const res = await addSocialChannels({ 
        name: socialName, 
        platform: social,
       })

       if(res == Response.SUCCESS) {
        toast(`Created ${socialName}`, {
            description: `Platform ${social}`
        })
       } else {
        toast(`Failed to create account`)
    }

        setLoading(false)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="absolute right-4 top-4" size="lg">
                    Create
                </Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col min-w-full min-h-screen md:min-w-[90%]">
                <DialogTitle className="text-xl">
                    Create
                </DialogTitle>
                <Tabs defaultValue="socials" className="min-w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="socials">Socials</TabsTrigger>
                        <TabsTrigger value="todos">Todos</TabsTrigger>
                    </TabsList>
                    <TabsContent value="socials" className="flex flex-1 flex-col p-4 gap-y-8">
                        <div className="flex flex-col gap-y-4">    
                            <h1 className="text-lg font-extrabold">New Social Media</h1>
                            <Input className="w-full p-4" placeholder="Enter a account name" value={socialName} onChange={(e) => setSocialName(e.target.value)}/>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="border p-4">

                                    {social}
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    { socials.map((item, key) => {
                                        return(
                                            <DropdownMenuItem key={key} onClick={() => setSocial(item)}>
                                                { item }
                                            </DropdownMenuItem>
                                        )
                                    })}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <Button onClick={click} disabled={loading}>
                            { loading ? <Loader className="animate-spin"/> : <p>Save</p>}
                        </Button>
                    </TabsContent>
                    <TabsContent value="todos" className="flex flex-1">

                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    )
}