
import {
  Image,
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  rem,
} from "@mantine/core";
import roof1 from "../assets/roof1.jpeg";
import roof2 from "../assets/roof2.jpeg";

import roof4 from "../assets/roof4.jpeg";
import roof5 from "../assets/roof5.jpeg";
import { Zoom } from "react-awesome-reveal";
const PRIMARY_COL_HEIGHT = rem(300);

export function HomeCarousel() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
  return (
    <Container my="md">
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <Zoom>
          <Image
            height={PRIMARY_COL_HEIGHT}
            src={roof2}
            radius="md"
            withPlaceholder
          />
        </Zoom>

        <Grid gutter="md">
          <Grid.Col>
            <Zoom>
              <Image
                height={SECONDARY_COL_HEIGHT}
                src={roof1}
                radius="md"
                withPlaceholder
              />
            </Zoom>
          </Grid.Col>
          <Grid.Col span={6}>
            <Zoom>
              <Image
                height={SECONDARY_COL_HEIGHT}
                src={roof4}
                radius="md"
                withPlaceholder
              />
            </Zoom>
          </Grid.Col>
          <Grid.Col span={6}>
            <Zoom>
              <Image
                height={SECONDARY_COL_HEIGHT}
                src={roof5}
                radius="md"
                withPlaceholder
              />
            </Zoom>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
