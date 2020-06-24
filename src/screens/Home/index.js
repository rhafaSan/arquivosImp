import React from 'react'
import { Text } from 'react-native'
import { Wrapper, Header, Balance, BalanceContainer, BalanceTitle } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

 export default function Home(){
    return (
        <Wrapper>
            <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c68e" />
            <BalanceContainer>
                <BalanceTitle>Meu Saldo</BalanceTitle>
                <Balance>R$ 0,00</Balance>
            </BalanceContainer>

            </Header>
        </Wrapper>
    )
}