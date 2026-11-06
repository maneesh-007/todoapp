import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Stack,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const List = React.memo(function List({
  ListHeader = [],
  ListItems = [],
  updateUrl = '',
  handleDelete,
}) {
  const navigate = useNavigate();

  const handleUpdate = (item) => {
    if (updateUrl) {
      // You can pass the item/id via state or path parameter as needed
      navigate(updateUrl, { state: { item } });
    }
  };

  return (
    <TableContainer component={Paper} elevation={2}>
      <Table aria-label="data table">
        <TableHead>
          <TableRow>
            {ListHeader.map((header, index) => (
              <TableCell key={index} sx={{ fontWeight: 'bold' }}>
                {header}
              </TableCell>
            ))}
            {/* Mandatory Action Header */}
            <TableCell key="action-header" align="center" sx={{ fontWeight: 'bold' }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {ListItems.map((row, rowIndex) => (
            <TableRow key={row.id || rowIndex} hover>
              {/* Render row cells based on header count/properties */}
              {Object.keys(row).map((key, cellIndex) => (
                <TableCell key={cellIndex}>{row[key]}</TableCell>
              ))}

              {/* Action Column */}
              <TableCell align="center">
                <Stack direction="row" spacing={1} justifyContent="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => handleUpdate(row)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete && handleDelete(row)}
                  >
                    Delete
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default List;