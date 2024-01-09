import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Header from "../Header";
import Carousel from "../Carousel";

export default function ModalTest() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ background: "black", color: "white", height: "100vh" }}>
          <Header handleClose={handleClose} />
          <Carousel />
        </div>
      </Modal>
    </div>
  );
}
