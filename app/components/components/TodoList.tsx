    "use client"
    import {useState, useEffect} from "react";
    import styles from "/TodoList.module.css";
    import clsx from "clsx";
    export default function ToDoList(){
        // especifiquem el tipus d'array
        const [tasks, setTasks] = useState<string[]>([])
        const [taskText, setTaskText] = useState("")
        const [isHovered, setIsHovered] = useState<number | null>(null)
        // Guardar les tasques en localStorage
        useEffect(() => {
            const savedTasks = localStorage.getItem("tasks"); 
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks)); // Convert from string to array
            }
        }, []);

        useEffect(() => {
            localStorage.setItem("tasks", JSON.stringify(tasks)); // Convert array to string
        }, [tasks]);

        function addTask(){ 
            if (taskText.trim() === "") return;
            setTasks([...tasks, taskText]);
            setTaskText("")
         
        }
        function deleteTask(index: number){
            // lambda per filtrar les tasques que NO son les que volem esborrar
            setTasks(tasks.filter((_, i) => i !== index));
            
        }
        

        return(
            <div className="flex flex-col justify-center items-center ">
                <div className="flex">
                <input type="text"
                    value= {taskText}
                    onChange={(e) => setTaskText(e.target.value)}/>
                <button onClick={addTask}>Add task</button>
                </div>
                <ul className="flex flex-col">

                {tasks.map((task, index) => (
                    <li key={index} className="flex justify-between items-center gap-3 m-1 bg-gray-50 rounded-xl drop-shadow-sm p-1">
                         <button 
                         onClick={() => deleteTask(index)} 
                         onMouseEnter={() => setIsHovered(index)}
                         onMouseLeave={() => setIsHovered(null)}
                         className={clsx("rounded-lg p-2 hover:ease duration-100", isHovered == index ? "bg-red-300" : "bg-neutral-200")}>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx("size-6", isHovered == index ? "text-red-400 animate-spin " :"text-neutral-400")}>
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="w-[400px] px-2">{task}</div>
                       
                       
                    </li>

                ))
                }

                </ul>
            </div>
        )
    }