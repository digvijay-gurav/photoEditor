import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./photoEditor.css";

export default function PhotoEditor(props) {

    const [rotateState, changeRotateState] = useState(1);
    const [zoomIn, changeZoomIn] = useState(false);

    const rotateImage = function() {
        if(rotateState === 4) {
            changeRotateState(1)
        } else {
            changeRotateState(rotateState+1)
        }
    }
    const addText = function() {

        if(!document.getElementById('addInputText')) {
            const inputBox = `<input type="text" id="addInputText" placeholder="Enter text here" />`;
            document.getElementById('photoAddText').innerHTML += inputBox;
        }
    }
    return(
        <div className="main">
            <div className="imageWindowsWrapper">
                <div className={`photoEditorFrame rotateState${rotateState}`}>
                    <img src={props.src} className={`mainImageViewer ${zoomIn ? 'zoomIn' : 'zoomOut'}`} />
                    <div id="photoAddText" className="photoTextInputContainer"></div>
                </div>
                <div className="previewWindow">
                    <img src={props.src} className="previewImage"  />
                </div>
            </div>
            
            <div className="photoEditorFrames">
                <div className="editorButons editorAddTextButton">
                    <span onClick={addText}>New Text Block</span>
                </div>
                <div className="editorButons editorRotateButton">
                    <span onClick={()=>changeZoomIn(true)}>Zoom In</span>
                </div>
                <div className="editorButons editorRotateButton">
                    <span onClick={()=>changeZoomIn(false)}>Zoom Out</span>
                </div>
                <div className="editorButons editorRotateButton">
                    <span onClick={rotateImage}>Rotate</span>
                </div>
            </div>
        </div>
    );
    
}

