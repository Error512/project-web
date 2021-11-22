import "./App.css";
import List from "./List";
import {useState} from "react"
import {uid} from "uid"
import moment from "moment";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';

function App() {

  // Deklarasi array kosongan untuk kontak
  const [contacts, setContacts] = useState([])

  // Deklarasi Update
  const [isUpdate, setIsUpdate] = useState({id: null, status: false})

  // Deklarasi Form untuk kontak
  const [formData, setFormData] = useState({name: "", umur: ""})

  // Deklarasi hitung Total list/tamu/ array
  const [count, setCount] = useState(0);

  //
  const [countConfirm, setCountConfirm] = useState(0);
  const [countNotConfirm, setCountNotConfirm] = useState(0);

  // Deklarasi fungsi pengecekan
  const [checked, setChecked] = useState(true)

  // Fungsi perubahan
  function handleChange(e){
    let data = {...formData} // Menyalin dari form data
    data[e.target.name] = e.target.value //data.name mendapat nilai dari target.value
    setFormData(data) //memberi nilai kepada data
  }

  function handleSubmit(e){
    let data = [...contacts] // Menyalin dari kontak
    e.preventDefault() //Menghindari refresh

    //validasi kalau target.value kosong
    if(formData.name === ""){
      return false;
    }
    if(formData.umur === ""){
      return false;
    }

    //validasi update 
    if(isUpdate.status){
      data.forEach(contact => {
        if(contact.id === isUpdate.id){
          contact.name = formData.name
          contact.umur = formData.umur
        }
      });
    } else{
      data.push({id:uid(), name: formData.name, umur:formData.umur})
    }
    
    //Mengembalikan fungsi update seperti semula 
    setIsUpdate({id:null, status:false})

    //Memberikan contact berupa value dari data
    setContacts(data)

    //Membuat nama dan umur menjadi kosong
    setFormData({name:"", umur:""})

    //Menambah counter total
    setCount(count+1)
  }

  //Fungsi Edit
  function handleEdit(id){
    // Menyalin dari kontak
    let data = [...contacts]
    // mencari nilai dari contact dengan persamaan conntact id dengan id
    let foundData = data.find((contact) => contact.id === id)
    //Meng-Assign nilai nama dan umur dari data foundData
    setFormData({name:foundData.name, umur:foundData.umur})
    //Mengembalikan fungsi update seperti semula 
    setIsUpdate({id:id, status:true})
    //Mengurangi counter total
    setCount(count-1)

    
  }
  //Fungsi Delete
  function handleDelete(id){
    // Menyalin dari kontak
    let data = [...contacts]
    // menghapus nilai dari data dengan persamaan contact id dengan id
    let filteredData = data.filter(contact => contact.id !== id)
    //Meng-Assign nilai nama dan umur dari data filteredData
    setContacts(filteredData)
    //Mengurangi counter total
    setCount(count-1)
  }

  return (
    <div className="App">
      
      
      <form onSubmit={handleSubmit} className="px-3 py-4" style={{border:"2px solid black" }}>
      <h1 style={{textAlign:"center" }}> Guest List</h1><br/><br/>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
        <TextField
          id="outlined-basic"
          label="Nama"
          variant="outlined"
          type="text"
          onChange={handleChange}
          value={formData.name}
          name="name" />
        </Grid>
        <Grid item xs={6} md={6}>
        <TextField
          id="outlined-basic"
          label="Umur"
          variant="outlined"
          type="text"
          onChange={handleChange}
          value={formData.umur}
          name="umur" />
        </Grid>
        <Grid item xs={12} md={12}>
        <br/>
        <Button variant="contained" style={{left:"39%"}} type="submit">Simpan</Button>
        </Grid>
      </Grid>
        <br></br>
        <h4>{`${countConfirm} Konfirmasi`}</h4>
        <h4>{`${countNotConfirm} Tidak Konfirmasi`}</h4>
        <h4>{`${count} Total Tamu`}</h4>
        <FormControlLabel control={<Checkbox onClick={() => setChecked(checked === false)}/>} label={`Sembunyikan Tidak Konfirmasi`} />
      </form>

      <List handleDelete={handleDelete} handleEdit={handleEdit} data={contacts} checked={checked} setChecked={setChecked}/>
    </div>
  );
}
export default App;