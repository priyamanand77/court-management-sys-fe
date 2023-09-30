import React from "react";
import { Button } from "reactstrap";


export default function UserReq({ user }) {
  return (
   
    
      <tbody>
        <tr>
          <td>{user.id}</td>
          <td>{user.userId}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.gender}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>{user.address}</td>
          <td>{user.pincode}</td>
          <td>{user.dob}</td>
          <td>  <Button
    color="info"
    
  >
    View doc
  </Button>
</td>
<td>  <Button
    color="info"
    
  >
    View doc
  </Button>
</td>
          <td>{user.status}</td>
          <td>{user.actionTime}</td>
          <td>{user.actionBy}</td>
          <td>
            <Button color="success">Approve</Button>
          </td>
          <td>
            <Button color="danger">Rejected</Button>
          </td>
        </tr>
      </tbody>

  );
}
