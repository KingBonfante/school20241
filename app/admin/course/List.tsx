import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { revalidatePath } from "next/cache"

  interface ICourse{
    id:number,
    name:string,
  }
  
  export default async function ListCourse() {
    const courses = await list()
    async function list(){
      revalidatePath("/admin/course")
      const response = await fetch("https://server20241-six.vercel.app/courses")
        return response.json();
    }

    async function deleteCourse(formData: FormData) {
      "use server"
      const id = formData.get("id") as string;
      const response = await fetch("https://server20241-six.vercel.app/courses/"+id, {method: "DELETE"});
      revalidatePath("/admin/course")
  
    }

    return (
      <Table>
        <TableCaption>Lista de Cursos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Ação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((item:ICourse) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
              <form>
                <input type="text" hidden name="id" value={item.id} />
                <Button variant="destructive" formAction={deleteCourse}>EXCLUIR</Button>
              </form>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  