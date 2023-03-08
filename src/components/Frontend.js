import { React } from 'react';


const Frontend = ({ geslo, setGeslo }) => {

    return (
        <div>
            <form>
                <label>
                    <input type={'password'} name="password" placeholder="Vpišite geslo..." value={geslo} onChange={(event) => setGeslo(event.target.value)} />
                </label>
                <br></br><br></br>
                Vaše geslo vsebuje: <b>{geslo.length}</b> znakov!
            </form>
        </div>
    )
}
export default Frontend;