import React, { useState } from "react";
import { Card, CardBody, Stack, Heading, Grid, Image } from "@chakra-ui/react";
const CardData = ({ player }) => {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {player.map((currEle) => {
          return (
            <>
              <Card maxW="sm" mt="12" ml="10" mb="4" key={currEle.id}>
                <CardBody>
                  <Image src={currEle.image} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" mx="auto" ml="12">
                      {currEle.name}
                    </Heading>
                  </Stack>
                </CardBody>
              </Card>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default CardData;
