import { Modal } from "react-bootstrap";

interface IModal {
  title: string | number;
  body: string[];
  show: boolean;
  onHide: () => void;
}

const BusModal = ({ title, body, show, onHide }: IModal) => {
  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton closeVariant="white" className="border-0 px-4 bg-dark">
          <Modal.Title className="fw-bold">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0 bg-dark">
          <p className="px-2">Hållplatser:</p>
          <div style={{columns: "2 auto"}}>
          {body.map((item, index) => (
            <ul>
              <li key={index}>{item}</li>
            </ul>
          ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BusModal;
