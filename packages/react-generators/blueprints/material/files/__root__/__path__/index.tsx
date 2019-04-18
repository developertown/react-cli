import React from 'react';
import './styles';
<% if (button || card){%>import Button from '@material-ui/core/Button';<%}%>
<% if (textField){%>import TextField from '@material-ui/core/TextField';<%}%>
<% if (card){%>import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';<%}%>
<% if (table){%>import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';<%}%>

export default function <%= classifiedModuleName %>() {
  <% if (table){%>let rows = [];<%}%>
  return (
    <div>
      A new component named: <%= classifiedModuleName %>
      <% if (button) {%>
      <Button color="primary"> Button </Button>
      <%}%>
      <% if (textField) {%>
      <TextField
        label="Name"
        required
        value={'Created Text Field'}
        onChange={}
      />
      <%}%>
      <% if (card) {%><Card >
        <CardContent>
          <Typography component="p">
            Sample Text in the Card
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card><%}%>
      <% if (table) {%>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <%} %>
    </div> 
  );
};
