import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    jenjang: '⇡',
    tingkatan: [],
    Pradasar :['PAUD (PENDIDIKAN ANAK USIA DINI)','TK (TAMAN KANAK-KANAK )','RA (RAUDATUL ATHFAL)'],
    Dasar : ['SD (SEKOALH DASAR)','MI (MADRASAH IBTIDAYAH)','SMP (SEKOLAH MENENGAH PERTAMA)','MTs'],
    Menengah : ['SMA (SEKOLAH MENENGAH ATAS)', 'MA ( MADRASAH ALIYAH)','SMK(SEKOLAH MENENGAH KEJURUAN)'],
    Tinggi : ['D3 DIPLOMA','S1/D4 SARJANA' ,'S2 MAGISTER','S3 DOKTORAL']
  }
  praSekolah(){
    this.setState({tingkatan:this.state.Pradasar})
    this.setState({jenjang:'PENDIDIKAN PRA SEKOLAH'})
  }
  pendidikanDasar(){
    this.setState({tingkatan:this.state.Dasar})
    this.setState({jenjang:'PENDIDIKAN DASAR'})
  }
  pendidikanMenengah(){
    this.setState({tingkatan:this.state.Menengah})
    this.setState({jenjang:'PENDIDIKAN MENENGAH'})
  }
  pendidikanTinggi(){
    this.setState({tingkatan:this.state.Tinggi})
    this.setState({jenjang:'PENDIDIKAN TINGGI'})
  }
  render() {
    var daftarTingkatan = this.state.tingkatan.map((tingkat,index) => {
        return <li style={{textAlign: 'left',color:'black', textDecoration:'none'}}> 
                  <a>{tingkat}</a>
              </li>
      }
    )
    return (
      <div className="App">

      
      <h2 style={{fontSize:"30px",fontWeight:"bold",marginTop:"20px"}}>
      CLICK JENJANG PENDIDIKAN ⇓
      
      </h2>
       
        <div className="App-intro" style={{marginTop: '20px'}}>
          <div className="btn-group">
            <a href="#" className="btn btn-default">PILIH JENJANG</a>
            <a href="#" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><span className="caret" /></a>
            <ul className="dropdown-menu">
            <li><a href="#" onClick={()=> {this.praSekolah();}}>PENDIDIKAN PRA SEKOLAH</a></li>
              <li><a href="#" onClick={()=> {this.pendidikanDasar();}}>PENDIDIKAN DASAR</a></li>
              <li><a href="#" onClick={()=> {this.pendidikanMenengah();}}>PENDIDIKAN MENENGAH</a></li>
              <li><a href="#" onClick={()=>{this.pendidikanTinggi();}}>PENDIDIKAN TINGKAT</a></li>
            </ul>
          </div>
          <div className="container">
            <div className="col-md-4 col-md-offset-4" style={{marginTop: '20px'}}>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 style={{color: 'black',textDecoration:'none', fontSize:'16px'}}>{this.state.jenjang}</h4>
                </div>
                <div className="panel-body">
                  <ul className="pull-left">
                    {daftarTingkatan}
                  </ul>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
