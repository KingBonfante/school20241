import { Button } from "@/components/ui/button";
import ListStudent from "./List";

export default function Student() {
    return (
        <div className="w-full flex flex-col  mt-6">
            <div className="flex justify-center mb-6">
                <a href="/admin/student/new">
                    <Button>Cadastrar Estudante</Button>
                </a>
            </div>
            <ListStudent />
        </div>
    )
}