import { useParams, useLocation } from "react-router-dom";
import data from "../data.json";

export default function Planet() {

  const { name } = useParams();
  console.log(name);

  console.log(data.find(element => element.name.toLowerCase() == name))

    return (
    <>
    
    </>
  )
}
