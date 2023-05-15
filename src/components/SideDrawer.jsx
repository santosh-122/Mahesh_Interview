import React, { useEffect, useState } from 'react'
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";
const SideDrawer = ({ show, setShow, setdata, data,santhu,setflexy }) => {
    console.log("show", show);
    
    const handleClose = () => {
        setShow(false);
        setflexy(false);
    };
    const [disab,setdisab] = useState(true)
    const [text, settext] = useState({ title: '', subtitle: '',tcolor:'' })
    console.log("text", text);
    const { title, subtitle,tcolor } = text
    console.log("santhu", santhu);
    const collect = (e) => {
        console.log("texteditor",text.title.length)
        settext({ ...text, [e.target.name]: e.target.value });
        if(text.title.length > 1 && text.subtitle.length > 1 && text.tcolor.length > 1){
            setdisab(false)
         }
         else{
            setdisab(true)
         }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setdata([...data, { text }]);
        setShow(false);
        setflexy(false);
    }
    function color(san){
        console.log("bomb");
        settext({ ...text,tcolor:san});
        console.log("serving",text);
        if(text.title.length >1 && text.subtitle.length > 1 && text.subtitle.length>1){
            console.log("foooooood")
            setdisab(false)
         }
         else{
            console.log("drgehdfjghd")
            setdisab(true)
         }
    }
    return (
        <div>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                portal={false}
                visible={true}
                className="filterslide"
            >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <h3 style={{ textAlign: "center" }}>Creative Creation</h3>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label>title</label><br></br>
                            <input type="text" name="title" value={title} onChange={(e) => { collect(e) }} /> <br></br>
                            <label>subtitle</label><br></br>
                            <input type="text" name="subtitle" value={subtitle} onChange={(e) => { collect(e) }} /><br></br>
                            <label>background Color</label><br></br>
                            {/* {colors.map((color) => <div>{color}</div>)} */}
                            {santhu?.map((san) => {
                                return <svg height="100" width="100">
                                    <circle onClick={()=>{color(san)}} cx="50" cy="50" r="10" stroke="black" strokeWidth="3" fill={san} />
                                </svg>
                            })} <br></br>
                            <button type="submit" onClick={handleSubmit} disabled={disab}>Done</button>
                        </form>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default SideDrawer