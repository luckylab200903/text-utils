import React, { useState } from 'react';

const Text = (props) => {
  const [Text, setText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  }

  const handleUPClick = () => {
    console.log("uppercase button clicked" + Text);
    let showText = Text.toUpperCase();
    setText(showText);
  }

  const handleLOWClick = () => {
    console.log("lowercase button clicked" + Text);
    let showText = Text.toLowerCase();
    setText(showText);
  }

  const handleClear = () => {
    let showText = '';
    setText(showText);
  }

  const handleCopy = () => {
    const text = document.getElementById('large-input');
    text.select();
    document.execCommand("copy");
    alert("Text copied to clipboard");
    console.log(text.value);
  }

  const removeExtra = () => {
    let new_text = Text.replace(/\s+/g, ' ').trim();
    setText(new_text);
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`m-6 ${isDarkMode ? 'dark' : ''}`}>
      <label htmlFor="large-input" className="flex justify-center font-bold text-3xl p-4 m-auto block mb-2 text-sm font-medium text-gray-900">
        TEXT
      </label>
      <textarea
        placeholder={props.text}
        id="large-input"
        value={Text}
        onChange={handleChange}
        className="h-36 block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
      />
      <div className='p-4 gap-4 flex flex-row'>
        <button onClick={handleUPClick} className='bg-green-800 h-16 hover:bg-green-500 flex items-center justify-start rounded-lg p-8 mt-0'>
          Convert to uppercase
        </button>
        <button onClick={handleLOWClick} className='bg-green-800 h-16 hover:bg-green-500 flex items-center justify-start rounded-lg p-8 mt-0'>
          Convert to lowercase
        </button>
        <button onClick={handleClear} className='bg-green-800 h-16 hover:bg-green-500 flex items-center justify-start rounded-lg p-8 mt-0'>
          Clear Text
        </button>
        <button onClick={handleCopy} className='bg-green-800 h-16 hover:bg-green-500 flex items-center justify-start rounded-lg p-8 mt-0'>
          Copy Text
        </button>
        <button onClick={removeExtra} className='bg-green-800 h-16 hover:bg-green-500 flex items-center justify-start rounded-lg p-8 mt-0'>
          Remove Extra
        </button>
        <button onClick={toggleDarkMode} className='bg-green-800 h-16 hover:bg-green-500 flex items-center justify-start rounded-lg p-8 mt-0'>
          Toggle Dark Mode
        </button>
      </div>
      <p>Your text summary</p>
      <p>{Text.length} characters</p>
      <p>{Text.split(" ").length} words</p>
      <p>{Text.length * 0.008} minutes read</p>
      <h3>Preview</h3>
      <p>{Text}</p>
    </div>
  );
}

export default Text;
