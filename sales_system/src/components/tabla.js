import React from 'react';

export default class Tabla extends React.Component{

    renderProducts(){
        return this.props.arrayProductos.map(row=>
           <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.product}</td> 
                <td>{row.price}</td> 
                <td>{row.stock}</td> 
                <td>{row.status}</td>                         
            </tr>
        );
    }

    render(){
        return(
            <div className="container is-fluid">
                <h1 className="title is-2 has-text-centered">Lista de productos</h1>
                <table className="table is-bordered is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Productos</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderProducts()}
                    </tbody>
                </table>
            </div>
        );
    }
}