import { Stack, Card } from '@primer/react-brand';
import { OvhCloudIcon, AwsIcon } from '@datalayer/icons-react';
import appState from "../state";

const DashboardTab = (): JSX.Element => {
  return (
    <>
      <Stack
        direction="horizontal"
        alignItems="center"
        justifyContent="center"
        gap="normal"
      >
        <Card href="" onClick={e => {e.preventDefault(); appState.setTab(2)}}>
          <Card.Icon icon={() => <OvhCloudIcon/>} color="indigo" hasBackground />
          <Card.Heading>Dashboard 1</Card.Heading>
          <Card.Description>
            Everything you need to know about getting started with OVHcloud.
          </Card.Description>
        </Card>
        <Card href="" onClick={e => {e.preventDefault(); appState.setTab(3)}}>
          <Card.Icon icon={() => <AwsIcon/>} color="purple" hasBackground />
          <Card.Heading>Dashboard 2</Card.Heading>
          <Card.Description>
            Everything you need to know about getting started with AWS.
          </Card.Description>
        </Card>
      </Stack>
    </>
  );
};

export default DashboardTab;
