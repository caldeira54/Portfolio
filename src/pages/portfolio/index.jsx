import React, { useEffect, useState } from 'react'

import Header from '../../components/header';
import GitHub from '../../assets/img/github.png';
import './portfolio.css';

function Portfolio() {
    const [itemsApi, setItemsApi] = useState([]);

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
                <div className='title'>
                    <h1> PROJETOS </h1>
                </div>

                <div className='body'>
                    {itemsApi.map(item => (
                        <div className="projects" key={item.id}>
                            <span className="full-name"> {item.full_name} </span>

                            <h2 className="title-project"> {item.name.toUpperCase()} </h2>

                            <div className="data">
                                <span> {item.language} </span>

                                <a href={item.html_url} target='blank'><img src={GitHub} width="18" /> Acessar repositório </a>
                            </div>

                            <span className="date"> Data da criação: {Intl.DateTimeFormat('pt-BR')
                                .format(new Date(item.created_at))}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Portfolio;