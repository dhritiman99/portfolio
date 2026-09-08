import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteForm, getForms, submitForm, updateForm } from "../actions/formActions";


export const useSubmitForm = () => useMutation({
    mutationKey: ['submitForm'],
    mutationFn: submitForm
})

export const useDeleteForm = () => useMutation({
    mutationKey: ['deleteForm'],
    mutationFn: deleteForm
})

export const useUpdateForm = () => useMutation({
    mutationKey: ['updateForm'],
    mutationFn: updateForm
})

export const useGetForm = () => useQuery({
    queryKey: ['getForm'],
    queryFn: getForms
})