"use client"

import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"

export default function SubmitButton() {
    const { pending } = useFormStatus()

  return (
   <Button className="w-fit bg-purple-500 hover:bg-purple-700 cursor-pointer" disabled={pending}  type="submit">{pending ? 'Creating...' : 'Create post'}</Button>
  )
}