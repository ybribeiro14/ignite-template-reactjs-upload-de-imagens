import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.900">
        {/* <ModalCloseButton /> */}

        <ModalBody px={60}>
          <Image src={imgUrl} />
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
