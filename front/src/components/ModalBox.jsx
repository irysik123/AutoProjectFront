import { useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  overflow: "scroll",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalBox({children}) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 541, height: 742 }}>
        {children}
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
}
