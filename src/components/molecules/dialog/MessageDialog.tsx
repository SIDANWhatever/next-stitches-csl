import { WarningIcon } from '@assets/icons'
import { Button, Dialog, IconWrapper, Text, VBox } from '@src/components'
import { styled } from '@src/styles/stitches.config'
import { ReactNode } from 'react'

const MessageContentBox = styled(VBox, {
    display: 'flex',
    justify: 'center',
    items: 'center',
    px: ['20%'],
    mt: ['20px'],
    whiteSpace: 'pre-line',
    gapY: ['22px'],
})

export type MessageDialogIcon = 'success' | 'error' | 'warning'

export type DialogMessageProps = {
    title: string
    content: string
    onClose: () => void
    children?: ReactNode
    icon?: MessageDialogIcon
    actionText?: string
    action?: () => void
}

export const MessageDialog = ({ title, content, onClose, children, icon, actionText, action }: DialogMessageProps) => {
    return (
        <Dialog onClose={onClose} size="xs">
            <MessageContentBox>
                <Text dialog="title">{title}</Text>
                {icon && (
                    <IconWrapper
                        css={{
                            w: ['40px'],
                            h: ['40px'],
                        }}>
                        {icon === 'warning' && <WarningIcon />}
                    </IconWrapper>
                )}
                <Text dialog="content">{content}</Text>
                {children}
                {actionText && action && (
                    <Button size="md" style="primary" onClick={() => action()}>
                        <Text button="large">{actionText}</Text>
                    </Button>
                )}
            </MessageContentBox>
        </Dialog>
    )
}
