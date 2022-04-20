import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useContext } from "react";
import arrayContext from '../context/arrayContext';


function EditData({ dataParentToChild }) {

  const { data, setData ,setTempArray} = useContext(arrayContext);

  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const defaultValue = function () {
    setName(data[dataParentToChild].medicineName);
    setStock(data[dataParentToChild].stock);
    setPrice(data[dataParentToChild].price);
    handleShow()
  };

  const submit = function () {
    data[dataParentToChild] = { medicineName: name, stock: stock, price: price };
    setData(data => [...data]);
    setTempArray(data => [...data]);
    setShow(false);
  };
  return (
    <div>
      <>
        <Button variant="success" onClick={defaultValue}>
          Update Data
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Drug information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name Of The Medicine:</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)}
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Stock In Pharmacy:</Form.Label>
                <Form.Control value={stock} onChange={(e) => setStock(e.target.value)} type="number" min="0"
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price:</Form.Label>
                <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number" min="0"
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={submit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}
export default EditData;