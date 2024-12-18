import { useState, useEffect } from 'react'
import titleArray from '../Data/db.jsx'

export default function AppMain() {

    const [titles, setTitles] = useState(titleArray)
    const [newTitles, setNewTitles] = useState('')


    function addTitle(e) {
        e.preventDefault()

        setTitles([
            ...titleArray,
            newTitles

        ])
        setNewTitles('')
    }

    function handleRemoveTitle(e) {
        const titleToRemove = Number(e.target.getAttribute('data-index'))
        const newTitles = titles.filter((title, index) => titleToRemove != index)

        setTitles(newTitles)
    }

    function handleChangeTitle(e) {
        const titleToChange = Number(e.target.getAttribute('data-index'));
        const newModifiedTitle = prompt("Modifica il titolo", titles[titleToChange])
        const updatedTitles = titles.map((title, index) => {
            if (index === titleToChange) {

                return newModifiedTitle
            }
            return title
        });
        setTitles(updatedTitles)
    }









    return (
        <main>


            <div className="container">
                <form onSubmit={addTitle}>
                    <div className="input-group my-5">
                        <input type="text" className="form-control" placeholder="Inserisci un titolo" aria-label="Inserisci un titolo " aria-describedby="button-addon2" value={newTitles} onChange={e => setNewTitles(e.target.value)} />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
                    </div>
                </form>
                <h2 >Titoli Di Oggi</h2>
                <ul className="list-group mt-4  ">
                    {titles.map((title, index) => <li className="list-group-item d-flex justify-content-between mx-4" key={index}>{title}
                        <div>
                            <button className='btn btn-warning me-2' onClick={handleChangeTitle} data-index={index}>Cambia</button>
                            <button className='btn btn-danger' onClick={handleRemoveTitle} data-index={index}>Rimuovi</button>
                        </div>


                    </li>)}

                </ul>
            </div>

        </main>
    )
}