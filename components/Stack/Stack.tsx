import * as React from 'react'
import styled from '@emotion/styled'

type StackProps = {
    direction: 'row'|'column'|'row-reverse'|'column-reverse',
    alignItems: React.CSSProperties['alignItems'],
    alignContent: React.CSSProperties['alignContent'],
    justifyItems: React.CSSProperties['justifyItems'],
    justifyContent: React.CSSProperties['justifyContent'],
    flexGrow: React.CSSProperties['flexGrow'],
    sx: React.CSSProperties
}


export const Stack = styled('div')<Partial<StackProps>>({
    display: 'flex',
    maxWidth: '100%',
}, 
    props => ({
       flexDirection: props.direction??'column',
       alignItems: props.alignItems,
       alignContent: props.alignContent,
       justifyItems: props.justifyItems,
       justifyContent:props.justifyContent,
       flexGrow: props.flexGrow,
       ...props.sx
    })
)