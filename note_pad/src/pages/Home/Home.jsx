import React, {useState, useEffect} from 'react'
import styles from './Home.module.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Filter from '../../components/Filter/Filter'
import {Search, Clock} from 'react-bootstrap-icons'
import Notes from '../../components/Notes/Notes'
import MenuNotes from '../../components/MenuNotes/MenuNotes'
import notepad from '../../data/note.pad'

const Home = () => {
    const [notes, setNotes] = useState(notepad)
    const [idActive, setIdActive] = useState(notepad[0].id)
    const [textSearch, setTextSearch] = useState('')



    useEffect(()=>{
        console.log(textSearch)
    }, [textSearch])


    const createNote = () =>{
        const note = {
            id: notes.length+1,
            title: '',
            tag: [],
            text: '',
            edited: new Date('2022-4-11T01:24:00')
        }
        setNotes([note, ...notes])
        setIdActive(notes.length+1)
    }
    
    return (
        <div className={styles.main}>
            <div className={styles.site_bar}>
                <div className={styles.main_search}>
                    <Input value={textSearch} 
                        placeholder="Search"
                        onChange={(event)=>setTextSearch(event.target.value)}
                        />
                    <Button className={styles.btn}><Search/></Button>
                </div>
                <Filter/>
                <MenuNotes search={textSearch} idActive={idActive} setIdActive={setIdActive} notes={notes} setNotes={setNotes} />
                <div className={styles.btns}>
                    <div onClick={createNote}>create</div>
                    <div>delete</div>
                </div>
            </div>
            <Notes idActive={idActive} notes={notes} setNotes={setNotes} />
        </div>
    );
};
export default Home