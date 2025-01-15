import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import CryptoJS from 'crypto-js';
import {Link} from 'react-router-dom';

// custom imports
import { 
    GENERATED_HASH_STYLE, 

    MD5_BUTTON, 
    SHA256_BUTTON,
    BASE64_ENCODE_BUTTON,
    BASE64_DECODE_BUTTON,

    MD5_LINK,
    SHA256_LINK,
    BASE64_ENCODE_LINK,
    BASE64_DECODE_LINK
} from '../Constants/Constants';

function Body({ hash_button }) {

    const [plain_text, set_plain_text] = useState("");
    const [hashed_text, set_hashed_text] = useState("Your encoded text will appear here");
    const hashed_div = useRef(null);

    
    function submit_hash(e){
        e.preventDefault();
        let trimmed_text = plain_text.trim();

        if(trimmed_text){
            if (trimmed_text.length <= 500){
                let new_hashed = null;

                if (hash_button === MD5_BUTTON){
                    new_hashed = CryptoJS.MD5(trimmed_text)
                        .toString(CryptoJS.enc.Hex);
                }
                else if (hash_button === SHA256_BUTTON){
                    new_hashed = CryptoJS.SHA256(trimmed_text)
                        .toString(CryptoJS.enc.Hex);
                }
                else if (hash_button === BASE64_ENCODE_BUTTON){
                    new_hashed = btoa(trimmed_text);
                }
                else if (hash_button === BASE64_DECODE_BUTTON){
                    try{
                        new_hashed = atob(trimmed_text);
                    }
                    catch (err) {
                        alert("String is not in a proper Base64 format.");
                    }
                }

                set_hashed_text(new_hashed);
            }
            else{
                alert("The text size should be less than 500 characters.");
            }
        }
    }

    function handle_enter_key(e){
        if (e.key === "Enter"){
            submit_hash(e);
        }
    }

    function copy_hash(){
        let copy_text = hashed_div.current.textContent;
        navigator.clipboard.writeText(copy_text);
    }

    return (
        <>
            <div className='m-5'>
                <Link to={MD5_LINK}>
                    <button 
                        type="button" 
                        className={hash_button === MD5_BUTTON ? "btn btn-success my-1" : "btn btn-outline-success my-1"} 
                        id='md5_button'>
                            MD5
                    </button>
                </Link>
                
                <Link to={SHA256_LINK}>
                    <button 
                        type="button" 
                        className={hash_button === SHA256_BUTTON? "btn btn-success ms-2 my-1" : "btn btn-outline-success ms-2 my-1" }
                        id='sha256_button'>
                            SHA256
                    </button>
                </Link>
                
                <Link to={BASE64_ENCODE_LINK}>
                    <button 
                        type="button" 
                        className={hash_button === BASE64_ENCODE_BUTTON? "btn btn-success ms-2 my-1" : "btn btn-outline-success ms-2 my-1" }
                        id='base64_encode_button'>
                            Base64 - Encode
                    </button>
                </Link>
                
                <Link to={BASE64_DECODE_LINK}>
                    <button 
                        type="button" 
                        className={hash_button === BASE64_DECODE_BUTTON? "btn btn-success ms-2 my-1" : "btn btn-outline-success ms-2 my-1" }
                        id='base64_decode_button'>
                            Base64 - Decode
                    </button>
                </Link>

                <form className='mt-3' onSubmit={submit_hash} id='hashForm'>
                    <div className="mb-3">
                        <label className="form-label">Text (Limit: 500)</label>
                        <textarea 
                            type="text" 
                            value={plain_text} 
                            className="form-control" 
                            spellCheck="false"
                            onChange={(e) => {set_plain_text(e.target.value)}}
                            onKeyDown={handle_enter_key}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Generate</button>

                    <div>

                    </div>
                </form>

                <div className='my-4'>
                    <div className='text-end'>
                        <button 
                            type="button" 
                            className="btn btn-sm btn-secondary"
                            onClick={copy_hash}
                        >
                            Copy All
                        </button>
                    </div>
                    
                    <div 
                        style={GENERATED_HASH_STYLE} 
                        className='p-2 my-2' 
                        ref={hashed_div}
                    >
                        {hashed_text}
                    </div>
                </div>
                
            </div>
            

        </>
    )
}

Body.protoTypes = {
    hash_button: PropTypes.string.isRequired
}

export default Body;