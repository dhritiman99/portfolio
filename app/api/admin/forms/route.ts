import { getForms } from "@/features/contact/actions/formActions";

export async function GET() {
    try {
        const forms = await getForms()
        return Response.json({
            data: forms
        })
    } catch (error) {
        return Response.json({
            error: error
        })
    }
}