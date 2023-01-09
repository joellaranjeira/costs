import styles from './Project.module.css'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectsForm from '../project/ProjectsForm'
import Message from '../layout/Message'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Project() {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                Headers: {
                    'content-Type': 'application/jon',
                },
            }).then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch((err) => console.log(err))
        }, 300)
    }, [id])

    function editPost(project) {

        if (project.budget < project.cost) {
            //mensagem
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return (false) //sair deste bloco
        }
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                //mensagem
                setMessage('Projeto alterado com sucesso!')
                setType('success')
            })
            .catch((err) => console.log(err))
    }
    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return (
        <>{project.name ? (
            <div className={styles.project_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message}/>}
                    <div className={styles.details_container}>
                        <h1>Projeto: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar' : 'Fechar'}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria:</span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total do Orçamento:</span> R${project.budget}
                                </p>
                                <p>
                                    <span>Total utilizado:</span> R${project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <ProjectsForm
                                    handleSubmit={editPost}
                                    btnText="Gravar"
                                    projectData={project}
                                />
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        ) : (
            <Loading />
        )
        }
        </>
    )
}

export default Project