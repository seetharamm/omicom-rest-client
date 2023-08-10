import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowCircleDownOutlined from '@mui/icons-material/ArrowCircleDownOutlined';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import FolderDropdown from './accordians/folderdropdown';
import RequestDropdown from './accordians/requestdropdown';
import { Button } from '@mui/material'

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(255, 255, 255, .05)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(1),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const data =
    [{
        "_id": "req_082e313c18be47b1a7757509133b5ab412",
        "type": "Request",
        "parentId": "",
        "modified": 1681909225849,
        "created": 1681822922202,
        "url": "https://jsonplaceholder.typicode.com/todos/",
        "name": "New Requestttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
        "description": "",
        "method": "PUT",
        "body": {},
        "parameters": [],
        "headers": [],
        "authentication": {}
    },
    {
        "_id": "req_082e313c18be47b1a7757509133b5ab311",
        "type": "folder",
        "parentId": "",
        "modified": 1681909225849,
        "created": 1681822922202,
        "url": "https://jsonplaceholder.typicode.com/todos/",
        "name": "New Request",
        "description": "",
        "method": "PUT",
        "body": {},
        "parameters": [],
        "headers": [],
        "authentication": {},
        "children": [

            {
                "_id": "req_082e313c18be47b1a7757509133b5ab410",
                "type": "Request",
                "parentId": "req_082e313c18be47b1a7757509133b5ab311",
                "modified": 1681909225849,
                "created": 1681822922202,
                "url": "https://jsonplaceholder.typicode.com/todos/",
                "name": "updateRequest",
                "description": "",
                "method": "PUT",
                "body": {},
                "parameters": [],
                "headers": [],
                "authentication": {}
            },
            {
                "_id": "req_082e313c18be47b1a7757509133b5ab39",
                "type": "folder",
                "parentId": "req_082e313c18be47b1a7757509133b5ab311",
                "modified": 1681909225849,
                "created": 1681822922202,
                "url": "https://jsonplaceholder.typicode.com/todos/",
                "name": "New Request",
                "description": "",
                "method": "PUT",
                "body": {},
                "parameters": [],
                "headers": [],
                "authentication": {},
                "children": [

                    {
                        "_id": "req_082e313c18be47b1a7757509133b5ab48",
                        "type": "Request",
                        "parentId": "req_082e313c18be47b1a7757509133b5ab39",
                        "modified": 1681909225849,
                        "created": 1681822922202,
                        "url": "https://jsonplaceholder.typicode.com/todos/",
                        "name": "updateRequest",
                        "description": "",
                        "method": "PUT",
                        "body": {},
                        "parameters": [],
                        "headers": [],
                        "authentication": {}
                    },
                    {
                        "_id": "req_082e313c18be47b1a7757509133b5ab47",
                        "type": "Request",
                        "parentId": "req_082e313c18be47b1a7757509133b5ab39",
                        "modified": 1681909225849,
                        "created": 1681822922202,
                        "url": "https://jsonplaceholder.typicode.com/todos/",
                        "name": "getRequest",
                        "description": "",
                        "method": "PUT",
                        "body": {},
                        "parameters": [],
                        "headers": [],
                        "authentication": {}
                    }

                ]
            },
            {
                "_id": "req_082e313c18be47b1a7757509133b5ab46",
                "type": "Request",
                "parentId": "req_082e313c18be47b1a7757509133b5ab311",
                "modified": 1681909225849,
                "created": 1681822922202,
                "url": "https://jsonplaceholder.typicode.com/todos/",
                "name": "getRequest",
                "description": "",
                "method": "PUT",
                "body": {},
                "parameters": [],
                "headers": [],
                "authentication": {}
            }

        ]
    },
    {
        "_id": "req_082e313c18be47b1a7757509133b5ab35",
        "type": "folder",
        "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
        "modified": 1681909225849,
        "created": 1681822922202,
        "url": "https://jsonplaceholder.typicode.com/todos/",
        "name": "New Request",
        "description": "",
        "method": "PUT",
        "body": {},
        "parameters": [],
        "headers": [],
        "authentication": {},
        "children": [

            {
                "_id": "req_082e313c18be47b1a7757509133b5ab44",
                "type": "Request",
                "parentId": "req_082e313c18be47b1a7757509133b5ab35",
                "modified": 1681909225849,
                "created": 1681822922202,
                "url": "https://jsonplaceholder.typicode.com/todos/",
                "name": "updateRequest",
                "description": "",
                "method": "GET",
                "body": {},
                "parameters": [],
                "headers": [],
                "authentication": {}
            },
            {
                "_id": "req_082e313c18be47b1a7757509133b5ab43",
                "type": "Request",
                "parentId": "req_082e313c18be47b1a7757509133b5ab35",
                "modified": 1681909225849,
                "created": 1681822922202,
                "url": "https://jsonplaceholder.typicode.com/todos/",
                "name": "getRequest",
                "description": "",
                "method": "POST",
                "body": {},
                "parameters": [],
                "headers": [],
                "authentication": {}
            },
            {
                "_id": "req_082e313c18be47b1a7757509133b5ab42",
                "type": "Request",
                "parentId": "req_082e313c18be47b1a7757509133b5ab35",
                "modified": 1681909225849,
                "created": 1681822922202,
                "url": "https://jsonplaceholder.typicode.com/todos/",
                "name": "updateRequest",
                "description": "",
                "method": "PUT",
                "body": {},
                "parameters": [],
                "headers": [],
                "authentication": {}
            },
            {
                "_id": "req_082e313c18be47b1a7757509133b5ab41",
                "type": "Request",
                "parentId": "req_082e313c18be47b1a7757509133b5ab35",
                "modified": 1681909225849,
                "created": 1681822922202,
                "url": "https://jsonplaceholder.typicode.com/todos/",
                "name": "getRequest",
                "description": "",
                "method": "DEL",
                "body": {},
                "parameters": [],
                "headers": [],
                "authentication": {}
            }

        ]
    }
    ];

