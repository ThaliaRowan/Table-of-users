import React from "react";

function MyTable(props){
    return (

      <div className='col-12'>
        


                 <table className="table">
                <thead>
                  <tr>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">City</th>
                  </tr>
                </thead>
                <tbody>

                  {props.person.map(per => (
                      <tr>
                      <td key={per.id}>{per.name.first}</td>
                      <td>{per.name.last}</td>
                      <td>{per.gender}</td>
                      <td>{per.nat}</td>
                    </tr>
                
                  ))}
                      
                    
                </tbody>
              </table>

      </div>


      

    );
};

export default MyTable;