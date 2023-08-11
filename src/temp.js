import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Box, TextField, Stack, Alert } from "@mui/material";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { Add, Edit, Delete, ImportExport } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { get, post, put, deleteRecord, handleApiError } from "../common/api";
import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';



const Model = () => {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState();
  const [showStatus, setShowStatus] = useState(false);

  const columns = [
    { field: "name", headerName: "Model", width: 200, },
  ];

  const schema = {
    type: 'object',
    required: [
      "name",
    ],
    properties: {
      name: {
        type: 'string',
        title: 'Model'
      },
    },
  };
  const uiSchema = {
    
  };


  const fetchData = async () => {
    const response = await get("/vehiclemodel");
    if (response && response.length > 0) setRows(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = async (data) => {
    setLoading(true);

    let response;

    if (data._id)
      response = await put("/vehiclemodel/" + data._id, { name: data.name });
    else
      response = await post("/vehiclemodel", { name: data.name });

    if (response) {
      setSelectedRow(null);
      fetchData();
      setOpen(false);
      setStatus("Model saved successfully.")
      setShowStatus(true);
    }
    else {
      setStatus("Error occured while adding the model.")
      setShowStatus(true);
    }
    setLoading(false);
  };
  const handleStatusClose = () => {
    setShowStatus(false);
  }
  const handleAddModel = () => {
    setSelectedRow(null);
    setOpen(true);
  }
  const handleEditModel = () => {
    setOpen(true);
  }
  const handleDeleteModel = async () => {
    setLoading(true);

    if (selectedRow._id) {
      const response = await deleteRecord("/vehiclemodel/" + selectedRow._id);
      setLoading(false);
      fetchData();
      setStatus("Model deleted successfully.")
      setShowStatus(true);
    }
  }
  const log = (type) => console.log.bind(console, type);
  return (
    <div>
      <Grid container spacing={2} sx={{ p: 2 }} >
        <Grid item xs={4}>
          <Typography variant="h4" component="h1" >
            Job
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{ pb: 2 }}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              sx={{ m: 0.5 }}
              variant="contained"
              startIcon={<Add />}
              onClick={handleAddModel}
            >
              Add
            </Button>{" "}

            <Button sx={{ m: 0.5 }} variant="contained" startIcon={<Edit />}
              disabled={selectedRow == null}
              onClick={handleEditModel}>
              Edit
            </Button>{" "}
            <Button sx={{ m: 0.5 }} variant="contained" startIcon={<Delete />}
              disabled={selectedRow == null}
              onClick={handleDeleteModel}>
              Delete
            </Button>
          </Box>
        </Grid>
      </Grid>
      <div className="data-grid">
        {rows && rows.length > 0 &&
          <DataGrid
            columns={columns}
            rows={rows}
            getRowId={(row) => row._id}
            disableMultipleRowSelection={true}
            onSelectionModelChange={(selection) => {
              if (selection && selection.length > 0) {
                const selected = rows.find(x => x._id == selection[0]);
                setSelectedRow(selected);
              }
              else {
                setSelectedRow(null);
              }
            }}
          />
        }
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{selectedRow ? "Add" : "Edit"} Model</DialogTitle>
        <DialogContent>
          <Form
            schema={schema}
            uiSchema={uiSchema}
            validator={validator}
            formData={selectedRow}
            onError={log('errors')}
            onSubmit={(data) => { handleSave(data.formData) }}
            className="editor-form"
          >
            <Button variant="contained" type="submit">Submit</Button>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          </Form>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={showStatus}
        onClose={handleStatusClose}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={status}
      >
      </Snackbar>
    </div>
  );
};

export default Model;
