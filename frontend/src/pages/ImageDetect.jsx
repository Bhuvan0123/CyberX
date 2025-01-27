import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {Doughnut} from "react-chartjs-2";
import 'chart.js/auto'
import '../styles/Imagestyle.css'
function ImageDetect() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [imageurl, setImageurl] = useState(null);
  const handleChange=(e)=>{
    setImage(e.target.files[0]);
    setImageurl( URL.createObjectURL(e.target.files[0]));
  }
  const data= result ?{
    labels: ['Fake','Real'],
    datasets:[
      {
        data:[result,100-result],
        backgroundColor:['#FF0000',"#36A2EB"],
        hoverBackgroundColor:['#FF6384','#36A2EB']
      }
    ]
  }: null;

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('uploadfile', image);
    try{
      const response=await axios.post("http://127.0.0.1:8000/api/image/",formData,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("response",response.data.ai_generated);
      setResult(Number(response.data.ai_generated)*100);  
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="image-detect-container">
      <h1>Image Detect</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="file" name="image" onChange={handleChange} />
        <button type="submit">Detect</button>
      </form>
      <div className="content-container">
        {result && (
          <div className="report-container">
            <div className="fakepercentage">
              <h5>Fake Percentage:</h5>
              <h3>{result}%</h3>
            </div>
            <div className='fake-image-report'>
                <img src={imageurl} alt="fake" className='image-fake' />
               <div className='doughnutimage'>
                 <Doughnut data={data} />
                </div>
            </div>
            <button className='generate-button' >Generate Report</button>
          </div>
        )}
      </div>
    </div>
  );

}

export default ImageDetect