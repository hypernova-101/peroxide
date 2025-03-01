import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { GlareCard } from "../ui/glare-card";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function Fab() {
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
                            <Input className="w-full" placeholder="Enter a account name"/>
                        </div>
                        <Button>
                            Save   
                        </Button>
                    </TabsContent>
                    <TabsContent value="todos" className="flex flex-1">

                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    )
}