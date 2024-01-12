import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MainContainer, SearchInput, UserCard } from '../../Components'
import sqlScripts from '../../Data/sql'
import './Home.scss'

const Home = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    const { id } = useParams()

    const filteredUsers = useMemo(() => {
        if (!query) return sqlScripts; // If no query, don't search, return `sqlScripts` instead
      
        const queryWords = query.toLowerCase().split(' ');
      
        return sqlScripts.filter(item => {
          // Check if any query word is present in the name
          return queryWords.every(word => item.name.toLowerCase().includes(word));
        });
      }, [sqlScripts, query]);

    return (
        <>
            <MainContainer logout={true}>
                <div className='fl w-100 h-100 breakpoint'>
                    <div className={`p-rel fl w-100 h-100 child ${id ? 'active' : ''}`} >
                        {/* users list */}
                        <div id='home' className='UserContainer p-rel fl fl-c w-100 h-100'>
                            <div className=' p-rel fl fl-d-col w-100 h-100 m-0 fl-j-sb' style={{ overflowY: 'scroll', background: '#fff', paddingRight: '6px' }}>
                                <div className='h-100 w-100'>

                                    {/* search box for filtering users */}
                                    <SearchInput value={query} onChange={e => setQuery(e.target.value)} />

                                    {
                                        filteredUsers.map((script) =>
                                        (
                                            <UserCard user={script} />
                                          
                                        ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainContainer>
        </>
    )
}

export default Home