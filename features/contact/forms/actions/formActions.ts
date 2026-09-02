import { Form } from "../models/formModel"
import { TForm } from "../types/form"

const submitForm = async(form: TForm) => {
    try {
        await Form.create(form)
        return {
            success: true,
            message: "Form Submitted !"
        }
    } catch (error) {
        return{
            success: false,
            message: "Form Not Submitted !"
        }
    }   
}



