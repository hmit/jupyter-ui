import { createRoot } from 'react-dom/client';
import { Box } from '@primer/react';
import Jupyter from '../jupyter/Jupyter';
import Viewer from '../components/viewer/Viewer';

import nbformat from './samples/Matplotlib.ipynb.json';

const ViewerFile= () => {
  return (
    <>
      <Box m={3}>
        <Jupyter startDefaultKernel={false}>
          { nbformat && <Viewer nbformat={nbformat} outputs={true} /> }
        </Jupyter>
      </Box>
    </>
  )
}

const div = document.createElement('div');
document.body.appendChild(div);
const root = createRoot(div)

root.render(
  <ViewerFile/>
);
