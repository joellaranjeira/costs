import ProjectsForm from '../project/ProjectsForm'
import styles from './NewProjects.module.css'

function NewProjects (){
    
    return(
        <div className={styles.newprojects_container}>
            <h1>Criar Projetos</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectsForm btnText="Criar Projeto"/>
        </div>

        )

}

export default NewProjects