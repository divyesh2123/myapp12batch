import React, { useState, useRef, useEffect, useReducer } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { green } from '@mui/material/colors';



export default function GridExample() {

    const makes = ['Toyota', 'Ford', 'Porsche'];

    const model = [
      'Celica',
      'Camry',
      'Tundra',
      'Mondeo',
      'Ecosport',
      'Palio',
      'Boxter',
      'Clio',
    ];

    const initialState = {
        model: [],
        make: [],
        operator: [],
        seq: [],
      };


      const maintainSeq = (seq, data, type) => {
        if (data.length > 0) {
          return seq.indexOf(type) > -1 ? seq : [...seq, type];
        } else {
          return seq.filter((e) => e !== type);
        }
      };
      
      const reducer = (state, action) => {
        let op = [];
      
        switch (action.type) {
          case 'make':
            op = action.payload.length > 0 && state.model.length > 0 ? ['AND'] : [];
            return {
              ...state,
              make: action.payload,
              operator: op,
              seq: maintainSeq(state.seq, action.payload, action.type),
            };
          case 'model':
            op = action.payload.length > 0 && state.make.length > 0 ? ['AND'] : [];
      
            return {
              ...state,
              model: action.payload,
              operator: op,
              seq: maintainSeq(state.seq, action.payload, action.type),
            };
          case 'reset':
            return initialState;
          default:
            return state;
        }
      };

      const [rowData, setRowData] = useState([
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Toyota', model: 'Camry', price: 45000 },
        { make: 'Toyota', model: 'Tundra', price: 40000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Ford', model: 'Ecosport', price: 22000 },
        { make: 'Ford', model: 'Palio', price: 52000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Clio', price: 92000 },
      ]);
    
      const [columnDefs] = useState([
        { field: 'make', filter: 'agMultiColumnFilter' },
        { field: 'model', filter: 'agMultiColumnFilter' },
        { field: 'price', filter: 'agNumberColumnFilter' },
      ]);
      const [carMake, setcarMake] = useState([]);
      const [carModel, setcarModel] = useState([]);

      const [externalFilter, setexternalFilter] = useState('');
      const [rules, dispatch] = useReducer(reducer, initialState);
      const girdRef = useRef();
    
      useEffect(() => {
        girdRef.current.api?.onFilterChanged();
      }, [carMake, carModel, externalFilter]);
    
      const isExternalFilterPresent = () => {
        return carMake != [];
      };

      const doesExternalFilterPass = (node) => {

        console.log(girdRef.current.api);
        const fi = girdRef.current.api.filterManager;
        if (rules.seq.length > 0) {
          const r = rules.seq.reduce((previousValue, currentValue) => {
            if (rules[currentValue].length === 1) {
              return {
                ...previousValue,
                [currentValue]: {
                  filterType: 'text',
                  type: 'contains',
                  filter: rules[currentValue][0],
                },
              };
            } else {
              return {
                ...previousValue,
                [currentValue]: {
                  filterType: 'text',
                  operator: 'OR',
                  ...rules[currentValue].reduce((p, c, i) => {
                    return {
                      ...p,
                      [`condition${i + 1}`]: {
                        filter: c,
                        type: 'contains',
                        filterType: 'text',
                      },
                    };
                  }, {}),
                },
              };
            }
          }, {});
          fi.setFilterModel(r);
          //fi.onFilterChanged();
          console.log(r);
        }
        return true;
      };
    
      function externalFilterChanged(event, type) {
        const selected =
          typeof event.target.value === 'string'
            ? event.target.value.split(',')
            : event.target.value;
        if (type === 'make') {
          setcarMake(selected);
        }
        if (type == 'model') {
          setcarModel(selected);
        }
        setexternalFilter(type);
        dispatch({ type: type, payload: selected });
      }
    
      function clear() {
        setcarMake([]);
        setcarModel([]);
        setexternalFilter('');
        dispatch({ type: 'reset' });
        const fi = girdRef.current.api.filterManager;
        fi.setFilterModel(null);
      }
      

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
    <FormControl sx={{ m: 1, width: 100 }}>
      <InputLabel id="car-make-label">Make</InputLabel>
      <Select
        labelId="ar-make-label"
        id="car-make"
        multiple
        value={carMake}
        onChange={(e) => externalFilterChanged(e, 'make')}
        input={<OutlinedInput label="Make" />}
      >
        {makes.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <FormControl sx={{ m: 1, width: 100 }}>
      <InputLabel id="car-model-label">Model</InputLabel>
      <Select
        labelId="car-model-label"
        id="car-model"
        multiple
        value={carModel}
        onChange={(e) => externalFilterChanged(e, 'model')}
        input={<OutlinedInput label="Model" />}
      >
        {model.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    <button onClick={clear}>Clear</button>
    <AgGridReact
      ref={girdRef}
      rowData={rowData}
      columnDefs={columnDefs}
      isExternalFilterPresent={isExternalFilterPresent}
      doesExternalFilterPass={doesExternalFilterPass}
    ></AgGridReact>
  </div>
);
  
}
