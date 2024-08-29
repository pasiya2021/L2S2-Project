import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const CommonDialog = ({ open, modalTitle, bodySection, actionButton, onClose }) => {
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="absolute w-screen">
            <Dialog open={open} onClose={handleClose} aria-labelledby={modalTitle} className="w-full">
                <DialogTitle>{modalTitle}</DialogTitle>
                <DialogContent>
                    {bodySection}
                </DialogContent>
                <DialogActions>
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    {actionButton}
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CommonDialog;