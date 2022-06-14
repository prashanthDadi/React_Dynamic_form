import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Modal, Button, Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';


function DataFetching() {
    const [Posts, setPosts] = useState([])
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {
        axios.get('http://192.168.4.109:8080/api/contacts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const dataN = () => {
        axios.get('http://192.168.4.109:8080/api/contacts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })

    }
    const editId = (id) => {
        navigate(`${id}`)
    }

    const viewId = (id) => {
        navigate(`${id}`)
    }


    const deleteRow = (id) => {
        axios.delete(`http://192.168.4.109:8080/api/contacts/${id}`)
            .then(res => {
                dataN()
            }
            )
    }
    console.log(Posts)


    

    return (
        <>
            <button onClick={() => navigate('/post')} variant="info">post</button>
            <table className='table' class="table table-bordered" >
                <thead class="table-active">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {displayUsers} */}
                    {Posts.map(post => <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.name}</td>
                        <td>{post.email}</td>
                        <td><button onClick={() => editId(`edits/${post.id}`)} variant="info">edit</button>
                            <button onClick={() => viewId(`view/${post.id}`)} variant="success">view</button>
                            {/* <button onClick={()=>deleteRow(post.id)} variant="secondary">delete</button> */}

                             <Button variant="primary" onClick={handleShow}>
                                Delete
                            </Button>

                        </td>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => { handleClose(); deleteRow(post.id) }}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </tr>)} 

                </tbody>
            </table>
            <ReactPaginate 
            previousLabel={"previous"}
            nextLabel={"next"}
            pageCount={pageCount}
            onPageChange={onchange}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}

            />
        </>
    )

}


export default DataFetching
 // const[pageNumber,setPageNumber]=useState(0)
    // const usersperPage=10;
    // const pageVisited= pageNumber*usersperPage

    // const displayUsers=Posts.slice(pageVisited,pageVisited+usersperPage)
    //                         .map((post) =>{return( <tr key={post.id}>
    //                             <td>{post.id}</td>
    //                             <td>{post.name}</td>
    //                             <td>{post.email}</td>
    //                             <td><button onClick={() => editId(`edits/${post.id}`)} variant="info">edit</button>
    //                                 <button onClick={() => viewId(`view/${post.id}`)} variant="success">view</button>
    //                                 {/* <button onClick={()=>deleteRow(post.id)} variant="secondary">delete</button> */}
        
    //                                 <Button variant="primary" onClick={handleShow}>
    //                                     Delete
    //                                 </Button>
        
    //                             </td>
    //                             <Modal show={show} onHide={handleClose}>
    //                                 <Modal.Header closeButton>
    //                                     <Modal.Title>Modal heading</Modal.Title>
    //                                 </Modal.Header>
    //                                 <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    //                                 <Modal.Footer>
    //                                     <Button variant="secondary" onClick={handleClose}>
    //                                         Close
    //                                     </Button>
    //                                     <Button variant="primary" onClick={() => { handleClose(); deleteRow(post.id) }}>
    //                                         Save Changes
    //                                     </Button>
    //                                 </Modal.Footer>
    //                             </Modal>
    //                         </tr>)
    //                           }  )
    //       const pageCount=Math.ceil(Posts.length/usersperPage)  
    //       const onchange=({selected})=>{ setPageNumber(selected) }                
