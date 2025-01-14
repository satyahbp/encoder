import React, {useState, useEffect} from 'react';
import PropTypes, { func } from 'prop-types';
import CryptoJS from 'crypto-js';

// custom imports
import { GENERATED_HASH_STYLE, MD5_BUTTON, SHA256_BUTTON } from '../Constants/Constants';

function Body({ hash_button, change_hash_button_state }) {

    const [plain_text, set_plain_text] = useState("");
    const [hashed_text, set_hashed_text] = useState("Your encoded text will appear here");

    function md5_click(){
        change_hash_button_state(MD5_BUTTON);
    }

    function sha256_click(){
        change_hash_button_state(SHA256_BUTTON);
    }

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

    return (
        <>
            <div className='m-5'>
                <button 
                    type="button" 
                    className={hash_button === MD5_BUTTON ? "btn btn-success me-1" : "btn btn-outline-success  me-1"} 
                    id='md5_button'
                    onClick={md5_click}>
                        MD5
                </button>
                <button 
                    type="button" 
                    className={hash_button === SHA256_BUTTON? "btn btn-success ms-2" : "btn btn-outline-success ms-2" }
                    id='sha256_button'
                    onClick={sha256_click}>
                        SHA256
                </button>


                <form className='mt-3' onSubmit={submit_hash} id='hashForm'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Text (Limit: 500)</label>
                        <textarea 
                            type="text" 
                            value={plain_text} 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            onChange={(e) => {set_plain_text(e.target.value)}}
                            onKeyDown={handle_enter_key}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Generate</button>

                    <div>

                    </div>
                </form>
                <div style={GENERATED_HASH_STYLE} className='my-5 p-2'>
                    {hashed_text}
                </div>
            </div>
            

        </>
    )
}

export default Body;