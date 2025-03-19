## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


# apunts 
template string converter : variables automatiques
fer perfils

<code>
// funcio on nomes s'executa al ser clicat el botó
<button onClick={deleteTask}>Delete</button>

// funcio on li passem la "id" del objecte
<button onClick={() => deleteTask(index)}>Delete</button>

"use client" // per utilitzar el navegador del client

useEffect(() => {}, []) // acciones despres de que el component es renderitza 
ex. executa quan canvia una variable
const [count, setCount] = useState(0);
useEffect(() => {
    console.log(`Count changed to: ${count}`);
}, [count]);

ex3. guardar a localStorage quan una variable canvia:
useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
}, [count])
ex2. agafar el valor guardat a localstorage
useEffect(() => {
      const savedCount = localStorage.getItem("count");
      if(savedCount) {
        setCount(JSON.parse(savedCount))
      }
}, [])






<code>