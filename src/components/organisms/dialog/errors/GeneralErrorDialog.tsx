import { MessageDialog } from '@src/components'

type GeneralErrorDialogProps = {
    onClose: () => void
}

export const GeneralErrorDialog = ({ onClose }: GeneralErrorDialogProps) => {
    return (
        <MessageDialog
            title="Error"
            content={`There is an error. Please try again.`}
            onClose={() => onClose()}
            actionText="Try Again"
            action={() => onClose()}
        />
    )
}
