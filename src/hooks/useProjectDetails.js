import { useEffect, useState } from "react"

const useProjectDetails = id => {
    const [project, setProject] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])
    return [project, setProject]
}
export default useProjectDetails;