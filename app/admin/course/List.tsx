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
      const response = await fetch("https://server20241.vercel.app/courses")
        return response.json();
    }

    return (
      <Table>
        <TableCaption>Lista de Cursos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((item:ICourse) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  