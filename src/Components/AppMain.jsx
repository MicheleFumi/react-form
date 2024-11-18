import titles from '../Data/db.jsx'

export default function AppMain() {

    return (
        <main>
            <div className="container">

                <div className="container">
                    <form >
                        <div className="input-group my-5">
                            <input type="text" className="form-control" placeholder="Inserisci un titolo" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
                        </div>
                        <h2 >Titoli Di Oggi</h2>
                        <ul className="list-group mt-4">
                            {titles.map((title, index) => <li className="list-group-item" key={index}>{title}</li>)}

                        </ul>


                    </form>
                </div>
            </div>
        </main>
    )
}