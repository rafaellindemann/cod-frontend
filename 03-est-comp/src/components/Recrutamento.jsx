
function Recrutamento() {
    function recrutar(){
        let sabeNadar = confirm("Sabe nadar?")
        console.log(sabeNadar);
        
    }
  return (
    <div className="recrutamento">
        <button onClick={recrutar}>Recrutar</button>
    </div>
  )
}

export default Recrutamento