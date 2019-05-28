import React from 'react';

export default class cartViewer extends React.Component {

  render(){
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
