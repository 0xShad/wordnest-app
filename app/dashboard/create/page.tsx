import { createPost } from "@/actions";
import SubmitButton from "@/components/general/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


export default function CreateWord() {
  return (
    <Card className="max-w-2xl mx-auto mt-5">
      <CardHeader>
         <CardTitle className="text-lg">Create a new word post.</CardTitle>
         <CardDescription>Create a word post and share it with the world.</CardDescription>
         <CardContent>
          <form className="flex flex-col gap-2" action={createPost}>
            <Label >Title</Label>
            <Input type="text" name="title" required/>
            <Label >Content</Label>
            <Textarea name="content" required/>
            <Label >ImageUrl</Label>
            <Input type="text" name="imageUrl" required/>
            
            <SubmitButton />
          </form>
         </CardContent>
      </CardHeader>
    </Card>
  )
}