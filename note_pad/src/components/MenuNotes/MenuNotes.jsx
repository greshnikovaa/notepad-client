import React, {useState, useMemo} from 'react'
import styles from './MenuNotes.module.css'

const MenuNotes = ({notes, setNotes, setIdActive, idActive, search}) => {

    const sortedNotes = useMemo(() =>{
        return notes.filter((note)=>{
            return note.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        })
    }, [search])

    return (    
        <div  className={styles.carts}>
            {sortedNotes.map((note)=>
                <div onClick={()=>setIdActive(note.id)} 
                    key={note.id} 
                    className={`${styles.cart} ${note.id === idActive?styles.active:''}`}

                >
                    <h3 className={styles.title}>{note.title}</h3>
                    <p className={styles.text}>{note.text}</p>
                </div> 
            )}  
        </div>
    );
};
export default MenuNotes