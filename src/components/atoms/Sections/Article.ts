import styled from 'styled-components';
import { StyleSheet } from 'styled-components/dist/types';

interface StyledArticleInterface {}

export const StyledArticle = styled.article<StyledArticleInterface>`
  padding: 2rem 1rem;
`;
