import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { ToastComponent } from "../Components/Toast";
import { baseURL } from "../utils/baseURL";

function AddProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    unitPrice: "",
    quantity: "",
    description: "",
  });
  const [image, setImage] = useState();
  const [show, setShow] = useState({
    show: false,
    message: "",
    success: false,
  });
  const formSubmit = async (e) => {
    e.preventDefault();
    const toSend = new FormData();
    toSend.append("name", formData.productName);
    toSend.append("unitPrice", formData.unitPrice);
    toSend.append("quantity", formData.quantity);
    toSend.append("description", formData.description);
    toSend.append("productImage", image);

    const response = await Axios.post(
      `${baseURL}api/products`,
      toSend
    );
    if (response.status === 200) {
      setShow({
        show: true,
        message: "Product Added Successfully",
        success: true,
      });
      setFormData({
        productName: "",
        unitPrice: "",
        quantity: "",
        description: "",
      });
      setImage();
    } else {
      setShow({
        show: true,
        message: "Product Added Failed",
        success: false,
      });
      setFormData({
        productName: "",
        unitPrice: "",
        quantity: "",
        description: "",
      });
      setImage();
    }
  };
  const handleToastClose = () => {
    setShow({
      show: false,
      message: "",
      success: false,
    });
  };

  React.useEffect(() => {}, [image]);

  return (
    <div>
      <Form onSubmit={formSubmit}>
        <Form.Group controlId="productName">
          <div className="row my-2">
            <div className="col-3 my-auto">
              <Form.Label>
                <strong>Product Name</strong>
              </Form.Label>
            </div>
            <div className="col-4">
              <Form.Control
                value={formData.productName}
                onChange={(e) =>
                  setFormData({ ...formData, productName: e.target.value })
                }
                type="text"
                placeholder="Enter Product Name"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group controlId="unitPrice">
          <div className="row my-2">
            <div className="col-3 my-auto">
              <Form.Label>
                <strong>Unit Price</strong>
              </Form.Label>
            </div>
            <div className="col-4">
              <Form.Control
                value={formData.unitPrice}
                onChange={(e) =>
                  setFormData({ ...formData, unitPrice: e.target.value })
                }
                type="number"
                placeholder="Enter Unit Price"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group controlId="quantity">
          <div className="row my-2">
            <div className="col-3 my-auto">
              <Form.Label>
                <strong>Quantity</strong>
              </Form.Label>
            </div>
            <div className="col-4">
              <Form.Control
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
                type="number"
                placeholder="Enter Qunatity"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group controlId="description">
          <div className="row my-2">
            <div className="col-3 my-auto">
              <Form.Label>
                <strong>Description</strong>
              </Form.Label>
            </div>
            <div className="col-4">
              <Form.Control
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                as="textarea"
                row={3}
                placeholder="Enter Product Description"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group id="productImage">
          <div className="row my-2">
            <div className="col-3 my-auto">
              <Form.Label>
                <strong>Product Image</strong>
              </Form.Label>
            </div>
            <div className="col-4">
              <Form.Control
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                placeholder="Enter Product Description"
              />
            </div>
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <ToastComponent
        show={show.show}
        message={show.message}
        success={show.success}
        setShow={handleToastClose}
      />
    </div>
  );
}

export default AddProduct;
