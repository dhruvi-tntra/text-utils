import React, {useState} from 'react'


export default function TextForm(props) {
	const [text, setText] = useState('');
	const handleUpClick = () => {
		// console.log('you have clicked the button' + text);
		let newText = text.toUpperCase();
		setText(newText);
    document.title = 'test'
    // props.showAlert("converted to Uppercase", "danger")
	}

  const handleLowClick = () => {
		// console.log('you have clicked the button' + text);
		let newText = text.toLowerCase();
		setText(newText);
	}

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

	const handleOnChange = (event) => {
		// console.log(event.target)
		setText(event.target.value)
	}

  const handleCopy = () => {
		// console.log("I am copy")
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
	}

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor: props.mode==='light'? 'white' : 'grey', color: props.mode==='light'? 'black' : 'white'}} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="3" value={text} ></textarea>
        </div>
        
        <br/>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-3' onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={handleCopy}>CopyText</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      </div>

      <div className="container" style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words AND {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>  
    </>
  )
}
