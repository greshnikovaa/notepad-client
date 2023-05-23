import React, {useState} from 'react'
import styles from './Filter.module.css'
import {FunnelFill} from 'react-bootstrap-icons'
import tegsData from '../../data/tegs.data'


const Filter = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [tegs, setTegs] = useState(tegsData)
    const toggleTeg=(id)=>{
        const newTegs=tegs.map((teg)=>{
            if(id === teg.id){
                return {...teg, active: !teg.active}
            }
            return teg
        })
        setTegs(newTegs)
    }
    return (
        <div>
            <div onClick={()=>setToggleMenu(!toggleMenu)} className={styles.filter}>
                <FunnelFill/>
                <p>Filtro</p>
                <span className={styles.line}></span>
            </div>
            <ul className={`${styles.tegs} ${toggleMenu?styles.active:''}`}>
                {tegs.map((teg)=>
                    <li 
                        onClick={()=>toggleTeg(teg.id)}
                        key={teg.id} 
                        className={`${styles.teg} ${teg.active?styles.active:''}`}
                    >{teg.teg}</li>
                )}
            </ul>
        </div>
    );
};
export default Filter