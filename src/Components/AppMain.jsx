import { useState } from 'react'
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

    function HandleRemoveTitle(e) {
        const titleToRemove = Number(e.target.getAttribute('data-index'))
        const newTitles = titles.filter((title, index) => titleToRemove != index)

        setTitles(newTitles)
    }



    return (
        <main>
            <div className="container">

                <div className="container">
                    <form onSubmit={addTitle}>
                        <div className="input-group my-5">
                            <input type="text" className="form-control" placeholder="Inserisci un titolo" aria-label="Inserisci un titolo " aria-describedby="button-addon2" value={newTitles} onChange={e => setNewTitle(e.target.value)} />
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
                        </div>
                        <h2 >Titoli Di Oggi</h2>
                        <ul className="list-group mt-4">
                            {titles.map((title, index) => <li className="list-group-item d-flex justify-content-between" key={index}>{title}
                                <button className='btn btn-danger' onClick={HandleRemoveTitle} data-index={index}>Rimuovi Titolo</button>
                            </li>)}

                        </ul>


                    </form>
                </div>
            </div>
        </main>
    )
}