import { Modal } from "react-bootstrap";

interface IModal {
  title: string | number;
  body: string;
}

const BusModal = ({ title, body }: IModal) => {
  return (
    <>
      <Modal>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body><li>{body}</li></Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default BusModal;
