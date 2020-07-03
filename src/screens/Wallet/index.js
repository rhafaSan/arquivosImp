import React from 'react'
import { Text } from 'react-native'
import { Wrapper, Header, HeaderContainer, Title } from './styles'

export default function Wallet(){
    return (
        <Wrapper>
            <Header colors={['#52e78c', '#1ab563']}>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                </HeaderContainer>
            </Header>

        </Wrapper>
    )
}