import React, {useState} from 'react'
import styles from './Notes.module.css'
import {Clock} from 'react-bootstrap-icons'
import notepad from '../../data/note.pad';

const Notes = ({notes, setNotes, idActive}) => {
    const getNotes = () =>{
        let note = {}
        for(let item of notes){
            if(item.id === idActive){
                note = item
            }
        }
        return note 
    }
    const setNoteTitle = (title) =>{
        setNotes(notes.map((note)=>{
           if(note.id === idActive){
            return {...note, title:title}
           }
           return note
        }))
    }
    const setNoteText = (text) =>{
        setNotes(notes.map((note)=>{
            if(note.id === idActive){
                return {...note, text:text}
            }
            return note
        }))
    }
    return (
        <div className={styles.text_edit}>
            <input 
                placeholder='Напишите что-то веселое...'
                className={styles.title} 
                value={getNotes().title}
                onChange={(event)=>setNoteTitle(event.target.value)}
            />
            <span className={styles.edit_time}>
                <Clock/>
                <p>Editado a 21min</p>
            </span>
            <div className={styles.heshtegs}>#Laravel</div>
            <textarea
                placeholder='Мало веселого, пишите еще...'
                className={styles.text} 
                value={getNotes().text}
                onChange={(event)=>setNoteText(event.target.value)}
            />
        </div>
    );
};
export default Notes

