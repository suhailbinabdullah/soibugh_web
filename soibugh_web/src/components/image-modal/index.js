import { Image, Modal, Typography } from "antd";
const { Text } = Typography;

const ImageModal = (props) => {
    const { image, open, onOk, onCancel } = props
    return (
        <Modal width="90%" title={image?.caption} open={open} onOk={onOk} onCancel={onCancel}>
            <Image src={image?.image_url} placeholder preview={false} />
            <Text type="secondary">{image?.body}</Text>
            <br />
            <Text type="warning">{`Photo By ${image?.author}`}</Text>
        </Modal>
    );
}

export default ImageModal;