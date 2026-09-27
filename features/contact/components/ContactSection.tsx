"use client"

import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2Icon, CircleX } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import Heading from "@/components/Heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Field } from "@base-ui/react"
import { Input } from "@/components/ui/input"
import { useSubmitForm } from "../hooks/form"


export default function ContactSection() {
    const [status, setStatus] = useState({
        success: false,
        message: ''
    })
    const submitForm = useSubmitForm()
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTarget);
        const email = formdata.get("email")?.toString() ?? "";
        const subject = formdata.get("subject")?.toString() ?? "";
        const desc = formdata.get("desc")?.toString() ?? "";
        if (!email || !subject || !desc) {
            setStatus({ success: false, message: "One or More fields not specified !" });
            setTimeout(() => {
                setStatus({
                    success: false,
                    message: ""
                })

            }, 2000);
            return
        }
        submitForm.mutate({
            email,
            subject,
            desc,
        },
            {
                onSuccess: () => {
                    setStatus({
                        success: true,
                        message: "message sent successfully!"
                    })
                },
                onError: () => {
                    setStatus({
                        success: false,
                        message: "Error Occurred!"
                    })

                }
            }
        );
        setTimeout(() => {
            setStatus({
                success: false,
                message: ""
            })
        }, 2000);

    }

    return <section
        id="contact"
        className="px-10 pb-20 min-h-screen"
    >
        <AnimatePresence>
            {(status.message.trim().length > 0) && <StatusMessage status={status} />}
        </AnimatePresence>
        <Heading title="Contact" />
        <div className="p-6">
        </div>
        <ContactForm handleSubmit={handleSubmit} />
    </section>
}

function ContactForm({ handleSubmit }: { handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void }) {
    return <Card
        className="md:max-w-100 mx-auto max-w-80 border-t-2 border-primary"
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
                </Field.Root>
                <Field.Root className={`flex flex-col gap-1`}>
                    <Field.Label>Subject</Field.Label>
                    <Input name="subject" placeholder="Subject" type="text"></Input>
                </Field.Root>
                <Field.Root className={`flex flex-col gap-1`}>
                    <Field.Label>Description</Field.Label>
                    <Textarea name="desc" placeholder="Enter your message.." />
                </Field.Root>
                <div className="flex py-2">
                    <Button type="submit" className={`mx-auto px-10`}>Submit</Button>
                </div>
            </form>
        </CardContent>
    </Card>
}

function StatusMessage({ status }: { status: { success: boolean, message: string } }) {
    return <motion.div
        initial={{ translateX: "200px" }}
        animate={{ translateX: "0px" }}
        exit={{ translateX: "200px", opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-20 right-4"
    >
        <Alert>
            {status.success && <CheckCircle2Icon style={{
                color: 'green'
            }} />}
            {!status.success && <CircleX style={{
                color: 'red'
            }} />}
            <AlertTitle className="text-primary">{status.success ? `Success !` : `Failed !`}</AlertTitle>
            <AlertDescription>
                {status.message}
            </AlertDescription>
        </Alert>
    </motion.div>
}