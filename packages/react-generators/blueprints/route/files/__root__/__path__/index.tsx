import React from 'react';

import { useRouter } from '~/utils/hooks';

export default function <%= classifiedModuleName %>Route() {
  const { /* match, history, location */ } = useRouter();

  return <div>This is the <%= classifiedModuleName %> Route!</div>;
}
