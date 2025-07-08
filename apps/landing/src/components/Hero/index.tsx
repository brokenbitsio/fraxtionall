import { Button, Container, Text, Title } from '@mantine/core';
import { Dots } from './Dots';
import classes from './index.module.css';

export function Hero() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Find your next{' '}
          <Text component="span" className={classes.highlight} inherit>
            Fractional Leader
          </Text>{' '}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Less commitment, more impact. Connect with top fractional leaders to
            support your business growth.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
          >
            Find a leader
          </Button>
          <Button className={classes.control} size="lg">
            Find a role
          </Button>
        </div>
      </div>
    </Container>
  );
}
