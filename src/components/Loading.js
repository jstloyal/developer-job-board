import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function Loading() {
  return (
    <ProgressBar>
      <ProgressBar striped variant="success" now={60} />
    </ProgressBar>
  );
}
