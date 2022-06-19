import { useEffect, useState } from "react"

const useProjectDetails = id => {
    const [project, setProject] = useState({})
    useEffect(() => {
        fetch(`https://intense-lowlands-01074.herokuapp.com/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])
    return [project, setProject]
}
export default useProjectDetails;