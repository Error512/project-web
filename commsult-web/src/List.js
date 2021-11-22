import React from "react";
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';

export default function List({data, handleEdit,handleDelete, checked, setChecked}) {
  return (
    <div className="list-group">
      {
        data.map((contact) => {
          return (
            <div>
              <br/>
              <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
              {checked && <>
                
                <h4 className="mb-1">{contact.name} </h4>
                
                <h4 className="mb-1"> {contact.umur}</h4>
                
                <Button
                variant="contained"
                type="submit"
                onClick={() => handleEdit(contact.id)}
                >Edit
                </Button>
                <Button
                variant="contained"
                type="submit"
                onClick={() => handleDelete(contact.id)}
                >Delete
                </Button>
                
                <FormControlLabel  control={<Checkbox />} label="Konfirmasi" />
                
              </>}
              
              </div>
              
            </div>

            </div>
            
          )
        })
      }
    </div>
  );
}