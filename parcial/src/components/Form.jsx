import { useState } from "react";
import Card from "./Card";

function Form() {

    const [inputValue1, setInputValue1] = useState("")
    const [inputValue2, setInputValue2] = useState("")

    const [errorInput, setErrorInput] = useState("");

    const errorMessage = "Por favor chequea que la información sea correcta"

    const [showCard, setShowCard] = useState(false)


    function handleSubmint(e) {
        e.preventDefault();
        console.log(e)
        console.log(inputValue1, inputValue2);
        isInvalid(inputValue1, inputValue2)
       

    }
    const onChangeInput1 = (e) => {
        e.preventDefault
        setInputValue1(e.target.value)
    }

    const onChangeInput2 = (e) => {
        e.preventDefault
        setInputValue2(e.target.value)
    }
    function isInvalid(firstInput, secondInput) {
        if ((firstInput.length <= 2 && firstInput.substring(0, 1) === " ") || (secondInput.length <= 5)) {
            setErrorInput(errorMessage);
        }else{
            setShowCard(true)
        }
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmint}>
                    <input type="text" placeholder= "Serie favorita" value={inputValue1} onChange={onChangeInput1}/>
                    <input type="text" placeholder= "Banda favorita" value={inputValue2} onChange={onChangeInput2}/>
                    <input type="submit"/>
                    {errorInput ? <div>{errorInput}</div> : null} 
                </form>
                {
                    showCard &&(
                        <Card inputValue1={inputValue1} inputValue2={inputValue2}/>
                    )
                    
                }
            </div>
        </>
    )

}

export default Form;