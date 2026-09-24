import "./styles.css";
import {useState} from 'react'
import Profile from "./Components/Profile"
import Settings from "./Components/Settings"
import Interest from "./Components/Interest"

export default function App() {
  const [cache , setCache]=useState({})
  console.log(cache)
  const [preference , setPreference]=useState("profile")
  const [profileData, setProfileData]=useState({
    name:"",
    email:"",
    age:0
  })
  const [interest,setInterest]=useState([])
  const [theme,setTheme]=useState("Dark")
  return (
    <div className="App" style={{ backgroundColor: theme === "Dark" ? "blue" : "white", margin:15 ,padding:15}}>
      <h1>TabForm</h1>
      <button onClick={()=>setPreference("profile")}>Profile</button>
      <button onClick={()=>setPreference("interest")}>Interest</button>
      <button onClick={()=>setPreference("settings")}>Settings</button>

      {preference ==="profile" && <Profile profileData={profileData} setProfileData={setProfileData}/>}
      {preference ==="interest" &&  
      <Interest interest={interest} setInterest={setInterest}/>} 
        { preference ==="settings" &&
       <>
        <Settings theme={theme} setTheme={setTheme}/>
       <button
       type="submit"
       onClick={
        ()=> setCache({
          profileData:{profileData},
          interest:{interest},
          theme:{theme}
        })
       }
       >Submit Data</button>
       </>}
    </div>
  );
}
