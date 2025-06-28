import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import Spinner from 'components/spinner/Spinner';

const CommonDeleteModel = (props) => {
    const { isOpen, onClose, type, handleDeleteData, ids, selectedValues, isLoading } = props;

    const handleDelete = () => {
        handleDeleteData(ids, selectedValues);
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Delete {type}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Are You Sure To Delete selected {type}?
                </ModalBody>
                <ModalFooter>
                    <Button 
                      colorScheme="red" 
                      size="sm" 
                      mr={2} 
                      onClick={handleDelete} 
                      disabled={isLoading} 
                      leftIcon={isLoading ? <Spinner size="sm" /> : null}
                    >
                      {isLoading ? 'Deleting...' : 'Yes'}
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleClose} disabled={isLoading}>
                      No
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CommonDeleteModel;
