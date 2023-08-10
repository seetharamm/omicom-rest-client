import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/Folder';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Box } from '@mui/material';



const data = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};

export default function TreeViewPanel() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id}
              nodeId={nodes.id}
               label={nodes.name}
               sx={{marginRight:"0px"}}>
                
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <Box sx={{minHeight:"100%"}}>
        <TreeView
      aria-label="rich object"
      
      defaultCollapseIcon={<ExpandMoreIcon sx={{marginRight:"-88px"}}/>}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon sx={{marginRight:"-98px"}}/>}
      sx={{ 
            flexGrow: 1, 
            overflowY: 'auto',
            minHeight:"90%" ,
            marginTop:"32px"

        }}
    >
      {renderTree(data)}
    </TreeView>

    </Box>
    
  );
}
