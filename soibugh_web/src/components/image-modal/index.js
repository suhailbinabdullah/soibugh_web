import { Modal, Typography } from "antd";
import { Image } from "react-bootstrap";
const { Text } = Typography;

const ImageModal = (props) => {
    const { image, open, onOk, onCancel } = props
    return (
        <Modal width="90%" title={image?.caption} open={open} onOk={onOk} onCancel={onCancel}>
            <Image src={image?.image_url} fluid />
            <Text type="secondary">{image?.body}</Text>
            <br />
            <Text type="warning">{`Photo By ${image?.author}`}</Text>
        </Modal>
    );
}

export default ImageModal;