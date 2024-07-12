import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function Contacts() {
    return (
        <section id="contacts" className="py-12 md:py-20 bg-slate-100 dark:bg-slate-800">
            <div className="container px-4 md:px-6">
                <div className="space-y-6 md:space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                        <p className="text-muted-foreground max-w-[600px] mx-auto">
                            Have a project in mind or just want to say hello? Fill out the form below and I&apos;ll get back to you as
                            soon as possible.
                        </p>
                    </div>
                    <form className="mx-auto max-w-md space-y-4">
                        <Input type="text" placeholder="Name" className="w-full" />
                        <Input type="email" placeholder="Email" className="w-full" />
                        <Textarea placeholder="Message" className="w-full" rows={5} />
                        <Button type="submit" className="w-full bg-black text-white">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacts