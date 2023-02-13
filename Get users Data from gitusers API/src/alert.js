import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



class GetFollowers extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        DataisLoaded: false,
      };
     
    }
    getSub=({item})=> {
      fetch("https://api.github.com/users")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({
            items: json,
            DataisLoaded: true,
          });
        });
  
        
    }
  
  
    render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded)
        return (
          <div>
            <h1> Pleses wait some time.... </h1>{" "}
          </div>
        );
      return (
  
        items.map((item) => (
          <DialogBox item={item}/>
        ))
  
        
      );
    }
  }
  
export default GetFollowers;









const DialogBox = ({item}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open alert dialog
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Ok</Button>
                       
                            
                    </DialogActions>
                </Dialog>
            </div>



        </>



    );
}
