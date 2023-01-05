import { useNavigate } from 'react-router-dom'
import ProjectsForm from '../project/ProjectsForm'
import styles from './NewProjects.module.css'

function NewProjects() {

    const history = useNavigate()
function createPost(project){
    //inicializando
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(project),
    })
    .then((resp)=> resp.json())
    .then((data)=> {
        console.log(data)
        //redirect
    })
    .catch((err) => console.log(err))
}

    return (
        <div className={styles.newprojects_container}>
            <h1>Criar Projetos</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectsForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>

    )

}

export default NewProjects