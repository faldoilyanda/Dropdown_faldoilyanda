import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    awal:'',
    poin:'',
    poin2:'',
    poin3:'',
    poin4:'',
    terpilihtingkat:'Pilih tingkat',
    terpilihjenjang:'Pilih jenjang'
    };
  
  pertama =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Pra Sekolah' ,
      awal:'Jenjang Pendidikan Pra Sekolah',
      poin:'PAUD (Pendidikan Anak Usia Dini)',
      poin2:'TK (Taman Kanak-kanak)',
      poin3:'RA (Raudhatul Athfal)',
    });   
  }

  kedua =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Dasar' ,
      awal:'Jenjang Pendidikan Dasar',
      poin:'SD (Sekolah Dasar )',
      poin2:'MI (Madrasah Ibtidaiyah)',
      poin3:'SMP (Sekolah Menegah Pertama)',
      poin4:'MTs (Madrasah Tsanawiyah)',
    });   
  }

  ketiga =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Menengah' ,
      awal:'Jenjang Pendidikan Menengah',
      poin:'SMA (Sekolah Menegah Atas)',
      poin2:'MA (Madrasah Aliyah)',
      poin3:'SMK (Sekolah Menengah Kejuruan)',
    });   
  }

  keempat =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Tinggi' ,
      awal:'Jenjang Pendidikan Tinggi',
      poin:'D3 Diploma',
      poin2:'S1/D4 Sarjana',
      poin3:'S3 Doktoral',
    });   
  }

  render() {

    return (
      <div>
<center>
  <h1 style={{fontSize:"30px",fontWeight:"bold",marginTop:"20px"}}>JENJANG PENDIDIKAN</h1>
 <div className="container" style={{marginTop:"20px"}}>
  <div class="btn-group">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
     style={{width: "300px"}}>
     
     <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span> {this.state.terpilihtingkat}
     
     </button>
    <div class="dropdown-menu">
        <a className="dropdown-item" onClick= {this.pertama}>Pendidikan Pra Sekolah</a>
        <br/>
        <a className="dropdown-item" onClick= {this.kedua} >Pendidikan Dasar</a>
        <br/>
        <a className="dropdown-item" onClick= {this.ketiga} >Pendidikan Menegah</a>
        <br/>
        <a className="dropdown-item" onClick= {this.keempat} >Pendidikan Tinggi</a>
    </div>
  </div>
  </div>
       
       <br/><br/><br/>
       { this.state.poin == '' ? 
         <h5>{this.state.awal}</h5> :
         <div>
            <u><h5>{this.state.awal}</h5></u>
            <p>{this.state.poin}</p>
            <p>{this.state.poin2}</p>
            <p>{this.state.poin3}</p>
            <p>{this.state.poin4}</p> 
          </div>
        }
    </center>
    </div>
    );
  }
}

export default App;
