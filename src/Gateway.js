import React ,{useState} from 'react'
import './Gateway.css'
export default function Gateway() {
	const [credit, setCredit] = useState('');
	const [exp, setExp] = useState('');
	const [cvv, setCvv] = useState('');
    
  function SubmitButton2(){
    if (credit && exp && cvv){
      return (<button onClick={() => alert("Payment Done Successfully")} className="input2" name="" value="Proceed to Pay" >Proceed to Pay</button>)
    } else {
      return (<button onClick={() => alert("Please Enter Details")} className="input2">Proceed to Pay </button>)
    };
  };
  return (
    <>
      <header>
	<div class="container5">
		<div class="right">
			<h3>PAYMENT</h3>
			<div>
				Accepted Card <br/>
                <img className='card1' src={require ('./Images/card1.png')} alt=""/>
                <img  className='card2'src={require ('./Images/card2.png')} alt=""/>
				<br/><br/>

				Credit card number
			<input className="input3" type="number" placeholder="Enter card number" name="Credit" value={credit} onChange={ e => setCredit(e.target.value)} required/>
				
				Exp month
				<input className="input3" type="number" placeholder="Enter Month" name="Exp" value={exp} onChange={ e => setExp(e.target.value)} required/>
				<div id="zip">
					<label>
						Exp year
						<select name="Exp" value={exp} onChange={ e => setExp(e.target.value)} required>
							<option>2022</option>
							<option>2023</option>
							<option>2024</option>
							<option>2025</option>
						</select>
					</label>
						<label>
						CVV
						<input className="input3" type="number" placeholder="CVV" name="Exp" value={cvv} onChange={ e => setCvv(e.target.value)} required/>
					</label>
					<br></br>
					
				</div>
				<SubmitButton2/>
			</div>
			            
		</div>
	    </div>
        </header>
        </>
  )
}
