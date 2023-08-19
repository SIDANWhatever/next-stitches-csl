import { styled } from '@src/styles/stitches.config'
import { HLine } from '@src/components'

const ProgressEmptyLine = styled(HLine, {
    w: '100%',
    position: 'relative',
    border: 'none',
    bg: '$gray700',
    h: ['4px'],
    rounded: ['$card'],
})

const ProgressFilledLine = styled(HLine, {
    position: 'absolute',
    left: 0,
    top: 0,
    h: ['4px'],
    rounded: ['$card'],
    variants: {
        color: {
            green: {
                border: 'none',
                bg: '$status-green',
            },
        },
    },
})

type QuantityProgressProps = {
    count: number
    total: number
}

export const QuantityProgress = ({ count, total }: QuantityProgressProps) => {
    const filledWidth = total > 0 ? (count / total) * 100 + '%' : '0%'

    return (
        <ProgressEmptyLine>
            <ProgressFilledLine
                color="green"
                css={{
                    w: filledWidth,
                }}
            />
        </ProgressEmptyLine>
    )
}
