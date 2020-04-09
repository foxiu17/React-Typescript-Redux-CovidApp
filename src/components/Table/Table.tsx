import React from "react";
import moment from 'moment';

import { ITable, IRow } from "../../Interfaces/TableInterfaces";

import {
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableWrapper
} from './Table.style';

const Table = ({ data }: ITable): JSX.Element => {

  console.log("TABELA: ", data);
  return (
    <Paper elevation={3}>
      <TableWrapper size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Confirmed</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Recovered</TableCell>
            <TableCell align="right">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: IRow, index: number) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {moment(row.Date).format('DD.MM.YYYY')}
              </TableCell>
              <TableCell align="right">{row.Confirmed}</TableCell>
              <TableCell align="right">{row.Deaths}</TableCell>
              <TableCell align="right">{row.Recovered}</TableCell>
              <TableCell align="right">{row.Active}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableWrapper>
    </Paper>
  );
};

export default Table;