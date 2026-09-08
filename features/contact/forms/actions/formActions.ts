"use server"
import { connectDB } from "@/features/db"
import { Form } from "../models/formModel"
import { TForm } from "../types/form"

const submitForm = async (form: TForm) => {
    if (!form.desc || !form.email || !form.subject) {
        return {
            success: false,
            message: 'All fields required !'
        }
    }
    try {
        await connectDB()
        await Form.create(form)
        return {
            success: true,
            message: "Form Submitted !"
        }
    } catch (error) {
        return {
            success: false,
            message: "Form Not Submitted !"
        }
    }
}

const getForms = async () => {
    try {
        await connectDB()
        const forms = await Form.find().lean()
        return JSON.parse(JSON.stringify(forms))
    } catch (error) {
        return {
            success: false,
            message: JSON.stringify(error)
        }
    }

}

const deleteForm = async (id: string) => {
    if (!id) return{
        success: false,
        message: 'Id required'
    }
    try {
        await connectDB()
        const exists = await Form.findById(id)
        if(!exists) return {
            success: false,
            message: 'Form doesnot exists'
        }
        await Form.findByIdAndDelete(id)
        return {
            success: true,
            message: 'Form Deleted !'
        }
    } catch (error) {
        return {
            success: false,
            message: JSON.stringify(error)
        }
    }
}

const updateForm = async ({id, form}:{id: string, form: Partial<TForm>}) => {
    if (!id || !form) return {
        success: false,
        message: 'field not specified'
    }
    try {
        await connectDB()
        await Form.findByIdAndUpdate(id, form)
        return {
            success: true,
            message: 'Form Updated'
        }
    } catch (error) {
        return {
            success: false,
            message: 'Error occured'
        }
    }

}

export {
    submitForm,
    getForms,
    deleteForm,
    updateForm
}
