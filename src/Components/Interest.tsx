export default function Interest({interest,setInterest}){
    function handleInterest(TargetInterest){
        setInterest(prevData=> (
            
                interest.includes(TargetInterest) ? 
                interest.filter(prev=> prev!=TargetInterest)
                : [...prevData,TargetInterest]
            
        ))
    }
    return(
        <>
        <h1>Interest</h1>
        <li>
            <h2>
                <input 
                type="checkbox"
                checked={interest.includes("Batminton")}
                onChange={()=>handleInterest("Batminton")}
                />
                Batminton
            </h2>
            <h2>
                <input 
                type="checkbox"
                checked={interest.includes("Cooking")}
                onChange={()=>handleInterest("Cooking")}
                />
                Cooking
            </h2>
            <h2>
                <input 
                type="checkbox"
                checked={interest.includes("Dancing")}
                onChange={()=>handleInterest("Dancing")}
                />
                Dancing
            </h2>
        </li>
        </>
    )
}