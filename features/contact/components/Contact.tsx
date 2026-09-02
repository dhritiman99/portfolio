"use client"

import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2Icon } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import Heading from "@/components/Heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Field } from "@base-ui/react"
import { Input } from "@/components/ui/input"


export default function Contact() {
    const [message, setMessage] = useState('')
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        setMessage('Form Submitted !')
        setTimeout(() => {
            setMessage('')
        }, 2000);
    }

    return <section
        id="contact"
        className="px-10 pb-20"
    >
        <AnimatePresence>
            {(message.trim().length>0) && <StatusMessage />}
        </AnimatePresence>
        <Heading title="Contact" />
        <div className="p-6">
        </div>
        <Card
            className="md:max-w-100 mx-auto max-w-80"
        >
            <CardHeader>
                <CardTitle className="text-2xl mx-auto">
                    Contact Me
                </CardTitle>
            </CardHeader>

            <CardContent className="gap-5">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <Field.Root className={`flex flex-col gap-1`}>
                        <Field.Label>Email</Field.Label>
                        <Input name="email" placeholder="text@example.com" type="email"></Input>
                    </Field.Root >
                    <Field.Root className={`flex flex-col gap-1`}>
                        <Field.Label>Subject</Field.Label>
                        <Input name="subject" placeholder="Subject" type="text"></Input>
                    </Field.Root>
                    <Field.Root name="desc" className={`flex flex-col gap-1`}>
                        <Field.Label>Description</Field.Label>
                        <Textarea placeholder="Enter your message.." />
                    </Field.Root>
                    <div className="flex py-2">
                        <Button type="submit"  className={`mx-auto`}>Submit</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    </section>
}

function StatusMessage() {
    return <motion.div
        initial={{ translateX: "200px" }}
        animate={{ translateX: "0px" }}
        exit={{ translateX: "2000px" }}
        className="fixed top-15 right-4"
    >

        <Alert>
            <CheckCircle2Icon style={{
                color: 'green'
            }} />
            <AlertTitle className="text-primary">Success !</AlertTitle>
            <AlertDescription>
                Message Sent Successfully
            </AlertDescription>
        </Alert>
    </motion.div>
}