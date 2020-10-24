import React from "react";

export default function Form() {
    return (
        <form style={{display:'flex', flexDirection:'row', padding:'2rem', backgroundColor:'white', borderRadius:'1rem'}}>
            <input style={{width:'100%', marginInlineEnd:'1rem', backgroundColor:'#F2F7F5', borderRadius:'5px', border:'none', padding:'1rem'}} type="text" placeholder="ADD NEW TOPIC" />
            <button type="submit">Submit</button>
        </form>
    )
}