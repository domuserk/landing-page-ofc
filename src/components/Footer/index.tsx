import React from 'react'

import Container from 'components/Container'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <p>
        Desenvolvido por{' '}
        <a href="https://github.com/domuserk/">Ryan Guilherme Lopes </a>e
        <a href="https://github.com/domuserk"> Ryan Lopes</a>
      </p>
      <p>
        Design por <a href="github.com/domuserk">Ryan Lopes</a>
      </p>
    </Container>
  </S.Wrapper>
)

export default Footer
