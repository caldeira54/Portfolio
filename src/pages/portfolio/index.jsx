import React, { useEffect, useState } from 'react'

import Header from '../../components/header';
import './portfolio.css';

function Principal() {
    const [itemsApi, setItemsApi] = useState([])

    useEffect(() => {
        let abortController = new AbortController();

        function getGitHubAPI() {
            fetch('https://api.github.com/users/caldeira54/repos')
                .then(async res => {
                    if (!res.ok) {
                        throw new Error(res.status)
                    }
                    var data = await res.json()
                    setItemsApi(data)
                })
                .catch(e => console.log(e))
        }

        getGitHubAPI()

        return () => abortController.abort();
    }, []);


    return (
        <>
            <Header />

            <div className='container-portfolio'>
                <h1 className='title'>PROJETOS</h1>

                {itemsApi.map(item => (
                    <div className="projects" key={item.id}>
                        <span className="full-name">{item.full_name}</span>

                        <h2 className="title-project">{item.name.toUpperCase()}</h2>

                        <div className="description-project">
                            <div className="url">
                                <span className="language">{item.language}</span>
                            </div>

                            <div className="link">
                                <a href={item.html_url}>
                                    {/* <img src={iconGh} width="20" />Acessar repositório */}
                                </a>
                            </div>
                        </div>

                        <span className="date"> Data da criação: {Intl.DateTimeFormat('pt-BR')
                            .format(new Date(item.created_at))}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Principal;