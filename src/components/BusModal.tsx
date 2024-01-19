import { Modal } from "react-bootstrap";

interface IModal {
  title: string | number;
  header: string;
  body: string[];
  show: boolean;
  onHide: () => void;
}

const BusModal = ({ title, header, body, show, onHide }: IModal) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        className="modal"
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          className="modal-header border-0 px-5 pt-5 text-center"
        >
          <Modal.Title>
            <h3>{title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body px-5 pb-5">
          <h5 className="px-3 pb-3">{header}</h5>
          <div style={{ columns: "3 auto" }}>
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
