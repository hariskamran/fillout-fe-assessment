import { ReactElement } from 'react';

import Container from '@/components/components/Container';
import MainLayout from '@/components/layout/MainLayout';

export default function Home(): ReactElement {
  return (
    <MainLayout>
      <Container />
    </MainLayout>
  );
}