export default function CustomizedAccordions(props) {
    const { populateUrlBar } = props;
    const handleClick = function (node) {
        console.log(node)
        populateUrlBar(node);

    }
    let [over, setOver] = useState(false);


    const [datastore, setDatastore] = useState(data)
    const [expanded, setExpanded] = useState('panel1');

    const Clickvv = (event, params) => {
        let modData;
        const findIndex = function (data, params) {
            modData = data.forEach((dat) => {
                if (dat._id && dat._id == params.parentId) {
                    dat.children.push(params)
                } else if (dat.type == 'folder') {
                    findIndex(dat.children, params)
                }
            })
        }
        findIndex(data, params);

        debugger;
        //data.push(params);
        const newData = Object.assign([], data)
        setTimeout(() => {
            setDatastore(newData);
            console.log('This will run after 1 second!', datastore);
        }, 100);



    }


    /*  const RenderIcon =  function(evt, nodes, key, totaldata)
      {
       debugger;
       const id = nodes._id;
       totaldata.forEach((data)=>{
           if(data._id == id){
               console.log(data);
               if(evt.type == 'mouseover')
               {data["visible"] = true}
               else{ data["visible"] = false}
              // return data;
           } 
           else if(data.type == 'folder') {
               RenderIcon(evt,nodes, key, data.children);
           }
       })
         
       setDatastore(...datastore, totaldata);
    }*/
    const RenderChildren = (nodes) => (

        <div>

            {(nodes.type == "folder")
                ? RenderFolder(nodes)
                : RenderRequest(nodes)}

        </div>
    )
    const RenderRequest = function (nodes) {
        console.log(nodes);
        return (

            <div id={nodes._id}
                style={{
                    width: '100%',
                    marginBottom: "9px",
                    marginTop: "2px",
                    marginLeft: "9px",
                    display: "flex"

                }}>
                <Box component="div"
                    sx={{
                        fontSize: "12px",
                        color: "blue",
                        width: "33px",
                        overflow: "hidden",
                        p: 1
                    }}
                >{nodes.method}</Box>
                <Box component="div"
                    sx={{ width: "112px", overflow: "hidden", textAlign: "left", marginLeft: "3px" }}>
                    <Button  onClick={() => handleClick(nodes)}
                        sx={{ padding: "-0px", textAlign: "left", textTransform: "none" }}> <Typography noWrap
                            sx={{
                                fontSize: "12px",
                                mt: "8px",
                                textOverflow: "ellipsis",
                                ml: "5px"
                            }}>{nodes.name}</Typography></Button></Box>
                <RequestDropdown getActive={event => Clickvv(event, nodes)} />


            </div>

        )
    }
    const RenderFolder = function (nodes) {
        return (
            <Accordion onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>{nodes.name} </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {nodes.type == 'folder'
                        ? nodes.children.map((node) => RenderChildren(node))
                        : RenderRequest()}
                </AccordionDetails>
            </Accordion>
        )
    }



    const handleChange =
        (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>

            {datastore && datastore.map((node) => (
                (node.type == 'folder')
                    ? RenderFolder(node)
                    : RenderRequest(node)

            ))}


        </div>
    );
}
