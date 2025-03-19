import ToDoList from "@/app/components/components/TodoList";
// import Button from "./button";
export default function Page(){
    return  (
        <div className="flex flex-col items-center  justify-center">
            <h1 className="">To do list</h1>
            <div className="bg-neutral-200 p-5 rounded-xl w-[900px]">
            <ToDoList/>
            </div>
   
        </div>
        );      
}


