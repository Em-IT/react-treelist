import React from 'react';
import {render} from 'react-dom';
import TreeList from './js/TreeList';

import {DATA} from './sample-data/tree-data-nested';

const COLUMNS = [{
  title: 'ID',
  field: 'id',
  type: 'number',
  width: 100
}, {
  title: 'First Name',
  field: 'firstName',
  type: 'string',
  expand: true,
}, {
  title: 'Last Name',
  field: 'lastName',
  type: 'string'
}, {
  title: 'Employee ID',
  field: 'employeeId',
  type: 'number',
  class: 'red',
  formatter: function(value) {
    if (value) {
      return 'EMPID' + value;
    }
  }
}, {
  title: 'Joined on',
  field: 'joinedOn',
  type: 'date',
  format: 'dd/mm/yyyy'
}];

const OPTIONS = {
  height: 350,
  minimumColWidth: 100,
  expandAll: true
};

class App extends React.Component {
  render () {
    return (
      <TreeList
        data={DATA}
        columns={COLUMNS}
        options={OPTIONS}
        id={'id'}
        parentId={'parentId'}></TreeList>
    );
  }
}

render(<App/>, document.getElementById('app'));
