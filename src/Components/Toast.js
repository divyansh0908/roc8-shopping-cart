import React from "react";
import { Toast } from "react-bootstrap";

export const ToastComponent = ({ show, setShow, message, success }) => {
    return (
        <Toast
        style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 999,
            backgroundColor: { success } ? "green" : "red",
            color: "white",
        }}
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        >
        <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
    }
