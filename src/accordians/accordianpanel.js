import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Button } from '@mui/material'
import FolderDropdown from './folderdropdown';
import RequestDropdown from './requestdropdown';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: 'none',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));
const clickhandler = function(evt)
{
    console.log("in clickhandler");

    const n = evt.target.previousElementSibling
}
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon onClick={clickhandler} sx={{ fontSize: '0.9rem' }} />}
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
    
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

let data =
        [{
            "_id": "req_082e313c18be47b1a7757509133b5ab4",
            "type": "Request",
            "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
            "modified": 1681909225849,
            "created": 1681822922202,
            "url": "https://jsonplaceholder.typicode.com/todos/",
            "name": "New Request",
            "description": "",
            "method": "DEL",
            "body": {},
            "parameters": [],
            "headers": [],
            "authentication": {}
        },
        {
            "_id": "req_082e313c18be47b1a7757509133b5ab3",
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
                    "_id": "req_082e313c18be47b1a7757509133b5ab4",
                    "type": "folder",
                    "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
                    "modified": 1681909225849,
                    "created": 1681822922202,
                    "url": "https://jsonplaceholder.typicode.com/todos/",
                    "name": "updateRequest",
                    "description": "",
                    "method": "PUT",
                    "body": {},
                    "parameters": [],
                    "headers": [],
                    "children": [

                        {
                            "_id": "req_082e313c18be47b1a7757509133b5ab4",
                            "type": "request",
                            "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
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
                            "_id": "req_082e313c18be47b1a7757509133b5ab4",
                            "type": "Request",
                            "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
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
        
                    ],
                    "authentication": {}
                },
                {
                    "_id": "req_082e313c18be47b1a7757509133b5ab4",
                    "type": "Request",
                    "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
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
            "_id": "req_082e313c18be47b1a7757509133b5ab3",
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
                    "_id": "req_082e313c18be47b1a7757509133b5ab4",
                    "type": "Request",
                    "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
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
                    "_id": "req_082e313c18be47b1a7757509133b5ab4",
                    "type": "Request",
                    "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
                    "modified": 1681909225849,
                    "created": 1681822922202,
                    "url": "https://jsonplaceholder.typicode.com/todos/",
                    "name": "getRequest",
                    "description": "",
                    "method": "GET",
                    "body": {},
                    "parameters": [],
                    "headers": [],
                    "authentication": {}
                }, {
                    "_id": "req_082e313c18be47b1a7757509133b5ab4",
                    "type": "Request",
                    "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
                    "modified": 1681909225849,
                    "created": 1681822922202,
                    "url": "https://jsonplaceholder.typicode.com/todos/",
                    "name": "updateRequest",
                    "description": "",
                    "method": "DEL",
                    "body": {},
                    "parameters": [],
                    "headers": [],
                    "authentication": {}
                },
                {
                    "_id": "req_082e313c18be47b1a7757509133b5ab4",
                    "type": "Request",
                    "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
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
                }

            ]
        },
        {
            "_id": "req_082e313c18be47b1a7757509133b5ab3",
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
                    "_id": "req_082e313c18be47b1a7757509133b5ab4",
                    "type": "Request",
                    "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
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
                    "_id": "req_082e313c18be47b1a7757509133b5ab4",
                    "type": "Request",
                    "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
                    "modified": 1681909225849,
                    "created": 1681822922202,
                    "url": "https://jsonplaceholder.typicode.com/todos/",
                    "name": "getRequest",
                    "description": "",
                    "method": "GET",
                    "body": {},
                    "parameters": [],
                    "headers": [],
                    "authentication": {}
                }, {
                    "_id": "req_082e313c18be47b1a7757509133b5ab4",
                    "type": "Request",
                    "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
                    "modified": 1681909225849,
                    "created": 1681822922202,
                    "url": "https://jsonplaceholder.typicode.com/todos/",
                    "name": "updateRequest",
                    "description": "",
                    "method": "DEL",
                    "body": {},
                    "parameters": [],
                    "headers": [],
                    "authentication": {}
                },
                {
                    "_id": "req_082e313c18be47b1a7757509133b5ab4",
                    "type": "Request",
                    "parentId": "wrk_816a6e6fd41b4b0489d9449521990861",
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
                }

            ]}
        ];


export default function CustomizedAccordions(props) {
 const { populateUrlBar } = props;
const [datastore, setDatastore] = useState(data)
 const activeData = React.useRef();
 const handleClick = function(node)
 {
    console.log( node)
    populateUrlBar(node);
    
 }
 
    
    const RenderFolder = (nodes) => (

        <div style={{ width: '100%', display:'flex'}}>
            <div>
            <Accordion  sx={{flex: 1}} onChange={handleChange('panel111')}>
                <AccordionSummary aria-controls="panel11d-content" id={nodes._id}>
                    <Typography>{nodes.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {(nodes.type == "folder")
                 ? nodes.children.map((node) => RenderChildren(node))
                 : RenderRequest(nodes)}
                </AccordionDetails>
            </Accordion>
            </div>
            
            <FolderDropdown sx={{flex: 1}} getActive={event=>clickvv(event, nodes)} />
            
           
            
       </div>
)
    const RenderChildren = (nodes) => (
         
        <div>
            
                    {(nodes.type == "folder")
                        ? RenderFolder(nodes)
                        : RenderRequest(nodes)}
               
        </div>
    )
    
    const RenderRequest = (nodes) => (
        
            <div style={{
                width: '100%',
                marginBottom: "9px",
                textAlign:"left",
                marginLeft: "9px",
                display: 'flex'
                
            }}
            >
                <Button 
                           color="inherit"
                           sx={{
                            minWidth:"0px",
                            padding:"none",
                            textTransform:"none",
                            lineHeight:"none",
                            flex: 0.5,
                            marginRight:"2px"
                           }}
                           onClick={() => handleClick(nodes)}
                           >{nodes.method}</Button>
                <Button 
                       color="inherit"
                       sx={{
                        minWidth:"0px",
                        padding:"0px",
                        textTransform:"none",
                        lineHeight:"none",
                        flex: 1,
                        overflow:'hidden'
                        
                       }}
                       onClick={() => handleClick(nodes)}
                     >{nodes.name}</Button>
                     <div sx={{flex:1}}> <RequestDropdown  getActive={event=>clickvv(event, nodes)} /></div>
                    
                    
                      </div>

        
    )


    const [expanded, setExpanded] = React.useState('panel1');
    const clickvv = function(event, params)
    {
        debugger;
        console.log("ddddddddddddddd");
        console.log(params);
    }
    const handleChange =
        (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            {datastore.map((node) => (
                (node.type == "folder") ? RenderFolder(node) : RenderRequest(node)
            )
            )}
        </div>
    );
}
