import { fabric } from 'fabric';
import React, { useEffect, useState, useRef } from 'react';
import BuildCard from '../components/buildCard';

function BuildPage(props) {
  let imgURL = "https://cdn.discordapp.com/attachments/1079877945713246349/1227368542941352017/Honeybee.png?ex=66282708&is=6615b208&hm=456027dd0fc1edd10faff174a3a96f0aec8ea10a4582cee7a35db90aed346270&;"
  const [canvas, setCanvas] = useState(null);
  const canvasRef = useRef(null);
  const [selectedObject, setSelectedObject] = useState(null);

  const addImageToCanvas = (canvas, imageUrl) => {
    let scale = 0.5;
    
    fabric.Image.fromURL(imageUrl, (img) => {
      // Set additional properties if needed
      img.set({
        left: 700,
        top: 50,
        angle: 0,
        scaleX: scale,
        scaleY: scale,
        cornersize: 10,
        hasControls: true
      });
      canvas.add(img); // Add the image to the canvas
      canvas.renderAll(); // Re-render the canvas to display the image
    });
  };

  function renderCards () {
    let cName = !props.isOpen ? "buildPage_sideMenu" : "buildPage_sideMenu closed";
    let cards = [];
    for (let index = 1; index < 136; index++) {
      cards.push(<BuildCard key={index} thumb={`https://ik.imagekit.io/lucascredie/ambient/thumbnails/${index}thumb.png`} full={`https://ik.imagekit.io/lucascredie/ambient/full/${index}full.png`} clickFunction={addImageToCanvas} canvas={canvas}/> ) 
    }
    return <div className={cName}>{cards} <p className="buildPage_text">build</p></div>;
    
  }


  // Initialize the Fabric.js canvas
  useEffect(() => {
    let fabricCanvas = new fabric.Canvas(canvasRef.current);
    fabricCanvas.uniformScaling = true;

    

    // Handle selection changes
    fabricCanvas.on('selection:created', (event) => { setSelectedObject(event.target); });
    fabricCanvas.on('selection:updated', (event) => { setSelectedObject(event.target); });
    fabricCanvas.on('selection:cleared', () => setSelectedObject(null));

    setCanvas(fabricCanvas);

    console.log("cool")

    //KEY DOWN
    const handleKeyDown = (event) => {
      if (event.key === 'Backspace') {
        console.log('delete key was pressed.');
        fabricCanvas.remove(fabricCanvas.getActiveObject());
      }
      if (event.key === 'f') {
        console.log('Bring to front!');
        console.log(fabricCanvas.getActiveObject())
        bringToFront(fabricCanvas.getActiveObject());
      }
      if (event.key === 'b') {
        console.log('Bring to back!');
        console.log(fabricCanvas.getActiveObject())
        sendToBack(fabricCanvas.getActiveObject());
      }
    };

    function sendToBack(object) {
      object.sendToBack();
      fabricCanvas.requestRenderAll(); // Redraw the canvas to reflect changes
    }
    

    function bringToFront(object) {
      object.bringToFront();
      fabricCanvas.requestRenderAll(); // Redraw the canvas to reflect changes
    }

    // Attach the event listener to the window object
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      fabricCanvas.off('selection:created');
      fabricCanvas.off('selection:updated');
      fabricCanvas.dispose();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='buildPage'>
     
      {renderCards()}
      
      <canvas ref={canvasRef} width={1400} height={600} ></canvas>
    </div>
  );
}

export default BuildPage;
